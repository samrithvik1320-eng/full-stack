const questions = [
  {
    id: 1,
    question: "What is an Operating System?",
    a: "A type of hardware",
    b: "A program that manages computer resources",
    c: "A computer virus",
    d: "An input device",
    correctAnswer: "b",
  },
  {
    id: 2,
    question: "Which is the main function of an Operating System?",
    a: "Typing documents",
    b: "Managing hardware and software",
    c: "Browsing internet",
    d: "Playing games",
    correctAnswer: "b",
  },
  {
    id: 3,
    question: "Which of the following is an Operating System?",
    a: "MS Word",
    b: "Google Chrome",
    c: "Windows",
    d: "Photoshop",
    correctAnswer: "c",
  },
  {
    id: 4,
    question: "What does CPU scheduling do?",
    a: "Stores files",
    b: "Manages memory",
    c: "Decides which process uses CPU",
    d: "Controls input devices",
    correctAnswer: "c",
  },
  {
    id: 5,
    question: "What is a process?",
    a: "A program in execution",
    b: "A hardware device",
    c: "A file system",
    d: "An OS update",
    correctAnswer: "a",
  },
  {
    id: 6,
    question: "What is memory management?",
    a: "Managing internet",
    b: "Managing CPU speed",
    c: "Managing RAM usage",
    d: "Managing keyboard input",
    correctAnswer: "c",
  },
  {
    id: 7,
    question: "Which memory is volatile?",
    a: "Hard Disk",
    b: "SSD",
    c: "ROM",
    d: "RAM",
    correctAnswer: "d",
  },
  {
    id: 8,
    question: "What is multitasking?",
    a: "Running one program at a time",
    b: "Running multiple programs at the same time",
    c: "Shutting down system",
    d: "Installing OS",
    correctAnswer: "b",
  },
  {
    id: 9,
    question: "What is a kernel?",
    a: "User interface",
    b: "Core part of the Operating System",
    c: "Application software",
    d: "Device driver",
    correctAnswer: "b",
  },
  {
    id: 10,
    question: "Which OS is mostly used in servers?",
    a: "Linux",
    b: "Windows XP",
    c: "Android",
    d: "iOS",
    correctAnswer: "a",
  },
];

// ✅ Fix 1: correct id "question-container"
const container = document.getElementById("container");

/* Render questions */
questions.forEach((item) => {
  const card = document.createElement("div");
  card.classList.add("card");

  card.innerHTML = `
    <b>${item.id}. ${item.question}</b><br><br>
    <input type="radio" name="question${item.id}" value="a"> ${item.a}<br>
    <input type="radio" name="question${item.id}" value="b"> ${item.b}<br>
    <input type="radio" name="question${item.id}" value="c"> ${item.c}<br>
    <input type="radio" name="question${item.id}" value="d"> ${item.d}<br>
  `;

  container.appendChild(card);
});

/* Submit button */
const submitBtn = document.createElement("button");
submitBtn.textContent = "Submit";
submitBtn.type = "button"; // ✅ Fix 3: prevent form submit reload
container.appendChild(submitBtn);

/* Check answers */
submitBtn.addEventListener("click", () => {
  let score = 0;

  questions.forEach((q) => {
    const selectedOption = document.querySelector(
      `input[name="question${q.id}"]:checked`
    );

    if (selectedOption) {
      // ✅ Fix 2: q.correctAnswer instead of e.correctAnswer
      if (selectedOption.value === q.correctAnswer) {
        score++;
        selectedOption.parentElement.style.border = "2px solid green";
      } else {
        selectedOption.parentElement.style.border = "2px solid red";
      }
    }
  });

  alert(`Your score: ${score} / ${questions.length}`);
  window.location.reload()
});