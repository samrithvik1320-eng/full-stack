const container = document.getElementById("question-container")
const questions = [
    {
      id: 1,
      question: "What is Artificial Intelligence?",
      a: "A technology that enables machines to simulate human intelligence",
      b: "A programming language",
      c: "A type of computer hardware",
      correctAnswer: "a"
    },
    {
      id: 2,
      question: "What are the main goals of AI?",
      a: "To create systems that can learn, reason, and make decisions",
      b: "To replace all human jobs",
      c: "To only store large amounts of data",
      correctAnswer: "a"
    },
    {
      id: 3,
      question: "What are the different types of AI?",
      a: "Narrow AI, General AI, Super AI",
      b: "Frontend AI, Backend AI, Fullstack AI",
      c: "Manual AI, Automatic AI, Semi AI",
      correctAnswer: "a"
    },
    {
      id: 4,
      question: "What is Machine Learning?",
      a: "A subset of AI that allows systems to learn from data",
      b: "A hardware component of AI systems",
      c: "A type of database",
      correctAnswer: "a"
    },
    {
      id: 5,
      question: "What is the difference between AI and Machine Learning?",
      a: "AI is the broader concept, ML is a part of AI",
      b: "Machine Learning is older than AI",
      c: "They are completely unrelated",
      correctAnswer: "a"
    },
    {
      id: 6,
      question: "What is Deep Learning?",
      a: "A type of machine learning using neural networks",
      b: "A way of deep internet searching",
      c: "A programming framework",
      correctAnswer: "a"
    },
    {
      id: 7,
      question: "What are some real-life applications of AI?",
      a: "Chatbots, self-driving cars, recommendation systems",
      b: "Only video games",
      c: "Typing documents",
      correctAnswer: "a"
    },
    {
      id: 8,
      question: "What is a chatbot?",
      a: "A program that can communicate with humans using text or voice",
      b: "A type of robot hardware",
      c: "A database system",
      correctAnswer: "a"
    },
    {
      id: 9,
      question: "What are the advantages and disadvantages of AI?",
      a: "Efficiency and automation vs job displacement and bias",
      b: "Low speed and high cost only",
      c: "No advantages at all",
      correctAnswer: "a"
    }
];

questions.forEach((item, index) => {
    const card = document.createElement(`div`)
    card.classList.add(`exam${item.id}`,"card")
    card.innerHTML = `
        <b>${item.id}. ${item.question}</b> <br>
        <input type="radio" id="option${item.id}1" name="question${item.id}" value="a"/>
        <label for="option${item.id}1">${item.a}</label><br />
        <input type="radio" id="option${item.id}2" name="question${item.id}" value="b"/>
        <label for="option${item.id}2">${item.b}</label><br />
        <input type="radio" id="option${item.id}3" name="question${item.id}" value="c"/>
        <label for="option${item.id}3">${item.c}</label>
    `
    container.appendChild(card)
})

const submitBtn = document.createElement('button')
submitBtn.type = "submit"
submitBtn.classList.add("submitBtn")
submitBtn.textContent = "Submit"

container.appendChild(submitBtn)

submitBtn.addEventListener("click", (e) => {
 e.preventDefault()
  let score = 0;

  questions.forEach((item) => {
    const selectedOption = document.querySelector(
      `input[name="question${item.id}"]:checked`
    );
    console.log(selectedOption.value)
    if (selectedOption) {
      if (selectedOption.value === item.correctAnswer) {
        score++;
        selectedOption.parentElement.style.border = "2px solid green";
      } else {
        selectedOption.parentElement.style.border = "2px solid red";
      }
    }
  });

  alert(`Your Score: ${score} / ${questions.length}`);
});


// const container = document.getElementById("question-container");

// fetch("https://quizapi.io/api/v1/ai?apiKey=dCaP3J4Yd5Fv9h7baxp5hTwUwQJGbxxxtzHIScGd")
//   .then(res => res.json())
//   .then(questions => {
//     container.innerHTML = "";
//     console.log(questions)

//     questions.forEach(item => {
//       const card = document.createElement("div");
//       card.classList.add("card");x

//       card.innerHTML = `
//         <b>${item.id}. ${item.question}</b><br>

//         <input type="radio" name="question${item.id}">
//         ${item.answers.answer_a}<br>

//         <input type="radio" name="question${item.id}">
//         ${item.answers.answer_b}<br>

//         <input type="radio" name="question${item.id}">
//         ${item.answers.answer_c}<br>

//         <input type="radio" name="question${item.id}">
//         ${item.answers.answer_c}<br>
//       `;

//       container.appendChild(card);
//     });
//   });
