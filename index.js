// when question is clicked, add class upside-down to rotate the arrow 180deg, .selected to bold the question, and .show to show the question.

const question = document.querySelectorAll('.question')
question.forEach(el => {
    el.addEventListener('click', function (){
        el.classList.toggle('selected');
        el.classList.toggle('upside-down');
        el.classList.toggle('show');
    });
});
    

