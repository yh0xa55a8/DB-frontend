function UpdateCustomer() {
    $.ajax({
        url: 'http://www.sparkxyf.cn:8080/api/UpdateCustomer/',
        type: 'post',
        contentType: 'application/json;charset=UTF-8',
        xhrFields: {
            withCredentials: true,
        },
        data: JSON.stringify({
            'NickName': $("#NickName").val(),
            'DateOfBirth': $("#DateOfBirth").val(),
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