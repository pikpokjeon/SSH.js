

/* helper function to create predefined constructors. 
*    Returns element constructor (attributes, children) => element
* 
*/
const alias = (type) => (el) =>
{
    // checks if its for html or svg element
    el = type === 'svg'
        ? document.createElementNS('http://www.w3.org/2000/svg', el)
        : document.createElement(el)
    
    // assigns attributes, and appends children
    // !! attr could be children when its not assigned
    return (attributes = {}, children = []) =>
    {
        const attr = Array.isArray(attributes) ? {} : attributes

        for (const [t, v] of Object.entries(attr))
        {
            el.setAttribute(t, v)
        }
        for (const el of children)
        {
            el.appendChild(el)
        }

        return el
    }

    
    /**
     * Usage : 
     * const S = alias('svg')
     * const svg = S('svg')
     * const leftRect = S('rect')
     * const miniText = S('text')
     * 
     * svg({class:'main-svg'}, [
     *  leftRect({id:'last-rect'}, [
     *      miniText('hello')
     * ])])
     */
}


module.exports = {
    alias
}