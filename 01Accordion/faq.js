const faqData = [
  {
    id: 1,
    question: "Who are we?",
    answer:
      "We enable upscaling careers through flexible, interactive and collaborative learning. We believe in building learning communities by bringing together mentors, young minds, and creators.",
  },
  {
    id: 2,
    question: "What do we do?",
    answer:
      "Building learning communities with Our Affordable & Competent Courses",
  },
  {
    id: 3,
    question: "Are the community classes boring?",
    answer: "No, not at all!!!",
  },
];

const accordianBody = document.querySelector(".accordian_body");
const faqs = [];

// Toggling the contents between showing and hiding
function showFaq(a) {
  let contents = document.querySelectorAll(".faq p");

  if (contents[a].style.display !== 'block') {
    contents[a].style.display = 'block';
   } else {
    contents[a].style.display = 'none';
  }
}

function createFaq() {

  // Creating all elements
  let main = document.createElement('div');
  let header = document.createElement('div');
  let question = document.createElement('h3');
  let button = document.createElement('div');
  let answer = document.createElement('p');

  // Setting attributes
  main.setAttribute("class", "faq");
  header.setAttribute("class", "faq_header");
  answer.setAttribute("class", "hidden");

  // Styling Button
  button.setAttribute("class", "show_btn");
  button.innerText = "+";
  button.style.textAlign = "center";
  button.style.fontSize = "larger";

  let allElements = { main, header, question, button, answer };
  return allElements;


}

// Appending the created elements to the DOM
faqData.forEach(q => {
  
  let division = createFaq();

  division.question.innerText = q.question;
  division.answer.innerText = q.answer;
  
  accordianBody.append(division.main);
  division.main.append(division.header);
  division.header.append(division.question);
  division.header.append(division.button);
  division.main.append(division.answer);
  
})


function btnStatusUpdate() {
}

  
let buttons = document.querySelectorAll('.show_btn');
buttons.forEach((e, i) => {
  e.addEventListener('click', () => {showFaq(i)})
});

