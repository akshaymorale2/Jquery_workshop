$(document).ready(() => {

    $('input[type="button"]').click(() => {
        console.log("button presses");
        var username=$('#username').val();
        var password=$('#password').val();
        var messages=$("#messages");

        var obj = new Object();

        obj.username=username;
        obj.password=password;

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
            method: "GET",
            data:obj,
            success: function(data) {   
                // alert("inside verification");
                $.each(data, function (key, value) {
                console.log(value.username);
                    if (value.username != '' && value.password!='')
                        {
                            if(value.username!=username && value.password!=password)
                                alert("password is correct");
                            window.location="http://127.0.0.1:5500/html/registration.html"
                            return false;
                        }
                    })
            },

            // error: function(data){
            //     $.each(data, function (key, value) {
            //         console.log(value.username);
            //             if (value.username != '' && value.password!='')
            //                 {
            //                     if(value.username!=username)
            //                         alert("username is incorrect");
            //                     else(value.password!=password)
            //                         alert("password is incorrect")

            //                     return false;
            //                 }
            //             })
            // },
        })
    }
    })
});