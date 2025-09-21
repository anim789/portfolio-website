// Small enhancements: current year + client-side form validation
document.getElementById('year').textContent = new Date().getFullYear();

const form = document.getElementById('contact-form');
if (form) {
  form.addEventListener('submit', (e) => {
    // Basic client-side validation
    if (!form.checkValidity()) {
      e.preventDefault();
      alert('Please complete all required fields correctly before sending.');
    } else {
      e.preventDefault();
      alert('Thanks! This demo form validates on the client only.');
    }
  });
}
