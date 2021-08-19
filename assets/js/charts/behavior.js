var ctx = document.getElementById("behavior").getContext('2d');
ctx.canvas.width = 500;
ctx.canvas.height = 500;
var behavior = new Chart(ctx, {
  type: 'doughnut',
  data: {
    labels: ["More/Less Socializing", "Change in Education", "Going Out Less", "Change in Exercise", 
    "Change in Eating Patterns", "Carefulness", "Better Hygiene", "Change in Sleep/Rest", "Change in Schedule",
    "Change in House", "Loss of Employment", "Financial worry", "Change in Employment", "Change in Technolgoy Use",
    "Change in Shopping", "Less Physical Contact", "More/Less TIme", "Change in Travel", "Change in Outdoor Activites",
    "Self-reflection", "News/Media Consumption", "Leisure Activites", "Physical Health", "Caretaking", "Slow Life", 
    "Driving Less"],
    datasets: [{
      backgroundColor: [
        "#B5EAEA",
        "#EDF6E5",
        "#FFBCBC",
        "#F38BA0",
        "#BEAEE2",
        "#FFF5DA",
        "#CEE5D0",
        "#9E9D89",
        "#E2BCB7",
        "#B67162",
        "#907FA4",
        "#A6D6D6",
        "#CD5D7D",
        "#A7C5EB",
        "#949CDF",
        "#B8DFD8",
        "#4C4C6D",
        "#B7657B",
        "#7868E6",
        "#A1CAE2",
        "#B2D3BE",
        "#9EA9F0",
        "#CCC1FF",
        "#69779B",
        "#ACDBDF",
        "#FFEAFE"
      ],
      data: [21.1, 15.7, 12.9, 9.5, 7.6, 7.5, 7.4, 6.9, 5.9, 5.3, 4.3, 4.2, 3.5, 3.4, 2.9, 2.7, 2.6, 2.0, 2.0, 
        1.7, 1.6, 1.4, 1.3, 1.0, 0.5, 0.2]
    }]
  },
  options: {
    responsive: true,
    legend: {
      position: 'top',
    }
  }
});