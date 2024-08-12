function handleCallback() {
  const urlParams = new URLSearchParams(window.location.search);

  const code = urlParams.get('code');
  const state = urlParams.get('state'); // Optional, for CSRF protection
  const error = urlParams.get('error');

  if (error) {
    console.error('Error:', error);
    return;
  }

  const backendUrl = '/auth/callback';

  fetch(backendUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ code, state })
  })
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    console.log('Backend response:', data);
    window.location.href = '/';
  })
  .catch(error => {
    console.error('Error:', error);
  });
}
if (window.location.href.indexOf('code') !== -1) {
  handleCallback();
}
