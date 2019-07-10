var myChart = echarts.init(document.getElementById('3-shopchart'));
var option = {
    title : {
        	text: '用户加入购物车高峰时间分布',
        	x:'center'
    },
    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
        orient: 'vertical',
        left: 'left',
        data: ['00:00-08:00','08:00-12:00','12:00-18:00','18:00-24:00']
    },
            series:[
                {
                    name:'评价类别',
                    type: 'pie',
                    radius: '55%',
					center: ['50%', '60%'],
                    data:[
                        {value:20, name:'00:00-08:00'},
                        {value:100, name:'08:00-12:00'},
                        {value:150, name:'12:00-18:00'},
                        {value:80, name:'18:00-24:00'}
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