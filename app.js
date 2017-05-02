$(document).ready(function() {

  function validation(input) {
    var data = $(input).val();
    var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    var validEmail = re.test(data);

    if (input === ".email") {
      if (validEmail) {
        $(input).css("border-color", "green");
      } else {
        $(input).css("border-color", "red");
        $(input).after("<p>Must be a valid email.</p>")
      }
    } else {
      if (data === "") {
        console.log("This name is empty!");
        $(input).css("border-color","red");
        $(input).after("<p>Must not be blank.</p>");
      } else {
        $(input).css("border-color", "green");
      }
    }
  }

  $('.first-name').focusout(function() {
    validation(this);
  });

  $('.last-name').focusout(function() {
    validation(this);
  });

  $('.email').focusout(function() {
    validation('.email');
  });

  $('form').submit(function(e) {
    e.preventDefault();
    console.log("stop");
  })
});
