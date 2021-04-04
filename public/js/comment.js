// The below allows the user to add comments

const commentFormHandler = async (event) => {
    event.preventDefault();
    const comment_text = document.querySelector('#comment-body').value.trim();
    const post_id = window.location.toString().split('/')[
        window.location.toString().split('/').length - 1
    ];
    if (comment_text) {
        const response = await fetch(`/api/posts/${post_id}`, {
            method: 'POST',
            body: JSON.stringify({
                post_id: post_id,
                comment_text: comment_text,
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        if (response.ok) {
            document.location.reload();
        } else {
            alert(response.statusText);
        }
    }
}
document
    .querySelector('.comment-post-form')
    .addEventListener('submit', commentFormHandler);



// The below allows the user to edit a comment
