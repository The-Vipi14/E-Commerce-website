function subscribeNewsletter(event) {
  event.preventDefault();
  const emailInput = document.getElementById('newsletter-email');
  const message = document.getElementById('newsletter-message');

  if (!emailInput.value.includes('@') || !emailInput.value.includes('.')) {
    message.textContent = 'Please enter a valid email address.';
    message.style.color = 'red';
    return;
  }

  message.textContent = 'Thank you for subscribing!';
  message.style.color = 'green';
  emailInput.value = '';
}
