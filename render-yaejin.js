import { copyParams, svgList, computeSize, genElement } from './lib-yaejin.js'
import * as populationData from './test/population.json'
import * as priceData from './test/price.json'
import 'regenerator-runtime/runtime' // parcel async/await 에러 해결

// // 각자 모듈을 임포트 해서
import { copyParams, getSVG, computeSize, genElement, CreateSVGGroupElement } from './lib-yaejin.js'

// 초기화
const init = () =>
{
    const root = document.getElementById('chart-0')

    const getSize = () =>
    {
        const { width, height } = root.getBoundingClientRect()
        root.innerText = width
        const h = Number(root.getAttribute('height'))
        const w = Number(root.getAttribute('width'))
        const size = { width: w, height: h }
        return size
    }
    const d = [1, 2, 3, 4, 5]
    const s = Array.from((['10-1', '10-2', '10-3', '10-4', '10-5']))

    const chart1 = {
        d: d,
        labels: s,
        size: getSize()
    }

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


    const base = CreateSVGGroupElement(baseList)
    base.svg.appendChild(base.eventArea)
    base.svg.appendChild(base.group)

    const toolTipList = (i, v) => getSVG({ ...chart1.size, d: [...(Array.from(Object.values(chart1['d'])))], i, v })

    const barList = (i, v) => getSVG({ ...chart1.size, d: [...(Array.from(Object.values(chart1['d'])))], i, v })


    const createMultiple = (group, lists, chart) => (base) =>
    {

        // if (group.firstChild ?? false) group.removeChild(group.firstChild)
        for (const [i, v] of Object.entries(([...Array.from([...chart.d])])))
        {
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
            tooltips[Symbol.toStringTag] = 'tooltipSVG'

            const bars = lists(i, v).barList({
                attr: {}, id: {
                    bar: `bar-${i}`
                }
            })['barGroup']
            bars[Symbol.toStringTag] = 'barSVG'


            const { plot, label, gBox, dataText } = CreateSVGGroupElement(tooltips)
            const { bar } = CreateSVGGroupElement(bars)
            label.textContent = chart.labels[i]
            dataText.textContent = v
            console.log(bar)
            gBox.appendChild(label)
            gBox.appendChild(dataText)
            gBox.appendChild(plot)
            gBox.appendChild(bar)
            group.appendChild(gBox)

        }
        base.appendChild(group)
    }


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


