var aboutbody = document.getElementById("aboutbody");
var contactbody = document.getElementById("contactbody");
var worksbody = document.getElementById("worksbody");
 function about(){
     contactbody.style.display = "none";
     worksbody.style.display = "none";
     aboutbody.style.display = "flex";
 }
 function contact(){
     contactbody.removeAttribute("style");
     aboutbody.style.display = "none";
     worksbody.style.display = "none";
 }
 function works(){
     worksbody.removeAttribute("style");
     aboutbody.style.display = "none";
     contactbody.style.display = "none";
 }