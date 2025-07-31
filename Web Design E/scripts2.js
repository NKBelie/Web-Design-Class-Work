function valid(){
var nemu=document.getElementById('us').value;
var pword=document.getElementById('pas').value;
if(nemu=="Pierre" && pword==123){
document.write('<a href="Thursday20.html">Click here</a>');
}
else{
alert("please enter correct password to continue");
}
}
function Total(){
var act=parseInt(document.getElementById('class').value);
var term=parseInt(document.getElementById('mid').value);
var final=parseInt(document.getElementById('fin').value);
var prod=act+term+final;
document.write(prod);
}

function Average(){
var act=parseInt(document.getElementById('class').value);
var term=parseInt(document.getElementById('mid').value);
var final=parseInt(document.getElementById('fin').value);
var Ave=(act+term+final)/3;
document.write(Ave);
}