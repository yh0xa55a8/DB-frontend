function displayChart6(){
    
    //关闭其他表格
    var otherChart = echarts.init(document.getElementById('chart1'));
    otherChart.clear();
    document.getElementById("chart1").style.display="none";
    
    var otherChart = echarts.init(document.getElementById('chart2'));
    otherChart.clear();
    document.getElementById("chart2").style.display="none";

    var otherChart = echarts.init(document.getElementById('chart3'));
    otherChart.clear();
    document.getElementById("chart3").style.display="none";

    var otherChart = echarts.init(document.getElementById('chart4'));
    otherChart.clear();
    document.getElementById("chart4").style.display="none";

    var otherChart = echarts.init(document.getElementById('chart5'));
    otherChart.clear();
    document.getElementById("chart5").style.display="none";

    var otherChart = echarts.init(document.getElementById('chart7'));
    otherChart.clear();
    document.getElementById("chart7").style.display="none";

    //关闭其他表格
    
    document.getElementById("chart6").style.display="block";
    var myChart = echarts.init(document.getElementById('chart6'));
var option = {        
    title : {
        	text: '评价占比',
        	x:'center'
    },
    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
        orient: 'vertical',
        left: 'left',
        data: ['好评','中评','差评']
    },
            series:[
                {
                    name:'评价类别',
                    type: 'pie',
                    radius: '55%',
					center: ['50%', '60%'],
                    data:[
                        {value:235, name:'好评'},
                        {value:274, name:'中评'},
                        {value:310, name:'差评'},
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

}

function closeChart6(){
    var myChart = echarts.init(document.getElementById('chart6'));
    myChart.clear();
    document.getElementById("chart6").style.display="none";
}




