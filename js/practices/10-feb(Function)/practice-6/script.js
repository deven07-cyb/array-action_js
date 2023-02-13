function calculateBMI() {
    var mass = document.getElementById("mass").value;
    var height = document.getElementById("height").value;
    var bmi = mass / (height * height);
    document.getElementById("result").innerHTML = "BMI: " + bmi.toFixed(2);
  }