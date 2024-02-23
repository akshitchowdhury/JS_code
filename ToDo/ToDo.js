
var myNodeList = document.getElementsByTagName("LI");

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


var list = document.querySelector('ul');

list.addEventListener('click', function(ev){
    if(ev.target.tagName=== 'LI'){
        ev.target.classList.toggle('checked');
    }
}, false)