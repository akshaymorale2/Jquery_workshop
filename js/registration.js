$(document).ready(() => {

    $('input[type="button"]').click(() => {
        console.log("button presses");
        var username=$('#username').val();
        var password=$('#password').val();
        var id=$("#id").val();
        var email=$('#email').val();
        var firstName=$('#firstName').val();
        var lastName=$('#lastName').val();

        if (username == "" && password == "") {

            $('#message').css({
                'display' : 'block'
            });
            $("div#message").html("Please enter the username and password");
            // alert("Username or Password not entered")
        }
        
        else if (username == "" || password == "") {
            if(username == "") {
                $('#message').css({
                    'display' : 'block'
                });
                $("div#message").html("Please enter the username");
            }
            else if(password == ""){
                $('#message').css({
                    'display' : 'block'
                });
                $("div#message").html("Please enter the password");
            }
        }

        else {
        $.ajax({
            url: "http://localhost:3000/employees",
            method: "POST",
            data:{
                "id":id,
                "username":username,
                "password":password,
                "firstName":firstName,
                "lastName":lastName,
                "email":email,
            },
            dataType: "json",
            success: (x) => {
                alert("Registration Successful "+username);
                console.log(x);
                window.location="http://127.0.0.1:5500/html/login.html"
            }
        })
    }
    })
});