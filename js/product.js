window.location.href;
function getUrlParam(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
    var r = window.location.search.substr(1).match(reg);  //匹配目标参数
    if (r != null) return unescape(r[2]); return null; //返回参数值
}
var searchData, comment, question, answer;
var MerchandiseId;
function GetMerchandise() {
    MerchandiseId=getUrlParam('MerchandiseId');
    console.log(MerchandiseId);
    $.ajax({
        url: 'http://192.168.1.178:5000/api/GetMerchandise/',
        type: 'post',
        contentType: 'application/json;charset=UTF-8',
        xhrFields: {
            withCredentials: true
        },
        data: JSON.stringify({
            'MerchandiseId': MerchandiseId,
        }),
        success: function(data){
            searchData = data;
            //console.log(data);
            console.log("success11");
            $("#title").html(searchData.Title);
            $("#ISBN").html(searchData.ISBN);
            $("#author").html(searchData.Author);
            $("#shopname").html(searchData.ShopName);
            $("#price").html(searchData.Price);
            $("#description1").html(searchData.Description);
            $("#description2").html(searchData.Description);
            GetAllComments();
        },
        error: function(err){
            console.log(err);
            console.log('fail11');
        }
    });
}
function GetAllComments() {
    $.ajax({
        url: 'http://192.168.1.178:5000/api/GetAllComments/',
        type: 'post',
        contentType: 'application/json;charset=UTF-8',
        xhrFields: {
            withCredentials: true
        },
        data: JSON.stringify({
            'MerchandiseId': MerchandiseId,
        }),
        success: function(data){
            comment = data;
            //console.log(data);
            console.log("success22");
            $("#time1").html(comment[0].CommentTime);
            $("#time2").html(comment[1].CommentTime);
            $("#comment1").html(comment[0].Comment);
            $("#comment2").html(comment[1].Comment);
            $("#time3").html(comment[2].CommentTime);
            $("#time4").html(comment[3].CommentTime);
            $("#comment3").html(comment[2].Comment);
            $("#comment4").html(comment[3].Comment);
            GetQuestionFromMerchandise();
        },
        error: function(err){
            console.log(err);
            console.log('fail22');
        }
    });
}
function ShoppingCart() {
    $.ajax({
        url: 'http://192.168.1.178:5000/api/ShoppingCart/',
        type: 'post',
        contentType: 'application/json;charset=UTF-8',
        xhrFields: {
            withCredentials: true
        },
        data: JSON.stringify({
            'MerchandiseId': MerchandiseId,
            'Anount': $("#amount").val(),
        }),
        success: function(data){
            //console.log(data);
            console.log("success22");
        },
        error: function(err){
            console.log(err);
            console.log('fail22');
        }
    });
}
function Question() {
    $.ajax({
        url: 'http://192.168.1.178:5000/api/Question/',
        type: 'post',
        contentType: 'application/json;charset=UTF-8',
        xhrFields: {
            withCredentials: true
        },
        data: JSON.stringify({
            'AboutMerchandiseId': MerchandiseId,
            'SubmitTime': new Date(),
            'Content': $("#question").val(),
        }),
        success: function(data){
            console.log(data);
            console.log("success22");
        },
        error: function(err){
            console.log(err);
            console.log('fail22');
        }
    });
}
function GetQuestionFromMerchandise(){
$.ajax({
    url: 'http://192.168.1.178:5000/api/GetQuestionFromMerchandise/',
    type: 'post',
    contentType: 'application/json;charset=UTF-8',
    xhrFields: {
        withCredentials: true
    },
    data: JSON.stringify({
        'MerchandiseId': MerchandiseId,
    }),
    success: function(data){
        question = data;
        console.log(data);
        $.ajax({
            url: 'http://192.168.1.178:5000/api/GetAnswerFromQuestion/',
            type: 'post',
            contentType: 'application/json;charset=UTF-8',
            xhrFields: {
                withCredentials: true
            },
            data: JSON.stringify({
                'QuestionId': data[0].QuestionId,
            }),
            success: function(data){
                answer = data;
                console.log(data);
                console.log("success44");
            },
            error: function(err){
                console.log(err);
                console.log('fail44');
            }
        });
        console.log(question);
        console.log("success33");

    },
    error: function(err){
        console.log(err);
        console.log('fail33');
    }
});
}