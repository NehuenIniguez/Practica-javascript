//ejercicio  1
const num=5
const nume=7
let suma= num + nume


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
    
            