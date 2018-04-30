var vdoPlayerVersion = document.getElementById('vdo_embed_version');
var vdoCustomVersion = document.getElementById('vdo_custom_version');
var vdoWatermarkOption = document.getElementById('vdo_watermark_html_flash');
var vdoWatermarkJson = document.getElementById('vdo_watermarkjson');
var vdoPrev;
var vdoRad = document.vdoOptionForm.vdo_watermark_flash_html;
var vdoDefaultWidth = document.getElementById('vdo_default_width');
var vdoDefaultHeight = document.getElementById('vdo_default_height');

if (inVdoArray(vdoVD.vdoSV, vdoVD.vdoAV)) hideVdoCustomVersion();
else showVdoCustomVersion(vdoVD.vdoSV);

evaluateVCV();
var vdoWHState;
if (vdoHtml5WE(vdoCustomVersion.value, 5)){
  vdoWHState = 1;
}
else {
  vdoWHState = 0;
}

// Listens to changes in vdoPlayerVersion dropdown
// and in Custom Version field when that is changed
vdoPlayerVersion.onchange = function() {
  if (vdoPlayerVersion.value === 'Custom Version') {
    showVdoCustomVersion('');
    vdoCustomVersion.onkeyup = function() {
    evaluateVCV();
    evaluateVHW();
    }
  }
  else {
    hideVdoCustomVersion();
    evaluateVCV();
    evaluateVHW();
  }
};

// Evaluates for versions 1.6 and above (for HTML5 watermark), and
// shows WatermarkChoice accordingly
function evaluateVCV() {
  if (vdoHtml5WE(vdoCustomVersion.value, 6)) vdoShowWatermarkChoices();
  else vdoHideWatermarkChoices();
}

// Evaluates for versions 1.5 and above (for height auto)
function evaluateVHW() {
  if(vdoHtml5WE(vdoCustomVersion.value, 5)){
    if (vdoWHState === 0){
      vdoWHState = 1;
      vdoChangeHW(1280 ,'auto');
    }
  }
  else {
    if(vdoWHState === 1) {
      vdoWHState = 0;
      vdoChangeHW(640, 360);
    }
  }
}

// Evaluates if the player version selected is greater than or equal to 1.num
function vdoHtml5WE(value,num){
  var matches = value.match(/^([0-9]+)\.([0-9]+)/);
  var major = parseInt(matches[1]);
  var minor = parseInt(matches[2]);
  if (major > 1 || (major === 1 && minor >= num)) return true;
  else return false;
}

// Shows watermark Flash/HTML5 choices
function vdoShowWatermarkChoices() {
  vdoWatermarkOption.style.display="table-row";
}

// Hides watermark Flash/HTML5 choices
function vdoHideWatermarkChoices(){
  vdoWatermarkOption.style.display="none";
  vdoRad[0].checked = true;
}

// Change default video height and width
function vdoChangeHW (width, height) {
  vdoDefaultWidth.value = width;
  vdoDefaultHeight.value = height;
}

// Evaluates if the version number selected is in the list of available versions
function inVdoArray(vdoVersion, vdoAvailable){
  for (var i = 0; i < vdoAvailable.length; i++){
    if (vdoVersion == vdoAvailable[i]) return true;
  }
  return false;
}

// Shows Custom Version field
function showVdoCustomVersion(str) {
  vdoCustomVersion.style.display = 'inline-block';
  vdoPlayerVersion.value = 'Custom Version';
  vdoCustomVersion.value = str;
}

// Hides Custom Version field
function hideVdoCustomVersion() {
  vdoCustomVersion.style.display = 'none';
  vdoCustomVersion.value = vdoPlayerVersion.value;
}
