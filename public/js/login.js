const loginFormHandler = async (event) => {
    event.preventDefault();

    const email = document.querySelector('#email-login').value.trim(); // use this id in handlebars or change to correspond
    const password = document.querySelector('#password-login').value.trim(); // use this id in handlebars or change to correspond

    if (email && password) {
        const response = await fetch('/api/users/login', {
            method: 'POST',
            body: JSON.stringify({ email, password }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            document.location.replace('/dashboard');
        } else if (!response.ok){
            alert("Your email or password is invalid. Your password must contain at least one uppercase & one lowercase letter, in addition to a number.");
            resetForm();
        } else {
            alert(response.statusText);
        }
    }
};

resetForm = () => {
    document.getElementById("login-form").reset();
}

document
    .querySelector('.login-form')
    .addEventListener('submit', loginFormHandler);
