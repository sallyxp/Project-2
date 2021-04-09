// 2- EDIT REVIEW: fetch put route
const editReviewHandler = async (event) => {
    event.preventDefault();

    const title = document.querySelector('#edit-review-title').value.trim(); // IDs to add in the handlebars
    const review_content = document.querySelector('#edit-review-body').value.trim(); // IDs to add in the handlebars
    const id = window.location.toString().split('/')[
        window.location.toString().split('/').length - 1
    ];
    console.log(id);

    const response = await fetch(`/api/reviews/edit/${id}`, {
        method: 'PUT',
        body: JSON.stringify({
            title: title,
            review_content: review_content
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    console.log(response);

    if (response.ok) {
        //alert('success!')
       document.location.replace('/dashboard');
    } else {
        alert('Failed to update review');
    }

};

// 5b- edit review form submit button
document
    .querySelector('.edit-review-form') // class to include in handlebars form
    .addEventListener('submit', editReviewHandler);