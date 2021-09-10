import {  createSVG, createElementMethodChaining } from "./svg.js"


export const setTarget = (el) => (target) => 
{
    const animateTarget = createSVG('animate').attr({attributeName: target})
    el.append([animateTarget])
    return  el
}

export const setAnimate = (el) => (f) =>
{
    const attributes = Object.values(el.attributes).reduce((acc, cur) =>
    {
        Object.assign(acc,{[cur.name]: isNaN(cur.nodeValue) ? cur.nodeValue: Number(cur.nodeValue) })
        return acc
    },{})
    console.log(attributes,f(attributes))
    el.firstChild.attr(f(attributes))
    return el
}

const animateMethods = {
    target: (el) => (target) => setTarget(el)(target),
    animate: (el) => (attr) => setAnimate(el)(attr)
}


export const animateSVG = (el,chain) => createElementMethodChaining(animateMethods)(el,chain)
