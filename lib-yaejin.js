
const genElement = (type, attribute, animate) =>
{

    type = document.createElementNS('http://www.w3.org/2000/svg', type)

    for (const [t, v] of Object.entries(attribute))
    {
        type.setAttributeNS(null, t, v)
    }

    return type

}
const computeSize = (props, Use) =>
{
    const { w, d } = Use(props)
    const [height, margin] = [250, 100]
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
const svgList = (props, Use) =>
{
    const baseSVG =
    {
        svg: {
            type: 'svg',
            attribute: {}, id: id.svg,
            name: 'svg'
        },
        eventArea: {
            type: 'rect',
            attribute: {
            }, id: id.eventArea,
            name: 'eventArea'
        },
        group: {
            type: 'g',
            attribute: {
            }, id: id.group,
            name: 'group'
        }
    }
    baseSVG[Symbol.toStringTag] = 'baseSVG'

    const pathSVG =
    {
        stop: {
            type: 'stop',
            attribute: {
            }, id: id.stop,
            name: 'stop'
        },
        linearGradient: {
            type: 'linearGradient',
            attribute: {},
            id: id.linearGradient,
            name: 'linearGradient',
        },
        fillG: {
            type: 'g',
            attribute: {
            }, id: id.fillG,
            name: 'fillG',
        },
        fillBG: {
            type: 'rect',
            attribute: {
            }, id: id.fillBG,
            name: 'fillBG',
        },
        clipPath: {
            type: 'clipPath',
            attribute: {
            }, id: id.clipPath,
            name: 'clipPath',
        },
        fillPath: {  //d
            type: 'path',
            attribute: {},
            id: id.fillPath,
            name: 'fillPath',
        },
        defs: {
            type: 'defs',
            attribute: {
            }, id: id.defs,
            name: 'defs',
        },
        path:
        {
            type: 'path',
            attribute: {
            }, id: id.path,
            name: 'path'
        },
        filter:
        {
            type: 'filter',
            attribute: {
            }, id: id.filter,
            name: 'filter'
        },
        feGaussianBlur: {
            type: 'feGaussianBlur',
            attribute: {},
            id: id.feGaussianBlur,
            name: 'feGaussianBlur'
        },
    }
    pathSVG[Symbol.toStringTag] = 'pathSVG'


    const tooltipMsgGroup =
    {
        msgTitle:
        {
            type: 'text',
            attribute: {},
            id: id.msgTitle,
            name: 'msgText'
        },
        msgValue:
        {
            type: 'text',
            attribute: {},
            id: id.msgValue,
            name: 'msgText'
        },
        msgBox:
        {
            type: 'rect',
            attribute: {},
            id: id.msgBox,
            name: 'msgBox',
        },
        msgShadow:
        {
            type: 'rect',
            attribute: {},
            id: id.msgShadow,
            name: 'msgShadow',
        },
        msgGroup:
        {
            type: 'g',
            attribute: {},
            id: id.msgGroup,
            name: 'msgGroup',
        },

    }
    tooltipMsgGroup[Symbol.toStringTag] = 'tooltipMsgGroup'

    const barGroup =
    {
        bar:
        {
            type: 'rect',
            attribute: {},
            id: id.bar,
            name: 'bar'
        },

    }
    barGroup[Symbol.toStringTag] = 'barGroup'
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


export { copyParams, svgList, computeSize, genElement }