

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

// var close = document.getElementsByClassName("close");

// var i;
// for(i = 0; i< close.length; i++){

//     close[i].onclick = function(){
//         var div = this.parentElement;
//         div.style.display = "none";
//     }
// }

var close = document.getElementsByClassName("close");


var i;

for(i=0; i< close.length;i++){

    close[i].onclick = function(){

        var div = this.parentElement;

        div.style.display = "none"
    }
}

var list = document.querySelector('ul');

list.addEventListener('click', (e)=>{

    if(e.target.tagName=== 'LI'){
        e.target.classList.toggle('checked')
    }
}, false)


function newElement(){

   var Item = document.createElement("li");

   var inputValue = document.getElementById("myInput").value


   var t = document.createTextNode(inputValue);

   Item.appendChild(t)


if(inputValue===''){
    alert("Type in something");

}

else{
    document.getElementById("myUL").appendChild(Item);
}


  document.getElementById("myInnput").value = "";

    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7")

    span.className = "close";
    span.appendChild(txt);
    newItem.appendChild(span)

    for(i = 0; i<close.length; i++){
        close[i].onclick = function(){
            var div = this.parentElement;
            div.style.display = "none";
        }
    }
    

}






























