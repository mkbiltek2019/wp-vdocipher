var vdoWatermarkJson = document.getElementById('vdo_watermarkjson');
var vdoValidator = document.getElementById('vdojsonvalidator');

vdoWatermarkJson.onkeyup = function(){
  try{
    JSON.parse(vdoWatermarkJson.value.replace(/[\'\‘\’\′]/g, '"'));
    vdoValidator.innerHTML="Correct JSON";
    vdoValidator.style.color = "green";
  }
  catch(error){
    vdoValidator.innerHTML="Incorrect JSON";
    vdoValidator.style.color = "red";
  }
}
