var Data;
function loadData(){
    $.ajax({
        url: 'http://www.sparkxyf.cn:8080/api/ManageSelectCustomer/',
        type: 'post',
        async: false,
        contentType: 'application/json; charset=UTF-8',
        xhrFields: {	//发送cookie
            withCredentials: true
        },
        data: JSON.stringify({}),
        success: function(msg){
            console.log("success");
            Data = msg;
            console.log(Data);
        },
        error: function(err){
            console.log(err.statusText);
        }
    });
}
loadData();
ageData = [0,0,0,0];
for(var i=0; i<Data.length; i++){
    if(Data[i].Age < 13){
        ageData[0]++;
    }
    else if(Data[i].Age < 22){
        ageData[1]++;
    }
    else if(Data[i].Age < 41){
        ageData[2]++;
    }
    else{
        ageData[3]++;
    }
}
console.log(ageData);
var myChart = echarts.init(document.getElementById('3-userchart'));
var option = {
    title : {
        	text: '平均客单价分布',
        	x:'center'
    },
    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
        orient: 'vertical',
        left: 'left',
        data: ['0-12岁','13-21岁','22岁-40岁','41岁及以后']
    },
            series:[
                {
                    name:'评价类别',
                    type: 'pie',
                    radius: '55%',
					center: ['50%', '60%'],
                    data:[
                        {value:ageData[0], name:'0-12岁'},
                        {value:ageData[1], name:'13-21岁'},
                        {value:ageData[2], name:'22岁-40岁'},
                        {value:ageData[3], name:'41岁及以后'},
                    ],
                itemStyle: {
                emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
                }
            ]
       };
       myChart.setOption(option);