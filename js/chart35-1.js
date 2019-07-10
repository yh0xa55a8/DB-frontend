var myChart = echarts.init(document.getElementById('chart35-1'));
    var option = {
		title:{
            text: '时间与上架商品数量'
        },
		xAxis:{
            type:'category',
            data:['1月', '2月', '3月', '4月','5月','6月','7月']
        },
        yAxis:{
            type:'value'
        },
        series:[{
            type: 'line',
            name:'优惠券数量',
            data:[176, 267, 352, 267, 432,342,221]
        }]
    };
myChart.setOption(option);