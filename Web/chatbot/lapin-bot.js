var botui = new BotUI('reminder-bot');

var keyHistory = []
var terminators = ['ない', 'ありません', 'さようなら', 'さよなら', 'バイバイ']

var startupMsg = 'ラパン社についてご案内いたします。' + newline() + '何か質問はありませんか？'
var loopMsg = '他に質問は？'
var slipups = 0

function getTime()
{
  return today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
}

function getDate()
{
  return today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
}

function icon(iconName) {
  return '<i class="botui-icon botui-message-content-icon fa fa-' + iconName + '"></i>';
}

function newline() {
  return '</br>';
}

var qnaDict = {
  時間: {
    long: "ラパン社の営業時間は平日10:00から19:00です。普通ですね。",
    short: "10:00から19:00"
  },
  員: {
    long: "ラパン社は数十人の従業員がいるけど、数百人のフリーランサーと契約を結んでいます。",
  },
　所: {
    long: "ラパン社は表参道駅にかなり近いです。<br>〒107-0062 東京都港区南青山5-4-27 Barbizon104 10F",
    short: "〒107-0062 東京都港区南青山5-4-27 Barbizon104 10F"
  },
  電話: {
    long: "電話は03-6712-5951までお願いします。",
    short: "03-6712-5951"
  },
  メール: {
    long: "info@lapin-inc.com"
  }
}
// Q&Aに関係ない質問を処理します
var conversationDict = {
  よろしく: {
    long: "こちらこそよろしくお願いします！",
    short: "よろしくね！"
  },
  今の時間: {
    func: getTime
  },
  何日: {
    func: getDate
  },
  の名: {
    long: "私の名前は… ありませんね。",
    short: "今のところ私に名前はまだない。"
  },
  error: {
    long: "簡単な質問に答えるよう設計されているけど、ごめん、今のは分かりませんでした。",
    short: "ごめん、質問が分かりません。"
  },
  okay: {
    long: "分かりました！",
    short: "OK!"
  },
  分からない: {
    func: slipupResponse
  }
}
var aliasDict = {
  今何時: conversationDict["今の時間"],
  今なんじ: conversationDict["今の時間"],
  いまなんじ: conversationDict["今の時間"],
  なんじ: qnaDict["時間"],
  email: qnaDict["メール"],
  メイル: qnaDict["メール"],
  どこ: qnaDict["所"],
  いずこ: qnaDict["所"],
  じゅうしょ: qnaDict["所"],
  ローケーション: qnaDict["所"],
  番号: qnaDict["電話"],
  分かりません: conversationDict["分からない"],
  わかりません: conversationDict["分からない"],
  わかんない: conversationDict["分からない"],
  いいですか: conversationDict["okay"]
}

function init() {
  botui.message
  .bot({
    delay: 1000,
    type: 'html',
    content: startupMsg
  })
  .then(function () {
    return botui.action.text({
      delay: 1000,
      action: {
        placeholder: 'ここで入力できます'
      }
    })
  }).then(responseLoop);
}

function slipupResponse() {
  slipups = 0
  botui.message
  .bot({
    delay: 1000,
    content: 'いくつかおすすめの項目がありますが、'+newline()+'いかがでしょうか？'
  })
  .then(function () {
    return botui.action
    .button({
      delay: 1000,
      addMessage: false,
      action: [{
        icon: 'location-arrow',
        text: '住所',
        value: '住所'
      }, {
        icon: 'envelope-open-o',
        text: 'メール',
        value: 'メール'
      }, {
        icon: 'phone',
        text: '電話番号',
        value: '電話'
      }, {
        icon: 'question-circle',
        text: '質問に戻る',
        value: 'okay'
      }]
    })}).then(responseLoop);
    return false;
}

function getResponse(res)
{
  if (res === 'undefined' || res.value === 'undefined')
  {
    return "Response error"
  }

  //Search for conversational topics
  for (const [ key, value ] of Object.entries(conversationDict))
  {
    if (res.value.includes(key)) return keywordResponse(key, value);
  }
  //Search for questions
  for (const [ key, value ] of Object.entries(qnaDict))
  {
    if (res.value.includes(key)) return keywordResponse(key, value);
  }
  //Search for alias
  for (const [ key, value ] of Object.entries(aliasDict))
  {
    if (res.value.includes(key)) return keywordResponse(key, value);
  }
  //Search for farewell cues
  terminators.forEach(function(element) {
    console.log("Searching terminators")
    console.log(element)
    console.log(res.value)
    if (res.value.indexOf(element) >= 0) return "GOODBYE";
  });

  //No viable keywords could be found in user input
  slipups += 1;
  if (slipups > 1)
    return slipupResponse();
  return "簡単な質問に答えるよう設計されているけど、ごめん、今のは分かりませんでした。";
}

function longOrShort(key, value)
{
  if (keyHistory.indexOf(key) >= 0) {
    return value.short
  }
  keyHistory.push(key)
  return value.long
}

function keywordResponse(key, value)
{
  if (value.hasOwnProperty("func"))
  {
    text = value["func"]();
    return text;
  }
  return longOrShort(key, value)
}

function responseLoop(res) {
  myResponse = getResponse(res)
  if (myResponse == "GOODBYE")
  {
    botui.message
    .bot({
      delay: 1000,
      content: "それでは！"
    })
    return true;
  }
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
        placeholder: '...'
      }
    })
  }).then(responseLoop);
  return false;
}

init();