const form = document.getElementById('question-form');
const questionInput = document.getElementById('question-input');
const answer = document.getElementById('answer');
const answerImage = document.getElementById('answer-image');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const question = questionInput.value;
  fetch(`https://yesno.wtf/api?${question}`)
    .then(response => response.json())
    .then(data => {
      answer.textContent = data.answer;
      answerImage.src = data.image;
    })
    .catch(error => console.error(error));
});
