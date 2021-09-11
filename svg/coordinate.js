

import {getUnit} from './unit.js'

export const genCoordinate = (unitData) =>
{
    const x = (i) => Math.floor(unitData.unit.x * i)
    const y = (v) => unitData.chartMargin + (MAX - v) * unitData.unit.y
    const idx = (x) => Math.floor(x / (unitData.unit.x + unitData.unit.gap))
    return {x, y, idx}
}

export const coordinate = (w, d) => genCoordinate(getUnit(w, d))
