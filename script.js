const form = document.getElementById('question-form');
form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const questionInput = document.getElementById('question-input');
  const question = questionInput.value.toLowerCase();

  if (question.includes('hey')) {
    document.getElementById('answer').textContent = 'Yes';
    document.getElementById('answer-image').src = './image/yes-penguin.gif'; 
  } else {
    fetch('https://yesno.wtf/api')
      .then(response => response.json())
      .then(data => {
        const answer = data.answer;
        const answerText = answer.charAt(0).toUpperCase() + answer.slice(1);
        const answerImage = data.image;
        document.getElementById('answer').textContent = answerText;
        document.getElementById('answer-image').src = answerImage;
      })
      .catch(error => console.error(error));
  }

  questionInput.value = '';
}
