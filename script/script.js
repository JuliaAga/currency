$.getJSON("https://www.cbr-xml-daily.ru/daily_json.js", function(data) {
$('#usd').html(data.Valute.USD.Value); 
$('#eur').html(data.Valute.EUR.Value); 
});


/*
$(function() {
    $.ajax({
        type: "get",
        url: "https://bankinform.ru/services/rates/xml.aspx",
        dataType: "xml",
        success: function(data) {
        
            $("#show_table").html(data);
			console.log(data);
        },
        error: function(xhr, status) {
          
            $("#show_table").html(status);
			consol.log(status);
        }
    });
});
*/

var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
       // Action to be performed when the document is read;
    }
};
xhttp.open("GET", "https://bankinform.ru/services/rates/xml.aspx", true);
xhttp.send();
console.log(xhttp.responseText);