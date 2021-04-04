async function newFormHandler(event) {
    event.preventDefault();
  
    const name = document.querySelector('input[name="name"]').value;
    const location = document.querySelector('input[name="location"]').value;
  
    const response = await fetch(`/api/restaurants`, {
      method: 'POST',
      body: JSON.stringify({
        name,
        location
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
  
    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert(response.statusText);
    }
  }
  
  document.querySelector('.new-restaurant-form').addEventListener('submit', newFormHandler);