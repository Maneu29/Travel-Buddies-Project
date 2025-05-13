document.addEventListener('DOMContentLoaded', function () {
    const togglePasswordButtons = document.querySelectorAll('.toggle-password');

    togglePasswordButtons.forEach(button => {
        button.addEventListener('click', function () {
            const targetId = this.dataset.target;
            const passwordInput = document.getElementById(targetId);

            if (passwordInput.type === 'password') {
                passwordInput.type = 'text';
                this.classList.remove('fa-eye-slash');
                this.classList.add('fa-eye');
            } else {
                passwordInput.type = 'password';
                this.classList.remove('fa-eye');
                this.classList.add('fa-eye-slash');
            }
        });
    });

    document.getElementById('signupForm').addEventListener('submit', function (event) {
        event.preventDefault();

        const email = document.getElementById('email').value.trim();
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirmPassword').value;
        const rememberMe = document.getElementById('remember').checked;

        if (!email || !password || !confirmPassword) {
            Swal.fire({
                title: 'Error!',
                text: 'Please fill in all fields',
                icon: 'error',
                confirmButtonText: 'Okay'
            });
            return;
        }

        if (password !== confirmPassword) {
            Swal.fire({
                title: 'Error!',
                text: 'Passwords do not match',
                icon: 'error',
                confirmButtonText: 'Okay'
            });
            return;
        }

        if (password.length < 8) {
            Swal.fire({
                title: 'Error!',
                text: 'Password must be at least 8 characters long',
                icon: 'error',
                confirmButtonText: 'Okay'
            });
            return;
        }

        console.log('Signup data:', {
            email,
            password,
            rememberMe
        });

        Swal.fire({
            title: 'Account Created!',
            text: 'You can now log in using your credentials.',
            icon: 'success',
            confirmButtonText: 'Go to Login'
        }).then(() => {
            window.location.href = 'login.html';
        });

        this.reset();
    });
});
