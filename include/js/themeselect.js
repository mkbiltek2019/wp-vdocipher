(function(){

var vdoTheme = document.getElementById('vdo_player_theme_options');

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
  document.getElementById('color3-id').innerHTML,
];

var vdoColors = [
'#0294f9',
'#CFC10A',
'#67AF17',
]

var vdoThemeNumber = vdoThemeVal.length;

window.onload = function(){
  vdoThemeSelect(vdoThemeVal.indexOf(vdoTheme.value));
}

for (var k = 0; k < vdoThemeNumber; k++){
  vdoThemeImage[k].addEventListener('click', vdoThemeImageClick);
  vdoThemeBtn[k].addEventListener('click', vdoThemeBtnClick);
}

function vdoThemeImageClick(e){
  vdoThemeSelect(vdoThemeImage.indexOf(e.target));
}

function vdoThemeBtnClick(e){
  vdoThemeSelect(vdoThemeBtn.indexOf(e.target));
}

function vdoThemeSelect(index){
  for (var j = 0; j < vdoThemeNumber; j++) {
    if (j===index){
      vdoTheme.value = vdoThemeVal[j];
      vdoThemeImage[j].style.borderWidth="10px";
      vdoThemeImage[j].style.borderStyle="solid";
      vdoThemeImage[j].style.borderColor=vdoColors[j%3];
      vdoThemeImage[j].style.width="92%";
      vdoThemeBtn[j].innerHTML = "Selected";
      vdoThemeBtn[j].style.backgroundColor = "#0f9";
    }
    else {
      vdoThemeImage[j].style.border="";
      vdoThemeImage[j].style.width="100%";
      vdoThemeBtn[j].innerHTML = "Select";
      vdoThemeBtn[j].style.backgroundColor = "#fff";
    }
  }
}

}());
