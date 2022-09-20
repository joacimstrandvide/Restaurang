// Skriver dagens datum längst ner på sidan i footer elementet
// Skrivs i YYYY-MM-DD format
var date = new Date();
// Skapa en variabel vid namn current_date med år + månad + dag
var current_date =
  date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();
// Skriver current_date variabeln till elementet med date ID
document.getElementById("date").innerHTML = current_date;

// Validated OK


