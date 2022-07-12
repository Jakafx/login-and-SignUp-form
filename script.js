document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.getElementById("login");
  const signupForm = document.getElementById("signup");

  document
    .getElementById("linkCreateAccount")
    .addEventListener("click", (e) => {
      e.preventDefault();
      loginForm.classList.add("form-hidden");
      signupForm.classList.remove("form-hidden");
    });
  document.getElementById("linkLogin").addEventListener("click", (e) => {
    e.preventDefault();
    loginForm.classList.remove("form-hidden");
    signupForm.classList.add("form-hidden");
  });
  let selectDrop = document.getElementById("countries");
  fetch("https://restcountries.com/v2/all")
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      let output = "";
      data.forEach((country) => {
        output += `<option> ${country.name}</option>`;
      });
      selectDrop.innerHTML = output;
    })
    .catch((err) => {
      console.log(err);
    });
});

let username = document.getElementById("username");
let lastname = document.getElementById("lastname");
let firstName = document.getElementById("firstN");
let pwd = document.getElementById("pwd");

username.addEventListener("blur", () => {
  let regex = /^[a-zA-Z]([a-zA-Z]){1,10}$/;
  let firstName = username.value;
  if (!regex.test(firstName)) {
    username.style.color = "red";
    document.getElementById("usernameMsg").innerHTML =
      "Firstname must be 2-10 characters long and should not start with a number";
    return false;
  } else {
    document.getElementById("usernameMsg").innerHTML = "";
    username.style.color = "black";
  }
});

lastname.addEventListener("blur", () => {
  let regex = /^[a-zA-Z]([a-zA-Z]){1,10}$/;
  let lastNameVal = lastname.value;
  if (!regex.test(lastNameVal)) {
    lastname.style.color = "red";
    document.getElementById("lastnameMsgr").innerHTML =
      "Lastname must be 2-10 characters long and should not start with a number";
    return false;
  } else {
    document.getElementById("lastnameMsgr").innerHTML = "";
    lastname.style.color = "black";
  }
});
email.addEventListener("blur", () => {
  let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  let emailVal = email.value;
  if (!regex.test(emailVal)) {
    email.style.color = "red";
    document.getElementById("emailMsgr").innerHTML = "Incorrect E-mail address";
    return false;
  } else {
    document.getElementById("emailMsgr").innerHTML = "";
    email.style.color = "black";
  }
});

var objPeople = [
  {
    username: "john",
    password: "1234",
  },
  {
    username: "jenny",
    password: 1234,
  },
];

let SignUpWelcomeMsg = document.getElementById("SignUpWelcomeMsg");
let login = document.querySelector("#loginform-button");
let errorMessage = document.querySelector(".errorMessage");

login.addEventListener("click", (e) => {
  e.preventDefault();
  let firstN = document.getElementById("firstN").value;
  let password = document.getElementById("pwd").value;
  for (i = 0; i < objPeople.length; i++) {
    if (firstN == objPeople[i].username && password == objPeople[i].password) {
      document.querySelector(".successMessage").innerHTML =
        firstN + " welcome to our Organization!";
    }
  }
  firstName.value = " ";
  pwd.value = "";
});

let signUp = document.getElementById("signupform-button");
signUp.addEventListener("click", (e) => {
  e.preventDefault();
  let newuser = document.getElementById("username").value;
  let newpassword = document.getElementById("passwrd").value;
  let passwordMsg = document.getElementById("passwordMsg");

  let registereduser = {
    username: newuser,
    password: newpassword,
  };
  objPeople.push(registereduser);

  let confrmpassword = document.getElementById("cnfpwd").value;
  if (newpassword === confrmpassword) {
    document.getElementById("SignUpWelcomeMsg").innerHTML =
      "Thank you for signing up";
    passwordMsg.innerHTML = "";
    document.querySelectorAll("form").values = " ";
  } else {
    passwordMsg.innerHTML = "Type the correct password";
    passwordMsg.style.color = "red";
    objPeople.pop(registereduser);
  }
});
