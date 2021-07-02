// // 각자 모듈을 임포트 해서
import { Render } from "./render-yaejin.js";
import { Render as Render2 } from "./jhChart.js";

// 초기화
const yaejin = Render()
yaejin.init('예진 모듈 테스트')

const jhChart = Render2()
const data = [
    {
        'category': 'banana',
        'salesCount': 100,
    },
    {
        'category': 'strawberry',
        'salesCount' : 21,
    },
    {
        'category': 'tomato',
        'salesCount' : 45,
    },
    {
        'category': 'lemon',
        'salesCount' : 5,
    },
];

const options = {
    title: {
        text: '판매량',
    },
    series: {
            type: 'line',
            category: "category",
            value: "salesCount",
    },
    options: {
        event: {
            tooltip: [
                {
                    display: true, // default false
                    formatter: (value) => { return customValue; }, // 툴팁 커스터마이징
                }
            ],
            cursor: [
                {
                    display: true, // default false
                    format: ['vertical', 'horizontal', 'cross']
                }
            ]
        },
        // size: {width: 1500, height: 750}, 스크립트로 함수에 사이즈 가져옴 HTML으로 사이즈 정함
        responsive: true,
        legend: true,
        subType: "bar",//bar 이면 stack, line 이면 curve, stack, straight,
        percent: true, // 절대값/ 상대값 표시
    },
}

jhChart.init('chart-2', data, options);