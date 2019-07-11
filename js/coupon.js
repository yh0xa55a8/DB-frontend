var coupon;
function GetCoupon() {
    $.ajax({
        url: 'http://192.168.1.178:5000/api/GetCoupon/',
        type: 'post',
        contentType: 'application/json;charset=UTF-8',
        xhrFields: {
            withCredentials: true
        },
        data: JSON.stringify({
            'Email': $("#email").val(),
            'Password': $("#password2").val(),
        }),
        success: function(data){
            console.log(data);
            coupon = data;
            display();
            //$("#question").html(data.Content);
            console.log("success11");
        },
        error: function(err){
            console.log(err);
            console.log('fail11');
        }
    });
}
function display(){
    $("#BirthDayDate").html(info.BirthDayDate);
    $("#CustomerId").html(info.CustomerId);
    $("#DefaultAddressIndex").html(info.DefaultAddressIndex);
    $("#Email").html(info.Email);
    $("#IdCardNum").html(info.IdCardNum);
    $("#NickName").html(info.NickName);
    $("#Password").html(info.Password);
    $("#PhoneNum").html(info.PhoneNum);
    $("#Point").html(info.Point);
    $("#RealName").html(info.RealName);
}