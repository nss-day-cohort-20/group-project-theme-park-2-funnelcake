'use strict';

let $ = require('jquery');
let fbURL = "https://test-9f12e.firebaseio.com/";

function getAreas() {
  return new Promise( ( resolve, reject) => {
    $.ajax({
      url: `${fbURL}/areas.json`//<.json is important!
    }).done( (areasData) => {
      console.log("areasData", areasData );
      resolve(areasData);
    });
  });
}
getAreas();

function getAttr() {
  return new Promise( ( resolve, reject) => {
    $.ajax({
      url: `${fbURL}/attractions.json`//<.json is important!
    }).done( (attrData) => {
      console.log("attrData", attrData );
      resolve(attrData);
    });
  });
}
getAttr();

function getAttrTypes() {
  return new Promise( ( resolve, reject) => {
    $.ajax({
      url: `${fbURL}/attraction_types.json`//<.json is important!
    }).done( (attrTypesData) => {
      console.log("attrTypesData", attrTypesData );
      resolve(attrTypesData);
    });
  });
}
getAttrTypes();

function getParkInfo() {
  return new Promise( ( resolve, reject) => {
    $.ajax({
      url: `${fbURL}/park-info.json`//<.json is important!
    }).done( (parkData) => {
      console.log("parkData", parkData );
      resolve(parkData);
    });
  });
}
getParkInfo();



module.exports = {getAreas, getAttr, getAttrTypes, getParkInfo};