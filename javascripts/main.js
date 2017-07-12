'use strict';

let $ = require('jquery');
let fb = require('./fetch-fb');
let themepark = {fbData: require('./fetch-fb')};
let attractions = [];
let areas = [];
let types = [];

themepark.fbData.getAttr()
.then((attrData) => {
    attractions = attrData;
    return themepark.fbData.getAreas();
    })
.then((areaData) => {
    areas = areaData;
    attractions.forEach(function (){
      for(let i = 0; i < attractions.length; i++) {
        let myArea = areas.filter((area) => {
          return attractions[i].area_id === area.id;
        });
        attractions[i].areaName = myArea[0].name;
      }
    });
    return themepark.fbData.getAttrTypes();
  })
.then((typeData) => {
    types = typeData;
    attractions.forEach(function (){
      for(let i = 0; i < attractions.length; i++) {
        let myType = types.filter((type) => {
          return attractions[i].type_id === type.id;
        });
        attractions[i].typeName = myType[0].name;
      }
    });
    console.log("final attractions array", attractions);
  });
