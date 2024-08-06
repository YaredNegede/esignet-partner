// Assuming you've received an access token and user information in the URL parameters
const urlParams = new URLSearchParams(window.location.search);
const accessToken = urlParams.get('access_token');
const userInfoEndpoint = 'https://your-openid-provider/userinfo'; // Replace with your userinfo endpoint

fetch(userInfoEndpoint, {
    headers: {
        'Authorization': `Bearer ${accessToken}`
    }
})
.then(response => response.json())
.then(userData => {
    const userDetailsElement = document.getElementById('user-details');
    userDetailsElement.textContent = JSON.stringify(userData, null, 2);
})
.catch(error => {
    console.error('Error fetching user data:', error);
});
