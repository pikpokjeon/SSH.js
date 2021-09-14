import {id} from "../lib/html.js";
import {createMultiple, createSVG} from "../svg/create.js";
import {coordinate} from "../svg/coordinate.js"
import {getPath} from "../svg/path.js"

id('chart-data').addEventListener('input', (e)=>handleData(e))



const [width,height] = [700,400]
let dataValue1 = [20,50,63,13,68,42,23,76,43,23,]
let dataValue2 = [50,30,23,53,38,2,43,36,23,73,]

id('chart-data').value = dataValue1

const linePath = createSVG('path').attr({
    fill: 'none', stroke: '#ff3b9f',  'stroke-width':3,
    d: getPath(width,height,dataValue1,'line').path
})

let coord = coordinate(width, height, dataValue2)

const bars = createMultiple('rect', dataValue2.length, []).attrMap((h, p, i) =>
({
    fill:"blueviolet",
    width: 25,
    height: height - coord.y(dataValue2[i]),
    x: coord.x(i),
    y: coord.y(dataValue2[i])
}))

const handleData = (e) =>
{
    dataValue1 = id('chart-data').value.split(',').map(s => Number(s))
    linePath.attr({d: getPath(width, height, dataValue1, 'line').path})
}
    
const svg = createSVG('svg').attr({width: 700, height: 400,overflow:'visible'}).append([
    createSVG('g').append([
        ...bars,
        linePath,
    ]),

])

id('chart-area').appendChild(svg)