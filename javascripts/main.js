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



// $(".area").click(function() {
//     $(this).get id of dom element, loop through array, (if area id = this.id) pull out attractions for that area; pass in id
// }); 





// //function for finding attractions based on area
// let findAtt = function(area) {
//   for (let i = 0; i < attractions.length, i++) {
//     if (user input === attraction.areaName) {
//     displayDiv.innerHTML = `<a href"">${attractions.name}</a> (${attractions.typeName})`
//   }
//   }

  
// }

// //function for showing attractions in dom after click on area

//   //find out which area the user clicked on
//   let areaDiv = document.getElementById("areaDiv");
//   let displayDiv = document.getElementById("displayDiv");

//   for (var i = 0; i < area.length; i++) {
//   areaDiv[i].addEventListener("click", function (event) {
//     event.currentTarget.classList.toggle("add-border");
//     displayDiv.innerHTML = 
//   })
// }














// let makeArray = function () {
// return new Promise ((resolve, reject) => {
//   themepark.fbData.getAttr()
//   .then((attData) => {
//     console.log(attData);
//     return attData;
// });

// });
// };
// .then (()=> {
//   return themepark.fbData.getAttr();
// });
// // .then (() => {
// //   console.log("test", )
// // })
//  .then ((attData) => {
//   attArray = attData;
//   // return attArray;
//   console.log("new array", attArray);
// });
// // console.log("new array", attArray);
// // seeData();

// fu
// seeData();
// function seeData (){
//   console.log("after?", attArray);
// }