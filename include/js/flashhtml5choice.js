var vdoPlayerVersion = document.getElementById('vdo_embed_version');
var vdoCustomVersion = document.getElementById('vdo_custom_version');
var vdoWatermarkOption1 = document.getElementById('vdo_watermark_option');
var vdoWatermarkOption2 = document.getElementById('vdo_watermark_html_flash');
var vdoWatermarkJson = document.getElementById('vdo_watermarkjson');
var vdoPrev;
var vdoRad1 = document.vdoOptionForm.vdo_require_watermark;
var vdoRad2 = document.vdoOptionForm.vdo_watermark_flash_html;

if (inArray(vdoVD.vdoSV, vdoVD.vdoAV)) hideVdoCustomVersion();
else showVdoCustomVersion(vdoVD.vdoSV);

if (vdoPlayerVersion.value == '0.5' || vdoPlayerVersion.value == '1.0.0' || vdoPlayerVersion.value == '1.1.0' || vdoPlayerVersion.value == '1.1.3' || vdoPlayerVersion.value == '1.2.7' || vdoPlayerVersion.value == '1.3.3' || vdoPlayerVersion.value == '1.4.5' || vdoPlayerVersion.value == '1.5.0' ) {
  vdoWatermarkOption1.style.display="none";
  vdoWatermarkOption2.style.display="none";
  vdoRad1[0].checked = true;
  vdoRad2[1].checked = true;
  vdoWatermarkJson.disabled = false;
  vdoWatermarkJson.value = vdoVD.vdoChoice;
}
else {
  vdoWatermarkOption1.style.display="table-row";
  vdoWatermarkOption2.style.display="table-row";
}

if (vdoRad1[1].checked === true) {
  jQuery(".vdo-htmlflash").attr('disabled', true);
  vdoWatermarkJson.disabled = true;
}

vdoPlayerVersion.onchange = function() {
  console.log('Changed theme to ', vdoPlayerVersion.value);
  if (vdoPlayerVersion.value === 'Custom Version') showVdoCustomVersion('');
  else hideVdoCustomVersion();
  // var matches = a.match(/^([0-9])+\.([0-9])+/)
  // var major = parseInt(matches[1]);
  // var minor = parseInt(matches[2]);
  // if (major > 1 || (major === 1 && minor >= 5)) {
  if (vdoPlayerVersion.value == '0.5' || vdoPlayerVersion.value == '1.0.0' || vdoPlayerVersion.value == '1.1.0' || vdoPlayerVersion.value == '1.1.3' || vdoPlayerVersion.value == '1.2.7' || vdoPlayerVersion.value == '1.3.3' || vdoPlayerVersion.value == '1.4.5' || vdoPlayerVersion.value == '1.5.0') {
    vdoWatermarkOption1.style.display="none";
    vdoWatermarkOption2.style.display="none";
    vdoRad1[0].checked = true;
    vdoRad2[1].checked = true;
    vdoWatermarkJson.disabled = false;
    vdoWatermarkJson.value = vdoVD.vdoChoice;
  }
  else {
    vdoWatermarkOption1.style.display="table-row";
    vdoWatermarkOption2.style.display="table-row";
  }
};

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

function hideVdoCustomVersion() {
  vdoCustomVersion.style.display = 'none';
  vdoCustomVersion.value = vdoPlayerVersion.value;
}

function showVdoCustomVersion(str) {
  vdoCustomVersion.style.display = 'inline-block';
  vdoPlayerVersion.value = 'Custom Version';
  vdoCustomVersion.value = str;
}

function inArray(vdoVersion, vdoAvailable){
  for (var i = 0; i < vdoAvailable.length; i++){
    if (vdoVersion == vdoAvailable[i]) return true;
  }
  return false;
}

