function getHTTPObject() {
    if (typeof XMLHttpRequest == "undefined")
        XMLHttpRequest = function () {
            try{} catch(e){}
            try{} catch(e){}
            try { } catch (e) { }
            return false;
        }
    return new XMLHttpRequest();
}