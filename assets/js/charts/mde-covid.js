
var ctx = document.getElementById("mdecovid").getContext('2d');
ctx.canvas.width = 200;
ctx.canvas.height = 200;
var mdecovid = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ["2015", "2016", "2017", "2018", "2019", "2020", "2021"],
        datasets: [
            {
                label: 'Arizona',
                borderColor: 'rgb(0, 4, 254)',
                backgroundColor: 'rgb(100, 149, 237)',
                fill: false,
                lineTension: false,
                data: [9.39, 10.91, 13.23, 13.20, 11.68, 13.06, 15.93],
            },{
                label: 'Oklahoma',
                borderColor: 'rgb(0, 4, 254)',
                backgroundColor: 'rgb(100, 149, 237)',
                fill: false,
                lineTension: false,
                data: [8.74, 9.23, 10.29, 12.57, 13.53, 13.86, 16.48],
            },{
                label: 'Utah',
                borderColor: 'rgb(0, 4, 254)',
                backgroundColor: 'rgb(100, 149, 237)',
                fill: false,
                lineTension: false,
                data: [10.17, 11.45, 12.47, 11.97, 13.81, 15.48, 16.64],
            },{
                label: 'South Carolina',
                borderColor: 'rgb(0, 4, 254)',
                backgroundColor: 'rgb(100, 149, 237)',
                fill: false,
                lineTension: false,
                data: [9.03, 9.44, 9.95, 10.96, 10.83, 12.31, 13.56],
            },{
                label: 'North Dakota',
                borderColor: 'rgb(0, 4, 254)',
                backgroundColor: 'rgb(100, 149, 237)',
                fill: false,
                lineTension: false,
                data: [7.27, 7.95, 9.68, 10.47, 11.25, 12.13, 13.75],
            },{
                label: 'Rhode Island',
                borderColor: 'rgb(220, 20, 60)',
                backgroundColor: 'rgb(255, 127, 127)',
                fill: false,
                lineTension: false,
                data: [9, 11.32, 12.86, 13.03, 13.72, 13.30, 13.40],
            },{
                label: 'South Dakota',
                borderColor: 'rgb(220, 20, 60)',
                backgroundColor: 'rgb(255, 127, 127)',
                fill: false,
                lineTension: false,
                data: [8.32, 8.61, 8.95, 9.90, 11.79, 12.56, 12.53],
            },{
                label: 'Arkansas',
                borderColor: 'rgb(220, 20, 60)',
                backgroundColor: 'rgb(255, 127, 127)',
                fill: false,
                lineTension: false,
                data: [9.01, 10.17, 11.95, 12.72, 13.05, 13.36, 14.74],
            },{
                label: 'Tennesse',
                borderColor: 'rgb(220, 20, 60)',
                backgroundColor: 'rgb(255, 127, 127)',
                fill: false,
                lineTension: false,
                data: [8.57, 9.39, 9.91, 10.92, 12.13, 12.79, 12.27],
            },{
                label: 'Florida',
                borderColor: 'rgb(220, 20, 60)',
                backgroundColor: 'rgb(255, 127, 127)',
                fill: false,
                lineTension: false,
                data: [8.05, 9.64, 10.50, 11.88, 12.84, 13.09, 13.17],
            },
        ]
    },
    options: {
        scales: {
            yAxes: [{
                scaleLabel: {
                    display: true,
                    labelString: 'Prevalence of Youths with At Least One Major MDE (%)'
                }
            }],
            xAxes: [{
                scaleLabel: {
                    display: true,
                    labelString: 'Year'
                }
            }]
        }
    }
});


