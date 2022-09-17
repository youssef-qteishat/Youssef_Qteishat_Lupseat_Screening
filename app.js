function onSubmit(){
  var student = {};
  student = getInputValues()
  addStudent(student);
}


function getInputValues() {
  var studentObj = {};
  let nameVal = document.forms["studentForm"]["name"].value;
  let emailVal = document.forms["studentForm"]["email"].value;
  let levelVal = document.forms["studentForm"]["level"].value;

  if (nameVal == "" || emailVal == "" || levelVal == ""){
    alert("Please fill out all fields in form")
  }
  else{
    studentObj["name"] = nameVal;
    studentObj["email"] = emailVal;
    studentObj["level"] = levelVal;

    return studentObj;
  }
}

function addStudent(studentObj) {
  var table = document.getElementById("studentTable");
  var row = table.insertRow(table.length);
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  var cell3 = row.insertCell(2);
  var cell4 = row.insertCell(3);
  // var cell5 = row.insertCell(4);

  cell1.innerHTML = studentObj.name;
  cell2.innerHTML = studentObj.email;
  cell3.innerHTML = studentObj.level;
  cell4.innerHTML = "<button onClick='deleteRow(this)';>Delete</button>";
  // cell5.innerHTML = "<button onClick='editRow(this)';>Edit</button>";
}

function deleteRow(r) {
  var i = r.parentNode.parentNode.rowIndex;
  document.getElementById("studentTable").deleteRow(i);
}

function editRow(r){
  console.log("in edit button");
}
