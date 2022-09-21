// used for selecting row that is beinf edited
var selectedRow = null;

function onSubmit(){
  // resets form to initial state after every successfull submission/edit
  resetForm();
  var student = {};
  student = getInputValues();
  // only edits or adds rows if inputs are valid
  if (checkInputs(student)== true){
    // form information will populate new row in table if selectedRow is null
    if (selectedRow == null){
      addStudent(student);
    }
    else{
      // otherwise, form information will populate selected row
      updateRow(student);
      // changes selectedRow back to null after updating the table
      selectedRow = null;
    }
  }
}

function resetForm(){
  // removes placeholder and background color upon reset
  document.forms["studentForm"]["name"].removeAttribute("placeholder");
  document.forms["studentForm"]["email"].removeAttribute("placeholder");
  // changes border back to initial colors scheme after adding student into table
  document.getElementsByClassName("input-field")[0].style.borderColor = "#ccc";
  document.getElementsByClassName("input-field")[1].style.borderColor = "#ccc";
  document.getElementsByClassName("input-field")[2].style.borderColor = "#ccc";
}

// Returns form data as a student object
function getInputValues() {
  var studentObj = {};

  let nameVal = document.forms["studentForm"]["name"].value;
  let emailVal = document.forms["studentForm"]["email"].value;
  let levelVal = document.forms["studentForm"]["level"].value;

  studentObj["name"] = nameVal;
  studentObj["email"] = emailVal;
  studentObj["level"] = levelVal;

  return studentObj;
}

// checks input fields for name, email, and level
function checkInputs(student){
  var noName,noEmail,noLevel;
  if (student.name == ""){
    //shows a placeholder message that tells the using to fill out input field
    document.forms["studentForm"]["name"].placeholder = "Please enter student's name!";
    // changes border color to red when input field value is invalid
    document.getElementsByClassName("input-field")[0].style.borderColor = "red";
    noName = false;
  }
  if (student.email == ""){
    document.forms["studentForm"]["email"].placeholder = "Please enter student's email!";
    document.getElementsByClassName("input-field")[1].style.borderColor = "red";
    noEmail = false;
  }
  if (student.level == ""){
    document.forms["studentForm"]["level"].placeholder = "Please enter student's level!";
    document.getElementsByClassName("input-field")[2].style.borderColor = "red";
    noLevel = false;
  }
  //if any of the fields were missing, return false and show an alert
  if (noName == false || noEmail == false || noLevel == false){
    alert("Please fill out all fields in the form!")
    return false;
  }
  return true;
}

// adds new stduent's information to table
function addStudent(studentObj) {
  var table = document.getElementById("studentTable");
  var row = table.insertRow(table.length);
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  var cell3 = row.insertCell(2);
  var cell4 = row.insertCell(3);

  // populates table with values of studentObj by changing the HTML content of the cells
  cell1.innerHTML = studentObj.name;
  cell2.innerHTML = studentObj.email;
  cell3.innerHTML = studentObj.level;
  // adds edit and delete buttons in the last cell in each row
  cell4.innerHTML = "<button onClick='editRow(this)';>Edit</button><button onClick='removeRow(this)';>Delete</button>";

}

// sets input boxes in form to the row that is being edited
function editRow(r){
  //changes value of selectedRow to the row thats being edited
  selectedRow = r.parentNode.parentNode;
  document.forms["studentForm"]["name"].value = selectedRow.cells[0].innerHTML;
  document.forms["studentForm"]["email"].value = selectedRow.cells[1].innerHTML;
  document.forms["studentForm"]["level"].value = selectedRow.cells[2].innerHTML;
}

//updates selected row with new information
function updateRow(student){
  selectedRow.cells[0].innerHTML = student.name;
  selectedRow.cells[1].innerHTML = student.email;
  selectedRow.cells[2].innerHTML = student.level;
}


function removeRow(r) {
  //initialize index value of current row
  var i = r.parentNode.parentNode.rowIndex;
  //deletes row by index i
  document.getElementById("studentTable").deleteRow(i);
}
