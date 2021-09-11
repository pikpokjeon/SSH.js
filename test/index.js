import {createSVG,Svg,G,Circle,Rect,animateSVG, createMultiple} from '../svg/svg.js'
import { id } from '../lib/html'
const rect1 = createSVG('rect').attr({
    width: 100,
    height: 100,
    fill: 'red',
    x: 400,
    y: 30,
})

const rect2 = createSVG('rect').attr({
    width: 100,
    height: 400,
    fill: 'blue',
    x: 250,
    y: 100,
})


const dropDownRect = animateSVG(rect2)
    .target('y')
    .animate(({y})=>({dur: "1s", from: 0, to: y+200, repeatCount: "indefinite"}))


const circles = createMultiple('circle', 5, [])
    .attrMap((head,prev, i) => ({cx: (i+1) * 120, cy: 100, r: (i+1) * 10, fill:'red'}))
    

const squares = createMultiple('rect', 7, [])
    .attrMap((head,prev, i) => ({
        width: 60,
        height: 60,
        fill: 'yellow',
        x: 100 * (i+1) ,
        y: 300
    }))


const texts = createMultiple('text', 7, [])
    .attrMap((head,prev, i) =>
        ({
            width: 50,
            height: 70,
            fill: i === 0 ? 'black' : i > 1 && i < 5 ? 'red' : head.fill,
            x: i === 0 ? 50 : prev.x + 100,
            y: i === 0? 50 : prev.y + ((i*10)),
        })
    ).map( (e,i) => e.text(`text-${i}`))

texts[4].attr({
        fill:'green'
})

animateSVG(circles[2])
    .target('cy')
    .animate(({cy}) => ({dur:"5s",from:3,to:cy+100,repeatCount: "indefinite"}))


// const svg = createSVG('svg')
//     .attr({width: 1200, height: 600, x: 200, y: 300})
//     .append([
//         createSVG('g').append([
//             ...squares,
//             animateSVG(squares[4])
//                 .target('x')
//                 .animate(({x,y}) => ({dur: '2s', from: y, to: x +100, repeatCount: 'indefinite'})),
//             dropDownRect,
//             ...texts,
//             ...circles,
//             Circle({cx:  500, cy: 50, r:  10, fill:'green'}),
//             Circle({cx:  500, cy: 450, r:  10, fill:'red'}),
//         ])
//     ])

    
// svgArea.appendChild(svg)
const createShapes = Svg({id: 'create-shapes', width: 700, height: 200})
    .append([
        G({id: 'shape-group'})
            .append([
                rect1,
                Circle({cx: 100, cy: 50, r: 10, fill: 'green'}),
                Circle({cx:  300, cy: 50, r:  10, fill:'red'}),
        ])
    ])

id('create').appendChild(createShapes)

const multipleTexts = Svg({id: 'create-texts', width: 1000, height: 400})
    .append([
        G({id: 'text-group'})
            .append([
                ...texts
        ])
    ])
id('text').appendChild(multipleTexts)

const animatesElement = Svg({id: 'create-animate', width: 1000, height: 500})
    .append([
        G({id: 'animate-group'})
            .append([
                ...circles,
                circles[2].attr({fill:'blue'})
            ])
    ])
id('animate').appendChild(animatesElement)