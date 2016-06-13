var PieChart = function(title, data, container){

  var container = document.getElementById('pie-chart')

    var chart = new Highcharts.Chart({
      chart: {
        type: "pie", 
        renderTo: container
      },
      title: {
        text: title
      },
      series: [
        {
          name: "Number of Films", 
          data: data
      }
    ]
  })
}