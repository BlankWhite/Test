window.onload = function() {
    var testdiv =document.getElementById("testdiv");
    //testdiv.innerHTML = "<p>  I inserted <em>my</em> content.</p>";
    var para = document.createElement("p");
    testdiv.appendChild(para);
    var text = document.createTextNode("The World");
    para.appendChild(text);
}