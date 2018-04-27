var vdoPlayerVersion = document.getElementById('vdo_embed_version');
var vdoCustomVersion = document.getElementById('vdo_custom_version')

if (inArray(vdoVD.vdoSV, vdoVD.vdoAV)) hideVdoCustomVersion();
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
