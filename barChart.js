/*
*
*    file includes:
*        1) Bar Chart
         2) Dropdown legend
*
*/

// data
let numbers = [];
let numbers2 = [];
let numbers3 = [];

for(let i = 0; i < 12; i++) {
    numbers.push(Math.floor(Math.random() * 100) + 1);
    numbers2.push(Math.floor(Math.random() * 50)) + 1;
    numbers3.push(Math.floor(Math.random() * 50)) + 1;
}

const ctx = document.getElementById('barChart');

const DISPLAY = true;
const BORDER = false;
const CHART_AREA = false;
const TICKS = true;

let myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [{
            label: 'Population',
            data: numbers,
            backgroundColor: 'rgba(128, 0, 0, 0.5)',
        },
        {
            label: 'GDP',
            data: numbers2,
            backgroundColor: 'rgba(242, 84, 45, 0.5)',
        },
        {
            label: 'Something else',
            data: numbers3,
            backgroundColor: 'rgba(64, 71, 109, 0.5)',
        }
    ] // data set closing bracket 
    },
    options: {
        responsive: true,
        scales: {
            y: {
                grid: {
                    drawBorder: false,
                },
                beginAtZero: true,
                ticks: {
                    callback: function (value) {
                      return `${value}%`;
                    },
                },
                title: {
                    display: true,
                    text: 'Percent observations (%)'
                }
            },
            x: {
                stacked: true,
                grid: {
                    display: DISPLAY,
                    drawBorder: BORDER,
                    drawOnChartArea: CHART_AREA,
                    drawTicks: TICKS,
                },
                title: {
                    display: true,
                    text: 'Month & Decade'
                },
                min: 1,
                max: 36,
                ticks: {
                    stepSize: 1 
                }
            }
        }
    }
});

// dropdown legend 
const legendButton = document.querySelector('.legendBtn');
const closeButton = document.querySelector('.legend-options__closing-btn');
const openedLegend = document.querySelector('.legend-options--opened');

legendButton.onclick = () => {
    openedLegend.classList.remove('closed');
}

closeButton.onclick = () => {
    openedLegend.classList.add('closed');
}