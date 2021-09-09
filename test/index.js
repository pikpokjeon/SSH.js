import {createSVG} from '../svg/svg.js'
import { createHTMLElement,setTextContent,setAttribute,createFragment } from '../lib/html.js'



const svgArea = document.getElementById('svg-area')


const rect1 = createSVG('rect').attr({
    width: 200,
    height: 600,
    fill: 'red',
    x: 200,
    y: 300,
})

const testAnimation = createSVG('animate').attr({
    attributeName: "rx",
    values: "1;20;0", dur: "3s", repeatCount:"infinite"
})

const rect2 = createSVG('rect').attr({
    width: 100,
    height: 400,
    fill: 'blue',
    x: 250,
    y: 100,
})


const svg = createSVG('svg')
    .attr({width: 1200, height: 600, x: 200, y: 300})
    .append([
        createSVG('g').append([
            rect1.append([testAnimation]), rect2.append([testAnimation]),
            createSVG('rect').attr({
                width: 400,
                height: 100,
                fill: 'yellow',
                x: 200,
                y: 300,
            }),
            
        ])
    ])

    
svgArea.appendChild(svg)
