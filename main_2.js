document.getElementById('bookForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission to server

    // Get form data
    const title = document.getElementById('book-title').value;
    const author = document.getElementById('book-author').value;
    const description = document.getElementById('book-description').value;
    const imageFile = document.getElementById('book-image').files[0];

    // Validate that an image has been selected
    if (!imageFile) {
        alert('Please select an image for the book.');
        return;
    }

    // Create a URL for the image
    const imageURL = URL.createObjectURL(imageFile);

    // Prepare book details to be displayed
    const bookDetailsHTML = `
        <h3>${title}</h3>
        <p><strong>Author:</strong> ${author}</p>
        <p><strong>Description:</strong> ${description}</p>
    `;

    // Display image and book details
    document.getElementById('bookImage').innerHTML = `<img src="${imageURL}" alt="Book Image">`;
    document.getElementById('bookInfo').innerHTML = bookDetailsHTML;

    // Show the book details section
    document.getElementById('bookDetails').style.display = 'block';
    
    // Clear the form
    document.getElementById('bookForm').reset();
});
