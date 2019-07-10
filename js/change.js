function SendMail() {
    $.ajax({
        url: 'http://192.168.1.178:5000/api/SendMail/',
        type: 'post',
        contentType: 'application/json;charset=UTF-8',
        xhrFields: {
            withCredentials: true
        },
        data: JSON.stringify({
            'Email': $("#Email").val(),
            'EmailStatus': 1,
        }),
        success: function(msg){
            console.log("success");
        },
        error: function(err){
            console.log(err);
            console.log('fail');
        }
    });
}
function MailChangePassword() {
    $.ajax({
        url: 'http://192.168.1.178:5000/api/MailChangePassword/',
        type: 'post',
        contentType: 'application/json;charset=UTF-8',
        xhrFields: {
            withCredentials: true
        },
        data: JSON.stringify({
            'Email': $("#Email").val(),
            'ValidateCode': $("#ValidateCode1").val(),
            'Password': $("#password1").val(),
        }),
        success: function(msg){
            console.log("msg");
            console.log("success");
        },
        error: function(err){
            console.log(err);
            console.log('fail');
        }
    });
}
function Sms() {
    $.ajax({
        url: 'http://192.168.1.178:5000/api/Sms/',
        type: 'post',
        contentType: 'application/json;charset=UTF-8',
        xhrFields: {
            withCredentials: true
        },
        data: JSON.stringify({
            'Phone': $("#phone").val(),
            'EmailStatus': 1,
        }),
        success: function(msg){
            console.log("success");
        },
        error: function(err){
            console.log('fail');
        }
    });
}
function SmsChangePassword() {
    $.ajax({
        url: 'http://192.168.1.178:5000/api/SmsChangePassword/',
        type: 'post',
        contentType: 'application/json;charset=UTF-8',
        xhrFields: {
            withCredentials: true
        },
        data: JSON.stringify({
            'Phone': $("#Phone").val(),
            'ValidateCode': $("#ValidateCode2").val(),
            'Password': $("#password2").val(),
        }),
        success: function(msg){
            console.log("msg");
            console.log("success");
        },
        error: function(err){
            console.log(err);
            console.log('fail');
        }
    });
}