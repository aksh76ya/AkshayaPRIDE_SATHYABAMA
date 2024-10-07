document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const department = document.getElementById('department').value;

    // Validation (basic example)
    if (name === '' || email === '' || phone === '' || department === '') {
        alert('Please fill in all fields');
        return;
    }

    // Create a new row in the table
    const tableBody = document.getElementById('detailsTable').getElementsByTagName('tbody')[0];
    const newRow = tableBody.insertRow();

    newRow.insertCell(0).innerText = name;
    newRow.insertCell(1).innerText = email;
    newRow.insertCell(2).innerText = phone;
    newRow.insertCell(3).innerText = department;

    // Clear the form
    document.getElementById('registrationForm').reset();
});
