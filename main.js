const questions = document.querySelectorAll('.question');

questions.forEach(question => {
    question.addEventListener('click', () => {
        question.classList.toggle('active');
        const answer = question.querySelector('.answer');
        answer.classList.toggle('active');

        const icon = question.querySelector('.fa-light');
        icon.classList.toggle('fa-plus');
        icon.classList.toggle('fa-minus');
    });
});


document.addEventListener("DOMContentLoaded", function() {
    const scrollDownBtn = document.getElementById("scrollDownBtn");

    scrollDownBtn.addEventListener("click", function() {
        const scrollDistance = window.innerHeight * 1.4;

        window.scrollTo({
            top: scrollDistance,
            behavior: "smooth"
        });
    });
});

const hamburgerMenu = document.querySelector('.hamburgermenumobile');
const menuContent = document.querySelector('.menucontenthamburger');
const closeMenu = document.querySelector('.closehamburgermenu');

hamburgerMenu.addEventListener('click', function() {
    menuContent.classList.add('active');
    document.body.style.overflow = 'hidden';
});

closeMenu.addEventListener('click', function() {
    menuContent.classList.remove('active');
    menuContent.classList.add('closing');
    document.body.style.overflow = ''; 
});

menuContent.addEventListener('animationend', function() {
    if (menuContent.classList.contains('closing')) {
        menuContent.classList.remove('active', 'closing');
    }
});