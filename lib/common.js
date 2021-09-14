export const getAttr = (el) =>
    Object.values(el.attributes)
        .reduce((acc, cur) =>
        {   
            Object.assign(acc,{[cur.name]: isNaN(cur.nodeValue) ? cur.nodeValue: Number(cur.nodeValue) })
            return acc
        },{})

