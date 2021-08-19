var ctx = document.getElementById("impacts").getContext('2d');
ctx.canvas.width = 500;
ctx.canvas.height = 500;
var impacts = new Chart(ctx, {
  type: 'doughnut',
  data: {
    labels: ["Lack of Motivation", "Anxiety", "Stress", "Isolation", "Worry", "Fear", "Entrapment", "Boredom", 
    "Uncertainity", "Sadness","Depression", "Annoyance", "Missing Out", "Mental Health", "Fatigue", "Appreciation",
    "Anger", "Relaxation", "Optimism", "Productivity", "Hopelessness/Helpless", "Adaptation", "Empathy", "Trust", 
    "Freedom", "Lack of Safety", "Guilt", "Overreaction/Underreaction", "Inconvenience"],
    datasets: [{
      backgroundColor: [
        "#bfd2de",
        "#e3c09b",
        "#d7cbd4",
        "#bb7db2",
        "#6f6c9e",
        "#c6a78f",
        "#a0b3a8",
        "#a47053",
        "#efca66",
        "#e48826",
        "#bb99b7",
        "#ecc8c9",
        "#ecdab9", 
        "#cec3c8",
        "#909cac",
        "#528e86",
        "#b7ced2",
        "#a19a90",
        "#636250",
        "#97cded",
        "#02a0da",
        "#b8afc9",
        "#7f5b5a",
        "#aa646c",
        "#dbb5bb",
        "#e7c8ba",
        "#958948",
        "#993360",
        "#96a36f"
      ],
      data: [21.5, 17.4, 14.6, 13.3, 8.3, 8.1, 6.7, 6.2, 6.0, 5.8, 5.7, 5.1, 5.1, 3.9, 3.4, 3.3, 1.8, 1.6, 1.5, 
      1.4, 1.3, 1.0, 1.0, 0.9, 0.8, 0.8, 0.5, 0.3, 0.3]
    }]
  },
  options: {
    responsive: true,
    legend: {
      position: 'top',
    }
  }
});