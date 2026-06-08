document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('loginForm').addEventListener('submit', handleLogin);
});

async function handleLogin(event) {
    event.preventDefault();
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();
    if (!username || !password) {
        alert('请输入用户名和密码');
        return;
    }
    try {
        const res = await fetch('users.json');
        const users = await res.json();
        const user = users.find(u => u.username === username && u.password === password);
        if (user) {
            localStorage.setItem('scp_user', JSON.stringify(user));
            window.location.href = 'index.html';
        } else {
            alert('用户名或密码错误');
        }
    } catch (e) {
        alert('读取用户数据失败');
    }
}
