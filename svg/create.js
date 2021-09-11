

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
    if (el.tagName === 'text') {el.textContent = text; return el}
    else {console.warn('[ERROR] The element is not text type')}
}


export const createSVGElement = (type) =>
    document.createElementNS('http://www.w3.org/2000/svg', type)


export const getElementAttributes = (el) =>
    Object.values(el.attributes)
        .reduce((acc, cur) =>
        {   
            Object.assign(acc,{[cur.name]: isNaN(cur.nodeValue) ? cur.nodeValue: Number(cur.nodeValue) })
            return acc
        },{})


export const createMultiple = (type, initCount, list) =>
{
    const elementList = listingElements(type, list, initCount)
    const attrMap = f =>
        elementList
            .map((e, i) =>
            {
                const [head, prev] = [
                    getElementAttributes(elementList[0]),
                    getElementAttributes(elementList[i - 1 < 0 ? 0 : i - 1])
                ]
                return e.attr(f(head,prev, i))
            })
    return {attrMap}
}


const listingElements = (type, list, count) =>
{
    if (count < 0) return list
    list.push( createSVG(type))
    return listingElements(type,list,count-1)
}


const svgMethods = {
    attr: (el) => (attr) => setAttributes(el)(attr),
    append: (el) => (y) => appendChildren(el)(...y),
    text: (el) => (text) => setTextContent(el)(text),
}

//  메서드 체이닝
