'use strict';

let $ = require('jquery');
let fb = require('./fetch-fb');

  // fb.getAreas()
  // .then((attrData) => {
// })
function sortData(attrData) {
    var idArr = Object.keys(attrData);
    if ()
    console.log("idArr", idArr);
    // idArr.forEach((key) => {
    //   attrData[key].id = key;
    // });
  console.log("attrData", attrData);
  return attrData;
  }

  // requirement 3a for associating areas in their attractions
  // plan to sort based on id

module.exports = {sortData};