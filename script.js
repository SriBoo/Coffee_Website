document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        // Simple form validation or actions here
        alert('Thank you for contacting us!');
        // Reset form after submission
        contactForm.reset();
    });
	const aboutImg = document.createElement('img');
    aboutImg.src = 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.freepik.com%2Fpremium-vector%2Fcoffee-shop-landing-page_10559248.htm&psig=AOvVaw1YPZzAGMFQsiNzpA0DaEed&ust=1711982130140000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCNDp68jcnoUDFQAAAAAdAAAAABAE'; // URL of the image you wish to add
    aboutImg.alt = 'Description of the image for accessibility purposes'; // A descriptive alt text for accessibility
    aboutImg.style.width = '100%'; // Making the image responsive
    aboutImg.style.borderRadius = '10px'; // Optional: Adds rounded corners to the image
    
    // Appending the image to the container
    aboutImageContainer.appendChild(aboutImg);
});
