var options = {
    fullWidth: true,
    chartPadding: {
      right: 40,
      top: 40
    },
    showArea: true,
    axisY: {
        onlyInteger: true,
    },
    high: 25,
  }

var data = {
    labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30],
    series: [
      [1, 2, 3, 2, 5, 5, 4, 4, 2, 1, 4, 0],
    ],
    

  }

new Chartist.Line('.ct-chart', data, options);