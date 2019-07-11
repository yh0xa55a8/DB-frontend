function Shop_Login(){
    $.ajax({
        url: 'http://www.sparkxyf.cn:8080/api/SellerLogin/',
        type: 'post',
        contentType: 'application/json;charset=UTF-8',
        data: JSON.stringify({
            'Email': "390482245@qq.com",
            'Password': "123456"
        }),
        success: function(msg){
            console.log("success");
        },
        error: function(err){
            console.log(err);
        }
    });
}