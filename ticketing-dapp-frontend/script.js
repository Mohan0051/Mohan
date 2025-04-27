function generateTicket() {
    const eventName = document.getElementById('eventName').value;
    const userAddress = document.getElementById('userAddress').value;
  
    if (eventName === '' || userAddress === '') {
      alert('Please fill both fields!');
      return;
    }
  
    document.getElementById('displayEvent').innerText = eventName;
    document.getElementById('displayAddress').innerText = userAddress;
    document.getElementById('ticketSection').style.display = 'block';
  
    // Generate QR Code
    const qr = new QRious({
      element: document.getElementById('qrcode'),
      value: JSON.stringify({ eventName, userAddress }),
      size: 200
    });
  }
  