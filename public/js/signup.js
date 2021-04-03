const signupFormHandler = async (event) => {
    event.preventDefault();

    const name = document.querySelector('#name-signup').value.trim(); // use this id in handlebars or change to correspond
    const email = document.querySelector('#email-signup').value.trim(); // use this id in handlebars or change to correspond
    const password = document.querySelector('#password-signup').value.trim(); // use this id in handlebars or change to correspond

    if (name && email && password) {
        const response = await fetch('/api/users', {
            method: 'POST',
            body: JSON.stringify({ name, email, password }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            document.location.replace('/dashboard');
        } else {
            alert(response.statusText);
        }
    }
};

// --> event listener needs to be adapted to handlebars id
// document
//     .querySelector('.signup-form')
//     .addEventListener('submit', signupFormHandler);