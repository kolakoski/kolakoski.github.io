var K1 = "122"
var K2 = "1 22"
var i = 3 //block number
var N1 = 1 //number of 1s
var N = 3 //number of total digits
var speed = 1000 //delay in ms when animating
var flag = false;

google.charts.load('current', {'packages':['corechart']});

var chartOptions = {
  height: 300,
  legend: {position: 'none'},
  vAxis: {minValue:0, gridlines: {count: 3}, maxValue:1, title: 'Frequency'},
  hAxis: {title: 'Sequence Length'},
  animation:{
        duration: speed-20,
        easing: 'inandout'
      }
};
var chart;

var freq = [
  ["Digit", "Frequency"],
  [1,1],
  [2, 1/2],
  [3,1/3]
]

function Generate10(){
  count = 1;
  while (count < 11){
    drawChart();
    count = count + 1
  }
}

function prime(){
  // var h = (document.getElementById('frequency_div').clientHeight + 290).toString() + "px";
  // document.getElementById('construction').style.height = h;
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

    table = document.getElementById('construction3');
    table.innerHTML = ""
    var row = table.insertRow(0);
    row.className = "info";
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    cell1.innerHTML = "<b>" + (i).toString() + "</b>";
    cell2.innerHTML = N.toString();
    cell3.innerHTML = 2;

    table = document.getElementById('construction2');
    var row = table.insertRow(N-1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    cell1.innerHTML = (i).toString();
    cell2.innerHTML = N.toString();
    cell3.innerHTML = 2;

    table = document.getElementById('construction1');
    table.deleteRow(1);
    var row = table.insertRow(1)
    row.className = "danger"
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    //cell1.innerHTML = (i).toString();
    cell2.innerHTML = "<b>" + i.toString() + "</b>";
    cell3.innerHTML = K1[i-1];

    document.getElementById('construction2div').scrollTop = document.getElementById('construction2div').scrollHeight;


  }

  else if (K1[i-1] == 2 && i%2 == 0) { //if K_i = 2 and i is even

    K2 = K2 + " 22"
    K1 = K1 + "22"
    N = N + 1
    table = document.getElementById('construction3');
    table.innerHTML = ""
    var row = table.insertRow(0);
    row.className = "info";
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    cell1.innerHTML = "<b>" + (i).toString() + "</b>";
    cell2.innerHTML = N.toString();
    cell3.innerHTML = 2;

    table = document.getElementById('construction2');
    var row = table.insertRow(N-1)
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    cell1.innerHTML = (i).toString();
    cell2.innerHTML = N.toString();
    cell3.innerHTML = 2;



    freq.push([N,N1/N]);
    N = N + 1
    table = document.getElementById('construction3')
    var row = table.insertRow(1);
    row.className = "info";
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    //cell1.innerHTML = (i).toString();
    cell2.innerHTML = N.toString();
    cell3.innerHTML = 2;
    freq.push([N,N1/N]);

    table = document.getElementById('construction2');

    var row = table.insertRow(N-1);

    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    //cell1.innerHTML = (i).toString();
    cell2.innerHTML = N.toString();
    cell3.innerHTML = 2;

    table = document.getElementById('construction1');
    table.deleteRow(1);
    var row = table.insertRow(1)
    row.className = "danger"
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    //cell1.innerHTML = (i).toString();
    cell2.innerHTML = "<b>" + i.toString() + "</b>";
    cell3.innerHTML = K1[i-1];

    document.getElementById('construction2div').scrollTop = document.getElementById('construction2div').scrollHeight;

  }
  else if (K1[i-1] == 1 && i%2 == 1) {

    K1 = K1 + "1"
    K2 = K2 + " 1"
    N1 = N1 + 1
    N = N + 1
    freq.push([N,N1/N]);

    table = document.getElementById('construction3')
    table.innerHTML = ""
    var row = table.insertRow(0);
    row.className = "info";
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    cell1.innerHTML = "<b>" + (i).toString() + "</b>";
    cell2.innerHTML = N.toString();
    cell3.innerHTML = 1;

    table = document.getElementById('construction2');
    var row = table.insertRow(N-1);
    row.className = "active";
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    cell1.innerHTML = (i).toString();
    cell2.innerHTML = N.toString();
    cell3.innerHTML = 1;

    table = document.getElementById('construction1');
    table.deleteRow(1);

    var row = table.insertRow(1)
    row.className = "danger"
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    //cell1.innerHTML = (i).toString();
    cell2.innerHTML = "<b>" + i.toString() + "</b>";
    cell3.innerHTML = K1[i-1];
    document.getElementById('construction2div').scrollTop = document.getElementById('construction2div').scrollHeight;

  }

  else if (K1[i-1] == 2 && i%2 == 1){


    K1 = K1 + "11"
    K2 = K2 + " 11"
    N1 = N1 + 1
    N = N + 1
    table = document.getElementById('construction3')
    table.innerHTML = ""
    var row = table.insertRow(0);
    row.className = "info";
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    cell1.innerHTML = "<b>" + (i).toString() + "</b>";
    cell2.innerHTML = N.toString();
    cell3.innerHTML = 1;

    table = document.getElementById('construction2');
    var row = table.insertRow(N-1);
    row.className = "active";
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    cell1.innerHTML = (i).toString();
    cell2.innerHTML = N.toString();
    cell3.innerHTML = 1;

    freq.push([N,N1/N]);
    N1 = N1 + 1
    N = N + 1
    freq.push([N,N1/N]);

    table = document.getElementById('construction3')
    var row = table.insertRow(1);
    row.className = "info";
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    //cell1.innerHTML = (i).toString();
    cell2.innerHTML = N.toString();
    cell3.innerHTML = 1;

    table = document.getElementById('construction2');
    var row = table.insertRow(N-1);
    row.className = "active";
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    //cell1.innerHTML = (i).toString();
    cell2.innerHTML = N.toString();
    cell3.innerHTML = 1;

    table = document.getElementById('construction1');
    table.deleteRow(1);
    var row = table.insertRow(1)
    row.className = "danger"
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    //cell1.innerHTML = (i).toString();
    cell2.innerHTML = "<b>" + i.toString() + "</b>";
    cell3.innerHTML = K1[i-1];
    document.getElementById('construction2div').scrollTop = document.getElementById('construction2div').scrollHeight;

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

  if (flag == false) {
  setTimeout(function(){document.getElementById('generatebutton').disabled = false}, speed); //artificial delay in re-enabling button
  setTimeout(function(){document.getElementById('generate10button').disabled = false}, speed)
  }

}

function con(){
  if(flag){
    drawChart();
    setTimeout(con, 1000);
  }
}

function cont(){
  flag = true;
  document.getElementById('contbutton').setAttribute('onClick', 'stop();');
  document.getElementById('contbutton').value = "Stop"
  con();
}

function stop(){
  flag = false;
  document.getElementById('contbutton').setAttribute('onClick', 'cont();');
  document.getElementById('contbutton').value = "Generate #forever"
  document.getElementById('generatebutton').disabled = false
  document.getElementById('generate10button').disabled = false
}
