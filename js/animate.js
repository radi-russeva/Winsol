var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}
function functionHide1() {
    var t = document.getElementById("yellowHighlights");
    var m = document.getElementById("redTile");
    if(t.style.display=="none") {
        t.style.display = "block";
  
    }
    else {
      t.style.display = "none";

    }
    if(m.style.display=="none") {
        m.style.display = "block";
  
    }
    else {
      m.style.display = "none";

    }
    
}
function functionHide2(){
    var p = document.getElementById("redTile");
    if(p.style.display=="none") {
        p.style.display = "block";
    }
    else {
        p.style.display = "block";
    }
}

function functionColor() {
    var btnD = document.getElementById("doorBtn");
    
    if( btnD.style.backgroundColor=="#999999") {
        btnD.style.backgroundColor="#ffcc00";
    }
    else {
         btnD.style.backgroundColor="#ffcc00";
    }
}

function functionHide3() {
    var s = document.getElementById("bWhiteHY");
    var k = document.getElementById("brWhiteH");
    var l = document.getElementById("brWhiteChY");
    var r = document.getElementById("brWhiteCh");
    if(s.style.display=="none") {
        s.style.display = "block";
  
    }
    else {
      s.style.display = "none";

    }
    if(k.style.display=="none") {
        k.style.display = "block";
  
    }
    else {
      k.style.display = "none";
    }
//    ............
    
    if(l.style.display=="none") {
        l.style.display = "block";
  
    }
    else {
      l.style.display = "none";

    }
    if(r.style.display=="none") {
        r.style.display = "block";
  
    }
    else {
      r.style.display = "none";
    }
    
    
}

function functionHide4(){
    var q = document.getElementById("brWhiteH");
    var z = document.getElementById("brWhiteCh");
    if(q.style.display=="none") {
        q.style.display = "block";
    }
    else {
        q.style.display = "block";
    }
    if(z.style.display=="none") {
        z.style.display = "block";
    }
    else {
        z.style.display = "block";
    }
    
    
}
function functionColor3() {
    var btnR = document.getElementById("roofBtn");
    
    if( btnR.style.backgroundColor=="#999999") {
        btnR.style.backgroundColor="#ffcc00";
    }
    else {
         btnR.style.backgroundColor="#ffcc00";
    }
}


function functionColor4() {
    var btnB = document.getElementById("bricksBtn");
    
    if( btnB.style.backgroundColor=="#999999") {
        btnB.style.backgroundColor="#ffcc00";
    }
    else {
         btnB.style.backgroundColor="#ffcc00";
    }
}

function functionColor5() {
    var btnW = document.getElementById("windowBtn");
    
    if( btnW.style.backgroundColor=="#999999") {
        btnW.style.backgroundColor="#ffcc00";
    }
    else {
         btnW.style.backgroundColor="#ffcc00";
    }
}


function functionHideAll() {
    var arr = document.getElementsByClassName("masks_absolute");
    var j;
     for(j = 0; j <arr.length; j++) {
         arr[j].style.visibility = "hidden";
         
     }
}
function functionUnHideAll() {
    var arr = document.getElementsByClassName("masks_absolute");
    var j;
     for(j = 0; j <arr.length; j++) {
         arr[j].style.visibility = "visible";
         
     }
}
function functionHideAllDoors() {
    var arr = document.getElementsByClassName("masks_absoluteDoors");
    var j;
     for(j = 0; j <arr.length; j++) {
         arr[j].style.visibility = "hidden";
         
     }
}
function functionUnHideAllDoors() {
    var arr = document.getElementsByClassName("masks_absoluteDoors");
    var j;
     for(j = 0; j <arr.length; j++) {
         arr[j].style.visibility = "visible";
         
     }
}
function dropDown() {
    var forDropDown = document.getElementById("forDrpD");
   forDrpDown.style.maxHeight = forDrpDown.scrollHeight + "px";
    
}
 function unhideBtns() {
     var pvcW = document.getElementById("hidden");
     
         if(pvcW.style.display=="none") 
         {
            pvcW.style.display = "block";
        }
        else {
        pvcW.style.display = "none";
        }

 }
function unhideBtns2() {
     var pvcW = document.getElementById("hidden2");
     
         if(pvcW.style.display=="none") 
         {
            pvcW.style.display = "block";
        }
        else {
        pvcW.style.display = "none";
        }

 }

function windColours() {
    var p = document.getElementById("9001");
    if(p.style.display=="none") {
        p.style.display = "block";
    }
    else {
        p.style.display = "none";
    }
    
}
function windColours2() {
    var p = document.getElementById("7016");
    if(p.style.display=="none") {
        p.style.display = "block";
    }
    else {
        p.style.display = "none";
    }
    
}
function windColours3() {
    var p = document.getElementById("8022");
    if(p.style.display=="none") {
        p.style.display = "block";
    }
    else {
        p.style.display = "none";
    }
    
}


