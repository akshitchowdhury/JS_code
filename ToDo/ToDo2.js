


var nodeList = document.getElementById("LI");

var i;

for(i=0 ; i< nodeList.clientHeight;i++){

    var span = document.createElement("SPAN");
    var textNode = document.createTextNode('\u00D7');

    span.className = "close"
    span.appendChild(textNode)
    nodeList[i].appendChild(span)
}