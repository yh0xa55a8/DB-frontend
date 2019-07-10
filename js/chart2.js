
function displayChart2(){
	//关闭其他表格
    var otherChart = echarts.init(document.getElementById('chart1'));
    otherChart.clear();
    document.getElementById("chart1").style.display="none";

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
	
	document.getElementById("chart2").style.display="block";
	var myChart = echarts.init(document.getElementById('chart2'));
	var option = {
		title:{
			text: 'GMV变化趋势'
		},
		xAxis: {
			type: 'category',
			data: ['2012', '2013', '2014', '2015', '2016', '2017', '2018']
		},
		yAxis: {
			type: 'value'
		},
		legend: {
			data: ['GMV']
		},
		series: [{
			data: [820, 932, 901, 934, 1290, 1330, 1320],
			type: 'line',
			smooth: true
		}]
	};
	myChart.setOption(option);
}
function closeChart2(){
	var myChart = echarts.init(document.getElementById('chart2'));
	myChart.clear();
	document.getElementById("chart2").style.display="none";
}