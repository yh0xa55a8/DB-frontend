var myChart = echarts.init(document.getElementById('chart38'));
    var option = {
		title:{
            text: '时间与发布优惠券数量'
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
            data:[35, 67, 54, 75, 46,99,65]
        }]
    };
myChart.setOption(option);