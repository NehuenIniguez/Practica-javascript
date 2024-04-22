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
let boom=0

while (cont<5){
   // let une=array[cont]
   // doce=doce+1
    boom=boom+array[cont]
    cont=cont+1

}
console.log(boom)



//ejercicio 10
