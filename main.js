/******Tipo de dato Set***********/
const date = new Set()
 data.add( "Oscar");
data.add("Garcia);

console.log(date);











// /*Tipo d datos Maps*/
// const lista = new Map();
// lista.set("Nombre", "Oscar");
// lista.set("aPELLIDO", ["Garcia", "Porras"]);
// lista.delete("aPELLIDO");
// console.log(lista);



















/*Tipo de dato Objeto*/
// const informacion = {
//     personal: {
//         edad: 29,
//         nombre: "oscar",
//         altuta: 1.72
//     },
//     vivienda: {
//         dirrecion: "Calle 105",
//         pais: "Colombia",
//         departamento: "Santander",
//         lan: -7554.545,
//         lon: 546.468
//     },
//     motrar(){
//         return `${this.personal.nombre} * ${this.personal.edad}`;
//     }
};
// informacion.personal.nombre = "Oscar Libardo Garcia Porras";
// console.log(informacion.motrar());
// console.log(informacion);


































/*Tipo de dato null y undefined*/
// let variableExistente = null;
// let variableNoExistente = undefined;

// console.log(typeof(variableExistente));
// console.log(typeof(variableNoExistente));
















/*Tipo de dato Bolean*/
// let soySuProfesor = true;
// let soyUnEstudiante = false;
// console.log(`Verdadero: ${soySuProfesor} Falso: ${soyUnEstudiante}`);

















/*Tipo de datos Number*/
// let edad = 29;
// let altura = 1.72;

// let moneda = Intl.NumberFormat("de-DE", {style: "currency", currency: "COP"}).format(1000);

// console.log(`
//     Edad : ${edad},
//     Altura: ${altura},
//     Moneda: ${moneda}
// \n`);



















/*Tipo de datos String*/
// let primerNombre = "Oscar";
// let segundoNombre = 'Libardo';
// let apellidos = ` Garcia Porras`;

// console.log(primerNombre, segundoNombre, apellidos);
// console.log(primerNombre+' "'+"'"+toString(555).value+"\\n'"+'"');
// console.log(segundoNombre.concat(apellidos));
// console.log(`${primerNombre} "'${segundoNombre}'" `);














// `// let nombre = `Oscar Libardo  Garcia Porras `;

/****Dato almacenado en el cache del navegador 'localStorage' ****/
// localStorage.setItem("Dato", "Libro de cocina");
// let recuperar = localStorage.getItem("Dato");
// console.log(recuperar);


/****** Constantes en JS ********/
// const libros = 'Libro de cocina';
// // libros = "Matematica";
// console.log(libros);



/*******Declaracion de tipo de datos heredado del objeto*****/
// let numero = new Number(1000000);
// let nombre = new String("Hola");
// console.log(numero);
