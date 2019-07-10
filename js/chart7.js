function displayChart7(){
	
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

    var otherChart = echarts.init(document.getElementById('chart6'));
    otherChart.clear();
    document.getElementById("chart6").style.display="none";

    //关闭其他表格
	
	document.getElementById("chart7").style.display="block";
    var myChart = echarts.init(document.getElementById('chart7'));
    var option = {
		title:{
            text: '年龄与购买量'
        },
		xAxis:{
            type:'category',
            data:['10岁以下', '10-20', '20-30', '30-40','40岁以上']
        },
        yAxis:{
            type:'value'
        },
        series:[{
            type: 'line',
            name:'购买量',
            data:[3.5, 6, 13, 20, 15]
        }]
    };
    myChart.setOption(option);
}
function closeChart7(){
    var myChart = echarts.init(document.getElementById('chart7'));
    myChart.clear();
    document.getElementById("chart7").style.display="none";
}

