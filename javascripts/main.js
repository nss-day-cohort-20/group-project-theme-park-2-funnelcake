'use strict';

let $ = require('jquery');
let fb = require('./fetch-fb');

  fb.getAreas()
  .then((attrData) => {
});

// function sortData(attrData) {
//   var attrMap = attrData.map(function(prop) {
//     if (prop = ) {

//     }
//     console.log("attrMap", attrMap);
//     return prop ;
//   });
//   // .filter();
 
//   }

//   // requirement 3a for associating areas in their attractions
//   // plan to sort based on id

let textInput = document.getElementById('textInput');
let submitBtn = document.getElementById('submitBtn');

textInput.addEventListener('keypress', function() {
  if (textInput.value !== '' && event.key === 'Enter') {
    console.log("I worked when you pressed enter!");
  }
});

submitBtn.addEventListener("click", function() {
  console.log("I worked when you clicked the button!");
});

//selecting the area boxes
$(".area").click(function() {
	$(this).toggleClass("highlight");
});

//module.exports = {sortData};