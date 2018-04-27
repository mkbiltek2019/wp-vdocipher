var vdoPlayerVersion = document.getElementById('vdo_embed_version');
var vdoCustomVersion = document.getElementById('vdo_custom_version')

if (inarray(vdoVD.vdoSV, vdoVD.vdoAV)) hideVdoCustomVersion();
else showVdoCustomVersion(vdoVD.vdoSV);

vdoPlayerVersion.onchange = function() {
  if (vdoPlayerVersion.value === 'Custom Version') showVdoCustomVersion('');
  else hideVdoCustomVersion();
}

function hideVdoCustomVersion() {
  vdoCustomVersion.style.display = 'none';
  vdoCustomVersion.value = vdoPlayerVersion.value;
}

function showVdoCustomVersion(str) {
  vdoPlayerVersion.value = 'Custom Version';
  vdoCustomVersion.style.display = 'inline-block';
  vdoCustomVersion.value = str;
}

function inarray(vdoVersion, vdoAvailable){
  for (var i = 0; i < vdoAvailable.length; i++){
    if (vdoVersion == vdoAvailable[i]) return true;
  }
  return false;
}
