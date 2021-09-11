const codeArea = document.getElementById('code-area')

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

<code>
<v>textElement</v><fn>.text</fn>('some text')
</code>
<d><fn>text</fn> method, only works with text-related elements</d>

<h4>- Append multiple elements</h4>
<code>
<v>rect2</v><fn>.append</fn>([...elements])
</code>
</article>

<article>
<h3>Create multiple elements </h3> <br />
<code><l>const</l> <v>texts</v> = 
<fn>createMultiple</fn>('text', 7, [])<c>// type, count, initArray</c> <br /></code>
<d>It creates the same type of elements in a list</d>
<h4>- Set Attributes</h4>
<code><v>texts</v><fn>.attrMap</fn> (<pm>(head,prev, i)</pm> => <br />

({&nbsp; 
    &nbsp;width: 50, <br />
    &nbsp; &nbsp;&nbsp;&nbsp;height: 70, <br />
    &nbsp; &nbsp;&nbsp;&nbsp;fill: i === 0 ? 'black' : i > 1 && i < 5 ? 'red' : head.fill, <br />
    &nbsp; &nbsp;&nbsp;&nbsp;x: i === 0 ? 0 : prev.x + 150, <br />
    &nbsp; &nbsp;&nbsp;&nbsp;y: i === 0? 250 : prev.y + ((i*10)), <br />
}))<fn>.map</fn>( t => t.text('text-{i}'))</code> 
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
