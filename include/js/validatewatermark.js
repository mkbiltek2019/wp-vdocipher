var vdoWatermarkJson = document.getElementById('vdo_watermarkjson');
var vdoValidator = document.getElementById('vdojsonvalidator');

function checkValidity(){
  try{
    var obj = JSON.parse(vdoWatermarkJson.value.replace(/[\'\‘\’\′]/g, '"'));
    if (obj.constructor.name === 'Array') {
      vdoValidator.innerHTML="Correct JSON";
      vdoValidator.style.color = "green";
    }
    else {
      vdoValidator.innerHTML="Not an array";
      vdoValidator.style.color = "red";
    }

  }
  catch(error){
    vdoValidator.innerHTML="Incorrect JSON";
    vdoValidator.style.color = "red";
  }
}

vdoWatermarkJson.onkeyup = checkValidity;
window.onload = checkValidity;

