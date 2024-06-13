document.addEventListener('DOMContentLoaded', () => {
    async function attachEvents() {
        const btnLoadPosts = document.querySelector('#btnLoadPosts');
        const btnViewPost = document.querySelector('#btnViewPost'); // Corrected ID
        const postsElement = document.querySelector('#posts');
        const postTitleElement = document.querySelector('#post-title');
        const postBodyElement = document.querySelector('#post-body');
        const postCommentsElement = document.querySelector('#post-comments');

        let posts = {};
        let comments = {};

        btnLoadPosts.addEventListener('click', async (e) => {
            try {
                // Fetch data for the posts
                const postResources = await fetch("http://localhost:3030/jsonstore/blog/posts");
                posts = await postResources.json();

                // Clear any existing options
                postsElement.innerHTML = '';

                for (const key in posts) {
                    const optionElement = document.createElement('option');
                    optionElement.value = key;
                    optionElement.textContent = posts[key].title;
                    postsElement.appendChild(optionElement);
                }
            } catch (error) {
                console.error('Failed to load posts:', error);
            }
        });

        btnViewPost.addEventListener('click', async (e) => {
            try {
                const selectedPostId = postsElement.value;

                if (!selectedPostId) {
                    return;
                }

                // Fetch data for the comments
                const commentResources = await fetch("http://localhost:3030/jsonstore/blog/comments");
                comments = await commentResources.json();

                // Clear previous post details and comments
                postTitleElement.textContent = '';
                postBodyElement.textContent = '';
                postCommentsElement.innerHTML = '';

                // Display the selected post details
                const selectedPost = posts[selectedPostId];
                postTitleElement.textContent = selectedPost.title;
                postBodyElement.textContent = selectedPost.body;

                // Display comments for the selected post
                for (const key in comments) {
                    if (comments[key].postId === selectedPostId) {
                        const liElement = document.createElement('li');
                        liElement.textContent = comments[key].text;
                        postCommentsElement.appendChild(liElement);
                    }
                }
            } catch (error) {
                console.error('Failed to load post or comments:', error);
            }
        });
    }

    attachEvents();
});
