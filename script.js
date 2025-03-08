// Get all book elements
const books = document.querySelectorAll('.book');
const tooltip = document.getElementById('tooltip');
const borrowBtns = document.querySelectorAll('.borrow-btn');
const modal = document.getElementById('borrow-modal');
const closeModal = document.getElementById('close-modal');
const closeModalBtn = document.getElementById('close-modal-btn');
const borrowForm = document.getElementById('borrow-form');

// Show tooltip on hover
books.forEach(book => {
    book.addEventListener('mouseover', (event) => {
        const title = book.getAttribute('data-title');
        const author = book.getAttribute('data-author');
        const isbn = book.getAttribute('data-isbn');
        const department = book.getAttribute('data-department');
        const link = book.getAttribute('data-link');

        tooltip.innerHTML = `
            <strong>${title}</strong><br>
            Author: ${author}<br>
            ISBN: ${isbn}<br>
            <a href="${link}" target="_blank" style="color: #fff;">View Details</a><br>
            Department: <a href="#" style="color: #fff;">${department}</a>
        `;

        tooltip.style.display = 'block';
        const rect = book.getBoundingClientRect();
        tooltip.style.left = `${rect.left + window.scrollX + book.offsetWidth + 10}px`;
        tooltip.style.top = `${rect.top + window.scrollY}px`;
    });

    book.addEventListener('mouseleave', () => {
        tooltip.style.display = 'none';
    });
});

// Show modal when "borrow" button is clicked
borrowBtns.forEach(button => {
    button.addEventListener('click', () => {
        modal.style.display = 'block';
    });
});

// Close modal
closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
});

closeModalBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

// Close modal if clicked outside of the modal content
window.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});

// Handle borrow form submission
borrowForm.addEventListener('submit', (event) => {
    event.preventDefault();
    alert('Book borrowed successfully!');
    modal.style.display = 'none';
});
