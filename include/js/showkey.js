(function(){
  var inputField = document.getElementById('vdo_client_key');
  var toggleKey = document.getElementById('toggle_API_visibility');
  var toggleSpan = document.getElementById('toggle_span');

  var currentState;
  window.onload = function(e){
    toggleSpanVis();
  }
  toggleKey.addEventListener('click', function(e){
    e.preventDefault();
    toggleSpanVis();
    toggleVisibility(e);
  });
  inputField.addEventListener('keyup', function(e){
    toggleSpanVis();
  });
  function toggleSpanVis(){
    if (inputField.value == false) {
      toggleSpan.style.display = 'none';
      toggleKey.setAttribute('data-protected', 'On');
      toggleKey.innerHTML = 'Show API Secret Key';
      inputField.type='password';
    }
    else {
      toggleSpan.style.display = 'inline-block';
    }
  }
  function toggleVisibility(e){
    currentState = e.target.getAttribute('data-protected');
    if (currentState == 'On'){
      e.target.setAttribute('data-protected', 'Off');
      e.target.innerHTML = 'Hide API Secret Key';
      inputField.type='text';
    }
    else {
      e.target.setAttribute('data-protected', 'On');
      e.target.innerHTML = 'Show API Secret Key';
      inputField.type='password';
    }
  }
}());
