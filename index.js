var K1 = "122"
var K2 = "1 22"
var i = 3 //block number
var N1 = 1 //number of 1s
var N = 3 //number of total digits
var speed = 500 //delay in ms when animating

google.charts.load('current', {'packages':['corechart']});

var chartOptions = {
  height: 300,
  legend: {position: 'none'},
  vAxis: {minValue:0, gridlines: {count: 3}, maxValue:1, title: 'Frequency'},
  hAxis: {title: 'Sequence Length'},
  animation:{
        duration: speed-20,
        easing: 'out'
      }
};
var chart;

var freq = [
  ["Digit", "Frequency"],
  [1,1],
  [2, 1/2],
  [3,1/3]
]

/*
window.onresize = function(){
  prime();
}
*/
function Generate10(){
  count = 1;
  while (count < 11){
    drawChart();
    count = count + 1
  }
}

function prime(){
  var h = (document.getElementById('frequency_div').clientHeight + 290).toString() + "px";
  document.getElementById('sequence').style.height = h;
  document.getElementById('title1').innerHTML = "<b>Kolakoski Sequence to " + N.toString() + " digits</b>"
  document.getElementById('sequence').innerText = K2 //print the sequence
  document.getElementById('instances').innerHTML = N1.toString() + "  <small>   of " + N.toString() + " digits</small>" //print the cumulative number of 1s
  document.getElementById('frequency1').innerText = (N1/N).toFixed(3) //print proportion of 1s to 2 decimal places

  var chartData = new google.visualization.arrayToDataTable(freq, false);

  chart = new google.visualization.LineChart(document.getElementById('chart_div'));
  chart.draw(chartData, chartOptions);

}

function drawChart() {
  if (K1[i-1] == 1 && i%2 == 0){ //if K_i = 1 and i is even
    K1 = K1 + "2"
    K2 = K2 + " 2"
    N = N + 1
    freq.push([N,N1/N]);

  }
  else if (K1[i-1] == 2 && i%2 == 0) { //if K_i = 1 and i is odd
    K2 = K2 + " 22"
    K1 = K1 + "22"
    N = N + 1
    freq.push([N,N1/N]);
    N = N + 1
    freq.push([N,N1/N]);
  }
  else if (K1[i-1] == 1 && i%2 == 1) {
    K1 = K1 + "1"
    K2 = K2 + " 1"
    N1 = N1 + 1
    N = N + 1
    freq.push([N,N1/N]);
  }

  else if (K1[i-1] == 2 && i%2 == 1){
    K1 = K1 + "11"
    K2 = K2 + " 11"
    N1 = N1 + 1
    N = N + 1
    freq.push([N,N1/N]);
    N1 = N1 + 1
    N = N + 1
    freq.push([N,N1/N]);
  }

  i = i + 1

  document.getElementById('title1').innerHTML = "<b>Kolakoski Sequence to " + N.toString() + " digits</b>"
  document.getElementById('sequence').innerText = K2 //print the sequence
  document.getElementById('instances').innerHTML = N1.toString() + "  <small>   of " + N.toString() + " digits</small>" //print the cumulative number of 1s
  document.getElementById('frequency1').innerText = (N1/N).toFixed(3) //print proportion of 1s to 2 decimal places

  var chartData = new google.visualization.arrayToDataTable(freq, false);
  document.getElementById('generatebutton').disabled = true; // disable button
  document.getElementById('generate10button').disabled = true; // disable button
  chart.draw(chartData, chartOptions);
  setTimeout(function(){document.getElementById('generatebutton').disabled = false}, speed); //artificial delay in re-enabling button
  setTimeout(function(){document.getElementById('generate10button').disabled = false}, speed)
}
