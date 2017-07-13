'use strict';

let fb = require('./fetch-fb');
let themepark = {
    fbData: require('./fetch-fb')
};
let attractions = [];
let areas = [];
let types = [];

let textInput = document.getElementById('textInput');
let submitBtn = document.getElementById('submitBtn');
let sideBar = document.getElementsByClassName("side-bar");

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

// Bootstap datetimepicker
$(document).ready(function() {
$('#time').bootstrapMaterialDatePicker({date: false});

	$(this).toggleClass("highlight");
  // console.log("test", attractions);
  $.each(attractions, function (name, value) {
    $(".side-bar").append(`<a href="#">` + value.name + `</a>` + ` (` + value.typeName + `)<br>`);
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
    console.log("final attractions array", attractions);
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
