const types = ['number', 'function', 'string', 'undefined', "symbol", "object"]
const moreTypes = { array: d => Array.isArray(d), null: d => d === null , node: d => "nodeName" in d}

const isType = 
    types.reduce((obj, type) =>({...obj,[type]: d => typeof d === type}), {...moreTypes})
    

const nodeTypes = {'element':1, 'attribute':2, 'text':3, 'comment':8, 'document':9, 'fragment':11}

const isNodeType = Object.entries(nodeTypes).reduce((obj, [type, val]) =>
    ({...obj, [type]: data => data.nodeType === val}), {})



module.exports = {
    isType,
    isNodeType
}