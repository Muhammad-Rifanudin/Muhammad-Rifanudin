// Add event listener to registration form
document.getElementById('registration-form').addEventListener('submit', (e) => {
    e.preventDefault();

    // Get form data
    const formData = new FormData(document.getElementById('registration-form'));

    // Send data to server
    fetch('process_registration.php', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            alert('Akun berhasil dibuat!');
            window.location.href = 'masuk_akun.html';
        } else {
            alert('Gagal membuat akun!');
        }
    })
    .catch(error => {
        console.error(error);
    });
});

// Add event listener to login form
document.getElementById('login-form').addEventListener('submit', (e) => {
    e.preventDefault();

    // Get form data
    const formData = new FormData(document.getElementById('login-form'));

    // Send data to server
    fetch('process_login.php', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            alert('Berhasil masuk!');
            window.location.href = 'profil.html';
        } else {
            alert('Gagal masuk!');
        }
    })
    .catch(error => {
        console.error(error);
    });
});