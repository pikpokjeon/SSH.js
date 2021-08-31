
export const createHTMLElement = tag => document.createElement(tag)

export const createFragment = () => document.createDocumentFragment()

export const createHTMLTextNode = text => document.createTextNode(text)

export const setAttribute = (el, attr) =>
    Object.entries(attr).forEach(([name, value]) =>
        el.setAttribute(name, value))

export const setTextContent = (el, text) => el.appendChild(createHTMLTextNode(text))

