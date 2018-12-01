(function(){
  var otp = vdoES.vdoOTP;
  var playbackInfo = vdoES.vdoPlaybackInfo;
  var embedVersion = vdoES.vdoEmbedVersion;
  var embedTheme = vdoES.vdoEmbedTheme;
  var playerTech = vdoES.vdoPlayerTech;
  var techoverride;
  if (!playerTech) techoverride = ['*'];
  else {
    techoverride = playerTech.split(",");
  }

  function vdoScript(){
    (function(v,i,d,e,o){v[o]=v[o]||{}; v[o].add = v[o].add || function V(a){ (v[o].d=v[o].d||[]).push(a);};
        if(!v[o].l) { v[o].l=1*new Date(); a=i.createElement(d), m=i.getElementsByTagName(d)[0];
        a.async=1; a.src=e; m.parentNode.insertBefore(a,m);}
    })(window,document,"script","https://cdn-gce.vdocipher.com/playerAssets/"+embedVersion+"/vdo.js","vdo");
    vdo.add({
      otp: otp,
      playbackInfo: playbackInfo,
      theme: embedTheme,
      techoverride: techoverride,
      container: document.querySelector('#vdo'+otp)
    });
  }
  window.onload=vdoScript;
}());

