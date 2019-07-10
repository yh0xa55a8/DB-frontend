var order, title;
function CustomerGetAllTransacts() {
    $.ajax({
        url: 'http://192.168.1.178:5000/api/CustomerGetAllTransacts/',
        type: 'post',
        contentType: 'application/json;charset=UTF-8',
        async: false,
        xhrFields: {
            withCredentials: true
        },
        success: function(msg){
            order = msg;
            display();
            var items = ["#item1", "#item2", "#item3", "#item4", "#item5", "#item6", "#item7", "#item8", "#item9"];
            for(i = cart.length + 1; i <= 9; i++){
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


    GetBook(order[0].Merchandise.ISBN);
    $("#title0").html(title);
    $("#transactID0").html(order[0].TransactID);
    $("#ISBN0").html(order[0].ISBN);
    $("#price0").html(order[0].Price);
    $("#time0").html(order[0].CreateTime);

    GetBook(order[1].Merchandise.ISBN);
    $("#title1").html(title);
    $("#transactID1").html(order[1].TransactID);
    $("#ISBN1").html(order[1].ISBN);
    $("#price1").html(order[1].Price);
    $("#time1").html(order[1].CreateTime);

    GetBook(order[2].Merchandise.ISBN);
    $("#title2").html(title);
    $("#transactID2").html(order[2].TransactID);
    $("#ISBN2").html(order[2].ISBN);
    $("#price2").html(order[2].Price);
    $("#time2").html(order[2].CreateTime);

    GetBook(order[3].Merchandise.ISBN);
    $("#title3").html(title);
    $("#transactID3").html(order[3].TransactID);
    $("#ISBN3").html(order[3].ISBN);
    $("#price3").html(order[3].Price);
    $("#time3").html(order[3].CreateTime);

    GetBook(order[4].Merchandise.ISBN);
    $("#title4").html(title);
    $("#transactID4").html(order[4].TransactID);
    $("#ISBN4").html(order[4].ISBN);
    $("#price4").html(order[4].Price);
    $("#time4").html(order[4].CreateTime);

    GetBook(order[5].Merchandise.ISBN);
    $("#title5").html(title);
    $("#transactID5").html(order[5].TransactID);
    $("#ISBN5").html(order[5].ISBN);
    $("#price5").html(order[5].Price);
    $("#time5").html(order[5].CreateTime);

    GetBook(order[6].Merchandise.ISBN);
    $("#title6").html(title);
    $("#transactID6").html(order[6].TransactID);
    $("#ISBN6").html(order[6].ISBN);
    $("#price6").html(order[6].Price);
    $("#time6").html(order[6].CreateTime);

    GetBook(order[7].Merchandise.ISBN);
    $("#title7").html(title);
    $("#transactID7").html(order[7].TransactID);
    $("#ISBN7").html(order[7].ISBN);
    $("#price7").html(order[7].Price);
    $("#time7").html(order[7].CreateTime);

    GetBook(order[8].Merchandise.ISBN);
    $("#title8").html(title);
    $("#transactID8").html(order[8].TransactID);
    $("#ISBN8").html(order[8].ISBN);
    $("#price8").html(order[8].Price);
    $("#time8").html(order[8].CreateTime);

}