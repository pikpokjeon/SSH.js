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
    .attrMap((head,prev, i) => ({cx: i * 200, cy: 50, r: i * 10, fill:'red'}))
    

const squares = createMultiple('rect', 7, [])
    .attrMap((head,prev, i) => ({
        width: 100,
        height: 100,
        fill: 'yellow',
        x: 200 * i ,
        y: 300
    }))


const texts = createMultiple('text', 7, [])
    .attrMap((head,prev, i) =>
        ({
            width: 50,
            height: 70,
            fill: i === 0 ? 'black' : i > 1 && i < 5 ? 'red' : head.fill,
            x: i === 0 ? 0 : prev.x + 150,
            y: i === 0? 250 : prev.y + ((i*10)),
        })
    ).map( (e,i) => e.text(`text-${i}`))

texts[4].attr({
        fill:'green'
})

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
            ...texts,
            ...circles,
        ])
    ])

    
svgArea.appendChild(svg)

codeArea.innerHTML = `
<article>
<h3>Create an element </h3> <br />
<code><l>const</l> <v>rect2</v> = 
<fn>createSVG</fn>('rect') <c>// type</c> <br />
</code>
<d>It creates a single element.</d>
<h4>- Set Attributes</h4>
<code>
<v>rect2</v><fn>.attr</fn>({
    width: 100,
    height: 400,
    fill: 'blue',
    x: 250,
    y: 100,
})</code> 
</code>
<d><fn>attr</fn> method, only works with a single element.</d>

</article>

<article>
<h3>Create multiple elements </h3> <br />
<code><l>const</l> <v>texts</v> = 
<fn>createMultiple</fn>('text', 7, []) <br /></code>
<d>It creates the same type of elements in a list</d>
<h4>- Set Attributes</h4>
<code><v>texts</v><fn>.attrMap</fn> (<pm>(head,prev, i)</pm> => <br />

({&nbsp; 
    &nbsp;width: 50, <br />
    &nbsp; &nbsp;&nbsp;&nbsp;height: 70, <br />
    &nbsp; &nbsp;&nbsp;&nbsp;fill: i === 0 ? 'black' : i > 1 && i < 5 ? 'red' : head.fill, <br />
    &nbsp; &nbsp;&nbsp;&nbsp;x: i === 0 ? 0 : prev.x + 150, <br />
    &nbsp; &nbsp;&nbsp;&nbsp;y: i === 0? 250 : prev.y + ((i*10)), <br />
}))</code> 
<d>In <fn>attrMap</fn> method, first element' attributes (head),
previous element' attibutes (prev) and the current index of the element are passed as parameter

</d>

<code><v>texts[4]</v> 
<fn>.attr</fn>({
    fill:'green'
})</code> 
<d><fn>attr</fn> method is also possible to use for a single element from the list.</d>

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
