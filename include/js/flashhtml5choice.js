var vdoPlayerVersion = document.getElementById('vdo_embed_version');
var vdoCustomVersion = document.getElementById('vdo_custom_version');
var vdoWatermarkOption1 = document.getElementById('vdo_watermark_option');
var vdoWatermarkOption2 = document.getElementById('vdo_watermark_html_flash');
var vdoWatermarkJson = document.getElementById('vdo_watermarkjson');
var vdoPrev;
var vdoRad1 = document.vdoOptionForm.vdo_require_watermark;
var vdoRad2 = document.vdoOptionForm.vdo_watermark_flash_html;
var vdoDefaultWidth = document.getElementById('vdo_default_width');
var vdoDefaultHeight = document.getElementById('vdo_default_height');

if (inVdoArray(vdoVD.vdoSV, vdoVD.vdoAV)) hideVdoCustomVersion();
else showVdoCustomVersion(vdoVD.vdoSV);

evaluateVersion();

if (vdoRad1[1].checked === true) {
  jQuery(".vdo-htmlflash").attr('disabled', true);
  vdoWatermarkJson.disabled = true;
}

// Listens to changes in Watermark Yes/No form to enable/disable
// JSON & HTML/flash fields
for(var i = 0; i < vdoRad1.length; i++) {
  vdoRad1[i].addEventListener('click', function() {
    vdoPrev = this;
    if (this.value == 'no') {
      jQuery(".vdo-htmlflash").attr('disabled', true);
      vdoWatermarkJson.disabled = true;
    }
    if (this.value == 'yes') {
      jQuery(".vdo-htmlflash").attr('disabled', false);
      vdoWatermarkJson.disabled = false;
      vdoWatermarkJson.value = vdoVD.vdoChoice;
    }
  });
}

// Listens to changes in vdoPlayerVersion dropdown
// and in Custom Version field when that is changed
vdoPlayerVersion.onchange = function() {
  console.log('Changed theme to ', vdoPlayerVersion.value);
  if (vdoPlayerVersion.value === 'Custom Version') {
    showVdoCustomVersion('');
    vdoCustomVersion.onkeyup = function() {
      evaluateVersion();
    }
  }
  else {
    hideVdoCustomVersion();
    evaluateVersion();
  }
};

// Evaluates for versions 1.5 and above (for height auto), and for 1.6 and above (for HTML5 watermark)
function evaluateVersion() {
  if (vdoHtml5WE(vdoCustomVersion.value, 6)) vdoShowWatermarkChoices();
  else vdoHideWatermarkChoices();
  if(vdoHtml5WE(vdoCustomVersion.value, 5)) vdoChangeHW(1280 ,'auto');
  else vdoChangeHW(640, 360);
}


// Hides Custom Version field
function hideVdoCustomVersion() {
  vdoCustomVersion.style.display = 'none';
  vdoCustomVersion.value = vdoPlayerVersion.value;
}

// Shows Custom Version field
function showVdoCustomVersion(str) {
  vdoCustomVersion.style.display = 'inline-block';
  vdoPlayerVersion.value = 'Custom Version';
  vdoCustomVersion.value = str;
}

// Evaluates if the version number selected is in the list of available versions
function inVdoArray(vdoVersion, vdoAvailable){
  for (var i = 0; i < vdoAvailable.length; i++){
    if (vdoVersion == vdoAvailable[i]) return true;
  }
  return false;
}

// Evaluates if the player version selected is greater than or equal to 1.6.0
function vdoHtml5WE(value,num){
  var matches = value.match(/^([0-9]+)\.([0-9]+)/);
  var major = parseInt(matches[1]);
  var minor = parseInt(matches[2]);
  if (major > 1 || (major === 1 && minor >= num)) return true;
  else return false;
}

// Hides watermark yes/no Flash/HTML5 choices
function vdoHideWatermarkChoices(){
  vdoWatermarkOption1.style.display="none";
  vdoWatermarkOption2.style.display="none";
  vdoRad1[0].checked = true;
  vdoRad2[1].checked = true;
  vdoWatermarkJson.disabled = false;
  vdoWatermarkJson.value = vdoVD.vdoChoice;
}

// Shows watermark yes/no Flash/HTML5 choices
function vdoShowWatermarkChoices() {
  vdoWatermarkOption1.style.display="table-row";
  vdoWatermarkOption2.style.display="table-row";
}

function vdoChangeHW (width, height) {
  vdoDefaultWidth.value = width;
  vdoDefaultHeight.value = height;
}
