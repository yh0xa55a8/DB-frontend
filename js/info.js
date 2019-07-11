var info;
function GetCustomer() {
    $.ajax({
        url: 'http://www.sparkxyf.cn:8080/api/GetCustomer/',
        type: 'post',
        contentType: 'application/json;charset=UTF-8',
        xhrFields: {
            withCredentials: true
        },
        success: function(data){
            console.log(data);
            info = data;
            display();
            //$("#question").html(data.Content);
            console.log("success11");
        },
        error: function(err){
            alert("未登录");
            window.location = '1-login.html';
            console.log(err);
        }
    });
}
function display(){
    $("#Birthday").html(info.DateOfBirth.substring(0,10));
    //$("#DefaultAddressIndex").html(info.DefaultSellerAddressIndex);
    $("#Email").html(info.Email);
    $("#IdCardNum").html(info.IdCardNum);
    $("#NickName").html(info.NickName);
    $("#PhoneNum").html(info.PhoneNum);
    $("#Point").html(info.Point);
    $("#RealName").html(info.RealName);
}