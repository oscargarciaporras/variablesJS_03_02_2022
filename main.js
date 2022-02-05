console.log("Mensaje");
console.warn("Advertencia");
console.error("Eroor");
console.group("Agrupar Mensaje");

    let datos = [
        {Nombre: "Miguel", Edad: 23},
        {Nombre: "Raul", Edad:33 },
        {Nombre: "JuanCarlos", Edad: 36 },
        {Nombre: "oscar", Edad:29 }
    ];
    console.table(datos);

console.groupEnd();

console.log("%c Personalizado", "color:blue; font-family:cursive; font-size: 20px;");

