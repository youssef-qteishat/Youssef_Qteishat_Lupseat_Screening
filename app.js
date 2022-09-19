var selectedRow = null;

function onSubmit(){
  var student = {};
  student = getInputValues();
  if (checkInputs(student)== true){
    if (selectedRow == null){
      addStudent(student);
    }
    else{
      updateRow(student);
      selectedRow = null;
    }
  }
}

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

function checkInputs(student){
  if (student.name == "" || student.email == "" || student.level == ""){
    alert("Please fill out all fields in the form!")
    return false;
  }
  return true;
}

function addStudent(studentObj) {
  var table = document.getElementById("studentTable");
  var row = table.insertRow(table.length);
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  var cell3 = row.insertCell(2);
  var cell4 = row.insertCell(3);

  cell1.innerHTML = studentObj.name;
  cell2.innerHTML = studentObj.email;
  cell3.innerHTML = studentObj.level;
  cell4.innerHTML = "<button onClick='editRow(this)';>Edit</button><button onClick='removeRow(this)';>Delete</button>";

}

function editRow(r){
  selectedRow = r.parentNode.parentNode;
  document.forms["studentForm"]["name"].value = selectedRow.cells[0].innerHTML;
  document.forms["studentForm"]["email"].value = selectedRow.cells[1].innerHTML;
  document.forms["studentForm"]["level"].value = selectedRow.cells[2].innerHTML;
}

function updateRow(student){
  selectedRow.cells[0].innerHTML = student.name;
  selectedRow.cells[1].innerHTML = student.email;
  selectedRow.cells[2].innerHTML = student.level;
}

function removeRow(r) {
  var i = r.parentNode.parentNode.rowIndex;
  document.getElementById("studentTable").deleteRow(i);
}
