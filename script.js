function calculateAge() {
    let dobInput = document.getElementById('dob');
    let resultElement = document.getElementById('result');

    // Get the entered date of birth
    let dob = new Date(dobInput.value);

    // Check if a valid date is entered
    if (isNaN(dob.getTime())) {
        resultElement.textContent = "Please enter a valid date of birth.";
        return;
    }

    // Get the current date
    let currentDate = new Date();

    // Calculate the age
    let age = currentDate.getFullYear() - dob.getFullYear();

    // Adjust the age if the birthday hasn't occurred yet this year
    if (currentDate.getMonth() < dob.getMonth() || (currentDate.getMonth() === dob.getMonth() && currentDate.getDate() < dob.getDate())) {
        age--;
    }

    // Display the result
    resultElement.textContent = "Your age is: " + age + " years.";
}