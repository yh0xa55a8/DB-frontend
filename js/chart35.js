var myChart = echarts.init(document.getElementById('chart35'));
var option = {
        title:{
            text: '销量Top5的书籍'
        },
        legend: {
			data: ['销量']
		},
        xAxis:{
            data:['追风筝的人', '解忧杂货店', '小王子', '三体', '彷徨之刃']
        },
        yAxis: {},
        series:[{
            name:'销量',
            type: 'bar',
            data:[120, 105, 100, 89, 76]
        }]
    };
myChart.setOption(option);