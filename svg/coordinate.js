

import {getUnit} from './unit.js'

export const genCoordinate = (unitData) =>
{
    const x = (i) => Math.floor(unitData.unit.x * i)
    const y = (v) => unitData.chartMargin + (MAX - v) * unitData.unit.y
    const idx = (x) => Math.floor(x / (unitData.unit.x + unitData.unit.gap))
    const group = {
        x: (i) => ({
            single: {x: x(i)},
            couple: {
                x1: x(i),
                x2: x(i),
            },
        }),
        y: (v) => ({
            single: {
                y: y(v),
            },
            couple: {
                y1: y(v),
                y2: y(v),
            },
        }),
    }
    return {x, y, idx, group}
}

export const coordinate = (w, d) => genCoordinate(getUnit(w, d))
