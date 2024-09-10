document.getElementById('bookingForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const checkin = document.getElementById('checkin').value;
    const checkout = document.getElementById('checkout').value;
    const room = document.getElementById('room').value;
    const payment = document.getElementById('payment').value;

    alert(`Thank you for booking, ${name}! Your stay from ${checkin} to ${checkout} in a ${room} is confirmed. Payment method: ${payment}.`);


});
