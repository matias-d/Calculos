
const myModule = (()=>{
    'use strict'
    const valueResult = document.getElementById('result');

    const btnPerimSquare = document.querySelector('#btnPerimSquare'),
        btnAreaSquare = document.querySelector('#btnAreaSquare'),
        btnPerimTriangle = document.querySelector('#btnPerimTriangle'),
        btnAreaTriangle = document.querySelector('#btnAreaTriangle'),
        btnDiamCircle = document.querySelector('#btnDiamCircle'),
        btnPerimCircle = document.querySelector('#btnPerimCircle'),
        btnAreaCircle = document.querySelector('#btnAreaCircle');


// área y perimetro de cuadrado.
    const perimSquare = (side) => side * 4;
    const areaSquare = (side) => side * side;

    btnPerimSquare.addEventListener('click', ()=>{
        let inputSide = document.getElementById('inputSide');
        inputSide = Number(inputSide.value);

        const result = `El perimetro de Cuadrado es: ${perimSquare(inputSide)} cm`
        valueResult.innerText = result;
    })
       

    btnAreaSquare.addEventListener('click', ()=>{
        let inputSide = document.getElementById('inputSide');
        inputSide = Number(inputSide.value);

        const result = `El area del Cuadrado es : ${areaSquare(inputSide)} cm^2`
        valueResult.innerText = result;
    })

    // Perimetro y Area de Triangulo

    const perimTriangle = (side1, side2, side3) => side1 + side2 + side3;
    const byaTriangle = (base, hight) => base / hight * 2;

    btnPerimTriangle.addEventListener('click',()=>{
        let side1 = document.getElementById('inputSide1');
        let side2 = document.getElementById('inputSide2');
        let side3 = document.getElementById('inputSide3');
        side1 = Number(inputSide1.value);
        side2 = Number(inputSide2.value);
        side3 = Number(inputSide3.value);

        const result = `El perimetro de un Triangulo es : ${perimTriangle(side1, side2, side3)} cm`
        valueResult.innerText = result;
    })
        

    btnAreaTriangle.addEventListener('click',()=>{
        let base = document.getElementById('inputBase');
        let height = document.getElementById('inputHeight');
        base = Number(base.value);
        height = Number(height.value);

        const result = `El area de un Triangulo es : ${byaTriangle(base, height)} cm^2`;
        valueResult.innerText = result;
    })
        

    // Perimetro , Area y Diametro del Circulo;


    const diameCircle = (radio) => radio * 2;
    const perimCircle = (radio) => diameCircle(radio) * Math.PI;
    const areaCircle = (radio) => (radio * radio) * Math.PI;

    btnDiamCircle.addEventListener('click', ()=>{
        let radio = document.getElementById('inputCircle');
        radio = Number(radio.value);

        const result = `El diametro de un Circulo es : ${diameCircle(radio)}`;
        valueResult.innerText = result;
    
    })

    btnPerimCircle.addEventListener('click',()=>{
        let radio = document.getElementById('inputCircle');
        radio = Number(radio.value);

        const result = `El perimetro de un Circulo es : ${perimCircle(radio)} cm`;
        valueResult.innerText = result;
    })
        
    
    btnAreaCircle.addEventListener('click', ()=>{
        let radio = document.getElementById('inputCircle');
        radio = Number(radio.value);

        const result = `El area de un Circulo es : ${areaCircle(radio)} cm^2`
        valueResult.innerText = result;
    })

    /* return {
        psq : calculatePerimSquare,
        asq : calculateAreaSquare
    }
    */ 

})();





