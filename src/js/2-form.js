const formData = {
  email: '',
  message: '',
};

const form = document.querySelector('.feedback-form');

const formDataFromLocalStorage = () => {
  const savedData = localStorage.getItem('feedback-form-state');
  if (savedData) {
    const parsedData = JSON.parse(savedData);
    formData.email = parsedData.email;
    formData.message = parsedData.message;
    const { email, message } = form.elements;
    email.value = formData.email;
    message.value = formData.message;
  }
};

formDataFromLocalStorage();

form.addEventListener('input', ({ target }) => {
  const { name, value } = target;
  formData[name] = value;
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
});

const isFormValid = () => {
  const { email, message } = formData;
  return email.trim() !== '' && message.trim() !== '';
};

form.addEventListener('submit', event => {
  event.preventDefault();

  if (!isFormValid()) {
    alert('Fill please all fields');
    return;
  }

  console.log(formData);

  localStorage.removeItem('feedback-form-state');
  form.reset();
});