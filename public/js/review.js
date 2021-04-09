// 1- ADD REVIEW: fetch post route
const addReviewHandler = async (event) => {
    event.preventDefault();

    const title = document.querySelector('#review-title').value.trim(); // IDs to add in the handlebars
    const review_content = document.querySelector('#review-body').value.trim(); // IDs to add in the handlebars
    // ------> restaurant_id variable might need to be changed
    const restaurant_id = document.querySelector('#restaurant-select').value;
    const rating = document.querySelector('#review-rating').value;

    if (title && review_content && rating && restaurant_id) {
        const response = await fetch('/api/reviews', {
            method: 'POST',
            body: JSON.stringify({ title, review_content, rating, restaurant_id }), // include restaurant_id in stringify?
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (response.ok) {
            document.location.replace('/dashboard');
        } else {
            alert('Failed to add review');
        }
    }
};


// 2- EDIT REVIEW: fetch put route
const editReviewHandler = async (event) => {
    event.preventDefault();

    const title = document.querySelector('#edit-review-title').value.trim(); // IDs to add in the handlebars
    const review_content = document.querySelector('#edit-review-body').value.trim(); // IDs to add in the handlebars
    const id = window.location.toString().split('/')[
        window.location.toString().split('/').length - 1
    ];

    const response = await fetch(`/api/reviews/edit/${id}`, {
        method: 'PUT',
        body: JSON.stringify({
            title,
            review_content
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    if (response.ok) {
        document.location.replace('/dashboard');
    } else {
        alert('Failed to update review');
    }

};

// 3- DELETE REVIEW: fetch delete route
const delButtonHandler = async (event) => {
    if (event.target.hasAttribute('data-id')) {
        const id = event.target.getAttribute('data-id');

        const response = await fetch(`/api/reviews/${id}`, {
            method: 'DELETE',
        });

        if (response.ok) {
            document.location.replace('/dashboard');
        } else {
            alert('Failed to delete review');
        }
    }
};

// 4- POST IMAGE TO API

// 5- EVENT LISTENERS
// 5a- add review form submit button
document
    .querySelector('.review-form') // class to include in handlebars form
    .addEventListener('submit', addReviewHandler);

// 5b- edit review form submit button
// document
//     .querySelector('.edit-review-form') // class to include in handlebars form
//     .addEventListener('submit', editReviewHandler);

// 5c- delete button listener
document
    .querySelector('.review-list')
    .addEventListener('click', delButtonHandler);