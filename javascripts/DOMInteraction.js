'use strict';

let fbURL = "https://test-9f12e.firebaseio.com/";
let domInter = {};

let textInput = document.getElementById('textInput');

//compares user input to attraction name, finds the area id and highlights the appropriate area
domInter.submitPrint = function (area, attractions) {
  let userInput = textInput.value.toLowerCase();
  domInter.clear(area);
  $.each(attractions, function (name, value) {
    let lowerName = value.name.toLowerCase();
    if (lowerName.indexOf(userInput) !== -1) {
      $("#" + value.area_id).toggleClass("highlight");
     domInter.atts(value);
    }
  });
     $(".visibility").click(function(){
      domInter.details($(this));
  });
  textInput.value = '';
};

//selecting the area boxes, loop through attractions to match area id with area clicked on and print that attraction to the dom
//click even embedded to allow clicking on attraction name and making the description visible
domInter.print = function (area, attractions) {
  domInter.clear(area);
  area.toggleClass("highlight");
  let currentId = area.attr("id"); 
  $.each(attractions, function (name, value) {
    if (currentId == value.area_id) { 
     domInter.atts(value);
    } 
  });
     $(".visibility").click(function(){
      domInter.details($(this));
  });
     domInter.noResults();
};

domInter.noResults = function() {
	if ($(".side-bar") === '') {
		alert("No attractions found");
	}
};

domInter.atts = function (prefix) {
	$(".side-bar").append(`<p class="visibility"><a href="#">${prefix.name}</a> (${prefix.typeName})</p>
        <div class="attDetails" style="display: none">${prefix.description}<br><p class="times">Times: ${prefix.times}</p></div>`);
};

domInter.clear = function (area) {
  $('.area.highlight').not(area).removeClass('highlight');
    $(".side-bar").empty();
};

domInter.details = function (div) {
    $(".attDetails").hide();
    $(div).next().show();
};

// domInter.detailsAlso = function (if1, if2, attractions, div) {
// 	$.each(attractions, function (name, value) {
//     if (if1 == value.if2) { 
//      $(".side-bar").append(`<p class="visibility"><a href="#">${value.name}</a> (${value.typeName})</p>
//         <div class="attDetails" style="display: none">${value.description}<br><p class="times">Times: ${value.times}</p></div>`);
//     }
//   });
//      $(".visibility").click(function(){
//       $(".attDetails").hide();
//     $(div).next().show();
//   });
// };

// domInter.detailsAlso(currentId, ".area_id", attractions, $(this));

module.exports = domInter;