'use strict';
// let moment = "https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.18.1/moment.js";
let fb = require('./fetch-fb');

let themepark = {
    fbData: require('./fetch-fb')
};
// let builder = {domInter: require('./DOMInteraction')};

let attractions = [];
let areas = [];
let types = [];

let textInput = document.getElementById('textInput');
let submitBtn = document.getElementById('submitBtn');


//compares user input to attraction name, finds the area id and highlights the appropriate area
submitBtn.addEventListener("click", function() {
    $('.area.highlight').not(this).removeClass('highlight');
    $(".side-bar").empty();
    let userInput = textInput.value.toLowerCase();
  $.each(attractions, function (name, value) {
    let lowerName = value.name.toLowerCase();
    if (userInput == lowerName) {
      $("#" + value.area_id).toggleClass("highlight");
     $(".side-bar").append(`<p class="visibility"><a href="#">${value.name}</a> (${value.typeName})</p>
        <div class="attDetails">${value.description}<br><p class"times">Times: ${value.times}</p></div>`);
    }
  });
});

//selecting the area boxes, loop through attractions to match area id with area clicked on and print that attraction to the dom
//click even embedded to allow clicking on attraction name and making the description visible
$(".area").click(function() {
  $('.area.highlight').not(this).removeClass('highlight');
	$(this).toggleClass("highlight");
  $(".side-bar").empty();
  let currentId = this.id; 
  $.each(attractions, function (name, value) {
    if (currentId == value.area_id) { 
     $(".side-bar").append(`<p class="visibility"><a href="#">${value.name}</a> (${value.typeName})</p>
        <div class="attDetails" style="display: none">${value.description}<br><p class"times">Times: ${value.times}</p></div>`
      );
    }
  });
     $(".visibility").click(function(){
      $(".attDetails").hide();
    $(this).next().show();
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
    });

  });

// Bootstap datetimepicker

$(document).ready(function() {
    $('#time').bootstrapMaterialDatePicker({
        date: false,
        shortTime: true,
        format: 'HH:mm'
    });
