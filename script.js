Highcharts.chart('container', {
  chart: {
    type: 'spline'
  },
  title: {
    text: '2014-2019新加波、韓國、義大利入境旅客人數比較圖'
  },
  subtitle: {
    text: '資料來源: UNTWO'
  },
  xAxis: {
    categories: ['2014', '2015', '2016', '2017', '2018', '2019',]
  },
  yAxis: {
    title: {
      text: '入境人數(單位:百萬)'
    },
    labels: {
      formatter: function () {
        return this.value;
      }
    }
  },
  tooltip: {
    crosshairs: true,
    shared: true
  },
  plotOptions: {
    spline: {
      marker: {
        radius: 4,
        lineColor: '#666666',
        lineWidth: 1
      }
    }
  },
  series: [{
    name: '香港',
    marker: {
      symbol: 'square' },
    data: [27.8,26.7,26.6,27.9,29.3,23.8
] 
  }, {
    name: '韓國',
    marker: {
      symbol: 'diamond'
    },
    data: [14.2,13.2,17.2,13.3,15.3,17.5]
 }, { name: '義大利',
    marker: {
      symbol: 'circle'
    },
    data: [48.6,50.7,52.4,58.3,61.6,64.5]
    }
   ]
});