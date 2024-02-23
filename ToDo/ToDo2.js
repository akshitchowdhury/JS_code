


var nodeList = document.getElementsByTagName("LI");

var i;

for(i=0 ; i< nodeList.length;i++){

    var span = document.createElement("SPAN");
    var textNode = document.createTextNode('\u00D7');

    span.className = "close"
    span.appendChild(textNode)
    nodeList[i].appendChild(span)
}


var close = document.getElementsByClassName("close");

var i;
for(i = 0; i< close.length; i++){

    close[i].onclick = function(){
        var div = this.parentElement;
        div.style.display = none;
    }
}


var list = document.querySelector("ul");
list.addEventListener('click', (ev)=>{

    if(ev.target.value === 'LI'){
        ev.target.classList.toggle("checked");
    }

}, false);





var list = document.querySelector("li");
var inputValue = document.getElementById("myInput").ariaValueMax;
var t = document.createTextNode(inputValue);
list.appendChild(t)