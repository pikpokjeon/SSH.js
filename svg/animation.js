import {  createSVG, createElementMethodChaining ,} from "./create.js"
import {  getAttr} from '../lib/common.js'

export const setTarget = (el) => (target) => 
{
    const animateTarget = createSVG('animate').attr({attributeName: target})
    el.append([animateTarget])
    return  el
}

export const setAnimate = (el) => (f) => el.firstChild.attr(f(getAttr(el)))


const animateMethods = {
    target: (el) => (target) => setTarget(el)(target),
    animate: (el) => (attr) => setAnimate(el)(attr)
}


export const animateSVG = (el,chain) => createElementMethodChaining(animateMethods)(el,chain)
