// reference

let name = document.getElementById("name");
let date = document.getElementById("date");
let amount = document.getElementById("amount");
let add_item = document.getElementById("add_item");
let main_table = document.getElementById("main_table");

add_item.addEventListener("click", function () {
  let name_text = name.value;
  let date_text = date.value;
  let amount_text = amount.value;

  let column1;
  let column2;
  let column3;
  let column4;
  let button;

  if (name_text && date_text && amount_text) {
    row = document.createElement("tr");
    column1 = document.createElement("td");
    column2 = document.createElement("td");
    column3 = document.createElement("td");
    column4 = document.createElement("td");
    button = document.createElement("button");

    column1.innerText = name_text;
    column2.innerText = date_text;
    column3.innerText = amount_text;
    button.innerHTML = "Remove";
    column4.appendChild(button);

    row.appendChild(column1);
    row.appendChild(column2);
    row.appendChild(column3);
    row.appendChild(column4);

    main_table.appendChild(row);
  } else {
    alert("Plz fill all the details");
    return;
  }

  button.setAttribute("onclick", "deleteRow(this)"); // this will pass the object of the row which we will click i.e button in that row
  button.setAttribute("class", "delete");
});

function deleteRow(r) {
  alert("Are you sure you want to delete this row!");

  //   let parent = r.parentNode.parentNode.rowIndex;
  //   main_table.deleteRow(parent);

  // We can either of the way

  let tr = r.parentNode.parentNode; // this will select the parent of the delete button i.e "<tr></tr>"
  tr.parentNode.removeChild(tr); // this will remove the child of that tr i.e the "<td></td>"
}
