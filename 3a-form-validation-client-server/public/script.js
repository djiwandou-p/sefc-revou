document.getElementById('registerForm').addEventListener('submit', function(e) {
    const username = document.getElementById('username').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value;
    let errorMsg = '';
  
    // Client-side validation
    if (!username) {
      errorMsg += 'Username is required.<br>';
    }
    if (!/^[^@]+@[^@]+\.[^@]+$/.test(email)) {
      errorMsg += 'Invalid email format.<br>';
    }
    if (password.length < 6) {
      errorMsg += 'Password must be at least 6 characters.<br>';
    }
  
    if (errorMsg) {
      document.getElementById('error').innerHTML = errorMsg;
      e.preventDefault();
    }
  });
  