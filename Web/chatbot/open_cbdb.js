var queryString = window.location.href;
var queryString = queryString.substring( queryString.indexOf('=') + 1 );
if (queryString === undefined | queryString == "" | queryString == window.location.href)
{
  console.log("Chatbot index error: no given database names");
}
else
{   
    var databases = queryString.split("+");
    databases.forEach(function (item, index) {
        document.writeln(`<script type='text/javascript' src='./data/cbdb_${item}.js'></script>`);
    });
}