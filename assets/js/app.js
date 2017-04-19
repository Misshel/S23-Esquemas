var body= document.getElementsByTagName("BODY")[0];
var sectionPrim= document.createElement("section");
sectionPrim.setAttribute("id","red");
var sectionSeg= document.createElement("section");
sectionSeg.setAttribute("id","blue");
var div1= document.createElement("div");
    div1.setAttribute("id","purple");
    div1.setAttribute("class","primHijo");
var div2= document.createElement("div");
    div2.setAttribute("id","green");
    div2.setAttribute("class","primHijo");

var div3= document.createElement("div");
    div3.setAttribute("id","yellow");
    div3.setAttribute("class","segHijo");

var div4= document.createElement("div");
    div4.setAttribute("id","black");
    div4.setAttribute("class","segHijo");


sectionPrim.appendChild(div1);
sectionPrim.appendChild(div3);

sectionSeg.appendChild(div2);
sectionSeg.appendChild(div4);

body.appendChild(sectionPrim);

body.appendChild(sectionSeg);
