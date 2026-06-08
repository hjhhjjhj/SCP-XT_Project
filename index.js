function updateAuthUI() {
    const data = localStorage.getItem('scp_user');
    const nav = document.querySelector('nav');
    const loginLink = nav.querySelector('a[href="Login.html"]');
    if (data) {
        const user = JSON.parse(data);
        loginLink.textContent = '登出';
        loginLink.href = '#';
        loginLink.onclick = function(e) {
            e.preventDefault();
            localStorage.removeItem('scp_user');
            location.reload();
        };
        const info = document.createElement('span');
        info.style.cssText = 'margin-left:auto;font-size:0.8rem;font-weight:600;color:#8b0000;font-family:"Courier New",monospace;';
        info.textContent = user.username + ' | 权限等级 ' + user.permission_level;
        document.querySelector('#top_title header').appendChild(info);
    }
}
document.addEventListener('DOMContentLoaded', updateAuthUI);
