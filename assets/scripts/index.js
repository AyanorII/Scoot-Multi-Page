// Nav button show/hide
const menuButton = document.getElementsByClassName('menu-btn');
const navLinks = document.querySelector('.nav__links');

for (let i = 0; i < menuButton.length; i++) {
    menuButton[i].addEventListener('click', () => {
        if (menuButton[i].classList.contains('open')) {
            navLinks.classList.add('show');
            menuButton[i].style.display="none";
            menuButton[1].style.display="initial";
        } else if (menuButton[i].classList.contains('close')) {
            navLinks.classList.remove('show');
            menuButton[i].style.display="none";
            menuButton[0].style.display="initial";
        }
    })
}

const navGetScootin = navLinks.querySelector('.btn');
navGetScootin.addEventListener('click', () => {
    navLinks.classList.remove('show');
    menuButton[1].style.display="none";
    menuButton[0].style.display="initial";
})



const faqQuestion = document.getElementsByClassName('faq__question');
const faqAnswer = document.getElementsByClassName('faq__answer');

for (let i = 0; i < faqQuestion.length; i++) {
    faqQuestion[i].addEventListener('click', () => {
        faqQuestion[i].classList.toggle('show');
        faqAnswer[i].classList.toggle('show');
    })
}