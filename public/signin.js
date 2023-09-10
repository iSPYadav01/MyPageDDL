// Handle sign-in form submission
document.getElementById('signin-form').addEventListener('submit', async (e) => {
  e.preventDefault();

  const formData = new FormData(e.target);
  const userData = {
    username: formData.get('username'),
    password: formData.get('password'),
  };

  try {
    const response = await fetch('/signin', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });

    if (response.ok) {
      // Redirect to a dashboard or user profile page
      window.location.href = '/dashboard.html';
    } else {
      // Handle sign-in error (e.g., invalid credentials)
      console.error('Sign-in failed');
    }
  } catch (error) {
    console.error(error);
  }
});
