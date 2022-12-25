const validateForm = (form) => {
  const myForm = document.querySelectorAll('form');

  myForm.forEach(function (item) {
    if (form) {
      item.addEventListener('submit', (evt) => {
        evt.preventDefault();
        item.submit();
      });
      item.reset();
    }
  });
};

export {validateForm};
