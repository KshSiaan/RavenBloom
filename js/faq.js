var faq = [{
  question: 'What is your delivery policy?',
  answer: 'Our delivery policy is to ensure that your flowers are delivered on time and in excellent condition. We offer free same-day delivery on all orders placed before 12:00pm. For orders placed after 12:00pm, we offer next-day delivery. We also offer delivery on weekends and holidays, but additional charges may apply.'
},
{
  question: 'Do you offer same-day delivery?',
  answer: 'Yes, we offer free same-day delivery on all orders placed before 12:00pm.'
},
{
  question: 'Can I customize my flower arrangement?',
  answer: 'Yes, we offer a variety of customization options for our flower arrangements. Please contact us for more information.'
},
{
  question: 'How do I care for my flowers once I receive them?',
  answer: 'We recommend keeping your flowers in a cool, dry place and changing the water every few days. Please refer to the care instructions that come with your flowers for more detailed information.'
},
{
  question: 'Can I place an order for a specific time of day for delivery?',
  answer: 'Unfortunately, we cannot guarantee specific delivery times. However, we offer same-day and next-day delivery options to help you receive your flowers as soon as possible.'
},
{
  question: 'What payment methods do you accept?',
  answer: 'We accept all major credit cards and PayPal.'
}
];


const contentBody = document.querySelector('.content-body')
contentBody.innerHTML = ""
for (let i = 0; i < faq.length; i++) {
contentBody.innerHTML += `
  <div class="question">
      <div class="question-head">
          <h3>${faq[i].question}</h3>

          <span>+</span>
      </div>

      <div class="ans">
          <p>${faq[i].answer}</p>
      </div>
  </div>
  `
}


const questions = document.querySelectorAll('.question');
for (let i = 0; i < questions.length; i++) {
//Selection
const question = questions[i];
const ans = question.querySelector('.ans');
const questionHead = question.querySelector('.question-head');
const questionToggle = questionHead.querySelector('span');
question.addEventListener('click', () => {
  ans.classList.toggle('active');
  question.classList.toggle('active');
  questionToggle.textContent = ans.classList.contains('active') ? '-' : '+';
});
}