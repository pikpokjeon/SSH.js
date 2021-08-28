
const chartOptions = {
    title: {
        text: '판매량',
    },
    series: [
        {
            type: 'line',
            subType: 'curve',
            value: 'population',
            group: 'date',
        },
        {
            type: 'bar',
            value: 'price',
            group: 'date',
        },
    ],
    options: {
        event: {
            tooltip: [{
                target: 'population',
                format: (value) => ({ 인구: value + '명' }),
                dots: {
                    display: true,
                },
            }],
            pointer: {
                format: ['vertical', 'horizontal'],
                position: ['data', 'mouse'],
                range: {
                    select: 'area'
                }
            },
        },
        responsive: true,
        legend: true,
        infarctSize: 'relative',
        theme: {
            mode: 'light',
        }
    },
}


export { chartOptions }