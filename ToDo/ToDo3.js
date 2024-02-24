

// cross button to all lists

// var nodeList = document.getElementsByTagName("LI");

// var i
// for(i=0; i<nodeList.length; i++){

//     var span = document.createElement("SPAN");
//     var textNode = document.createTextNode('\u00D7');

//     span.className = "close"
//     span.appendChild(textNode)


//     nodeList[i].appendChild(span);

// }


var nodeList = document.getElementsByTagName("LI")

var i;

for(i=0; i< nodeList.length; i++){

    var span = document.createElement("SPAN")

    var textNode = document.createTextNode('\u00D7');


    span.className = "close";

    span.appendChild(textNode)

    nodeList[i].appendChild(span)

}































