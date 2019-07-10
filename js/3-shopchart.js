var myChart = echarts.init(document.getElementById('3-shopchart'));
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
        data: ['低客单价','中客单价','高客单价']
    },
            series:[
                {
                    name:'评价类别',
                    type: 'pie',
                    radius: '55%',
					center: ['50%', '60%'],
                    data:[
                        {value:435, name:'低客单价'},
                        {value:274, name:'中客单价'},
                        {value:50, name:'高客单价'},
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