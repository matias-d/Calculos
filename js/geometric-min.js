const myModule=(()=>{"use strict";let h=document.getElementById("result"),a=document.querySelector("#btnPerimSquare"),b=document.querySelector("#btnAreaSquare"),c=document.querySelector("#btnPerimTriangle"),d=document.querySelector("#btnAreaTriangle"),e=document.querySelector("#btnDiamCircle"),f=document.querySelector("#btnPerimCircle"),g=document.querySelector("#btnAreaCircle"),i=a=>4*a,j=a=>a*a;a.addEventListener("click",()=>{let a=document.getElementById("inputSide");a=Number(a.value);let b=`El perimetro de Cuadrado es: ${i(a)} cm`;h.innerText=b}),b.addEventListener("click",()=>{let a=document.getElementById("inputSide");a=Number(a.value);let b=`El area del Cuadrado es : ${j(a)} cm^2`;h.innerText=b});let k=(a,b,c)=>a+b+c,l=(a,b)=>a/b*2;c.addEventListener("click",()=>{let a=document.getElementById("inputSide1"),b=document.getElementById("inputSide2"),c=document.getElementById("inputSide3");a=Number(inputSide1.value),b=Number(inputSide2.value),c=Number(inputSide3.value);let d=`El perimetro de un Triangulo es : ${k(a,b,c)} cm`;h.innerText=d}),d.addEventListener("click",()=>{let a=document.getElementById("inputBase"),b=document.getElementById("inputHeight");a=Number(a.value),b=Number(b.value);let c=`El area de un Triangulo es : ${l(a,b)} cm^2`;h.innerText=c});let m=a=>2*a,n=a=>m(a)*Math.PI,o=a=>a*a*Math.PI;e.addEventListener("click",()=>{let a=document.getElementById("inputCircle");a=Number(a.value);let b=`El diametro de un Circulo es : ${m(a)}`;h.innerText=b}),f.addEventListener("click",()=>{let a=document.getElementById("inputCircle");a=Number(a.value);let b=`El perimetro de un Circulo es : ${n(a)} cm`;h.innerText=b}),g.addEventListener("click",()=>{let a=document.getElementById("inputCircle");a=Number(a.value);let b=`El area de un Circulo es : ${o(a)} cm^2`;h.innerText=b})})()