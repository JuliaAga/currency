$.getJSON("https://www.cbr-xml-daily.ru/daily_json.js", function(data) {

$('#usd').html(data.Valute.USD.Value); });


$.getJSON("https://www.cbr-xml-daily.ru/daily_json.js", function(data) {

$('#eur').html(data.Valute.EUR.Value); });