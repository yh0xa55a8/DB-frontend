window.location.href;

function getUrlParam(variable) {
    let query = window.location.search.substring(1);
    let vars = query.split("&");
    for (let i = 0; i < vars.length; i++) {
        let pair = vars[i].split("=");
        if (pair[0] === variable) {
            return pair[1];
        }
    }
    return (false);
}

var searchData, comment, question, answer;
var MerchandiseId;

function GetMerchandise() {
    MerchandiseId = parseInt(getUrlParam('MerchandiseId'));
    if(MerchandiseId==null){
        MerchandiseId = parseInt(getUrlParam('merchandiseId'));
    }
    console.log(MerchandiseId);
    $.ajax({
        url: 'http://www.sparkxyf.cn:8080/api/GetMerchandise/',
        type: 'post',
        contentType: 'application/json;charset=UTF-8',
        xhrFields: {
            withCredentials: true
        },
        data: JSON.stringify({
            'MerchandiseId': MerchandiseId,
        }),
        success: function (data) {
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
            $.ajax({
                url: 'http://www.sparkxyf.cn:8080/api/GetBook/',
                type: 'post',
                contentType: 'application/json;charset=UTF-8',
                xhrFields: {
                    withCredentials: true
                },
                data: JSON.stringify({
                    'ISBN': data.ISBN,
                }),
                success: (book) => {
                    let urls = book.ImagePath.split('/');
                    let path = "http://sparkxyf.cn/" + urls[urls.length - 1];
                    $('#mainPic').attr("src", path)
                }
            });
            GetAllComments();
        },
        error: function (err) {
            console.log(err);
            console.log('fail11');
        }
    });
}

function GetAllComments() {
    $.ajax({
        url: 'http://www.sparkxyf.cn:8080/api/GetAllComments/',
        type: 'post',
        contentType: 'application/json;charset=UTF-8',
        xhrFields: {
            withCredentials: true
        },
        data: JSON.stringify({
            'MerchandiseId': MerchandiseId,
        }),
        success: function (data) {
            comment = data;
            console.log(data);
            for(let i=0;i<data.length;i++){
                renderComment(data[i].NickName,data[i].CommentTime,data[i].Comment);
            }
            GetQuestionFromMerchandise();
        },
        error: function (err) {
            console.log(err);
            console.log('fail22');
        }
    });
}

function renderComment(name, time, content) {
    $("#commentContainer").append('<tr class="cart-item"> \
  <td class="product-name" data-title="Product"> \
    <div class="product-info"> \
      <h3>'+name+'</h3>  \
      <a id="time1">'+time+'</a> \
    </div> \
  </td>  \
  <td class="product-price" data-title="Price"> \
    <a class="product-Price-amount amount" id="comment1">'+content+'</a> \
  </td> \
</tr>')
}

function Question() {
    $.ajax({
        url: 'http://www.sparkxyf.cn:8080/api/Question/',
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
        success: function (data) {
            console.log(data);
            console.log("success22");
        },
        error: function (err) {
            console.log(err);
            console.log('fail22');
        }
    });
}



function AddtoCart() {
    $.ajax({
        url: 'http://www.sparkxyf.cn:8080/api/ShoppingCart/',
        type: 'post',
        async: false,
        contentType: 'application/json; charset=UTF-8',
        xhrFields: {	//发送cookie
            withCredentials: true
        },
        data: JSON.stringify({
            'MerchandiseId': MerchandiseId,
            'Amount': $("#amount").val()
        }),
        success: function (msg) {
            console.log(msg);
            alert("添加到购物车成功!")
        },
        error: function (err) {
            console.log(err.statusText);
        }
    });

}
