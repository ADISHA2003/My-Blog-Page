// Search Functionality
document.getElementById('search-bar').addEventListener('input', function(e) {
    const query = e.target.value.toLowerCase();
    const posts = document.querySelectorAll('.post');
    
    posts.forEach(post => {
        const title = post.querySelector('h2').textContent.toLowerCase();
        if (title.includes(query)) {
            post.style.display = 'block';
        } else {
            post.style.display = 'none';
        }
    });
});

// Category Filter
const categoryButtons = document.querySelectorAll('.categories button');
categoryButtons.forEach(button => {
    button.addEventListener('click', () => {
        const category = button.getAttribute('data-category');
        const posts = document.querySelectorAll('.post');
        
        posts.forEach(post => {
            if (post.getAttribute('data-category') === category || category === 'all') {
                post.style.display = 'block';
            } else {
                post.style.display = 'none';
            }
        });
    });
});

// Related Posts Functionality
function showRelatedPosts(category) {
    const posts = document.querySelectorAll('.post');
    const relatedPostsList = document.getElementById('related-posts-list');
    relatedPostsList.innerHTML = ''; // Clear existing related posts

    posts.forEach(post => {
        if (post.getAttribute('data-category') === category) {
            const listItem = document.createElement('li');
            listItem.textContent = post.querySelector('h2').textContent;
            relatedPostsList.appendChild(listItem);
        }
    });
}
// Example: Show related posts for 'tech'
showRelatedPosts('tech');

// Comment Section
document.getElementById('submit-comment').addEventListener('click', function() {
    const commentText = document.getElementById('comment-text').value;
    if (commentText) {
        const commentList = document.querySelector('.comment-list');
        const commentItem = document.createElement('div');
        commentItem.classList.add('comment');
        commentItem.textContent = commentText;
        commentList.appendChild(commentItem);
        
        // Clear the textarea after submission
        document.getElementById('comment-text').value = '';
    }
});

// Newsletter Subscription
document.getElementById('newsletter-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const email = e.target.querySelector('input').value;
    alert(`Thank you for subscribing, ${email}!`);
});

// Social Share Buttons
const shareButtons = document.querySelectorAll('.share-btn');
shareButtons.forEach(button => {
    button.addEventListener('click', () => {
        const platform = button.getAttribute('data-platform');
        const url = window.location.href;
        
        let shareUrl = '';
        if (platform === 'facebook') {
            shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}`;
        } else if (platform === 'twitter') {
            shareUrl = `https://twitter.com/intent/tweet?url=${url}`;
        }
        
        window.open(shareUrl, '_blank');
    });
});

// Dark Mode Toggle
const toggleDarkModeButton = document.getElementById('toggle-dark-mode');
toggleDarkModeButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});
