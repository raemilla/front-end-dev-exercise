$(document).ready(function() {

  function invalidError(array) {
    var string = "";
    for (i = 0; i < array.length; i++) {
      if (array[i] === "firstname") {
        string += "first name, ";
      } else if (array[i] === "lastname") {
        string += "last name, ";
      } else if (i === (array.length - 1)){
        string += array[i] + ".";
      } else {
        string += array[i] + ", ";
      }
    }
    return string;
  }

  function emailValidation(email) {
    var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    var validEmail = re.test(email);
    return validEmail
  }

  function validation(input) {
    var data = $(input).val();

    if ( $(input).hasClass('email') ) {
      if ( emailValidation(data) ) {
        $(input).css("border-color", "green");
      } else {
        $(input).css("border-color", "red");
        $(input).after("<p class='invalid' style='color:red;font-size:10px;'>Must be a valid email.</p>");
      }
    } else {
      if (data === "") {
        $(input).css("border-color","red");
        $(input).after("<p class='invalid' style='color:red;font-size:10px;'>Must not be blank.</p>");
      } else {
        $(input).css("border-color", "green");
      }
    }
  }

  $('form').on('focusout','input', function(){
    validation(this);
  });

  $('form').on('focusin', 'input', function(){
    $(this).next('p').remove();
  });

  $('form').submit(function(e) {
    e.preventDefault();
    var data = $(this).serializeArray();
    var invalidArray = [];

    data.map(function(input){
      if (input.value === "") {
        invalidArray.push(input.name);
      } else if (input.name === "email" && !emailValidation(input.value) ) {
        invalidArray.push(input.name);
      }
    });

    if (invalidArray.length > 0 ) {
      var string =
      alert(
        "Please fix one or more fields before submitting: " + invalidError(invalidArray));
    } else {
      data.map(function(input) {
        console.log(input.name + ": " + input.value);
      });
    }
  });

});
