function VipMember() {
    var now = new Date();
    now.setFullYear(now.getFullYear()+1);
    $.ajax({
        url: 'http://www.sparkxyf.cn:8080/api/VipMember/',
        type: 'post',
        contentType: 'application/json;charset=UTF-8',
        xhrFields: {
            withCredentials: true
        },
        data: JSON.stringify({
            'ShopName': $("#shopname").val(),
            'DiscountRatio': 1,
            'ValidateThrougn': now,
        }),
        success: function(msg){
            console.log(msg);
            console.log("success");
            console.log(document.cookie);
        },
        error: function(err){
            console.log(err);
            console.log('fail');
        }
    });
}