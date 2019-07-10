var myChart = echarts.init(document.getElementById('chart36'));
var option = {
        title:{
            text: '订单数量'
        },
        legend: {
			data: ['数量']
		},
        xAxis:{
            data:['1月','2月','3月','4月', '5月', '6月', '7月']
        },
        yAxis: {},
        series:[{
            name:'销量',
            type: 'bar',
            data:[355, 456, 333, 225,235,475,342]
        }]
    };
myChart.setOption(option);