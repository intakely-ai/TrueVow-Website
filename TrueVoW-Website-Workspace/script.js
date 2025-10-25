// TrueVow client behavior: form handling and small UI helpers
console.log('TrueVow client script loaded');

document.addEventListener('DOMContentLoaded', () => {
  // Phone input auto-formatting (US-centric)
  const phone = document.getElementById('phone');
  if (phone) {
    phone.addEventListener('input', (e) => {
      const digits = e.target.value.replace(/\D/g, '').slice(0,10);
      const parts = [];
      if (digits.length > 0) parts.push(digits.slice(0,3));
      if (digits.length >= 4) parts.push(digits.slice(3,6));
      if (digits.length >= 7) parts.push(digits.slice(6,10));
      if (parts.length === 0) e.target.value = '';
      else if (parts.length === 1) e.target.value = '(' + parts[0] + (digits.length>3?') ':'');
      else if (parts.length === 2) e.target.value = '(' + parts[0] + ') ' + parts[1];
      else e.target.value = '(' + parts[0] + ') ' + parts[1] + '-' + parts[2];
    });
  }

  // Intake form submission
  const intakeForm = document.getElementById('intakeForm');
  if (intakeForm) {
    intakeForm.addEventListener('submit', async (ev) => {
      ev.preventDefault();
      const fm = new FormData(intakeForm);
      const formData = Object.fromEntries(fm.entries());

      // Basic validation: phone must have 10 digits
      const phoneDigits = (formData.phone || '').replace(/\D/g, '');
      if (phoneDigits.length !== 10) {
        alert('Please enter a valid 10-digit phone number.');
        return;
      }

      // For now, just log the intake and show success message.
      console.log('Intake submitted', formData);
      // TODO: Replace with a real POST to your intake backend endpoint.
      // Example:
      // await fetch('/api/intake', { method: 'POST', headers: {'Content-Type':'application/json'}, body: JSON.stringify(formData) });

      alert('Thanks! Your intake has been recorded. We will follow up shortly.');
      intakeForm.reset();
    });
  }
});
