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
let timeVal;

let textInput = document.getElementById('textInput');
let submitBtn = document.getElementById('submitBtn');

submitBtn.addEventListener("click", function() {
  submitPrint($(this));
});

textInput.addEventListener('keypress', function() {
  if (textInput.value !== '' && event.key === 'Enter') {
    submitPrint($(this));
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
        <div class="attDetails" style="display: none">${value.description}<br><p class="times">Times: ${value.times}</p></div>`);
    }
  });
       $(".visibility").click(function(){
      $(".attDetails").hide();
    $(this).next().show();
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
        <div class="attDetails" style="display: none">${value.description}<br><p class="times">Times: ${value.times}</p></div>`);
    }
  });
     $(".visibility").click(function(){
      $(".attDetails").hide();
    $(this).next().show();
  });
}

themepark.fbData.getAttr()
    .then((attrData) => {
        attractions = attrData;
            attractions.forEach(function (){
            for(let i = 0; i < attractions.length; i++) {
              if (attractions[i].times === undefined) {
                attractions[i].times = "Open all day";
              }
          }
        });
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
    })
    .then(() => {
        $(document).ready(function() {
            $('#time').bootstrapMaterialDatePicker({
                date: false,
                shortTime: true,
                format: 'hh:mmA'
            }).on('change', function(e, date) {
              timeVal = $('#time').val();
              $.each(attractions, function (name, array) {
                $.each(array.times, function (name, value) {
                  if (timeVal == value) {
                    $(".side-bar").append(`<p class="visibility"><a href="#">${array.name}</a> (${array.typeName})</p>
                    <div class="attDetails">${array.description}<br><p class="times">Times: ${array.times}</p></div>`);
                  }
                });

              });
            });
            // if (attractions.times == "Open all day") {
            //         $(".side-bar").append(`<p class="visibility"><a href="#">${attractions.name}</a> (${attractions.typeName})</p>
            //         <div class="attDetails">${attractions.description}<br><p class="times">Times: ${attractions.times}</p></div>`);
            //       }
        });
    });
 
 function timeCheck(val) {
  if (val === undefined) {
    $(".times").hide();
  }
}
