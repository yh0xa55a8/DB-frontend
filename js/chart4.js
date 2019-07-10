function displayChart4(){
    
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
    
    document.getElementById("chart4").style.display="block";
    var dom = document.getElementById("chart4");
    var myChart = echarts.init(dom);
    var app = {};
    option = null;
    option = {
        title:{
            text: '用户地域分布Top5'
        },
        series: [{
            type: 'treemap',
            data: [{
                name: '上海',            // First tree
                value: 45,
            }, {
                name: '北京',            // First tree
                value: 25,
            }, {
                name: '广州',            // First tree
                value: 15,
            }, {
                name: '深圳',            // First tree
                value: 10,
            }, {
                name: '香港',            // First tree
                value: 5,
            }, 
            ]
        }]
    };
    ;
    if (option && typeof option === "object") {
        myChart.setOption(option, true);
    }
}

function closeChart4(){
    var myChart = echarts.init(document.getElementById('chart4'));
    myChart.clear();
    document.getElementById("chart4").style.display="none";
}
