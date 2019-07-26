var botui = new BotUI('lapin-bot');

var keyHistory = []
var slipups = 0

Number.prototype.pad = function(size) {
  var s = String(this);
  while (s.length < (size || 2)) {s = "0" + s;}
  return s;
}

function getTime()
{
  var cTime = new Date()
  return cTime.getHours() + ":" + cTime.getMinutes().pad(2) + ":" + cTime.getSeconds().pad(2);
}

function getDate()
{
  var cDate = new Date()
  return cDate.getFullYear()+'-'+(cDate.getMonth()+1)+'-'+cDate.getDate();
}

function icon(iconName) {
  return '<i class="botui-icon botui-message-content-icon fa fa-' + iconName + '"></i>';
}

function newline() {
  return '</br>';
}

function init() {
  if (!window.cbdb) {
    console.log("lapin-bot.js: Failed to start chat bot. No conversational data file was found.")
    return false;
  }
  if (!cbdb.startupMsg) {
    cbdb.startupMsg = "Starting up...";
  }
  if (!cbdb.placeholderFirst) {
    cbdb.placeholderFirst = "Type your question here...";
  }
  if (!cbdb.placeholderLater) {
    cbdb.placeholderLater = cbdb.placeholderFirst;
  }
  botui.message
  .bot({
    delay: 1000,
    type: 'html',
    content: cbdb.startupMsg
  })
  .then(function () {
    return botui.action.text({
      delay: 1000,
      action: {
        placeholder: cbdb.placeholderFirst
      }
    })
  }).then(responseLoop);
}

function getDefaults() {
  slipups = 0
  console.log(cbdb.defaultOptions);
  botui.action
  .button({
    delay: 1000,
    addMessage: false,
    action: cbdb.defaultOptions
  })
  .then(function (res) {
    botui.message.add({
      human: true,
      delay: 10,
      content: res.text
    })
    responseLoop(res)
  });
  return false;
}

function getResponse(res)
{
  if (res === 'undefined' || res.value === 'undefined')
  {
    res.value = "%error%"
    return getResponse(res)
  }

  //"Open" data file
  for (const [ name, cbData ] of Object.entries(cbdb.file))
  {
    alias_processed = res.value
    if (res.value.substring(0, 1) != '%')
    {
      var i = 0;
      for (const [ alias, keyword ] of Object.entries(cbData.aliasDict))
      {
        i++;
        var alias_regex = new RegExp(alias, "gi");
        alias_processed = alias_processed.replace(alias_regex, keyword);
      }
      console.log(`Checked aliases. There are ${i} in ${name}`);
    }
    console.log("Testing regex with " + alias_processed)
    for (const [ regex, response ] of Object.entries(cbData.regexDict))
    {
      var noalias_regex = /\#/g;
      var regex_str = regex.replace(noalias_regex, "");
      var final_regex = new RegExp(regex_str, "i");
      if (regex_str != regex) //If the regex_str was stripped of alias-cancelling pound signs
      {
        console.log(`${regex_str} was changed from ${regex}`);
        console.log(`Testing regex ${regex} against ${res.value}`);
        if (final_regex.test(res.value)) return keywordResponse(regex, response);
      }
      else
      {
        console.log(`Testing regex ${regex} against ${alias_processed}`);
        if (final_regex.test(alias_processed)) return keywordResponse(regex, response);
      }
    }
  }
  console.log("Nothing found");
  //No viable keywords could be found in user input
  slipups += 1;
  if (slipups > 1)
  {
    res.value = "%defaults%"
    return getResponse(res)
  }
  res.value = "%what%"
  return getResponse(res)
}

function longOrShort(key, value)
{
  if (keyHistory.indexOf(key) >= 0 && value.short != "") {
    return value.short
  }
  keyHistory.push(key)
  return value.long
}

function keywordResponse(key, value)
{
  var responseText = longOrShort(key, value)
  if (value.hasOwnProperty("func") && value.func != "")
  {
    if (responseText != "")
    {
      botui.message
      .bot({
        delay: 1000,
        type: 'html',
        content: responseText
      });
    }
    console.log(value.func);
    var functionAndParameter = value.func.replace(')', "").split('(');
    var funcName = functionAndParameter[0];
    var funcParm = "";
    if (functionAndParameter.count > 1) funcParm = functionAndParameter[1];
    if (typeof window[funcName] === 'function')
    {
      console.log("Invoking " + funcName)
      responseText = window[funcName](funcParm);
    }
    else
    {
      console.log("Attempted to invoke " + funcName + ", but no such function was found.");
      return "%error%";
    }
    if (typeof responseText === 'string')
    {
      return responseText;
    }
    return false;
  }
  return responseText;
}

function responseLoop(res) {
  myResponse = getResponse(res)
  if (myResponse == false)
  {
    //Terminate loop (another loop has started)
    return false;
  }
  botui.message
  .bot({
    delay: 1000,
    type: 'html',
    content: myResponse
  })
  .then(function () {
    return botui.action.text({
      delay: 200,
      action: {
        placeholder: cbdb.placeholderLater
      }
    })
  }).then(responseLoop);
  return false;
}

init();