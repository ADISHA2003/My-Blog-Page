// Toggle Dark Mode
const toggleDarkMode = () => {
    document.body.classList.toggle('dark-mode');
};

// Load more posts (dummy example)
const loadMorePosts = () => {
    const postSection = document.querySelector('.posts');
    const newPost = document.createElement('article');
    newPost.classList.add('post');
    newPost.innerHTML = `
        <h2>Another Blog Post</h2>
        <p>Here’s more content for your blog readers!</p>
        <a href="#">Read More</a>
    `;
    postSection.appendChild(newPost);
};

document.addEventListener('DOMContentLoaded', () => {
    // Add event listeners here for dark mode or loading more posts.
});
