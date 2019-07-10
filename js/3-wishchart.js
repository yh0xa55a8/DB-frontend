var myChart = echarts.init(document.getElementById('3-wishchart'));
	var option = {
		title:{
			text: '用户收藏高峰时间分布'
		},
		xAxis: {
			type: 'category',
			data: ['00:00', '06:00', '12:00', '18:00', '21:00','24:00']
		},
		yAxis: {
			type: 'value'
		},
		legend: {
			data: ['GMV']
		},
		series: [{
			data: [820, 932, 901, 934, 1290, 1330],
			type: 'line',
			smooth: true
		}]
	};
	myChart.setOption(option);