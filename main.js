

function sumitFormAction() {
  const firstName = document.getElementById("fName").value
  const lastName = document.getElementById("lastName").value
  const email = document.getElementById("email").value
  const password = document.getElementById("password").value
  const confirmPassword = document.getElementById("confirmPassword").value

  if (firstName?.length <= 0) {
    document.getElementById("fName").classList.add("is-invalid")
    return
  } else if (firstName.length <= 2 || firstName.length > 20) {
    document.getElementById("firstNameError").innerHTML =
      "Firstname length must be between 2 and 20 chars"
    return
  } else if (!isNaN(firstName)) {
    document.getElementById("firstNameError").innerHTML = "only characters are allowed"
    return
  } else if (lastName?.length <= 0) {
    document.getElementById("lastName").classList.add("is-invalid")
    return
  } else if (lastName.length <= 2 || lastName.length > 20) {
    document.getElementById("lastNameError").innerHTML =
      "Lastname length must be between 2 and 20 chars"
    return
  } else if (!isNaN(lastName)) {
    document.getElementById("lastNameError").innerHTML = "only characters are allowed"
    return
  } else if (email?.length <= 0) {
    document.getElementById("email").classList.add("is-invalid")
    return
  } else if (email.indexOf("@") <= 0) {
    document.getElementById("emailError").innerHTML = " @ invalid positon"
    return
  } else if (email.charAt(email.length - 4) != "." && email.charAt(email.length - 3) != ".") {
    document.getElementById("emailError").innerHTML = " . invalid positon"
    return
  } else if (password?.length <= 0) {
    document.getElementById("password").classList.add("is-invalid")
    document.getElementById("passwordError").innerHTML = "Please enter password"
    return
  } else if (password.length <= 8 || password.length > 20) {
    document.getElementById("passwordError").innerHTML =
      "Password length must be betwen 8 to 20 words"
    return
  } else if (password != confirmPassword) {
    document.getElementById("confirmPassword").classList.add("is-invalid")
    document.getElementById("confirmPasswordError").innerHTML = "Passwords are not matching"
    return
  } else {
    document.getElementById("password").classList.remove("is-invalid") // Remove error (red color) class
    document.getElementById("password").classList.add("is-valid") // Add  class (Green color)
  }
}

function signUpFormOnBlurAction(id) {
  const value = document.getElementById(id).value
  if (value?.length > 0) {
    document.getElementById(id).classList.remove("is-invalid") // Remove error (red color) class
    document.getElementById(id).classList.add("is-valid") // Add  class (Green color)
  }
}
