var searchData, pagenum, page, searchTitle;
function search() {
    pagenum = 0;
    $.ajax({
        url: 'http://192.168.1.178:5000/api/BookSearch/',
        type: 'post',
        contentType: 'application/json;charset=UTF-8',
        data: JSON.stringify({
            'Title': $("#search").val()
        }),
        success: function(data){
            var pages = ["#page1", "#page2", "#page3", "#page4", "#page5", "#page6", "#page7", "#page8", "#page9"];
            console.log(pages);
            searchData = data;
            page = data.length / 9;
            if (page != 0){
                $("#unfind").hide();
            }
            if (page == 0){
                $("#unfind").show();
            }
            for(i = page; i <= 9; i++){
                console.log(pages[i]);
                $(pages[i]).hide();
            }
            sortByTitle();
            display();
            console.log(page);
            console.log('search success');
            console.info(searchData);
        },
        error: function(err){
            console.log('fail');
            $(".product-title").html("title");
        }
    });
}
function sortByTitle(){
    searchData.sort(function (a, b) {
        if (a.Title < b.Title){
            return 1;
        }
        if (a.Title > b.Title){
            return -1;
        }
        return 0;
    });
    display();
}
function sortByPriceUp(){
    searchData.sort(function (a, b) {
        if (a.Price < b.Price){
            return 1;
        }
        if (a.Price > b.Price){
            return -1;
        }
        return 0;
    });
    display();
}
function sortByPriceDown(){
    searchData.sort(function (a, b) {
        if (a.Price > b.Price){
            return 1;
        }
        if (a.Price < b.Price){
            return -1;
        }
        return 0;
    });
    display();
}
function lastPage() {
    pagenum -= 9;
    display();
}
function nextPage() {
    pagenum += 9;
    display();
}
function pageOne() {
    pagenum = 0;
    display();
}
function pageTwo() {
    pagenum = 9;
    display();
}
function pageThree() {
    pagenum = 18;
    display();
}
function pageFour() {
    pagenum = 27;
    display();
}
function pageFive() {
    pagenum = 36;
    display();
}
function pageSix() {
    pagenum = 45;
    display();
}
function pageSeven() {
    pagenum = 54;
    display();
}
function pageEight() {
    pagenum = 63;
    display();
}
function pageNine() {
    pagenum = 72;
    display();
}
function display(){
    var num;
    if(searchData[pagenum + 8] != null) {

        $("#product0").html(searchData[pagenum + 0].Title);
        $("#shop0").html(searchData[pagenum + 0].ShopName);
        $("#price0").html(searchData[pagenum + 0].Price);
        $("#product0").click(function(){
            num = searchData[pagenum + 0].MerchandiseId;
            window.location.href='1-product.html?MerchandiseId='+num.toString();
        });

        $("#product1").html(searchData[pagenum + 1].Title);
        $("#shop1").html(searchData[pagenum + 1].ShopName);
        $("#price1").html(searchData[pagenum + 1].Price);
        $("#product1").click(function(){
            num = searchData[pagenum + 1].MerchandiseId;
            window.location.href='1-product.html?MerchandiseId='+num.toString();
        });

        $("#product2").html(searchData[pagenum + 2].Title);
        $("#shop2").html(searchData[pagenum + 2].ShopName);
        $("#price2").html(searchData[pagenum + 2].Price);
        $("#product2").click(function(){
            num = searchData[pagenum + 2].MerchandiseId;
            window.location.href='1-product.html?MerchandiseId='+num.toString();
        });

        $("#product3").html(searchData[pagenum + 3].Title);
        $("#shop3").html(searchData[pagenum + 3].ShopName);
        $("#price3").html(searchData[pagenum + 3].Price);
        $("#product3").click(function(){
            num = searchData[pagenum + 3].MerchandiseId;
            window.location.href='1-product.html?MerchandiseId='+num.toString();
        });

        $("#product4").html(searchData[pagenum + 4].Title);
        $("#shop4").html(searchData[pagenum + 4].ShopName);
        $("#price4").html(searchData[pagenum + 4].Price);
        $("#product4").click(function(){
            num = searchData[pagenum + 4].MerchandiseId;
            window.location.href='1-product.html?MerchandiseId='+num.toString();
        });

        $("#product5").html(searchData[pagenum + 5].Title);
        $("#shop5").html(searchData[pagenum + 5].ShopName);
        $("#price5").html(searchData[pagenum + 5].Price);
        $("#product5").click(function(){
            num = searchData[pagenum + 5].MerchandiseId;
            window.location.href='1-product.html?MerchandiseId='+num.toString();
        });

        $("#product6").html(searchData[pagenum + 6].Title);
        $("#shop6").html(searchData[pagenum + 6].ShopName);
        $("#price6").html(searchData[pagenum + 6].Price);
        $("#product6").click(function(){
            num = searchData[pagenum + 6].MerchandiseId;
            window.location.href='1-product.html?MerchandiseId='+num.toString();
        });

        $("#product7").html(searchData[pagenum + 7].Title);
        $("#shop7").html(searchData[pagenum + 7].ShopName);
        $("#price7").html(searchData[pagenum + 7].Price);
        $("#product7").click(function(){
            num = searchData[pagenum + 7].MerchandiseId;
            window.location.href='1-product.html?MerchandiseId='+num.toString();
        });

        $("#product8").html(searchData[pagenum + 8].Title);
        $("#shop8").html(searchData[pagenum + 8].ShopName);
        $("#price8").html(searchData[pagenum + 8].Price);
        $("#product8").click(function(){
            num = searchData[pagenum + 8].MerchandiseId;
            window.location.href='1-product.html?MerchandiseId='+num.toString();
        });
    }
    else{
        if(pagenum > 0)
            pagenum -= 9;
        else
            pagenum += 9;
    }
}