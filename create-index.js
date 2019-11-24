const fs = require('fs');

fs.writeFileSync('visuals/index.html', `
<html>

  <head>
    <script src="https://cdn.jsdelivr.net/npm/chart.js@2.8.0">
    </script>
  </head>

  <body>
    <canvas id="myChart"></canvas>
    <script>
      var ctx = document.getElementById('myChart').getContext('2d');
      var chart = new Chart(ctx, ${fs.readFileSync('chart.json')});
    </script>
  </body>
</html>`)