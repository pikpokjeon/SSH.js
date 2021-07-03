import { copyParams, svgList, computeSize, genElement } from './lib-yaejin.js'
import * as populationData from './test/population.json'
import * as priceData from './test/price.json'
import 'regenerator-runtime/runtime' // parcel async/await 에러 해결

// // 각자 모듈을 임포트 해서
import { copyParams, getSVG, computeSize, genElement, CreateSVGGroupElement } from './lib-yaejin.js'
//infarctSize absolute/ relative 인자로 받는다

// 초기화
const init = () =>
{
    const root = document.getElementById('chart-0')

    /**
     * 
     * @param {*} type 'responsive' || 'fixed' 
     * @returns 
     */
    const getSize = type =>
    {
        const { width, height } = root.getBoundingClientRect()
        const fixedHeight = Number(root.getAttribute('height'))
        const fixedWidth = Number(root.getAttribute('width'))
        const size = {
            width: type === 'responsive'
                ? width : fixedWidth,
            height: type === 'responsive'
                ? width : fixedWidth
        }
        return size
    }

    // 뽑아온 차트정보 // 시리즈별로 나누고 기본옵션도 나눠야 한다
    const chart1 = {
        title: '',
        d: [1, 2, 3, 4, 5],
        labels: Array.from((['10-1', '10-2', '10-3', '10-4', '10-5'])),
        size: getSize()
    }

    // 기본 svg 선언 (이 부분은 차트를 커스텀 할 때 (속성과 다른부분을 초기화))
    const baseList = getSVG({ ...chart1.size, d: chart1.d })({
        attr: {
            eventArea: {
                fill: 'white',
            }
        }, id:
        {
            svg: 'svg',
            eventArea: 'eventArea',
            group: 'group'
        }
    })['baseSVG']


    // 가져온 svg리스트로 실제 엘리먼트를 생성하여 base로 할당
    const base = CreateSVGGroupElement(baseList)
    base.svg.appendChild(base.eventArea)
    base.svg.appendChild(base.group)


    // 좌표 값이 있어야 하는 요소들을 위해 i, v만 넘길 수 있게 함수구성 ( 커링을 사용하여 단순화 할 수 있음)
    const toolTipList = (i, v) => getSVG({ ...chart1.size, d: [...(Array.from(Object.values(chart1['d'])))], i, v })
    const barList = (i, v) => getSVG({ ...chart1.size, d: [...(Array.from(Object.values(chart1['d'])))], i, v })


    // 데이터 개수에 따른 여러 요소들(데이터 기반 좌표 위치가 필요한)을 생성하는 함수
    const createMultiple = (group, lists, chart) => (base) =>
    {
        // 동적 렌더링시 기존 엘리먼스 삭제가 필요할 때,
        // if (group.firstChild ?? false) group.removeChild(group.firstChild)
        for (const [i, v] of Object.entries(([...Array.from([...chart.d])])))
        {
            //동적으로 툴팁의 속성이나 아이디 값을 부여해준다
            const tooltips = lists(i, v).toolTipList({
                attr: {
                    label: {}
                }, id: {
                    label: `label-${i}`,
                    dataText: `dataText-${i}`,
                    plot: `plot-${i}`,
                    gBox: `gBox-${i}`
                }
            })['tooltipGroup']
            // 익명 값에 식별자를 부여하려면 심볼을 사용
            tooltips[Symbol.toStringTag] = 'tooltipSVG'

            const bars = lists(i, v).barList({
                attr: {}, id: {
                    bar: `bar-${i}`
                }
            })['barGroup']
            bars[Symbol.toStringTag] = 'barSVG'


            // 위 선언리스트를 가지고 엘리먼트를 생성해준다
            const { plot, label, gBox, dataText } = CreateSVGGroupElement(tooltips)
            const { bar } = CreateSVGGroupElement(bars)
            label.textContent = chart.labels[i]
            dataText.textContent = v

            //이건 나중에 다수의 요소를 한 부모 요소로 추가 가능하게 함수 구성
            gBox.appendChild(label)
            gBox.appendChild(dataText)
            gBox.appendChild(plot)
            gBox.appendChild(bar)
            group.appendChild(gBox)

        }
        base.appendChild(group)
    }


    // 여러 리스트 내 요소들이 동적인 데이터가 필요할 때 묶어줌, 이부분 확장성 고려해서 수정 가능
    const lists = (i, v) => ({
        toolTipList: toolTipList(i, v),
        barList: barList(i, v)
    })



    createMultiple(base.group, lists, chart1)(base.svg)

    root.appendChild(base.svg)
}

export { init }
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


