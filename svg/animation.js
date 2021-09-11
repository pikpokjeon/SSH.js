import {  createSVG, createElementMethodChaining ,getElementAttributes} from "./svg.js"


export const setTarget = (el) => (target) => 
{
    const animateTarget = createSVG('animate').attr({attributeName: target})
    el.append([animateTarget])
    return  el
}

export const setAnimate = (el) => (f) => el.firstChild.attr(f(getElementAttributes(el)))


const animateMethods = {
    target: (el) => (target) => setTarget(el)(target),
    animate: (el) => (attr) => setAnimate(el)(attr)
}


export const animateSVG = (el,chain) => createElementMethodChaining(animateMethods)(el,chain)
