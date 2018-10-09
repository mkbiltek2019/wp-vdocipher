(function(){

var vdoTheme = document.getElementById('vdo_player_theme_options');
var vdoAvailableThemes = document.getElementById('available_themes');

var vdoThemeImage = [
  document.getElementById('default1-image'),
  document.getElementById('default2-image'),
  document.getElementById('default3-image'),
  document.getElementById('color1-image'),
  document.getElementById('color2-image'),
  document.getElementById('color3-image'),
];

var vdoThemeBtn = [
  document.getElementById('default1-btn'),
  document.getElementById('default2-btn'),
  document.getElementById('default3-btn'),
  document.getElementById('color1-btn'),
  document.getElementById('color2-btn'),
  document.getElementById('color3-btn'),
];

var vdoThemeVal = [
  document.getElementById('default1-id').innerHTML,
  document.getElementById('default2-id').innerHTML,
  document.getElementById('default3-id').innerHTML,
  document.getElementById('color1-id').innerHTML,
  document.getElementById('color2-id').innerHTML,
  document.getElementById('color3-id').innerHTML
];

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
