function loadUsers() {
    let users = localStorage.getItem('users');
    if (!users) {
        users = [
            {},
            {}
        ];
        localStorage.setItem('users', JSON.stringify(users));
    } else {
        users = JSON.parse(users);
    }
    return users;
}



function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username && password) {
        const users = loadUsers();

        const user = users.find(u => u.username === username && u.password === password);

        if (user) {
            window.location.href = "main_1.html";
        } else {
            alert('Invalid username or password');
        }
    } else {
        alert('Please enter both username and password.');
    }
}

function register() {
    const newUsername = document.getElementById('new-username').value;
    const newPassword = document.getElementById('new-password').value;

    if (newUsername && newPassword) {
        const users = loadUsers();

        const userExists = users.some(u => u.username === newUsername);

        if (userExists) {
            alert('Username already exists. Please choose a different one.');
        } else {
            users.push({ username: newUsername, password: newPassword });

            localStorage.setItem('users', JSON.stringify(users));

            alert('Registration successful! You can now log in.');
            showLoginForm();
        }
    } else {
        alert('Please fill in both fields.');
    }
}

function showLoginForm() {
    document.getElementById('login-form').style.display = 'block';
    document.getElementById('register-form').style.display = 'none';
}

function showRegisterForm() {
    document.getElementById('login-form').style.display = 'none';
    document.getElementById('register-form').style.display = 'block';
}
