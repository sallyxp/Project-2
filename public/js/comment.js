// The below allows the user to add comments

const commentFormHandler = async (event) => {
    event.preventDefault();
    const comment_text = document.querySelector('#comment-body').value.trim();
    const review_id = window.location.toString().split('/')[
        window.location.toString().split('/').length - 1
    ];
    console.log(review_id);
    if (comment_text) {
        const response = await fetch(`/api/reviews/${review_id}`, {
            method: 'POST',
            body: JSON.stringify({
                comment_text: comment_text,
                review_id: review_id,
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        if (response.ok) {
            // alert('Success!')
            document.location.reload();
        } else {
            alert(response.statusText);
        }
    }
}
document
    .querySelector('.new-comment-form')
    .addEventListener('submit', commentFormHandler);



// The below allows the user to delete a comment
const delCommentHandler = async (event) => {
    const id = window.location.toString().split('/')[
        window.location.toString().split('/').length - 1
    ];
    const response = await fetch(`/api/restaurants/${id}`, {
        method: 'DELETE',
    });

    if (response.ok) {
        document.location.replace('/dashboard');
    } else {
        alert('Failed to delete comment');
    }
};


// document
//     .querySelector('.comment-list')
//     .addEventListener('click', delButtonHandler);