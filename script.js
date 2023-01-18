function setInitialValue() {
  document.getElementById("marks-inp").value = 0;
}

function calculateGrade() {
  const marks = parseInt(document.getElementById("marks-inp").value);
  if (marks > 100 || marks < 0) {
    alert("Invalid number..");
  } else if (marks >= 80 && marks <= 100) {
    document.getElementById("grade").innerText = "A+";
  } else if (marks >= 70 && marks <= 79) {
    document.getElementById("grade").innerText = "A";
  } else if (marks >= 60 && marks <= 69) {
    document.getElementById("grade").innerText = "A-";
  } else if (marks >= 50 && marks <= 59) {
    document.getElementById("grade").innerText = "B";
  } else if (marks >= 33 && marks <= 49) {
    document.getElementById("grade").innerText = "C";
  } else {
    document.getElementById("grade").innerText = "F";
  }
}

setInitialValue();
