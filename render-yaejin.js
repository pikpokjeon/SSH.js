import { copyParams, svgList, computeSize, genElement } from './lib-yaejin.js'
import * as populationData from './test/population.json'
import * as priceData from './test/price.json'
import 'regenerator-runtime/runtime' // parcel async/await 에러 해결


const Render = () =>
{
    const init = text =>
    {
        const root = document.getElementById('chart-0')
        const { width, height } = root.getBoundingClientRect()
        root.innerText = width
        const h = root.getAttribute('height')
        const w = root.getAttribute('width')
        const size = { width: w, height: h }
        const SVG = genElement('svg', { ...size })
        root.appendChild(SVG)
        const eventArea = genElement('rect', { ...size, fill: '#f6f6f6' })
        SVG.appendChild(eventArea)

    }
    return { init }
}


export { Render }



const Chart = (option, ...data) =>
{
    // 사용자에게 보여지지 않는 초기 설정
    let store = {
        title: '',
        size: {
            width: -1,
            height: -1,
        },
        series: {}, // 한 그룹안에 몇개의 차트가 존재하는가? 동적으로 추가 가능
        options: {
            event: {},
            responsive: false,
            legend: false,
            infarctSize: 'relative',
            theme: {
                mode: 'light',
                name: 'default'
            }
        },
    }

    store = new Proxy(store, {
        get: (target, prop) =>
        {
            return target[prop]
        },
        set: (target, prop, data) =>
        {
            if (typeof data === 'object')
            {
                target[prop] = Object.entries(data).reduce((acc, cur) =>
                {
                    Object.entries(cur[1]).reduce((acc, cur) =>
                    {
                        Reflect.set(acc, [cur[0]], typeof cur[1] === 'object' ? Object.values(cur[1]) : cur[1])
                        return acc

                    }, target[prop])
                    return acc
                }, target[prop])
                return target[prop]
            } else
            {
                target[prop] = data
            }
        }
    })

    const setConfig = topic => (data, key) => Reflect.set(store, topic, typeof data === 'object' ? { [key]: data } : data)


    return { store, setConfig }
}

const chart = Chart()

const setSeries = chart.setConfig('series')

setSeries(
    {
        type: 'line',
        subType: 'curve',
        value: populationData,
        group: 'date'
    }, 'population')

setSeries(
    {
        type: 'line',
        subType: 'curve',
        value: priceData,
        group: 'date'
    }, 'price')

chart.setConfig('title')('test-chart')

chart.setConfig('size')({ width: 1200 })
chart.setConfig('size')({ height: 750 })


const a = chart.store
console.log(a)
