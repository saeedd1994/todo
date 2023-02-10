//create ol
/*
when I declare a var outside a function
it becomes global and we can use it inside function
*/
const container = document.createElement("ol");
document.querySelector(".items").appendChild(container);
// declare array for rows
let items = [];
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
  // generate a key for each record
  const Id = Math.random().toString(36).substr(2, 9);
  //generate obj for better understand records
  let itemObj = {
    id: Id,
    value: inputVal,
  };
  items.push(itemObj);
  localStorage.setItem("todo-Items", JSON.stringify(items));
  console.log(items);
  // create row for result
  const row = document.createElement("li");
  // create title inside row li
  const title = document.createElement("h3");
  title.innerHTML = inputVal;
  // create delete btn inside row li
  const deleteBtn = document.createElement("button");
  deleteBtn.classList.add("delete");
  // append title and delete to ol
  row.appendChild(title);
  row.appendChild(deleteBtn);
  container.appendChild(row);
  //remove item from dom
  deleteBtn.onclick = () => {
    if (confirm("Are you sure delete this item ? ")) {
      row.remove();
    }
  };
};
