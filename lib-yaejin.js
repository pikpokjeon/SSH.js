
const genElement = ({ type, attr, animate }) =>
{
    type = document.createElementNS('http://www.w3.org/2000/svg', type)

    for (const [t, v] of Array.from(Object.entries(attr)))
    {
        type.setAttributeNS(null, t, v)
    }

    return type

}
const Style = () => ({
    color: { bg: '#141d31', default: '#141d31', focus: 'red', purple: '#9f57ff', blue: '#00f3ff' },
    line: (color, width) => `stroke: ${color.default}; stroke-width: ${width};`,
    opacity: n => `opacity: ${n}`,
    dashline: n => ` stroke-dasharray:${n},${n};`,
    stop: (offset, color, opacity) => ({ offset: `${offset}%`, style: `stop-color:${color}; stop-opacity: ${opacity}` }),
    textAlign: { 'dominant-baseline': 'start', 'text-anchor': 'start' }
})
const computeSize = (w, h, d) =>
{
    const padding = 50
    const [height, margin] = [h - padding, 100]
    const unitX = (w - margin) / d.length
    const gap = unitX / d.length
    const [maxData, minData] = [Math.max(...Array.from(d)), (Math.min(...Array.from(d)))]
    const MAX = Math.max(maxData, Math.abs(minData))
    const SUM = (maxData + Math.abs(minData))
    const unitY = (height) / MAX
    return {
        d: d.length,
        gap,
        unitX,
        unitY,
        margin,
        padding,
        MAX,
        SUM,
        maxData,
        minData,
        leftMargin: 155,
        width: w,
        eventArea: { width: w, height: 750 },
        data: { text: { width: 30, height: 50 } },
        msgBox: { width: 200, height: 150 },
        line: 1,
        x: i => Math.floor(unitX * i) + margin,
        y: v => margin + ((MAX - v)) * (unitY),
        idx: x => Math.floor((x - (w / d.length)) / (unitX))
    }

}

const CreateSVGGroupElement = group =>
{
    let temp = {}
    temp[Symbol.toStringTag] = group[Symbol.toStringTag]
    Object.entries(group).reduce((obj, el) =>
    {
        const element = genElement({ type: el[1]['type'], attr: { ...el[1]['attr'] } })
        const id = el[0]
        temp = Object.assign(temp, { [id]: element })
    }, temp)
    return temp
}

const getSVG = ({ width, height, d, i, v }) => ({ attr, id }) =>
{
    const s = computeSize(width, height, d)
    const style = Style()
    const base = {
        width: width, height: height
    }
    const baseSVG =
    {
        svg: {
            type: 'svg',
            attr: {
                id: id.svg,
                name: 'svg',
                ...base, ...attr?.svg
            },
        },
        eventArea: {
            type: 'rect',
            attr: {
                id: id.eventArea,
                name: 'eventArea',
                ...base, ...attr?.eventArea
            },
        },
        group: {
            type: 'g',
            attr: {
                id: id.group,
                name: 'group',
                ...base, ...attr?.group
            },
        }
    }
    baseSVG[Symbol.toStringTag] = 'baseSVG'
    const tooltipGroup =
    {
        label:
        {
            type: 'text',
            attr: {
                id: id.label,
                name: 'label',
                x: s.x(i),
                y: height - 30,
                fill: style.color.purple,
                ...attr?.label
            },

        },
        dataText:
        {
            type: 'text',
            attr: {
                id: id.dataText,
                name: 'dataText',
                x: 40,
                y: s.y(v),
                fill: style.color.purple,
                ...attr?.dataText
            },

        },
        plot:
        {
            type: 'circle',
            attr: {
                id: id.plot,
                name: 'plot',
                cx: s.x(i) + 10,
                cy: s.y(v),
                r: 5,
                fill: style.color.purple,
                ...attr?.plot
            },

        },
        gBox:
        {
            type: 'g',
            attr: {
                id: id.gBox,
                name: 'gBox', ...base, ...attr?.gBox
            },

        },

    }
    tooltipGroup[Symbol.toStringTag] = 'tooltipGroup'

    const pathSVG =
    {
        stop: {
            type: 'stop',
            attribute: {
                id: id.stop,
                name: 'stop',
                ...attr?.stop
            },
        },
        linearGradient: {
            type: 'linearGradient',
            attribute: {
                id: id.linearGradient,
                name: 'linearGradient',
                x1: '0%',
                x2: '0%',
                y1: '0%',
                y2: '100%',
                ...attr?.linearGradient
            },

        },
        fillG: {
            type: 'g',
            attribute: {
                id: id.fillG,
                name: 'fillG',
                'clip-path': 'url(#frame)',
                ...attr?.fillG
            },
        },
        fillBG: {
            type: 'rect',
            attribute: {
                id: id.fillBG,
                name: 'fillBG',
                ...attr?.fillBG
            },
        },
        clipPath: {
            type: 'clipPath',
            attribute: {
                id: id.clipPath,
                name: 'clipPath',
                ...attr?.clipPath
            },
        },
        fillPath: {  //d
            type: 'path',
            attribute: {
                id: id.fillPath,
                name: 'fillPath',
                fill: style.color.default, ...attr?.fillPath
            },

        },
        defs: {
            type: 'defs',
            attribute: {
                id: id.defs,
                name: 'defs',
                ...attr?.defs
            },
        },
        path:
        {
            type: 'path',
            attribute: {
                id: id.path,
                name: 'path',
                ...attr?.path
            },
        },
        filter:
        {
            type: 'filter',
            attribute: {
                id: id.filter,
                name: 'filter',
                x: '0',
                y: '-10',
                width: '14',
                height: '14',
                ...attr?.filter
            },
        },
        blur: {
            type: 'feGaussianBlur',
            attribute: {
                id: 'blur',
                name: 'feGaussianBlur',
                stdDeviation: "2.5", ...attr?.blur
            },
        },
    }
    pathSVG[Symbol.toStringTag] = 'pathSVG'


    const tooltipMsgGroup =
    {
        msgTitle:
        {
            type: 'text',
            attribute: {
                id: id.msgTitle,
                name: 'msgText',
                ...style.textAlign, x: 30,
                y: 30, fill: style.color.default, ...attr?.msgTitle
            },

        },
        msgValue:
        {
            type: 'text',
            attribute: {
                id: id.msgValue,
                name: 'msgText',
                ...style.textAlign, x: 70,
                y: 30, fill: style.color.default, ...attr?.msgValue
            },

        },
        msgBox:
        {
            type: 'rect',
            attribute: {
                id: id.msgBox,
                name: 'msgBox',
                x: 0,
                y: 0,
                width: s.msgBox.width,
                height: s.msgBox.height,
                style: style.line('black', 1),
                fill: style.color.bg,
                ...attr?.msgBox
            },

        },
        msgShadow:
        {
            type: 'rect',
            attribute: {
                id: id.msgShadow,
                name: 'msgShadow',
                x: 0,
                y: 0,
                width: s.msgBox.width,
                height: s.msgBox.height,
                fill: 'black',
                filter: 'url(#msgFilter)',
                style: 'opacity:0.4',
                stroke: 1,
                ...attr?.msgShadow
            },

        },
        msgGroup:
        {
            type: 'g',
            attribute: {
                id: id.msgGroup,
                name: 'msgGroup',
                transform: `translate(100,100)`, ...attr?.msgGroup
            },

        },

    }
    tooltipMsgGroup[Symbol.toStringTag] = 'tooltipMsgGroup'

    const barGroup =
    {
        bar:
        {
            type: 'rect',
            attr: {
                id: id.bar,
                name: 'bar',
                x: s.x(i),
                y: s.y(v),
                width: 20,
                height: height - s.y(v) - 70,
                fill: style.color.red,
                ...attr?.bar
            },

        },

    }
    barGroup[Symbol.toStringTag] = 'barGroup'
    return { baseSVG, tooltipGroup, pathSVG, tooltipMsgGroup, barGroup }


}


const copyParams = (params) =>
{
    const copied = {}
    for (const variable of (params))
    {
        if (typeof variable === 'number') copied['w'] = variable
        else if (Array.isArray(variable)) copied['d'] = variable
        else if (variable[Symbol.toStringTag]) copied[variable[Symbol.toStringTag]] = variable
        else if (variable.name === undefined) copied[variable.tagName] = variable
        else if (typeof variable === 'function') copied[variable.name] = variable
    }
    return copied
}


export { copyParams, getSVG, computeSize, genElement, CreateSVGGroupElement }