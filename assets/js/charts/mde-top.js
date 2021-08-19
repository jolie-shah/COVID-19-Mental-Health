var ctx = document.getElementById("mdetop").getContext('2d');
ctx.canvas.width = 200;
ctx.canvas.height = 200;
var mdetop = new Chart(ctx, {
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
                label: 'New Mexico',
                borderColor: 'rgb(0, 128, 0)',
                backgroundColor: 'rgb(144, 238, 144)',
                fill: false,
                lineTension: false,
                data: [11.73, 10.73, 9.79, 11.50, 12.61, 14.88, 17.43],
            },{
                label: 'North Carolina',
                borderColor: 'rgb(0, 128, 0)',
                backgroundColor: 'rgb(144, 238, 144)',
                fill: false,
                lineTension: false,
                data: [8.11, 9.64, 11.44, 12.35, 11.70, 12.03, 15.05],
            },{
                label: 'Louisiana',
                borderColor: 'rgb(0, 128, 0)',
                backgroundColor: 'rgb(144, 238, 144)',
                fill: false,
                lineTension: false,
                data: [8.96, 9.31, 10.06, 11.00, 10.15, 10.76, 12.84],
            },{
                label: 'Washington',
                borderColor: 'rgb(0, 128, 0)',
                backgroundColor: 'rgb(144, 238, 144)',
                fill: false,
                lineTension: false,
                data: [10.56, 11.08, 12.05, 12.54, 13.23, 13.98, 15.66],
            },{
                label: 'Kansas',
                borderColor: 'rgb(0, 128, 0)',
                backgroundColor: 'rgb(144, 238, 144)',
                fill: false,
                lineTension: false,
                data: [8.28, 9.87, 11.34, 11.18, 12.53, 13.84, 14.95],
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
    },
});


