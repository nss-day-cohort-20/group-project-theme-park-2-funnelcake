'use strict';

// let $ = require('jquery');
let fbURL = "https://test-9f12e.firebaseio.com/";
let fbData = {};

fbData.getAreas = function() {
  return new Promise( ( resolve, reject) => {
    $.ajax({
      url: `${fbURL}/areas.json`//<.json is important!
    }).done( (areasData) => {
      resolve(areasData);
    });
  });
};

fbData.getAttr = function () {
  return new Promise( ( resolve, reject) => {
    $.ajax({
      url: `${fbURL}/attractions.json`//<.json is important!
    }).done( (attrData) => {
      resolve(attrData);
    });
    // console.log("try again", attArray);
  });
};

fbData.getAttrTypes = function() {
  return new Promise( ( resolve, reject) => {
    $.ajax({
      url: `${fbURL}/attraction_types.json`//<.json is important!
    }).done( (attrTypesData) => {
      resolve(attrTypesData);
    });
  });
};

fbData.getParkInfo = function () {
  return new Promise( ( resolve, reject) => {
    $.ajax({
      url: `${fbURL}/park-info.json`//<.json is important!
    }).done( (parkData) => {
      resolve(parkData);
    });
  });
};


module.exports = fbData;