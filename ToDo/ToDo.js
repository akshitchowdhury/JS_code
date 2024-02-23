
var myNodeList = document.getElementsByTagName("Li");

var i;

for( i =0; i< myNodeList.length; i++){

    var span = document.createElement("SPAN");

    var txt = document.createTextNode("\u00D7");

    span.className = "close"

    span.appendChild(txt);
    myNodeList[i].appendChild(span)
}


var close = document.getElementsByClassName("close");

for(let i=0; i< close.length; i++){


    close[i].onClick = function(){

        var div = this.parentElement;
        div.style.display = "none";
    }
}