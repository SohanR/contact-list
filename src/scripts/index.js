import * as axios from "axios";

const base_url = "http://localhost:3000/contacts";

window.onload = function () {
  let tbody = this.document.querySelector("#tbody");

  //get data from server

  axios
    .get(base_url)
    .then((res) => {
      res.data.forEach((contacts) => {
        createTDElement(contacts, tbody);
      });
    })
    .catch();

  // add data

  let saveContactBtb = this.document.querySelector("#saveContact");

  saveContactBtb.addEventListener("click", () => {
    createNewContact();
  });
};

//create tr element

function createTDElement(contacts, parentElement) {
  const TR = document.createElement("tr");

  const TdName = document.createElement("td");
  TdName.innerHTML = contacts.name;
  TR.appendChild(TdName);

  const TdPhone = document.createElement("td");
  TdPhone.innerHTML = contacts.phone ? contacts.phone : "N/A";
  TR.appendChild(TdPhone);

  const TdEmail = document.createElement("td");
  TdEmail.innerHTML = contacts.email ? contacts.email : "N/A";
  TR.appendChild(TdEmail);

  const TdActions = document.createElement("td");

  const tdEditbtn = document.createElement("button");
  tdEditbtn.className = "btn btn-warning";
  tdEditbtn.innerHTML = "Edit";
  tdEditbtn.addEventListener("click", () => {
    console.log("i am Edit btn");
  });
  TdActions.appendChild(tdEditbtn);

  const tdDeletebtn = document.createElement("button");
  tdDeletebtn.className = "btn btn-danger  mx-1";
  tdDeletebtn.innerHTML = "Delete";
  tdDeletebtn.addEventListener("click", () => {
    console.log("i am Delete");
  });
  TdActions.appendChild(tdDeletebtn);

  TR.appendChild(TdActions);

  parentElement.appendChild(TR);
}

//create new contact function

function createNewContact() {
  let nameField = document.querySelector("#nameField");
  let numberField = document.querySelector("#numberField");
  let emailField = document.querySelector("#emailField");

  axios
    .post(base_url, {
      name: nameField.value,
      phone: numberField.value,
      email: emailField.value,
    })
    .then((res) => {
      let tbody = document.querySelector("#tbody");

      createTDElement(res.data, tbody);

      nameField.value = "";
      numberField.value = "";
      emailField.value = "";
    })
    .catch();
}
