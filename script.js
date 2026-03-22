document.getElementById("btn").addEventListener("click", function() {

    let height = document.getElementById("height").value;
    let weight = document.getElementById("weight").value;

    if (height === "" || weight === "") {
        document.getElementById("result").innerHTML = "Please enter height and weight";
        return;
    }

    height = height / 100;

    let bmi = weight / (height * height);

    bmi = bmi.toFixed(2);

    let message = "";

    if (bmi < 18.5) {
        message = "Underweight";
    } else if (bmi >= 18.5 && bmi < 24.9) {
        message = "Normal weight";
    } else if (bmi >= 25 && bmi < 29.9) {
        message = "Overweight";
    } else {
        message = "Obese";
    }

    document.getElementById("result").innerHTML =
        "Your BMI is " + bmi + " (" + message + ")";
});