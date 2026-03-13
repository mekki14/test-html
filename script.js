document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');

    if (loginForm) {
        loginForm.addEventListener('submit', async (e) => {
            e.preventDefault();

            const email = loginForm.email.value;
            const password = loginForm.password.value;
            let isValid = true;

            // Simple validation
            if (!email.includes('@')) {
                document.getElementById('emailError').style.display = 'block';
                isValid = false;
            } else {
                document.getElementById('emailError').style.display = 'none';
            }

            if (password.length < 6) {
                document.getElementById('passwordError').style.display = 'block';
                isValid = false;
            } else {
                document.getElementById('passwordError').style.display = 'none';
            }

            if (isValid) {
                simulateSubmit(loginForm, 'جاري تسجيل الدخول...', 'تسجيل الدخول');
            }
        });
    }

    if (registerForm) {
        registerForm.addEventListener('submit', async (e) => {
            e.preventDefault();

            const name = registerForm.name.value;
            const email = registerForm.email.value;
            const password = registerForm.password.value;
            const confirmPassword = registerForm.confirmPassword.value;
            let isValid = true;

            if (name.length < 2) {
                document.getElementById('nameError').style.display = 'block';
                isValid = false;
            } else {
                document.getElementById('nameError').style.display = 'none';
            }

            if (!email.includes('@')) {
                document.getElementById('emailError').style.display = 'block';
                isValid = false;
            } else {
                document.getElementById('emailError').style.display = 'none';
            }

            if (password.length < 6) {
                document.getElementById('passwordError').style.display = 'block';
                isValid = false;
            } else {
                document.getElementById('passwordError').style.display = 'none';
            }

            if (password !== confirmPassword) {
                document.getElementById('confirmPasswordError').style.display = 'block';
                isValid = false;
            } else {
                document.getElementById('confirmPasswordError').style.display = 'none';
            }

            if (isValid) {
                simulateSubmit(registerForm, 'جاري إنشاء الحساب...', 'إنشاء حساب');
            }
        });
    }

    function simulateSubmit(form, loadingText, originalText) {
        const btn = form.querySelector('#submitBtn');
        const spinner = form.querySelector('#spinner');
        const btnText = form.querySelector('#btnText');

        btn.disabled = true;
        spinner.style.display = 'inline-block';
        btnText.textContent = loadingText;

        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());

        setTimeout(() => {
            console.log('Form Submit Data:', data);
            btn.disabled = false;
            spinner.style.display = 'none';
            btnText.textContent = originalText;
            alert('تم العملية بنجاح! تفقد الكونسول لمشاهدة البيانات.');
        }, 2000);
    }
});
