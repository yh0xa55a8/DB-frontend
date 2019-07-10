function displayChart5(){
    
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

    var otherChart = echarts.init(document.getElementById('chart6'));
    otherChart.clear();
    document.getElementById("chart6").style.display="none";

    var otherChart = echarts.init(document.getElementById('chart7'));
    otherChart.clear();
    document.getElementById("chart7").style.display="none";

    //关闭其他表格
    document.getElementById("chart5").style.display="block";
    var myChart = echarts.init(document.getElementById('chart5'));
    var option = {
            title : {
        	text: '折扣率占比',
        	x:'center'
    },
    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
        orient: 'vertical',
        left: 'left',
        data: ['0.5','0.6','0.8']
    },
            series:[
                {
                    name:'评价类别',
                    type: 'pie',
                    radius: '55%',
					center: ['50%', '60%'],
                    data:[
                        {value:35, name:'0.5'},
                        {value:174, name:'0.6'},
                        {value:210, name:'0.8'},
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

function closeChart5(){
    var myChart = echarts.init(document.getElementById('chart5'));
    myChart.clear();
    document.getElementById("chart5").style.display="none";
}