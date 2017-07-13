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
let timePicker = document.getElementById('time');

submitBtn.addEventListener("click", function() {
  submitPrint(this);
});

textInput.addEventListener('keypress', function() {
  if (textInput.value !== '' && event.key === 'Enter') {
    submitPrint(this);
  }
}); 

$(".area").click(function() {
  print($(this));
});


function clear (area) {
  $('.area.highlight').not(area).removeClass('highlight');
    $(".side-bar").empty();
}

//compares user input to attraction name, finds the area id and highlights the appropriate area
function submitPrint (area) {
  clear(area);
  let userInput = textInput.value.toLowerCase();
  clear(area);
  $.each(attractions, function (name, value) {
    let lowerName = value.name.toLowerCase();
    if (userInput == lowerName) {
      $("#" + value.area_id).toggleClass("highlight");
     $(".side-bar").append(`<p class="visibility"><a href="#">${value.name}</a> (${value.typeName})</p>
        <div class="attDetails">${value.description}<br><p class="times">Times: ${value.times}</p></div>`);
    }
  });
  textInput.value = '';
}

//selecting the area boxes, loop through attractions to match area id with area clicked on and print that attraction to the dom
//click even embedded to allow clicking on attraction name and making the description visible
function print (area) {
  clear(area);
  area.toggleClass("highlight");
  let currentId = area.attr("id"); 
  $.each(attractions, function (name, value) {
    if (currentId == value.area_id) { 
     $(".side-bar").append(`<p class="visibility"><a href="#">${value.name}</a> (${value.typeName})</p>
        <div class="attDetails" style="display: none">${value.description}<br><p class="times">Times: ${value.times}</p></div>`
      );
    }
  });
     $(".visibility").click(function(){
      console.log("area", area.next());
      $(".attDetails").hide();
    $(this).next().show();
  });
}

themepark.fbData.getAttr()
.then((attrData) => {
    attractions = attrData;
  //     attractions.forEach(function (){
  //     for(let i = 0; i < attractions.length; i++) {
  //       console.log("times?", attractions.times);
  //      if (attractions.times === undefined) {
  //       console.log("times?", attractions.times);
  //   attractions.times = "Open all day";

  // }
  //     }
  //   });
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
// .then ((attrData)=> {
//   attractions = attrData;
//   attractions.forEach(function (){
//       for(let i = 0; i < attractions.length; i++) {
//         console.log("times?", attractions.times);
//        if (attractions.times === undefined) {
//         console.log("times?", attractions.times);
//     attractions.times = "Open all day";

//   }
//       }
//     });
  
// });

// Bootstap datetimepicker

$(document).ready(function() {
    $('#time').bootstrapMaterialDatePicker({
        date: false,
        time: true,
        format: 'HH:mmA'
      });
    });



 timePicker.addEventListener("click", function() {
    console.log("picker?");
    $(".side-bar").empty();
    let userInput = timePicker.value;
  $.each(attractions, function (name, value) {
    if (userInput == value.times) {
      $("#" + value.area_id).toggleClass("highlight");
     $(".side-bar").append(`<p class="visibility"><a href="#">${value.name}</a> (${value.typeName})</p>
        <div class="attDetails">${value.description}<br><p class="times">Times: ${value.times}</p></div>`);
    }
  });
  textInput.value = '';
});

 function timeCheck(val) {
  if (val === undefined) {
    $(".times").hide();
  }
}