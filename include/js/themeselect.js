var vdoTheme = document.getElementById('vdo_player_theme_options');
var vdoAvailableThemes = document.getElementById('available_themes');

var vdoDefault = document.getElementById('1e0143ace9054f6cb638caf349b2b43f-image');
var vdoColor = document.getElementById('5962d374450d4ca3a152e318af41aa89-image');
var vdoArsenal = document.getElementById('arsenal-image');
var vdoChelsea = document.getElementById('chelsea-image');

var vdoDefaultButton = document.getElementById('1e0143ace9054f6cb638caf349b2b43f-btn');
var vdoColorButton = document.getElementById('5962d374450d4ca3a152e318af41aa89-btn');
var vdoArsenalButton = document.getElementById('arsenal-btn');
var vdoChelseaButton = document.getElementById('chelsea-btn');

window.onload = function(){
  switch(vdoTheme.value){
    case '1e0143ace9054f6cb638caf349b2b43f':
      vdoDefaultSelected();
      break;
    case '5962d374450d4ca3a152e318af41aa89':
      vdoColorSelected();
      break;
    case 'arsenal':
      vdoArsenalSelected();
      break;
    case 'chelsea':
      vdoChelseaSelected();
      break;
  }
};

vdoDefault.addEventListener('click', vdoDefaultSelected);
vdoDefaultButton.addEventListener('click', vdoDefaultSelected);

function vdoDefaultSelected(){
  vdoTheme.value = vdoDefault.dataset.theme;

  vdoDefault.style.border="5px solid #00aaFF";
  vdoColor.style.border="";
  vdoArsenal.style.border="";
  vdoChelsea.style.border="";

  vdoDefaultButton.innerHTML = "Selected";
  vdoColorButton.innerHTML = "Select";
  vdoArsenalButton.innerHTML = "Select";
  vdoChelseaButton.innerHTML = "Select";

  vdoDefaultButton.style.backgroundColor = "#0f0";
  vdoColorButton.style.backgroundColor = "#fff";
  vdoArsenalButton.style.backgroundColor = "#fff";
  vdoChelseaButton.style.backgroundColor = "#fff";

  vdoDefault.style.width="97%";
  vdoColor.style.width="100%";
  vdoArsenal.style.width="100%";
  vdoChelsea.style.width="100%";
}

vdoColor.addEventListener('click', vdoColorSelected);
vdoColorButton.addEventListener('click', vdoColorSelected);

function vdoColorSelected(){
  vdoTheme.value = vdoColor.dataset.theme;

  vdoColor.style.border="5px solid #00aaFF";
  vdoDefault.style.border="";
  vdoArsenal.style.border="";
  vdoChelsea.style.border="";

  vdoDefaultButton.innerHTML = "Select";
  vdoColorButton.innerHTML = "Selected";
  vdoArsenalButton.innerHTML = "Select";
  vdoChelseaButton.innerHTML = "Select";

  vdoDefaultButton.style.backgroundColor = "#fff";
  vdoColorButton.style.backgroundColor = "#0f0";
  vdoArsenalButton.style.backgroundColor = "#fff";
  vdoChelseaButton.style.backgroundColor = "#fff";

  vdoDefault.style.width="100%";
  vdoColor.style.width="97%";
  vdoArsenal.style.width="100%";
  vdoChelsea.style.width="100%";

  // vdoColor.style.opacity="1";
  // vdoDefault.style.opacity="0.7";
  // vdoArsenal.style.opacity="0.7";
}

vdoArsenal.addEventListener('click', vdoArsenalSelected);
vdoArsenalButton.addEventListener('click', vdoArsenalSelected);

function vdoArsenalSelected(){
  vdoTheme.value= vdoArsenal.dataset.theme;

  vdoArsenal.style.border="5px solid #00aaFF";
  vdoDefault.style.border="";
  vdoColor.style.border="";
  vdoChelsea.style.border="";

  vdoDefaultButton.innerHTML = "Select";
  vdoColorButton.innerHTML = "Select";
  vdoArsenalButton.innerHTML = "Selected";
  vdoChelseaButton.innerHTML = "Select";

  vdoDefaultButton.style.backgroundColor = "#fff";
  vdoColorButton.style.backgroundColor = "#fff";
  vdoArsenalButton.style.backgroundColor = "#0f0";
  vdoChelseaButton.style.backgroundColor = "#fff";

  vdoDefault.style.width="100%";
  vdoColor.style.width="100%";
  vdoArsenal.style.width="97%";
  vdoChelsea.style.width="100%";

  // vdoArsenal.style.opacity="1";
  // vdoDefault.style.opacity="0.7";
  // vdoColor.style.opacity="0.7";
}

vdoChelsea.addEventListener('click', vdoChelseaSelected);
vdoChelseaButton.addEventListener('click', vdoChelseaSelected);

function vdoChelseaSelected(){
  vdoTheme.value= vdoChelsea.dataset.theme;

  vdoChelsea.style.border="5px solid #00aaFF";
  vdoDefault.style.border="";
  vdoColor.style.border="";
  vdoArsenal.style.border="";

  vdoDefaultButton.innerHTML = "Select";
  vdoColorButton.innerHTML = "Select";
  vdoArsenalButton.innerHTML = "Select";
  vdoChelseaButton.innerHTML = "Selected";

  vdoDefaultButton.style.backgroundColor = "#fff";
  vdoColorButton.style.backgroundColor = "#fff";
  vdoArsenalButton.style.backgroundColor = "#fff";
  vdoChelseaButton.style.backgroundColor = "#0f0";

  vdoArsenal.style.width="100%";
  vdoDefault.style.width="100%";
  vdoColor.style.width="100%";
  vdoChelsea.style.width="97%";

  // vdoArsenal.style.opacity="1";
  // vdoDefault.style.opacity="0.7";
  // vdoColor.style.opacity="0.7";
}
