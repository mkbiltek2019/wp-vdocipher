(function(){
  var otp = vdoLES.vdoOTP;
  var version = vdoLES.vdoVersion;

  function vdoScript(){
    (function(v,i,d,e,o){v[o]=v[o]||{}; v[o].add = v[o].add || function V(a){ (v[o].d=v[o].d||[]).push(a);};
      if(!v[o].l) { v[o].l=1*new Date(); a=i.createElement(d), m=i.getElementsByTagName(d)[0];
      a.async=1; a.src=e; m.parentNode.insertBefore(a,m);}
    })(window,document,'script','//de122v0opjemw.cloudfront.net/vdo.js','vdo');
    if (version == 32) {
      vdo.add({
        o: otp,
        version: version
      });
    }
    else {
      vdo.add({
        o: otp,
      });
    }
  }
  window.onload=vdoScript;
}());

