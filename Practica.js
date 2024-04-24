//ejercicio  1
const num=5
const nume=7
suma= num + nume


console.log (suma)

//ejercicio 2
const var1=3
const var2=7
const var3=1

if (var1 > var2 && var1 > var3)
    console.log("el mayor es " , var1)
        else if (var2>var3 && var2>var1)
            console.log ("el mayor es ", var2)
                else console.log ("el mayor es ", var3)

if  (var1<var2 && var1<var3)
    console.log("el menor es", var1)
        else if (var2<var1 && var2<var3)
            console.log("el menor es", var2)
                else console.log ("el menor es", var3)


//ejercicio 3

const pal="Locura"
console.log( pal, "Esta palabra tiene "+ pal.length + " letras")


//ejercicio 4

const n2 =7
let n1 =n2 % 2
if ( n1===0 )
    console.log ("es par")
        else console.log ("es impar")


//ejercicio 5


const m1=6
let word="perú "
console.log( word.repeat(m1) )

//ejercicio 6

let L=13
let l2=9

if (L<l2)
    L = L + 1 
        while (L < l2) {
            console.log(L);
            (L = L + 1 );
        }
    if (L>l2)
        L = L - 1 
            while (L > l2) {
                console.log(L);
                (L = L - 1 );
            }


//ejercicio 7

let uno=20
let dos=15
//uno=uno+1
//tres=uno %3
if (uno<dos)
    while (uno<=dos) {  
        tres= uno %3
         if (tres === 0 )
         console.log( uno ," es multiplo de 3")
         
         uno = uno + 1
}
else if (uno>dos)
    while (uno>=dos){
        tres= uno %3
         if (tres === 0 )
         console.log( uno ," es multiplo de 3")
            uno=uno-1
    }

//ejercicio 8

let por= 0
while (por<100) {
    por=por+1
    K=por%2
    V=por%5
        if (K===0 && V===0)
            console.log(por ," es multiplo de 2 y de 5")
}

//ejercicio 9
let array=[1 , 55 , 3 , 7 , 2]
let sum=array.reduce((accumulator, currentValue) => accumulator+currentValue,)
console.log(sum)

let cont=0
//let doce=0
let suma_9=0

while (cont<5){
   // let une=array[cont]
   // doce=doce+1
    suma_9=suma_9+array[cont]
    cont=cont+1

}
console.log(boom)



//ejercicio 10
let array10= [2,3,6,7,10]
let cont10=0
let suma10=0
while (cont10<5){
    numero=array10[cont10] %2
            if (numero===0)
            suma10=suma10+array10[cont10]
    cont10=cont10+1
}

console.log(suma10)

//ejercicio 11

let var11= [
   clave_1= "penelope" ,
   clave_2= "pauperrimo"
]
function contarLetras(palabra) {
    let ocurrencias = {};

    for (let i = 0; i < palabra.length; i++) {
        let letra = palabra[i].toUpperCase(); 
        if (ocurrencias[letra]) {
            ocurrencias[letra]++;
        } else {
            ocurrencias[letra] = 1;
        }
    }
   
    for (let letra in ocurrencias) {
        console.log(`${letra} = ${ocurrencias[letra]}`);
    }
}

contarLetras(clave_1);

// ejercicio 12

let personas = [
    { nombre: "Juan", sexo: "M", edad: 30 },
    { nombre: "María", sexo: "F", edad: 25 },
    { nombre: "Pedro", sexo: "M", edad: 40 },
    { nombre: "Ana", sexo: "F", edad: 35 }
];

function calcularPromedioEdad(lista) {
    let sumaEdades = 0;
    lista.forEach(persona => {
        sumaEdades += persona.edad;
    });
    return sumaEdades / lista.length;
}

function obtenerMujerMayorEdad(lista) {
    let mayorEdad = 0;
    let nombreMujerMayorEdad = "";
    lista.forEach(persona => {
        if (persona.sexo === "F" && persona.edad > mayorEdad) {
            mayorEdad = persona.edad;
            nombreMujerMayorEdad = persona.nombre;
        }
    });
    return nombreMujerMayorEdad;
}

function obtenerHombreMenorEdad(lista) {
    let menorEdad = Infinity;
    let nombreHombreMenorEdad = "";
    lista.forEach(persona => {
        if (persona.sexo === "M" && persona.edad < menorEdad) {
            menorEdad = persona.edad;
            nombreHombreMenorEdad = persona.nombre;
        }
    });
    return nombreHombreMenorEdad;
}

function calcularPromedioEdadMujeres(lista) {
    let sumaEdadesMujeres = 0;
    let cantidadMujeres = 0;
    lista.forEach(persona => {
        if (persona.sexo === "F") {
            sumaEdadesMujeres += persona.edad;
            cantidadMujeres++;
        }
    });
    return sumaEdadesMujeres / cantidadMujeres;
}

let promedioEdad = calcularPromedioEdad(personas);
console.log("Promedio de edad:", promedioEdad);

let nombreMujerMayorEdad = obtenerMujerMayorEdad(personas);
console.log("Nombre de la mujer con mayor edad:", nombreMujerMayorEdad);

let nombreHombreMenorEdad = obtenerHombreMenorEdad(personas);
console.log("Nombre del hombre con menor edad:", nombreHombreMenorEdad);

let promedioEdadMujeres = calcularPromedioEdadMujeres(personas);
console.log("Promedio de edad de las mujeres:", promedioEdadMujeres);

//ejercicio 14

function obtenerDivisores(minimo, maximo, divisor) {
    let divisores = [];
    for (let i = minimo; i <= maximo; i++) {
        if (i % divisor === 0) {
            divisores.push(i);
        }
    }
    return divisores;
}

let minimo = 1;
let maximo = 30;
let divisor = 6;
console.log(obtenerDivisores(minimo, maximo, divisor));



