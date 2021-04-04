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
const editCommentHandler = async (event) => {
    event.preventDefault();
    const name = document.querySelector('input[name="edit-comment-title"]').value;
    const description = document.querySelector('input[name="edit-comment-body"]').value;
    const id = window.location.toString().split('/')[
        window.location.toString().split('/').length - 1
      ];

        const response = await fetch(`/dashboard/edit/${id}`, {
            method: 'PUT',
            body: JSON.stringify({
                name,
                description
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (response.ok) {
            document.location.replace('/dashboard');
        } else {
            alert('Failed to update post');
        }
};

document
    .querySelector('.edit-comment-form')
    .addEventListener('submit', editButtonHandler);