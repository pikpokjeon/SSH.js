function $(selector) {
    let self = {};
    self.selector = selector;
    self.element = document.querySelector(self.selector);
    self.html = function(){
        return self.element;
    }
    return self
}




window.onload = ()=>{
    console.log( $('.test'))
}