function nameSplitter(){
    var fullName = document.getElementById('fullName').value.trim();
    var nameParts = fullName.split(/\s+/); // Split by spaces
    console.log(nameParts);
   
    var firstName = nameParts[0] || "NA";
    var lastName = nameParts.length > 1 ? nameParts[nameParts.length - 1] : "NA"; // Last name is the last word


  // Display the names in the labels
  document.getElementById('firstName').value =   firstName;
  document.getElementById('lastName').value =   lastName;
}