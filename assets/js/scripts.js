document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault();
    window.location.href = 'login.html';
});

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    window.location.href = 'home.html';
});
