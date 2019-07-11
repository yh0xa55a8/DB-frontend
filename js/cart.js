let info,index = -1;

let renderCartItem = (title,shopName,ISBN,price,img,i) => {
    let container = $("#cartItemContainer");
    container.append('<tr class="cart-item" id="item0">\
	<td class="product-name" data-title="Product">\
		<input type="checkbox" data-index="'+i+'" onclick="choose(this)">\
		<a href="#" class="cart-product-thumb"><img src="http://sparkxyf.cn/'+img+'" alt="Product Thumbnail"></a>\
		<div class="product-info">\
			<h3 id="book0">'+title+'</h3>\
			<ul>\
				<li>店铺: <a id="shop0">'+shopName+'</a></li>\
				<li>ISBN: <a id="ISBN0">'+ISBN+'</a></li>\
			</ul>\
		</div>\
	</td>\
	<td class="product-price" data-title="Price">\
		<a>￥</a><a id="price0">'+price.toString()+'</a>\
	</td>\
	<td class="product-quantity" data-title="Quantity">\
		<div class="quantity">\
		<input type="number" class="input-text" step="1" min="1" value="1" id="amount0" data-index="'+i+'">\
		</div>\
	</td>\
	<td class="product-remove" data-title="Remove">\
		<a href="#" class="remove" title="Remove this item"><i class="fa fa-times" aria-hidden="true" data-index="'+i+'"></i></a>\
	</td>\
</tr>')
};

function SeeShoppingCart() {
    $.ajax({
        url: 'http://www.sparkxyf.cn:8080/api/SeeShoppingCart/',
        type: 'post',
        contentType: 'application/json;charset=UTF-8',
        xhrFields: {withCredentials: true},
        async: false,
        success: function(data){
            info = data;

            for(let i=0;i<data.length;++i){
                let merchandise = data[i];

                $.ajax({
                    url: 'http://www.sparkxyf.cn:8080/api/GetBook/',
                    type: 'post',
                    contentType: 'application/json;charset=UTF-8',
                    xhrFields: {withCredentials: true},
                    async: false,
                    data: JSON.stringify({
                        ISBN: merchandise.ISBN
                    }),
                    success: (data)=>{
                        let paths = data.ImagePath.split('/');
                        let path = paths[paths.length-1];
                        renderCartItem(data.Title,merchandise.ShopName,data.ISBN,merchandise.Price,path,i)
                    }
                })
            }
        },
        error: function(err){
            console.log(err);
            console.log('fail');
        }
    });
}

function choose(e) {
    let choosedIndex = $(e).attr("data-index");
    index = choosedIndex
    console.log(index)
}

function gotoOrder() {
    console.log(info[index]);
    if(index!==-1){
        window.location.href = "./1-pay.html?MerchandiseId=" + info[index].MerchandiseId
    }

}


