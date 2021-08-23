
// data
let numbers = [];
let numbers2 = [];
let numbers3 = [];

for(let i = 0; i < 12; i++) {
    numbers.push(Math.floor(Math.random() * 100) + 1);
    numbers2.push(Math.floor(Math.random() * 50)) + 1;
    numbers3.push(Math.floor(Math.random() * 50)) + 1;
}

const ctx = document.getElementById('myChart');

let myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [{
            label: 'Population',
            data: numbers,
            backgroundColor: [
                'rgba(128, 0, 0, 0.5)',
                'rgba(54, 145, 235, 0.5)',
                'rgba(188, 145, 168, 0.5)',
                'rgba(75, 192, 192, 0.5)',
                'rgba(153, 102, 255, 0.5)',
                'rgba(255, 159, 64, 0.5)'
            ],
        },
        {
            label: 'GDP',
            data: numbers2,
            backgroundColor: [
                'rgba(242, 84, 45, 0.5)',
                'rgba(115, 93, 120, 0.5)',
                'rgba(112, 169, 0, 0.5)',
                'rgba(240, 135, 0, 0.5)',
                'rgba(161, 74, 118, 0.5)',
                'rgba(123, 30, 122, 0.5)'
            ],
        },
        {
            label: 'Something else',
            data: numbers3,
            backgroundColor: [
                'rgba(64, 71, 109, 0.5)',
                'rgba(235, 101, 52, 0.5)',
                'rgba(254, 109, 115, 0.5)',
                'rgba(34, 124, 157, 0.5)',
                'rgba(219, 50, 77, 0.5)',
                'rgba(255, 127, 17, 0.5)'
            ],
        }
    ] // data set closing bracket 
    },
    options: {
        scales: {
            y: {
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