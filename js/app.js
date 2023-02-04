//create ol
const container = document.createElement("ol");
document.querySelector(".items").appendChild(container);
//prevent default
const form = document.querySelector("form");
form.onsubmit = (event) => {
  event.preventDefault();
  //get input value and check it
  const inputVal = document.querySelector("input").value;
  if (inputVal.trim() === "") {
    alert("value cannot be empty !...");
    return;
  }
};
