const button1 = document.querySelector(".button1");
button1.addEventListener('click', runFunction1);

function runFunction1() {
    const name = prompt("Enter name");
    button1.textContent = `username: ${name}`;
}

const button2 = document.querySelector("#button2");
button2.addEventListener('click', runFunction2);

function runFunction2() {
    const email = prompt("Enter Email");
    button2.textContent = `user email: ${email}`;
}

const heading = document.querySelector("h1");
heading.addEventListener('mouseover', runH1);

function runH1() {
    if (heading.textContent === "Welcome") {
        heading.textContent = "Signup";
    } else {
        heading.textContent = "Welcome";
    }
}
