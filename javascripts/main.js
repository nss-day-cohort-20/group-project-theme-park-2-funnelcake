'use strict';

let fb = require('./fetch-fb');

let themepark = {fbData: require('./fetch-fb')};
// let builder = {domInter: require('./DOMInteraction')};
let attractions = [];
let areas = [];
let types = [];

let textInput = document.getElementById('textInput');
let submitBtn = document.getElementById('submitBtn');
// let sideBar = document.getElementsByClassName("side-bar");
// let attDetails = document.getElementsByClassName("attDetails")

// textInput.addEventListener('keypress', function() {
//   if (textInput.value !== '' && event.key === 'Enter') {
//     console.log("I worked when you pressed enter!");
//   }
// });

// let attDetails = function () {
//    for (var i = 0; i < attractions.length; i++) {
//    attractions[i].addEventListener("click", function (event) {
//      console.log("working");
     
//      });
//    }
//  };

submitBtn.addEventListener("click", function() {
  $('.area.highlight').not(this).removeClass('highlight');
    $(".side-bar").empty();
    let userInput = textInput.value.toLowerCase();
  $.each(attractions, function (name, value) {
    let lowerName = value.name.toLowerCase();
    if (userInput == lowerName) {
      $("#" + value.area_id).toggleClass("highlight");
     $(".side-bar").append(`<a href="#">` + value.name + `</a>` + ` (` + value.typeName + `)<br>`);
    }
  });
});

// Bootstap datetimepicker
$(document).ready(function() {
$('#time').bootstrapMaterialDatePicker({date: false});
	
  //selecting the area boxes
$(".area").click(function() {
$('.area.highlight').not(this).removeClass('highlight');
  $(this).toggleClass("highlight");
  $(".side-bar").empty();
 let currentId = this.id; 
  $.each(attractions, function (name, value) {
    if (currentId == this.area_id) { 
     $(".side-bar").append(`<a href="#">` + value.name + `</a>` + ` (` + value.typeName + `)<br>` + 
        `<div class="attDetails" style="display: none">` + value.description + `</div>`
      );
    }
  });
     $("a").click(function(){
    // if (this = )
    $(".attDetails").show();
  });
});


themepark.fbData.getAttr()
    .then((attrData) => {
        attractions = attrData;
        return themepark.fbData.getAreas();
    })
    .then((areaData) => {
        areas = areaData;
        attractions.forEach(function() {
            for (let i = 0; i < attractions.length; i++) {
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
        attractions.forEach(function() {
            for (let i = 0; i < attractions.length; i++) {
                let myType = types.filter((type) => {
                    return attractions[i].type_id === type.id;
                });
                attractions[i].typeName = myType[0].name;
            }
        });
        attractions[i].typeName = myType[0].name;
      }
    });
    // console.log("final attractions array", attractions);
  });

// $(".area").click(function() {
//     $(this).get id of dom element, loop through array, (if area id = this.id) pull out attractions for that area; pass in id
// }); 

// //function for finding attractions based on area
// let findAtt = function(area) {
//   for (let i = 0; i < attractions.length, i++) {
//     if (user input === attraction.areaName) {
//     displayDiv.innerHTML = `<a href"">${attractions.name}</a> (${attractions.typeName})<br>`
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