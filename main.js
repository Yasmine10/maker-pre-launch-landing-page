const form = document.querySelector('form');
const email = document.querySelector('#email');
const errorMessageEmail = document.querySelector('#email-error');

form.addEventListener("submit", (e) => {
	const emailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
	email.classList.remove("invalid");

	if (email.value === "" || email.value == null) {
		e.preventDefault();

		errorMessageEmail.innerHTML = "Oops! Please add your email";
		email.classList.add("invalid");

		return false;
	}

	if (!email.value.match(emailformat)) {
		e.preventDefault();

		errorMessageEmail.innerHTML = "Oops! That doesn’t look like an email address";
		email.classList.add("invalid");

		return false;
	}

	return true;
});