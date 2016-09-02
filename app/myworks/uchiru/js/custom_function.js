function addClass(element, classElement){
    var re = new RegExp("(^|\\s)" + classElement + "(\\s|$)", "g");
    if (re.test(element.className)) {
    	return;
    }
    element.className = (element.className + " " + classElement).replace(/\s+/g, " ").replace(/(^ | $)/g, "");
}
  
function degToRad(deg) {
	return deg / 180 * Math.PI;
}

function addEvent(el, e, handler) {
	if(el.addEventListener) {
		el.addEventListener(e, handler);
	} else if(el.attachEvent) {
		el.attachEvent('on' + e, handler);
	} else {
		el['on' + e] = handler;
	}
}