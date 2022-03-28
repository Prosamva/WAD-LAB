// Function to clear data in the form inputs
function resetForm() {
  var form = document["reg-form"];
  var isConfirmed = confirm("Are you sure to reset defaults?");
  if (!isConfirmed) return;
  form.name.value = "";
  form.age.value = "";
  form.email.value = "";
  form.phone.value = "";
  form.address.value = "";
  form.password.value = "";
  form.gender[0].checked = false;
  form.gender[1].checked = false;
  form.cb1.checked = false;
  form.cb2.checked = false;
  form.cb3.checked = false;
  form.cb4.checked = false;
  form.cb5.checked = false;
  form.cb6.checked = false;
  form.name.focus();
}

// Function to validate the input fields
function check() {
  var form = document["reg-form"];
  if (form.name.value == "" || !form.name.value.match(/^[A-Za-z\s]+$/)) {
    alert("Name can only contain alphabet letters and spaces!");
    form.name.value = "";
    form.name.focus();
  } else if (form.email.value == "" || !form.email.value.match(/(.+)@(.+)$/)) {
    alert("Enter proper email address!");
    form.email.value = "";
    form.email.focus();
  } else if (form.password.value.length < 8) {
    alert("Password has to be atleast 8 characters!");
    form.password.value = "";
    form.password.focus();
  } else if (
    !(form.phone.value.length == 10 && form.phone.value.match(/^[0-9]+$/))
  ) {
    alert("Please enter 10-digit phone number!");
    form.phone.value = "";
    form.phone.focus();
  } else if (form.address.value == "") {
    alert("Enter address!");
    form.address.focus();
  } else if (
    form.gender[0].checked == false &&
    form.gender[1].checked == false
  ) {
    alert("Please choose gender!");
    form.gender.focus();
  } else if (
    form.cb1.checked == false &&
    form.cb2.checked == false &&
    form.cb3.checked == false &&
    form.cb4.checked == false &&
    form.cb5.checked == false &&
    form.cb6.checked == false
  ) {
    alert("Please choose your skills!");
    form.cb1.focus();
  } else {
    var isConfirmed = confirm(
      "Valid input given, do you want to proceed to submit?"
    );
    if (isConfirmed) form["submit-button"].style.visibility = "visible";
  }
}
