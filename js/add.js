function CustomerAddress() {
    $.ajax({
        url: 'http://www.sparkxyf.cn:8080/api/CustomerAddress/',
        type: 'post',
        contentType: 'application/json;charset=UTF-8',
        xhrFields: {
            withCredentials: true,
        },
        data: JSON.stringify({
            'ReceiverName': $("#ReceiverName").val(),
            'ReceivePhone': $("#ReceivePhone").val(),
            'Province': $("#Province").val(),
            'City': $("#City").val(),
            'Block': $("#Block").val(),
            'DetailAddress': $("#DetailAddress").val(),
            'ZipCode': $("#ZipCode").val(),
        }),
        success: function(data){
            console.log(data);
            //$("#question").html(dataContent);
            console.log("success11");
        },
        error: function(err){
            console.log(err);
            console.log('fail11');
        }
    });
}