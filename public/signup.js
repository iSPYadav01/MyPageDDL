// Handle sign-up form submission
document.getElementById('signup-form').addEventListener('submit', async (e) => {
  e.preventDefault();

  const formData = new FormData(e.target);
  const userData = {
    name: formData.get('name'),
    username: formData.get('username'),
    // Add more user data fields here
  };

  try {
    const response = await fetch('/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });

    if (response.ok) {
      // Redirect to a success page or display a success message
      window.location.href = '/success.html';
    } else {
      // Handle sign-up error (e.g., duplicate username)
      console.error('Sign-up failed');
    }
  } catch (error) {
    console.error(error);
  }
});
