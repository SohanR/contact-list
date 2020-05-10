import axios from "axios";

const base_url = "http://localhost:3000/contacts";

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
  tdDeletebtn.className = "btn btn-danger";
  tdDeletebtn.innerHTML = "Delete";
  tdDeletebtn.addEventListener("click", () => {
    console.log("i am Delete");
  });
  TdActions.appendChild(tdDeletebtn);

  TR.appendChild(TdActions);

  parentElement.appendChild(TR);
}
