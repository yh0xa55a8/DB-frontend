function displayChart3(){
    //关闭其他表格
    var otherChart = echarts.init(document.getElementById('chart1'));
    otherChart.clear();
    document.getElementById("chart1").style.display="none";
    
    var otherChart = echarts.init(document.getElementById('chart2'));
    otherChart.clear();
    document.getElementById("chart2").style.display="none";

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
    document.getElementById("chart3").style.display="block";
    var myChart = echarts.init(document.getElementById('chart3'));
            var option = {
                title:{
                    text: '畅销商品词云'
                },
                tooltip: {},
                series: [ {
                    title:{
                        text: '畅销商品词云'
                    },
                    type: 'wordCloud',
                    gridSize: 2,
                    sizeRange: [12, 50],
                    rotationRange: [-90, 90],
                    shape: 'pentagon',
                    width: 600,
                    height: 400,
                    drawOutOfBound: true,
                    textStyle: {
                        normal: {
                            color: function () {
                                return 'rgb(' + [
                                    Math.round(Math.random() * 160),
                                    Math.round(Math.random() * 160),
                                    Math.round(Math.random() * 160)
                                ].join(',') + ')';
                            }
                        },
                        emphasis: {
                            shadowBlur: 10,
                            shadowColor: '#333'
                        }
                    },
                    data: [
                        {
                            name: '人工智能',
                            value: 10000,
                            textStyle: {
                                normal: {
                                    color: 'black'
                                },
                                emphasis: {
                                    color: 'red'
                                }
                            }
                        },
                        {
                            name: '研究',
                            value: 6181
                        },
                        {
                            name: '科学',
                            value: 4386
                        },
                        {
                            name: '理论',
                            value: 4055
                        },
                        {
                            name: 'NLP',
                            value: 2467
                        },
                        {
                            name: '机器学习',
                            value: 2244
                        },
                        {
                            name: '模式识别',
                            value: 1898
                        },
                        {
                            name: 'Google',
                            value: 1484
                        },
                        {
                            name: 'Facebook',
                            value: 1112
                        },
                        {
                            name: 'Yan LeCun',
                            value: 965
                        },
                        {
                            name: '算法',
                            value: 847
                        },
                        {
                            name: '数据挖掘',
                            value: 582
                        },
                        {
                            name: '语义分析',
                            value: 555
                        },
                        {
                            name: 'Andrew Ng',
                            value: 550
                        },
                        {
                            name: 'Stanford',
                            value: 462
                        },
                        {
                            name: '语料库',
                            value: 366
                        },
                        {
                            name: 'PyTorch',
                            value: 360
                        },
                        {
                            name: 'Tensorflow',
                            value: 282
                        },
                        {
                            name: '凸分析',
                            value: 273
                        },
                        {
                            name: '图论',
                            value: 265
                        }
                    ]
                } ]
            };

            myChart.setOption(option);
            window.onresize = myChart.resize;
}

function closeChart3(){
    var myChart = echarts.init(document.getElementById('chart3'));
    myChart.clear();
    document.getElementById("chart3").style.display="none";
}