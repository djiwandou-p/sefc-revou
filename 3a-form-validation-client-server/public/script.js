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
  
document.addEventListener('DOMContentLoaded', function() {
  const passwordInput = document.getElementById('password');
  const strengthDiv = document.getElementById('password-strength');
  const form = document.getElementById('registerForm');

  function getPasswordStrength(password) {
    let score = 0;
    if (password.length >= 8) score++;
    if (/[a-z]/.test(password)) score++;
    if (/[A-Z]/.test(password)) score++;
    if (/[0-9]/.test(password)) score++;
    if (/[^A-Za-z0-9]/.test(password)) score++;
    return score;
  }

  function getStrengthLabel(score) {
    switch (score) {
      case 0:
      case 1:
        return { label: 'Very Weak', class: 'password-very-weak' };
      case 2:
        return { label: 'Weak', class: 'password-weak' };
      case 3:
        return { label: 'Fair', class: 'password-fair' };
      case 4:
        return { label: 'Good', class: 'password-good' };
      case 5:
        return { label: 'Strong', class: 'password-strong' };
      default:
        return { label: '', class: '' };
    }
  }

  passwordInput.addEventListener('input', function() {
    const password = passwordInput.value;
    const score = getPasswordStrength(password);
    const { label, class: className } = getStrengthLabel(score);
    strengthDiv.textContent = label;
    strengthDiv.className = '';
    if (className) strengthDiv.classList.add(className);
  });

  form.addEventListener('submit', function(e) {
    const password = passwordInput.value;
    const score = getPasswordStrength(password);
    if (score < 5) {
      e.preventDefault();
      strengthDiv.textContent = 'Password must be at least 8 characters, contain lowercase, uppercase, number, and special character.';
      strengthDiv.className = 'password-very-weak';
      passwordInput.focus();
    }
  });
});
  