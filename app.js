function printValues(first, second, third){
  console.log(first);
  console.log(second);
  console.log(third);
}

function getInputValues() {

        let nameVal = document.forms["studentForm"]["name"].value;
        let emailVal = document.forms["studentForm"]["email"].value;
        let levelVal = document.forms["studentForm"]["level"].value;

        if (nameVal == "" || emailVal == "" || levelVal == ""){
          alert("Please fill out all fields in form")
        }
        else{
          printValues(nameVal, emailVal, levelVal);
        }
}
// var studentObj = getInputValues();

// console.log(studentObj.name);
