var cart, title;
function SeeShoppingCart() {
    $.ajax({
        url: 'http://192.168.1.178:5000/api/SeeShoppingCart/',
        type: 'post',
        contentType: 'application/json;charset=UTF-8',
        async: false,
        xhrFields: {
            withCredentials: true
        },
        success: function(msg){
            cart = msg;
            display();
            var items = ["#item0", "#item1", "#item2", "#item3", "#item4", "#item5", "#item6", "#item7", "#item8"];
            for(i = cart.length; i <= 8; i++){
                console.log(cart.length);
                console.log(items[i]);
                $(items[i]).hide();
            }
            console.log(msg);
            console.log("success");
        },
        error: function(err){
            console.log(err);
            console.log('fail');
        }
    });
}
function GetBook(ISBN) {
    $.ajax({
        url: 'http://192.168.1.178:5000/api/GetBook/',
        type: 'post',
        contentType: 'application/json;charset=UTF-8',
        async: false,
        xhrFields: {
            withCredentials: true
        },
        data: JSON.stringify({
            'ISBN': ISBN
        }),
        success: function(msg){
            title = msg.Title;
        },
        error: function(err){
            console.log(err);
            console.log('fail');
        }
    });
}

function display() {


        GetBook(cart[0].ISBN);
        $("#book0").html(title);
        $("#shop0").html(cart[0].ShopName);
        $("#ISBN0").html(cart[0].ISBN);
        $("#price0").html(cart[0].Price);
        $("#amount0").html(cart[0].Amount);
        $("#total0").html(cart[0].Price * cart[0].Amount);

    GetBook(cart[1].ISBN);
    $("#book1").html(title);
    $("#shop1").html(cart[1].ShopName);
    $("#ISBN1").html(cart[1].ISBN);
    $("#price1").html(cart[1].Price);
    $("#amount1").html(cart[1].Amount);
    $("#total1").html(cart[1].Price * cart[1].Amount);

    GetBook(cart[2].ISBN);
    $("#book2").html(title);
    $("#shop2").html(cart[2].ShopName);
    $("#ISBN2").html(cart[2].ISBN);
    $("#price2").html(cart[2].Price);
    $("#amount2").html(cart[2].Amount);
    $("#total2").html(cart[2].Price * cart[2].Amount);

    GetBook(cart[3].ISBN);
    $("#book3").html(title);
    $("#shop3").html(cart[3].ShopName);
    $("#ISBN3").html(cart[3].ISBN);
    $("#price3").html(cart[3].Price);
    $("#amount3").html(cart[3].Amount);
    $("#total3").html(cart[3].Price * cart[3].Amount);

    GetBook(cart[4].ISBN);
    $("#book4").html(title);
    $("#shop4").html(cart[4].ShopName);
    $("#ISBN4").html(cart[4].ISBN);
    $("#price4").html(cart[4].Price);
    $("#amount4").html(cart[4].Amount);
    $("#total4").html(cart[4].Price * cart[4].Amount);

    GetBook(cart[5].ISBN);
    $("#book5").html(title);
    $("#shop5").html(cart[5].ShopName);
    $("#ISBN5").html(cart[5].ISBN);
    $("#price5").html(cart[5].Price);
    $("#amount5").html(cart[5].Amount);
    $("#total5").html(cart[5].Price * cart[5].Amount);

    GetBook(cart[6].ISBN);
    $("#book6").html(title);
    $("#shop6").html(cart[6].ShopName);
    $("#ISBN6").html(cart[6].ISBN);
    $("#price6").html(cart[6].Price);
    $("#amount6").html(cart[6].Amount);
    $("#total6").html(cart[6].Price * cart[6].Amount);

    GetBook(cart[7].ISBN);
    $("#book7").html(title);
    $("#shop7").html(cart[7].ShopName);
    $("#ISBN7").html(cart[7].ISBN);
    $("#price7").html(cart[7].Price);
    $("#amount7").html(cart[7].Amount);
    $("#total7").html(cart[7].Price * cart[7].Amount);

    GetBook(cart[8].ISBN);
    $("#book8").html(title);
    $("#shop8").html(cart[8].ShopName);
    $("#ISBN8").html(cart[8].ISBN);
    $("#price8").html(cart[8].Price);
    $("#amount8").html(cart[8].Amount);
    $("#total8").html(cart[8].Price * cart[8].Amount);
    
}

function update() {

    $("#total1").html(cart[0].Price * $("#amount1").val());
    $("#total2").html(cart[1].Price * $("#amount2").val());
    $("#total3").html(cart[2].Price * $("#amount3").val());
    $("#total4").html(cart[3].Price * $("#amount4").val());
    $("#total5").html(cart[4].Price * $("#amount5").val());
    $("#total6").html(cart[5].Price * $("#amount6").val());
    $("#total7").html(cart[6].Price * $("#amount7").val());
    $("#total8").html(cart[7].Price * $("#amount8").val());
    $("#total9").html(cart[8].Price * $("#amount9").val());

}