(function(){

var vdoTheme = document.getElementById('vdo_player_theme_options');
var vdoAvailableThemes = document.getElementById('available_themes');

var vdoThemeImage1 = document.getElementById('1e0143ace9054f6cb638caf349b2b43f-image');
var vdoThemeBtn1 = document.getElementById('1e0143ace9054f6cb638caf349b2b43f-btn');
var vdoThemeVal1 = '1e0143ace9054f6cb638caf349b2b43f';

var vdoThemeImage2 = document.getElementById('5962d374450d4ca3a152e318af41aa89-image');
var vdoThemeBtn2 = document.getElementById('5962d374450d4ca3a152e318af41aa89-btn');
var vdoThemeVal2 = '5962d374450d4ca3a152e318af41aa89';

var vdoThemeImage3 = document.getElementById('arsenal-image');
var vdoThemeBtn3 = document.getElementById('arsenal-btn');
var vdoThemeVal3 = 'arsenal';

var vdoThemeImage4 = document.getElementById('chelsea-image');
var vdoThemeBtn4 = document.getElementById('chelsea-btn');
var vdoThemeVal4 = 'chelsea';

var vdoThemeImage = [];
vdoThemeImage.push(vdoThemeImage1);
vdoThemeImage.push(vdoThemeImage2);
vdoThemeImage.push(vdoThemeImage3);
vdoThemeImage.push(vdoThemeImage4);

var vdoThemeBtn = [];
vdoThemeBtn.push(vdoThemeBtn1);
vdoThemeBtn.push(vdoThemeBtn2);
vdoThemeBtn.push(vdoThemeBtn3);
vdoThemeBtn.push(vdoThemeBtn4);

var vdoThemeVal = [];
vdoThemeVal.push(vdoThemeVal1);
vdoThemeVal.push(vdoThemeVal2);
vdoThemeVal.push(vdoThemeVal3);
vdoThemeVal.push(vdoThemeVal4);

var vdoThemeNumber = vdoThemeVal.length;

window.onload = function(){
  var index = vdoThemeVal.indexOf(vdoTheme.value);
  vdoThemeSelect(index);
}

for (var k = 0; k < vdoThemeNumber; k++){
  vdoThemeImage[k].addEventListener('click', vdoThemeImageClick);
  vdoThemeBtn[k].addEventListener('click', vdoThemeBtnClick);
}

function vdoThemeSelect(index){
  for (var j = 0; j < vdoThemeNumber; j++) {
    if (j===index){
      vdoTheme.value = vdoThemeVal[j];
      vdoThemeImage[j].style.border="5px solid #00aaFF";
      vdoThemeImage[j].style.width="97%";
      vdoThemeBtn[j].innerHTML = "Selected";
      vdoThemeBtn[j].style.backgroundColor = "#0f0";
    }
    else {
      vdoThemeImage[j].style.border="";
      vdoThemeImage[j].style.width="100%";
      vdoThemeBtn[j].innerHTML = "Select";
      vdoThemeBtn[j].style.backgroundColor = "#fff";
    }
  }
}

function vdoThemeImageClick(e){
  var index = vdoThemeImage.indexOf(e.target);
  vdoThemeSelect(index);
}

function vdoThemeBtnClick(e){
  var index = vdoThemeBtn.indexOf(e.target);
  vdoThemeSelect(index);
}
}());
