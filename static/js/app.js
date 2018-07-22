// from data.js
var tableData = data;

// Get a reference to the table body
var tbody = d3.select("tbody");

// Log data into the console
// console.log(data);

// write code that appends a table to your web page
// add new rows of data for each UFO sighting
data.forEach(function(alienReport) {
    var row = tbody.append("tr");
    Object.entries(alienReport).forEach(function([key, value]) {
        var cell = tbody.append("td");
        cell.text(value);
    });
});