function validation(){
  var email = document.getElementById('email');
  var pattern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  var errorIcon = document.getElementById('error-icon')
  var errorMessage = document.getElementById('error-message');

  if(email.value.match(pattern)){
    email.classList.remove('input-error')
    errorIcon.style.display="none";
    errorMessage.style.display="none";
  } else {
    email.classList.add('input-error');
    errorIcon.style.display="inherit";
    errorMessage.style.display="inherit";
  }
}