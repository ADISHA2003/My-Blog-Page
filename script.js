// Filter Posts by Category
document.querySelectorAll('.category-section button').forEach(button => {
    button.addEventListener('click', function () {
        const category = this.getAttribute('data-category');
        const posts = document.querySelectorAll('.post');

        // Remove active class from all buttons
        document.querySelectorAll('.category-section button').forEach(btn => btn.classList.remove('active'));

        // Add active class to clicked button
        this.classList.add('active');

        posts.forEach(post => {
            if (category === 'all' || post.getAttribute('data-category') === category) {
                post.style.display = 'block';
            } else {
                post.style.display = 'none';
            }
        });
    });
});

// Smooth Scroll for Navbar Links
document.querySelectorAll('.navbar a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Submit form to WhatsApp
function submitForm(event) {
    event.preventDefault();

    const nameField = document.querySelector('input[type="text"]');
    const emailField = document.querySelector('input[type="email"]');
    const messageField = document.querySelector('textarea');

    const name = encodeURIComponent(nameField.value);
    const email = encodeURIComponent(emailField.value);
    const message = encodeURIComponent(messageField.value);

    const whatsappMessage = `Name: ${name}%0AEmail: ${email}%0AMessage: ${message}`;

    // Replace with your actual phone number in international format without +
    const phoneNumber = '9289665096'; // Replace with your WhatsApp number
    window.open(`https://api.whatsapp.com/send?phone=${phoneNumber}&text=${whatsappMessage}`, '_blank');

    // Reset the form
    document.getElementById('contact-form').reset();
}

// Attach the submit event listener to the contact form
document.getElementById('contact-form').addEventListener('submit', submitForm);
