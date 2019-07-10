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
                        {value:150, name:'0-12岁'},
                        {value:274, name:'13-21岁'},
                        {value:450, name:'22岁-40岁'},
                        {value:100, name:'41岁及以后'},
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