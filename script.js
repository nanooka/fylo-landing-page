const email = document.getElementById("email-input");
const error = document.querySelector(".error");
const correct = document.querySelector(".correct");
const submitButton = document.getElementById("submit-button");

const email2 = document.getElementById("email-input-2");
const error2 = document.querySelector(".error-2");
const correct2 = document.querySelector(".correct-2");
const submitButton2 = document.getElementById("submit-button-2");

let mailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

function testMail(input) {
  if (mailRegex.test(input.value)) {
    console.log("this is true");
    error.classList.remove("visible");
    correct.classList.add("visible");
    email.classList.add("correct-color");
    email.classList.remove("error-color");
  } else if (!mailRegex.test(input.value)) {
    console.log("this is false");
    correct.classList.remove("visible");
    error.classList.add("visible");
    email.classList.add("error-color");
    email.classList.remove("correct-color");
  }
}

submitButton.addEventListener("click", (event) => {
  event.preventDefault();
  testMail(email);
  console.log("clicked");
});

email.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    document.getElementById("submit-button").click();
  }
});

// this is same function for second 'get started' button
function testMail2(input) {
  if (mailRegex.test(input.value)) {
    console.log("this is true");
    error2.classList.remove("visible");
    correct2.classList.add("visible");
    email2.classList.remove("error-color");
  } else if (!mailRegex.test(input.value)) {
    console.log("this is false");
    correct2.classList.remove("visible");
    error2.classList.add("visible");
    email2.classList.add("error-color");
  }
}

submitButton2.addEventListener("click", (event) => {
  event.preventDefault();
  testMail2(email2);
  console.log("clicked");
  submitButton2.classList.add("button-2-click");
});

email2.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    document.getElementById("submit-button-2").click();
  }
});
