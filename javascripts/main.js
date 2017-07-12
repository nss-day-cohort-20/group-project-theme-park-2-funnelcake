'use strict';

let $ = require('jquery');
let fb = require('./fetch-fb');
let themepark = {
    fbData: require('./fetch-fb')
};
let attractions = [];
let areas = [];
let types = [];

let textInput = document.getElementById('textInput');
let submitBtn = document.getElementById('submitBtn');

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
    $(this).toggleClass("highlight");
});


// Bootstap datetimepicker
$('#time').bootstrapMaterialDatePicker({date: false, shortTime: false, format: 'HH:mm'});
$.material.init();
// 
// 
// 
// 
// $(document).ready(function() {
//   $('#time').bootstrapMaterialDatePicker({
//     date: false,
//     shortTime: false,
//     format: 'HH:mm'});
//   $.material.init();
// }); 
//     $(function() {
//         $('#datetimepicker6').datetimepicker();
//         $('#datetimepicker7').datetimepicker({
//             useCurrent: false //Important! See issue #1075
//         });
//         $("#datetimepicker6").on("dp.change", function(e) {
//             $('#datetimepicker7').data("DateTimePicker").minDate(e.date);
//         });
//         $("#datetimepicker7").on("dp.change", function(e) {
//             $('#datetimepicker6').data("DateTimePicker").maxDate(e.date);
//         });
//     });
    // $.material.init();
// });

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
        console.log("final attractions array", attractions);
    });