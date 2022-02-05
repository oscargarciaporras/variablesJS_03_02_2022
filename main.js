// document.getElementById("botonCerrar")

//Abrir Ventana
document.querySelector("#mostrarVentana").addEventListener("click", (e)=>{
    document.querySelector("#ventana").show();
})

//Cerrar Ventana
document.querySelector("#botonCerrar").addEventListener("click", (e)=>{
    document.querySelector("#ventana").close();
})