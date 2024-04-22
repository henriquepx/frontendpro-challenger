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
