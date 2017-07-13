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

$(document).ready(function() {
$('#time').bootstrapMaterialDatePicker({date: false});
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
        console.log("final attractions array", attractions);
    });