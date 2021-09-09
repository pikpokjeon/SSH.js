import {pipe} from '../lib/helper'
import {animate} from './animation'

export const createElementMethodChaining = (methods) => (type, chain = {}) =>
{
    const el = (typeof type === 'string') ? createSVGElement(type) : type
    const compute = Object.values(chain).reduce(
        (_, [ fn, data ]) => fn(el)(data), el
    )
    for (const [ name, fn ] of Object.entries(methods))
    {
        compute[ name ] = (att) =>
        {
            chain[ name ] = [ fn, att ]
            fn(el)(att)
            return compute
        }
    }
    return compute
}

export const createSVG = (type,chain) => createElementMethodChaining(svgMethods)(type,chain)

export const appendChildren =
    (el) =>
        (...children) =>
            [...children].reduce((_, child) =>
            {
                el.appendChild(child)
                return el
            }, el)

            
export const setAttributes = (el) => (attr) =>
    Object.entries(attr).reduce(
        (_, [t, v]) =>
        {
            el.setAttributeNS(null, t, v)
            return el
        }
        , el
    )


export const setTextContent = (el) => (text) =>
{
    el.textContent = text; return el
}


export const createSVGElement = (type) =>
    document.createElementNS('http://www.w3.org/2000/svg', type)


export const createMultiple = (type, initCount, list) =>
{
    const attrMap = f => (...args) =>
        listingElements(type, list, initCount)
            .map((e, i) =>
                e.attr(f(i, e, ...args)))
    return {attrMap}
}

const listingElements = (type, list, count) =>
{
    if (count < 1) return list
    list.push( createSVG(type))
    return listingElements(type,list,count-1)
}


const svgMethods = {
    attr: (el) => (attr) => setAttributes(el)(attr),
    append: (el) => (y) => appendChildren(el)(...y),
    text: (el) => (text) => setTextContent(el)(text),
}

//  메서드 체이닝
