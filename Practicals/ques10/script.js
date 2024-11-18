function validateForm(){
    // Reset error messages
    document.getElementById('errorMessages').innerText = "";

    var studentName = document.getElementById('studentName').value.trim();
    var studentEmail = document.getElementById('studemtEmail').value.trim();
    var studentRollNo = document.getElementById("studentRollNo").value.trim();
    var studentAge = document.getElementById("studentAge").value.trim();
    var studentGrade = document.getElementById("studentGrade").value;
    var studentGender = document.getElementById("studentGender").value;

    var errors = [];

    if(!studentName){
        errors.push("Full Name is required.");
    }

    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!studentEmail || !emailPattern.test(studentEmail)) {
        errors.push("Valid Email Address is required.");
    }

    // Check if roll number is provided
    if (!studentRollNo || isNaN(studentRollNo)) {
        errors.push("Roll Number must be a numeric value.");
    }

    // Check if age is provided and valid
    if (!studentAge || isNaN(studentAge) || studentAge < 18) {
        errors.push("Age must be a numeric value greater than or equal to 18.");
    }
    // Check if grade is selected
    if (!studentGrade) {
        errors.push("Grade is required.");
    }

    // Check if gender is selected
    if (!studentGender) {
        errors.push("Gender is required.");
    }
    if (errors.length > 0) {
        document.getElementById("errorMessages").innerHTML = errors.join("<br>");
        return false;  // Prevent form submission
    }

    return true;  // Submit form if no errors
}