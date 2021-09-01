var num1=document.getElementById("one");
var num2=document.getElementById("two");
var num3=document.getElementById("three");
var num4=document.getElementById("four");
var num5=document.getElementById("five");
var num6=document.getElementById("six");
var num7=document.getElementById("seven");
var num8=document.getElementById("eight");
var num9=document.getElementById("nine");
var num0=document.getElementById("zero");
var add=document.getElementById("add");
var mul=document.getElementById("mul");
var sub=document.getElementById("sub");
var divide=document.getElementById("divide");
var equal=document.getElementById("equal");
var dot=document.getElementById("dot");
var clear=document.getElementById("clear");
var cancel=document.getElementById("cancel");
var input = document.getElementById("input_area");

input.innerHTML="";

num1.addEventListener("click",function(){
  input.innerHTML +=num1.innerHTML;
});
num2.addEventListener("click",function(){
  input.innerHTML += num2.innerHTML;
});
num3.addEventListener("click",function(){
  input.innerHTML += num3.innerHTML;
});
num4.addEventListener("click",function(){
  input.innerHTML +=  num4.innerHTML;
});
num5.addEventListener("click",function(){
  input.innerHTML +=num5.innerHTML;
});
num6.addEventListener("click",function(){
  input.innerHTML += num6.innerHTML;
});
num7.addEventListener("click",function(){
  input.innerHTML += num7.innerHTML;
});
num8.addEventListener("click",function(){
  input.innerHTML += num8.innerHTML;
});
num9.addEventListener("click",function(){
  input.innerHTML +=num9.innerHTML;
});
num0.addEventListener("click",function(){
  input.innerHTML +=  num0.innerHTML;
});
add.addEventListener("click",function(){
  input.innerHTML += add.innerHTML;
});
mul.addEventListener("click",function(){
  input.innerHTML += mul.innerHTML;
});
divide.addEventListener("click",function(){
  input.innerHTML += divide.innerHTML;
});
sub.addEventListener("click",function(){
  input.innerHTML += sub.innerHTML;
});
dot.addEventListener("click",function(){
  input.innerHTML += dot.innerHTML;
});
clear.addEventListener("click",function(){
  input.innerHTML ="";
});
cancel.addEventListener("click",function(){
  input.innerHTML =input.innerHTML.substr(0,input.innerHTML.length-1);
});
equal.addEventListener("click",function(){
  input.innerHTML =eval(input.innerHTML);
})
window.addEventListener("keydown",function(e){
  var key =String.fromCharCode(e.keyCode);
  if(e.keyCode==49||e.keyCode==97){
    input.innerHTML+=e.key;
  }
  if(e.keyCode==50||e.keyCode==98){
    input.innerHTML+=e.key;
  }
  if(e.keyCode==51||e.keyCode==99){
    input.innerHTML+=e.key;
  }
  if(e.keyCode==52||e.keyCode==100){
    input.innerHTML+=e.key;
  }
  if(e.keyCode==53||e.keyCode==101){
    input.innerHTML+=e.key;
  }
  if(e.keyCode==54||e.keyCode==102){
    input.innerHTML+=e.key;
  }
  if(e.keyCode==55||e.keyCode==103){
    input.innerHTML+=e.key;
  }
  if(e.keyCode==56||e.keyCode==104){
    input.innerHTML+=e.key;
  }
  if(e.keyCode==57||e.keyCode==105){
    input.innerHTML+=e.key;
  }
  if(e.keyCode==48||e.keyCode==96){
    input.innerHTML+=e.key;
  }
  if(e.keyCode==110||e.keyCode==190){
    input.innerHTML+=e.key;
  }
  if(e.keyCode==107||e.keyCode==187){
    input.innerHTML+=e.key;
  }
  if(e.keyCode==109||e.keyCode==189){
    input.innerHTML+=e.key;
  }
  // mul
  if(e.keyCode==106){
    input.innerHTML+=e.key;
  }
  // divide
  if(e.keyCode==111||e.keyCode==191){
    input.innerHTML+=e.key;
  }
  if(e.keyCode==8){
    input.innerHTML =input.innerHTML.substr(0,input.innerHTML.length-1);
  }
  if(e.keyCode==13){
    input.innerHTML=eval(input.innerHTML);
  }
});
