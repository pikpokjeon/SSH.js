import {createSVG} from "./svg.js"

export const Circle = (attr) => createSVG('circle').attr(attr)

export const Rect = (attr) => createSVG('rect').attr(attr)