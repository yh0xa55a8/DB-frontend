
function change(){
        var div1=document.getElementById("div1");
        if(div1.style.display=="none"){
            div1.style.display = "block";
            div2.style.display = "none";
            div6.style.display = "none";
            div5.style.display = "block";
        }else{
            div1.style.display = "none";
            div2.style.display = "block";
            div5.style.display = "none";
            div6.style.display = "block";
        }
    }
    function Login() {
        $.ajax({
            url: 'http://192.168.1.178:5000/api/Login/',
            type: 'post',
            contentType: 'application/json;charset=UTF-8',
            xhrFields: {
                withCredentials: true
            },
            data: JSON.stringify({
                'Email': $("#email").val(),
                'Password': $("#password2").val(),
            }),
            success: function(msg){
                console.log(msg);
                console.log("success");
                window.location.href='1-home.html';
                console.log(document.cookie);
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
function SmsLogin() {
    $.ajax({
        url: 'http://192.168.1.178:5000/api/SmsLogin/',
        type: 'post',
        contentType: 'application/json;charset=UTF-8',
        xhrFields: {
            withCredentials: true
        },
        data: JSON.stringify({
            'Phone': $("#phone").val(),
            'ValidateCode': $("#code1").val(),
        }),
        success: function(msg){
            console.log(msg);
            console.log("success");
            window.location.href='1-home.html';
            console.log(document.cookie);
        },
        error: function(err){
            console.log(err);
            console.log('fail');
        }
    });
}