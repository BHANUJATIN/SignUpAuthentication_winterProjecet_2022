// const targetDiv = document.getElementById("third");
// const btn = document.getElementById("toggle");
// btn.onclick = function () {
//   if (targetDiv.style.display !== "none") {
//     targetDiv.style.display = "none";
//   } else {
//     targetDiv.style.display = "block";
//   }
// };

const loginPage = document.querySelector('.login-section');
const signUpPage = document.querySelector('.signUp-section');
const btns = document.querySelectorAll('.toggle');
console.log(btns);
btns.forEach(btn => btn.addEventListener('click', () => {
    if(btn.dataset.name == 'signUp'  ) 
        {loginPage.style.display = 'none';
        signUpPage.style.display = 'block';}
    if(btn.dataset.name == 'login')
        {loginPage.style.display = 'block';
        signUpPage.style.display = 'none';}

} ))
