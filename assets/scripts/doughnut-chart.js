$(function(){
    //get the doughnut chart canvas
    var ctx1 = $("#doughnut-chartcanvas-1");
  
    //doughnut chart data
    var data1 = {
      labels: ["match1", "match2", "match3", "match4", "match5"],
      datasets: [
        {
          label: "TeamA Score",
          data: [10, 50, 25, 70, 40],
          backgroundColor: [
            "#16D620",
            "#3366CC",
            "#DC3912",
            "#990099",
            "#0099C6"
          ],
          borderColor: [
            "#DD4477",
            "#316395",
            "#AAAA11",
            "#109618",
            "#E67300"
          ],
          borderWidth: [0, 0, 0, 0, 0]
        }
      ]
    };
    
    //options
    var options = {
      segmentShowStroke: false,
      responsive: true,
      title: {
        display: true,
        position: "top",
        text: "Doughnut Chart",
        fontSize: 18,
        fontColor: "#111"
      },
      legend: {
        display: true,
        position: "bottom",
        labels: {
          fontColor: "#333",
          fontSize: 16
        }
      }
    };
  
    //create Chart class object
    var chart1 = new Chart(ctx1, {
      type: "doughnut",
      data: data1,
      options: options
    });
});
  