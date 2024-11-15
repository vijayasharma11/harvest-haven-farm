document.getElementById('order-form').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent form from submitting the traditional way

    // Get all form data
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let address = document.getElementById('address').value;

    // Create an alert or handle the order submission logic here
    alert(`Thank you for your order, ${name}! We will send a confirmation to ${email} and deliver to: ${address}.`);
});
