function closeChart_bar(){
    var myChart = echarts.init(document.getElementById('bar'));
    myChart.clear();
    document.getElementById("bar").style.display="none";
}

function download2(){
    // 获取画布信息
    document.getElementById("line").style.display="block";
    var myChart = echarts.init(document.getElementById('line'));
    var var_1 = new Array(); //价格
    var var_2 = new Array(); //书名
    var var_3 = new Array(); //描述
    $.ajax({
        url: 'http://www.sparkxyf.cn:8080/api/GetMerchandisesOfSeller/',
        type: 'post',
        contentType: 'application/json;charset=UTF-8',
        xhrFields: {
            withCredentials: true
        },
        data: JSON.stringify({
            'SellerShopName': "淘吧书店"
        }),
        success:function(data){
            console.log("success");

            console.log(data);
            for(var i = 0; i < data.length;i++){
                var_1.push(data[i].Price);
            }
            for(var i = 0; i < data.length;i++){
                //console.log(var_1[i]);
            }
            for(var i = 0; i < data.length;i++){
                var_2.push(i);
            }
            for(var i = 0; i < data.length;i++){
                var_3.push(data[i].Description);
            }
            for(var i = 0; i < data.length;i++){
                //console.log(var_3[i]);
            }

            Sort(var_1);

            option = {
                xAxis: {
                    type: 'category',
                    data: var_2
                },
                yAxis: {
                    type: 'value'
                },
                series: [{
                    data: var_1,
                    type: 'line',
                    smooth: true
                }]
            };
            myChart.setOption(option);
        },
        error: function(err) {
            console.log(err);
        }
    });

    var canvas = document.getElementsByTagName("canvas");
    if(canvas&&canvas.length>0){
        // 创建标签
        var oA = document.createElement("a");
        // 设置下载名称
        oA.download = "Echarts图表" +".png";
        // 设置地址以及文件类型
        oA.href = canvas[0].toDataURL("image/png");
        document.body.appendChild(oA);
        // 触发下载事件
        oA.click();
        // 移除标签
        oA.remove();
    }
}

function download1(){
    // 获取画布信息
    document.getElementById("bar").style.display="block";
    var myChart = echarts.init(document.getElementById('bar'));
    var var_1 = new Array(); //价格
    var var_2 = new Array(); //书名
    var var_3 = new Array(); //描述
    $.ajax({
        url: 'http://www.sparkxyf.cn:8080/api/GetMerchandisesOfSeller/',
        type: 'post',
        contentType: 'application/json;charset=UTF-8',
        xhrFields: {
            withCredentials: true
        },
        data: JSON.stringify({
            'SellerShopName': "淘吧书店"
        }),
        success:function(data){
            console.log("success");

            console.log(data);
            for(var i = 0; i < data.length;i++){
                var_1.push(data[i].Price);
            }
            for(var i = 0; i < data.length;i++){
                //console.log(var_1[i]);
            }
            for(var i = 0; i < data.length;i++){
                var_2.push(i);
            }
            for(var i = 0; i < data.length;i++){
                var_3.push(data[i].Description);
            }
            for(var i = 0; i < data.length;i++){
                //console.log(var_3[i]);
            }

            Sort(var_1);

            var option = {
                grid: { left: '2%', right: '2%', bottom: '10%', containLabel: true },
                title:{
                    text: '本书店价格分布'
                },
                xAxis:{
                    data:var_2,
                    name:"单位：图书数量"
                },
                yAxis: {
                    name:"单位：元"
                },
                series:[{
                    name:'销量',
                    type: 'bar',
                    data:var_1
                }]
            };
            myChart.setOption(option);
        },
        error: function(err) {
            console.log(err);
        }
    });

    var canvas = document.getElementsByTagName("canvas");
    if(canvas&&canvas.length>0){
        // 创建标签
        var oA = document.createElement("a");
        // 设置下载名称
        oA.download = "Echarts图表" +".png";
        // 设置地址以及文件类型
        oA.href = canvas[0].toDataURL("image/png");
        document.body.appendChild(oA);
        // 触发下载事件
        oA.click();
        // 移除标签
        oA.remove();
    }
}

function Sort(arr) {//从大到小排序
    var max;
    for (var i = 0; i < arr.length; i++) {
        for (var j = i; j < arr.length; j++) {
            if (arr[i] < arr[j]) {
                max = arr[j];
                arr[j] = arr[i];
                arr[i] = max;
            }
        }
    }
}

//GetMerchandisesOfSeller，得到特定商家的所有商品信息
function Test_Api5(){
    var otherChart = echarts.init(document.getElementById('bar'));
    otherChart.clear();
    document.getElementById("bar").style.display="none";

    document.getElementById("line").style.display="block";
    var myChart = echarts.init(document.getElementById('line'));
    var var_1 = new Array(); //价格
    var var_2 = new Array(); //书名
    var var_3 = new Array(); //描述
    $.ajax({
        url: 'http://www.sparkxyf.cn:8080/api/GetMerchandisesOfSeller/',
        type: 'post',
        contentType: 'application/json;charset=UTF-8',
        xhrFields: {
            withCredentials: true
        },
        data: JSON.stringify({
            'SellerShopName': "淘吧书店"
        }),
        success:function(data){
            console.log("success");

            console.log(data);
            for(var i = 0; i < data.length;i++){
                var_1.push(data[i].Price);
            }
            for(var i = 0; i < data.length;i++){
                //console.log(var_1[i]);
            }
            for(var i = 0; i < data.length;i++){
                var_2.push(i);
            }
            for(var i = 0; i < data.length;i++){
                var_3.push(data[i].Description);
            }
            for(var i = 0; i < data.length;i++){
                //console.log(var_3[i]);
            }

            Sort(var_1);

            option = {
                xAxis: {
                    type: 'category',
                    data: var_2
                },
                yAxis: {
                    type: 'value'
                },
                series: [{
                    data: var_1,
                    type: 'line',
                    smooth: true
                }]
            };
            myChart.setOption(option);
        },
        error: function(err) {
            console.log(err);
        }
    });
}

//GetMerchandisesOfSeller，得到特定商家的所有商品信息
function Test_Api4(){

    var otherChart = echarts.init(document.getElementById('line'));
    otherChart.clear();
    document.getElementById("line").style.display="none";

    document.getElementById("bar").style.display="block";
    var myChart = echarts.init(document.getElementById('bar'));
    var var_1 = new Array(); //价格
    var var_2 = new Array(); //书名
    var var_3 = new Array(); //描述
    $.ajax({
        url: 'http://www.sparkxyf.cn:8080/api/GetMerchandisesOfSeller/',
        type: 'post',
        contentType: 'application/json;charset=UTF-8',
        xhrFields: {
            withCredentials: true
        },
        data: JSON.stringify({
            'SellerShopName': "淘吧书店"
        }),
        success:function(data){
            console.log("success");

            console.log(data);
            for(var i = 0; i < data.length;i++){
                var_1.push(data[i].Price);
            }
            for(var i = 0; i < data.length;i++){
                //console.log(var_1[i]);
            }
            for(var i = 0; i < data.length;i++){
                var_2.push(i);
            }
            for(var i = 0; i < data.length;i++){
                var_3.push(data[i].Description);
            }
            for(var i = 0; i < data.length;i++){
                //console.log(var_3[i]);
            }

            Sort(var_1);




            var option = {
                grid: { left: '2%', right: '2%', bottom: '10%', containLabel: true },
                title:{
                    text: '本书店价格分布'
                },
                xAxis:{
                    data:var_2,
                    name:"单位：图书数量"
                },
                yAxis: {
                    name:"单位：元"
                },
                series:[{
                    name:'销量',
                    type: 'bar',
                    data:var_1
                }]
            };
            myChart.setOption(option);
        },
        error: function(err) {
            console.log(err);
        }
    });
}

//## GetMerchandise，得到merchandize的ISBN和Prise
function Test_Api3(){
    var var_1 = new Array();
    var var_2 = new Array();
    $.ajax({
        url: 'http://www.sparkxyf.cn:8080/api/GetMerchandise/',
        type: 'post',
        contentType: 'application/json;charset=UTF-8',
        xhrFields: {
            withCredentials: true
        },
        data: JSON.stringify({
            'MerchandiseId': "622"
        }),
        success:function(data){
            console.log("success");
            console.log(data);
        },
        error: function(err) {
            console.log(err);
        }
    });
}

//GetMerchandiseOfSeller，得到merchandize的ID 622
function Test_Api2(){
    var var_1 = new Array();
    var var_2 = new Array();
    $.ajax({
        url: 'http://www.sparkxyf.cn:8080/api/GetMerchandisesOfSeller/',
        type: 'post',
        contentType: 'application/json;charset=UTF-8',
        xhrFields: {
            withCredentials: true
        },
        data: JSON.stringify({
            'SellerShopName': "淘吧书店"
        }),
        success:function(data){
            console.log("success");
            console.log(data);
        },
        error: function(err) {
            console.log(err);
        }
    });
}

//得到书店名 淘吧书店
function Test_Api1(){
    var var_1 = new Array();
    var var_2 = new Array();
    $.ajax({
        url: 'http://www.sparkxyf.cn:8080/api/GetSeller/',
        type: 'post',
        contentType: 'application/json;charset=UTF-8',
        xhrFields: {
            withCredentials: true
        },
        success:function(data){
            console.log("success");
            console.log(data);
        },
        error: function(err) {
            console.log(err);
        }
    });
}