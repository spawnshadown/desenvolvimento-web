function areaForma(base, altura, tipo){
let area


switch(tipo){

case 'R': // retangulo
aera = base + altura
break
case  'T': // triangulo
area = base * altura / 2
break
case 'E': //Elipse
area = (base/ 2)* (altura / 2) * Math.PI
break
default : // forma nao reconhecida
area = null

}
return area

}

console.log(`A area de um terreno com 16m x 27m é ${areaForma(16 , 27, 'R')}m .`)
console.log(`A area de um triangulo de 4,75cm de altura por 2,5 cm de base é ${areaForma(2.8, 2.8, `E`)}`)
