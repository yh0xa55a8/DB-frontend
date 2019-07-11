function SendMail() {
    $.ajax({
        url: 'http://192.168.1.178:5000/api/SendMail/',
        type: 'post',
        contentType: 'application/json;charset=UTF-8',
        xhrFields: {
            withCredentials: true
        },
        data: JSON.stringify({
            'Email': $("#email").val(),
            'EmailStatus': 0,
        }),
        success: function(msg){
            console.log("success");
        },
        error: function(err){
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
            'EmailStatus': 0,
        }),
        success: function(msg){
            console.log("success");
        },
        error: function(err){
            console.log('fail');
        }
    });
}
function CustomerByEmail() {
    $.ajax({
        url: 'http://192.168.1.178:5000/api/Customer/',
        type: 'post',
        contentType: 'application/json;charset=UTF-8',
        xhrFields: {
            withCredentials: true
        },
        data: JSON.stringify({
            'ValidateCode': $("#code2").val(),
            'CustomerData': {
                'RealName':$("#real-name2").val(),
                'NickName':$("#nickname2").val(),
                'IdCardNum':$("#id2").val(),
                'Email':$("#email").val(),
                'PhoneNum':$("#number2").val(),
                'DateOfBirth':$("#birth2").val(),
                'Password':$("#password2").val()
            }
        }),
        success: function(msg){
            console.log("success");
            //window.location.href= '1-login.html';
        },
        error: function(err){
            console.log('fail');
        }
    });
}
function CustomerByPhone() {
    $.ajax({
        url: 'http://192.168.1.178:5000/api/Customer/',
        type: 'post',
        contentType: 'application/json;charset=UTF-8',
        xhrFields: {
            withCredentials: true
        },
        data: JSON.stringify({
            'ValidateCode': $("#code1").val(),
            'CustomerData': {
                'RealName':$("#real-name1").val(),
                'NickName':$("#nickname1").val(),
                'IdCardNum':$("#id1").val(),
                'Email':$("#phone").val(),
                'PhoneNum':$("#number1").val(),
                'DateOfBirth':$("#birth1").val(),
                'Password':$("#password1").val()
            }
        }),
        success: function(msg){
            console.log("success");
            //window.location.href= '1-login.html';
        },
        error: function(err){
            console.log('fail');
        }
    });
}