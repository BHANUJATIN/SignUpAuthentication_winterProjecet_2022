
const loginPage = document.querySelector('.login-section');
const signUpPage = document.querySelector('.signUp-section');
const loginBanner = document.getElementById("login-Banner");
const signUpBanner = document.getElementById("signUp-Banner");
const btns = document.querySelectorAll('.toggle');


btns.forEach(btn => btn.addEventListener('click', () => {
    if(btn.dataset.name == 'signUp'  ) {
        loginPage.style.display = 'none';
        signUpPage.style.display = 'flex';
        loginBanner.style.display = 'none';
        signUpBanner.style.display = 'flex'; }

    if(btn.dataset.name == 'login') {
        loginPage.style.display = 'flex';
        signUpPage.style.display = 'none';
        loginBanner.style.display = 'flex';
        signUpBanner.style.display = 'none'; }

} ))
