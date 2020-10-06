console.log("***Hola Mundo***");

/*EJERCICIO CALCULADORA CLASE 06/10/2020*/


console.log("*** Calculadora ***");

const calculadora =(operacion)=>{

	let A= document.getElementById("valorA");
	let B= document.getElementById("valorB");
	let resultado= document.getElementById("resultado");

	let valorA= parseInt(A.value);
	let valorB= parseInt(B.value);
	let rta;

	//console.log("operacion =>"+operacion);

	switch(operacion){
		case('suma'):
			rta= valorA+valorB;
			break;
		case('resta'):
			rta= valorA-valorB;
			break;
		case('multiplica'):
			rta= valorA*valorB;
			break;
		case('divide'):
			rta= valorA/valorB;
			break;
		case('limpia'):	
			A.value="";
			B.value="";
			rta="";
			break;
		default:
			break;
	}

	resultado.innerText= rta;
	
}
//********************************
/*FRASE AL REVES Y ESPACIOS EN BLANCO*/
//*********************************
const botonFraseIn= document.getElementById("botonFraseIn");

const tamano= document.getElementById("tamano");
const espacios= document.getElementById("espacios");
const reves= document.getElementById("reves");


const salida= document.getElementById("salida");
let fraseSalida= "";
const cadena = [];

botonFraseIn.addEventListener('click',() =>{
	const fraseIn= document.getElementById("fraseIn").value;

	let arrayFrase= fraseIn.split("");
	let contador= 0;

	console.log(arrayFrase); 

	//-------------------------------RECORRE VECTOR POR POSICION INDICE (i)
	/*for (let i = 0; i<arrayFrase.length; i++) {
		if (arrayFrase[i]==" ") {
			contador ++;
		}
	}*/

	//-------------------------------recorre vector con foreach
	/*arrayFrase.forEach(caracter =>{
		if (caracter==" ") {
			contador ++;
		}
	});*/

	//------------------------------- RECORRE VECTOR CON FOR OF
	for (let caracter of arrayFrase) {
		if (caracter== " ") {

			//contando espacios en blanco
			contador ++;

			//concatena un guion a la frase
			
		}
		fraseSalida = fraseSalida + caracter + "-";
	}
	tamano.innerText= "El tamano del arreglo es"+arrayFrase.length;
	espacios.innerText= "Espacios en blanco "+contador;
	reves.innerText= arrayFrase.reverse();

	salida.innerText= fraseSalida;
});


/* EJERCICIO 1*/
function Ejercicio1(){
	let cadena = "Prueba Javascript";
	let cadenarevertida = "";
	let espacios = 0;
	parseInt(espacios);
			   
	for(var i = cadena.length-1; i>=0; i--)
	{
		cadenarevertida += ','+cadena[i];
		if (cadena[i]== " ") {
		  	espacios ++
		}
			  
	}
	document.getElementById("fraseinversa").innerHTML='Frase: '+cadena+'<br>Frase invertida: '+cadenarevertida+
	'<br>Tama&ntilde;o: '+cadena.length+'<br>Espacios:'+espacios;
			  
}
		
/* EJERCICIO 2 */

function Ejercicio2(){
	const result= document.getElementById("palabra").value;
	let mat= result.length;
	let cadena= "";

	for (let i = 0; i < mat; i++) {
		cadena += result.charAt(i)+'-';
	}
	document.getElementById("frase").innerHTML=cadena;
}


/*EJERCICIO 3*/
const botonIn= document.getElementById('botonIn');
const lista= document.getElementById('lista');

let usuarios=[];
let existe;

botonIn.addEventListener('click', () =>{
	const texto= document.getElementById('textoIn');
	const textoIn= texto.value;

	console.log("Usuario digitado es "+textoIn);

	if(textoIn != ""){

		existeUsuario(textoIn);
		if (!existe) {
			usuarios.push(textoIn);
		}else{
			alert("El usuario "+textoIn+" ya existe");
		}
		
	}else{
		usuarios.sort();
		pintarArray();

	}
	texto.value="";
});

const pintarArray = () =>{

	for(usuario of usuarios){
		let etiqueta= document.createElement("li");
		etiqueta.textContent= usuario;
		lista.appendChild(etiqueta);
	}
};

const existeUsuario = (usuarioIn) => {
	existe= false;
	for (usuario of usuarios) {
		if (usuario === usuarioIn) {
			existe= true;
		}
	}
};

/*EJERCICIO 4*/
function Ejercicio4(){
	const num1= document.getElementById('num1').value;
	const operador = document.getElementById('operador').value;
	const num2= document.getElementById('num2').value;

	let resultado;
	let signo;

	if (operador==1) {
		resultado= num1 + num2;
		signo= "+";
	}else if (operador==2) {
		resultado= num1 - num2;
		signo= "-";
	}else if (operador==3) {
		resultado= num1 / num2;
		signo= "/";
	}else{
		resultado= num1 * num2;
		signo= "*";
	}
	document.getElementById('result').innerHTML=num1+' '+signo+' '+num2+' = '+resultado;
}
