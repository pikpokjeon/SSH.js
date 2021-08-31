 const pipe = (initVal, ...fns) => fns.reduce((val, fn) => fn(val), initVal)

const types = ['number', 'function', 'string', 'undefined', "symbol", "object"]
const moreTypes = { array: d => Array.isArray(d), null: d => d === null }

 const isType = 
    types.reduce((typeObj, type) =>
        Object.assign(typeObj, {[type]: d => typeof d === type}), {...moreTypes})

const a = isType.function('ddd')
console.log(a)
    

module.exports = {
    pipe,
    isType
}