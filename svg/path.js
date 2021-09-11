
export const genChartPath = (type, coord, size, data) =>
{
    let prev = []
    const path = data.reduce((acc, cur, i) =>
    {
        const [a, b] = [coord.x(i), coord.y(cur)]
        const midX = (prev[0] + a) / 2
        if (i > 0 && type !== 'line')
        {
            acc += type === "step" ? ` ${midX} ${prev[1]}` : i === 1 ? `C ${midX} ${prev[1]}` : 'S'
            acc += ` ${midX} ${b}`
        }
        acc += ` ${a} ${b}`
        prev = [a, b]
        return acc

    }, 'M')
    return {
        path: path,
        fill: path + ` V 700 H 100Z`
    }
}