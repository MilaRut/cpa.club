const myform = document.getElementById('form');
const username = document.getElementById('name');
const tel = document.getElementById('tel');
const email = document.getElementById('email');

function validateForm() {
  myform.addEventListener('submit', function (e) {
    e.preventDefault();
    if (username.value && tel.value && email.value) {
      myform.submit();
    }
    myform.reset();
  });
}

export {validateForm};
