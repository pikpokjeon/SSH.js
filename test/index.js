import {createSVG, createMultiple} from '../svg/svg.js'
import { animateSVG } from '../svg/animation.js'

const svgArea = document.getElementById('svg-area')
const codeArea = document.getElementById('code-area')

const rect1 = createSVG('rect').attr({
    width: 200,
    height: 600,
    fill: 'red',
    x: 200,
    y: 300,
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
    .attrMap((t, i) => ({cx: i * 200, cy: 50, r: i * 10, fill:'red'}))
    
const squares = createMultiple('rect', 7, [])
    .attrMap((t, i) => ({
        width: 100,
        height: 100,
        fill: 'yellow',
        x: 200 * i ,
        y: 300
    }))


animateSVG(circles[2])
    .target('cy')
    .animate(({cy}) => ({dur:"5s",from:3,to:cy+100,repeatCount: "indefinite"}))

const svg = createSVG('svg')
    .attr({width: 1200, height: 600, x: 200, y: 300})
    .append([
        createSVG('g').append([
            ...squares,
            animateSVG(squares[4])
                .target('y')
                .animate(({y}) => ({dur: '2s', from: y, to: 100, repeatCount: 'indefinite'})),
            dropDownRect,
            ...circles,
        ])
    ])

    
svgArea.appendChild(svg)

codeArea.innerHTML = `
<article>
<h3>Create an element </h3> <br />
<code><l>const</l> <v>rect2</v> = <br />
<fn>createSVG</fn>('rect') <c>// type</c> <br />
<fn>.attr</fn>({
    width: 100,
    height: 400,
    fill: 'blue',
    x: 250,
    y: 100,
})</code> 
</code>

</article>

<article>
<h3>Create multiple elements </h3> <br />
<code><l>const</l> <v>circles</v> = <br />
<fn>createMultiple</fn>('circle', 5, []) <c>// type, count, initArray</c> <br />
<fn>.attrMap</fn>(<pm>(el, i)</pm> => ({cx: i * 200, cy: 50, r: i * 10, fill:'red'}))()</code> 
</code>
<d>In <fn>attrMap</fn> method, each element (el) and it's index (i) in the list are passed as parameter.</d>
</article>

<article>
<h3>Animate an element </h3> <br />
<code>
<l>const</l> <v>moveVerticalCircle2</v> = <br />
<fn>animateSVG</fn>(circles[2])<c>// element</c> <br />
<fn>.target</fn>('cy')<c>// attributeName (to animate)</c>  <br />
</code>
<d>You can hold the target (attributeName) and animate dynamically.</d>

<code>
<v>moveVerticalCircle4</v><fn>.animate</fn>(<pm>({cy})</pm> => ({dur:"5s",from:3,to:cy+100,repeatCount: "indefinite"}))
</code>
<d>In <fn>animate</fn> method the element's attributes are passed as parameter.</d>

</article>

<article>
<h3>Set svg tree</h3> <br />
<code><l>const</l> <v>svg</v> = <br />
svg<fn>.append</fn>([ <c>// type, count, initArray</c> <br />
    <fn>createSVG</fn>('g')<fn>.append</fn>([
    ...squares,
    ...circles,
    animateSVG(rect2).target('y').animate(...)
    ])
</code>
<d><fn>animateSVG</fn> function returns it's element, 
so that you dont have to assign it to variable and list it to <fn>append</fn> method.</d>
</article>

`
