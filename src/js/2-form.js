const formData = {
  email: '',
  message: '',
};

const formRefs = {
  form: document.querySelector('.feedback-form'),
  email: document.querySelector('.form-input'),
  message: document.querySelector('.form-textarea'),
};

const { form, email, message } = formRefs;
const localStorageKey = "feedback-form-state";
const savedDataLocal = JSON.parse(localStorage.getItem(localStorageKey));

if (savedDataLocal !== null) {
  email.value = savedDataLocal.email;
  message.value = savedDataLocal.message;
}

function onformSubmit(event) {
  event.preventDefault();
 if ( email.value === "" || message.value === "") {
       alert("Fill please all fields");
       return; 
    }
  console.log(formData);
  localStorage.removeItem(localStorageKey);
  form.reset();
}

form.addEventListener('submit', onformSubmit);

function onFormInput(event) {
  formData.email = email.value.trim();
  formData.message = message.value.trim();
  localStorage.setItem(localStorageKey, JSON.stringify(formData));
}

form.addEventListener('input', onFormInput);


