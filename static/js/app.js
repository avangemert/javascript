// from data.js
var tableData = data;

// Get a reference to the table body
var tbody = d3.select("tbody");

// write code that appends a table to your web page
// add new rows of data for each UFO sighting
data.forEach(function(alienReport) {
    var row = tbody.append("tr");
    Object.entries(alienReport).forEach(function([key, value]) {
        var cell = tbody.append("td");
        cell.text(value);
    });

// Select the submit button
var submit = d3.select("#filter-btn");

submit.on("click", function() {

    // Prevent the page from refreshing
  d3.event.preventDefault();

  // Select the input element and get the raw HTML node
  var inputElement = d3.select("#datetime");

  // Get the value property of the input element
  var inputValue = inputElement.property("value");

  console.log(inputValue);

  var filteredData = data.filter(data => data.datetime === inputValue);

  console.log(filteredData);
});

});


