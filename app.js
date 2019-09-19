const showSignUp = ()=>{
    signUpForm.classList.add('show-sign-up');
    signUpForm.style.pointerEvents = 'all';
}
const hideSignUp = ()=>{
    signUpForm.classList.remove('show-sign-up');
    signUpForm.style.pointerEvents = 'none';

}


const signUpForm = document.querySelector('.sign-up');
const signInBtn = document.querySelector('#sign-in-btn');
const signUpBtn = document.querySelector('#sign-up-btn');

signUpBtn.addEventListener('click', showSignUp);
signInBtn.addEventListener('click', hideSignUp);