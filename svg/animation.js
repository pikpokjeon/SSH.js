import { appendChildren, setAttributes, createSVG, createElementMethodChaining } from "./svg.js"

export const setTarget = (el) => (target) => 
{
    const animateTarget = createSVG('animate').attr({attributeName: target})
    el.append([animateTarget])
    return  el
}

export const setAnimate = (el) => (attr) =>
{
    el.firstChild.attr(attr)
    return el
}

const animateMethods = {
    target: (el) => (target) => setTarget(el)(target),
    animate: (el) => (attr) => setAnimate(el)(attr)
}


export const animate = (el,chain) => createElementMethodChaining(animateMethods)(el,chain)
