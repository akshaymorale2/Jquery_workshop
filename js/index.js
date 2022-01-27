$(document).ready(function() {

  $('#myform').submit(function() {

      $.ajax({
          type: "POST",
          url: 'http://localhost:3000',
          data: {
              username: $("#username").val(),
              password: $("#password").val()
          },
          success: function(data)
          {
              if (data === 'Correct') {
                  window.location.href('registration.html');
              }
              else {
                  alert(data);
              }
          }
      });

  });

});