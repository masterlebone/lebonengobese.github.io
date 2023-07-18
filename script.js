document.getElementById('btn-1').addEventListener('click', calculateLove);

function calculateLove() {
  var firstName = document.getElementById('firstName').value;
  var lastName = document.getElementById('lastName').value;

  if (firstName == ""||lastName == "") {
    alert("Please fill in all the fields.");
    return;
  }

  if (isValidInput(firstName) || isValidInput(lastName)) {
    alert("Please enter valid names with letters only, without numbers or special characters.");
    return;
  }

  var randomPercentage = Math.floor(Math.random() * 100) + 1;

  var resultInput = document.getElementById('result');
  resultInput.value = randomPercentage + "%  ";
}

function isValidInput(input) {
  // Use a regular expression to check if the input contains only letters
  var regex = /^[a-zA-Z]+$/;
  return regex.test(input);
}
