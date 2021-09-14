export const getUnit = (w, h, data) =>
{
    const unitX = w / data.length
    const gap = unitX / data.length
    const [height, margin] = [350, -50]
    const [maxData, minData] = [
        Math.max(...Array.from(data)),
        Math.min(...Array.from(data)),
    ]
    const MAX = Math.max(maxData, Math.abs(minData))
    const SUM = maxData + Math.abs(minData)
    const unitY = h / MAX
    return {
        unit: {
            x: unitX,
            y: unitY,
            gap,
        },
        size: {
            w,
            h,
        },
        data: {
            MAX,
            SUM,
        },
        chartData: {
            maxData,
            minData,
        },
        margin: {
            chartMargin: -50,
            left: 155,
            chartLeft: margin,
        },
    }
}

