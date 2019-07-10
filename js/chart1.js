function displayChart1(){
    //关闭其他表格
    
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

    var otherChart = echarts.init(document.getElementById('chart6'));
    otherChart.clear();
    document.getElementById("chart6").style.display="none";

    var otherChart = echarts.init(document.getElementById('chart7'));
    otherChart.clear();
    document.getElementById("chart7").style.display="none";

    //关闭其他表格
    
    document.getElementById("chart1").style.display="block";
    var myChart = echarts.init(document.getElementById('chart1'));
    var option = {
        title:{
            text: '销量Top10的书籍'
        },
        legend: {
			data: ['销量']
		},
        xAxis:{
            data:['追风筝的人', '彷徨之刃', '放学后', '湖畔']
        },
        yAxis: {},
        series:[{
            name:'销量',
            type: 'bar',
            data:[100, 80, 30, 20]
        }]
    };
    myChart.setOption(option);
}

function closeChart1(){
    var myChart = echarts.init(document.getElementById('chart1'));
    myChart.clear();
    document.getElementById("chart1").style.display="none";
}