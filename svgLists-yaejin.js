const svgDefinition = (id) =>
{
    const initSVG =
    {
        svg:
        {
            type: 'svg',
            attr: 'svg',
            id: id.svg,
            name: id.svg,
        },
        eventArea:
        {
            type: 'rect',
            attr: 'eventArea',
            id: id.eventArea,
            name: 'eventArea',
        },
        g:
        {
            type: 'g',
            attr: 'g',
            id: id.g,
            name: 'g'
        },
    }
    initSVG[Symbol.toStringTag] = 'initSVG'

    const optionSVG =
    {
        lineH:
        {
            type: 'line',
            attr: 'lineH',
            id: id.lineH,
            name: 'line',
        },
        lineV:
        {
            type: 'line',
            attr: 'lineV',
            id: id.lineV,
            name: 'lineV',

        },
        label:
        {
            type: 'text',
            attr: 'label',
            id: id.label,
            name: 'label'
        },
        dataText:
        {
            type: 'text',
            attr: 'dataText',
            id: id.dataText,
            name: 'dataText'
        },
        plot:
        {
            type: 'circle',
            attr: 'plot',
            id: id.plot,
            name: 'plot',
        },
        g:
        {
            type: 'g',
            attr: 'g',
            id: id.gBox,
            name: 'gBox',
        },

    }
    optionSVG[Symbol.toStringTag] = 'optionSVG'

    const tooltipGroup =
    {
        label:
        {
            type: 'text',
            attr: 'label',
            id: id.label,
            name: 'label'
        },
        dataText:
        {
            type: 'text',
            attr: 'dataText',
            id: id.dataText,
            name: 'dataText'
        },
        plot:
        {
            type: 'circle',
            attr: 'plot',
            id: id.plot,
            name: 'plot',
        },
        g:
        {
            type: 'g',
            attr: 'g',
            id: id.gBox,
            name: 'gBox',
        },

    }
    tooltipGroup[Symbol.toStringTag] = 'tooltipGroup'

    const pathGroup = {
        stop: {
            type: 'stop',
            attr: id.stop,
            id: id.stop,
            name: 'stop'
        },
        linearGradient: {
            type: 'linearGradient',
            attr: 'linearGradient',
            id: id.linearGradient,
            name: 'linearGradient',
        },
        fillG: {
            type: 'g',
            attr: 'fillG',
            id: id.fillG,
            name: 'fillG',
        },
        fillBG: {
            type: 'rect',
            attr: 'fillBG',
            id: id.fillBG,
            name: 'fillBG',
        },
        clipPath: {
            type: 'clipPath',
            attr: 'clipPath',
            id: id.clipPath,
            name: 'clipPath',
        },
        fillPath: {  //d
            type: 'path',
            attr: 'fillPath',
            id: id.fillPath,
            name: 'fillPath',
        },
        defs: {
            type: 'defs',
            attr: 'defs',
            id: id.defs,
            name: 'defs',
        },
        path:
        {
            type: 'path',
            attr: 'path',
            id: id.path,
            name: 'path'
        },
        filter:
        {
            type: 'filter',
            attr: 'filter',
            id: id.filter,
            name: 'filter'
        },
        feGaussianBlur: {
            type: 'feGaussianBlur',
            attr: 'feGaussianBlur',
            id: id.feGaussianBlur,
            name: 'feGaussianBlur'
        },

    }
    pathGroup[Symbol.toStringTag] = 'pathGroup'



    const tooltipMsgGroup =
    {
        msgTitle:
        {
            type: 'text',
            attr: 'msgTitle',
            id: id.msgTitle,
            name: 'msgText'
        },
        msgValue:
        {
            type: 'text',
            attr: 'msgValue',
            id: id.msgValue,
            name: 'msgText'
        },
        msgBox:
        {
            type: 'rect',
            attr: 'msgBox',
            id: id.msgBox,
            name: 'msgBox',
        },
        msgShadow:
        {
            type: 'rect',
            attr: 'msgShadow',
            id: id.msgShadow,
            name: 'msgShadow',
        },
        msgGroup:
        {
            type: 'g',
            attr: 'msgGroup',
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
            attr: 'bar',
            id: id.bar,
            name: 'bar'
        },

    }
    barGroup[Symbol.toStringTag] = 'barGroup'

    return { singleSVG, tooltipGroup, pathGroup, tooltipMsgGroup, barGroup }
}
svgDefinition[Symbol.toStringTag] = 'svgDefinition'
