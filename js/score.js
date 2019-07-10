var VIPinfo;
function GetVipOfCustomer() {
    $.ajax({
        url: 'http://192.168.1.178:5000/api/GetVipOfCustomer/',
        type: 'post',
        contentType: 'application/json;charset=UTF-8',
        xhrFields: {
            withCredentials: true
        },
        success: function(msg){
            console.log(msg);
            VIPinfo = msg;
            display();
            console.log("success");
            console.log(document.cookie);
        },
        error: function(err){
            console.log(err);
            console.log('fail');
        }
    });
}
function display() {
    $("#CustomerId").html(VIPinfo[0].vipInfo.CustomerId);
    $("#ShopName").html(VIPinfo[0].seller.ShopName);
    $("#DiscountRatio").html(VIPinfo[0].vipInfo.DiscountRatio);
    $("#ValidThrough").html(VIPinfo[0].vipInfo.ValidThrough);
}