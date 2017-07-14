'use strict';

let fb = require('./fetch-fb');

let themepark = {fbData: require('./fetch-fb')};
let builder = {domInter: require('./DOMInteraction')};

let attractions = [];
let areas = [];
let types = [];
let timeVal;

let textInput = document.getElementById('textInput');
let submitBtn = document.getElementById('submitBtn');

submitBtn.addEventListener("click", function() {
  builder.domInter.submitPrint($(this), attractions);
});

textInput.addEventListener('keypress', function() {
  if (textInput.value !== '' && event.key === 'Enter') {
    builder.domInter.submitPrint($(this), attractions);
  }
}); 

$(".area").click(function() {
  builder.domInter.print($(this), attractions);
});

themepark.fbData.getAttr()
    .then((attrData) => {
        attractions = attrData;
   //     attractions.forEach(function (){
        //     for(let i = 0; i < attractions.length; i++) {
        //       if (attractions[i].times === undefined) {
        //         attractions[i].times = "Open all day";
        //       } 
        //   }
        // });
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
              $(".side-bar").empty();
              timeVal = $('#time').val();
              $.each(attractions, function (name, array) {
                $.each(array.times, function (name, value) {
                  if (timeVal == value) {
                    builder.domInter.atts(array);
                  }
                });
              });
            $(".visibility").click(function(){
              builder.domInter.details($(this));
            });

            });
        });
    });

//  function timeCheck(val) {
//   if (val === undefined) {
//     $(".times").hide();
//   }
// }