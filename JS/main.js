alert("Hola! bienvenidos a la plataforma")
let nombre = prompt ("Ingrese su nombre")
alert(nombre)

let edad = parseInt(prompt ("Ingrese su edad"))
alert(edad)


if (edad >= 18){
    console.log("Bievenido a la previa almacen y bebidas")
} else{
    console.log("Eres menor, no puedes ingresar a la plataforma")
    vino()
}


function mensaje(){
    console.log("producto elegido")}

//for(let i = 1; i<=8; i++){
//    console.log(i)}//todavia no se donde aplicarlo
let menu = parseInt(prompt("ingrese 0 para ver producto1, ingrese 1 para ver producto2, ingrese 2 para ver producto3, ingrese 3 para ver producto4, ingrese 4 para ver producto5, ingrese otro numero si no necesita nada mas"))

    switch(menu){
        case 0: console.log("Luigui bosca malbec")
        break
        case 1: console.log("Trumpeter malbec")
        break
        case 2: console.log("D.V Cnatena")
        break
        case 3: console.log("Rutini")
        break
        case 4: console.log("Alamos")
        break
        default: console.log("")


        let confirmacion = prompt("desea hacer otra consulta? si/no")
         if(confirmacion == "no")
          continuar = false
          console.log("gracias")}




const producto1 = {
    nombre:"luigui bosca",
    caracteristicas: "tinto color roojo violaceo brillante.Sus aromas son intensos y amables, con notas que recuerdan a frutas rojas, y tonos algo florales y especiados",
    tipo: "malbec", 
    maridajes:"carnes, pastas",
    precio: 12400,
    descuento: 10
}

const producto2 = {
    nombre:"Trumpeter",
    caracteristicas: "De un impactante color violeta, naris frutal destacando ciruelas, cerezas y notas de flores",
    tipo: "malbec", 
    maridajes:"Tablas de quesos duros, carnes vacunas grilladas y pastas rellenas con salsa a base de carnes",
    precio: 8500,
    descuento: 10
}
const producto3 = {
    nombre:"D.V Catena",
    caracteristicas: "Aporta aromas de mermelada de ciruelas maduras y moras negras, suavidad y volumen al paladar",
    tipo: "malbec, malbec", 
    maridajes:"carnes rojas, carnes a la parrilla, verduras salteadas",
    precio: 14900,
    descuento: 10
}
const producto4 = {
    nombre:"Rutini",
    caracteristicas: "Rojo violaceo, con matices azulados, En nariz, se destaca una gran complejidad aromatica: Notas de ciruela entremezcladas con especias que recuerdan a vainillas, anis y pimiemta negra",
    tipo: "malbec", 
    maridajes:"carnes vacunas, quesos duros, locro, guiso de lentejas, cordero, chivito",
    precio: 28000,
    descuento: 10
}
const producto5 = {
    nombre:"Alamos",
    caracteristicas: "Presenta un profundo color purpura con reflejos violetas, su aroma remite a intensos frutos negros con ligeras notas florales y de tostado",
    tipo: "malbec", 
    maridajes:"carnes rojas, pizzas, aves condimentadas",
    precio: 9500,
    descuento: 10
}
const vinos = [producto1, producto2, producto3, producto4, producto5]
console.log(vinos)

for (const vino of vinos){
    console.log(vino.nombre)
}


//function sumar(){
//   let producto1 = 12400
//   let producto2 = 8500
//   let producto3 = 14900
//   let producto4 = 28000
//   let producto5 = 9500}
//let total = sumar()
//console.log("Su total es"+ total)