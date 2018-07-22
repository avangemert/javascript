// from data.js
var tableData = data;

// Get a reference to the table body
var tbody = d3.select("tbody");

// Log data into the console
// console.log(data);

// write code that appends a table to your web page
data.forEach(function(alienReport) {
    console.log(alienReport);
    var row = tbody.append("tr");
  });
