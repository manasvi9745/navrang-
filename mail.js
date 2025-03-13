const firebaseConfig = {
  apiKey: "AIzaSyDXE62ATxL5TwnexebhhswEdyN_hjSJBnY",
    authDomain: "contactform-f9127.firebaseapp.com",
    databaseURL: "https://contactform-f9127-default-rtdb.firebaseio.com",
    projectId: "contactform-f9127",
    storageBucket: "contactform-f9127.appspot.com",
    messagingSenderId: "477880144493",
    appId: "1:477880144493:web:b595db83519673c9bd2564",
    measurementId: "G-6LDJS9CJ8Z"
};


// initialize firebase
firebase.initializeApp(firebaseConfig);

// reference your database
var contactFormDB = firebase.database().ref("contactForm");

document.getElementById("contactForm").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  var name = getElementVal("name");
  var emailid = getElementVal("emailid");
  var msgContent = getElementVal("msgContent");

  saveMessages(name, emailid, msgContent);

  //   enable alert
  document.querySelector(".alert").style.display = "block";

  //   remove the alert
  setTimeout(() => {
    document.querySelector(".alert").style.display = "none";
  }, 3000);

  //   reset the form
  document.getElementById("contactForm").reset();
}

const saveMessages = (name, emailid, msgContent) => {
  var newContactForm = contactFormDB.push();

  newContactForm.set({
    name: name,
    emailid: emailid,
    msgContent: msgContent,
  });
};

const getElementVal = (id) => {
  return document.getElementById(id).value;
};
