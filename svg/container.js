import {createSVG} from "./create.js";

export const Svg = (attr) => createSVG('svg').attr(attr)

export const G = (attr) => createSVG('g').attr(attr)