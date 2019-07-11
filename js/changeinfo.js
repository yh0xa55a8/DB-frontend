

function UpdateCustomer() {
    $.ajax({
        url: 'http://www.sparkxyf.cn:8080/api/UpdateCustomer/',
        type: 'post',
        contentType: 'application/json;charset=UTF-8',
        xhrFields: {
            withCredentials: true,
        },
        data: JSON.stringify({
            'RealName': $("#RealName").val(),
            'IdCardNum': $("#IdCard").val(),
            'NickName': $("#NickName").val(),
            'DateOfBirth': $("#Birthday").val().substring(0,10),
        }),
        success: function(data){
            console.log(data);
            alert("更改成功！跳转回用户信息界面。");
            window.location = ('1-info.html');
        },
        error: function(err){
            console.log(err);
            console.log('fail11');
        }
    });
}