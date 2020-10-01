console.log("***Hola Mundo***");

/* EJERCICIO 3*/
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
	document.getElementById('resultado').innerHTML=num1+' '+signo+' '+num2+' = '+resultado;
}
