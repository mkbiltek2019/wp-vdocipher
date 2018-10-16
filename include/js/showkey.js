(function(){
  var inputField = document.getElementById('vdo_client_key');
  var toggleKey = document.getElementById('toggle_API_visibility');
  var toggleSpan = document.getElementById('toggle_span');

  var currentState;
  window.onload = function(e){
    toggleVisibility();
  }
  toggleKey.addEventListener('click', function(e){
    e.preventDefault();
    toggleVisibility();
  });

  inputField.addEventListener('keyup', function(e){
    if (inputField.value == false) {
      toggleSpan.style.display = 'none';
    }
    else {
      toggleSpan.style.display = 'inline-block';
    }
  });

  function toggleVisibility(){
    currentState = toggleKey.getAttribute('data-visible');
    if (inputField.value == false) {
      toggleSpan.style.display = 'none';
    }
    if (currentState == 'On'){
      toggleKey.innerHTML = 'Hide API Secret Key';
      toggleKey.setAttribute('data-visible', 'Off');
      inputField.type='text';
    }
    else {
      toggleKey.innerHTML = 'Show API Secret Key';
      toggleKey.setAttribute('data-visible', 'On');
      inputField.type='password';
    }
  }

}());
