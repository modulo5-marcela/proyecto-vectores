let nu1 = prompt("Ingrese el primer número :");
let nu2 = prompt("Ingrese el seundo número :");
let nu3 = prompt("Ingrese el tercero número :");


// verifica que numero es positivo
if( nu1 > 0 ){
   let  resultado= nu2-nu3
document.write("El primer número positivo  La resta de los otros dos es:"+resultado);
}else{
    if(nu3!==0){ //verifica si la variable nu3 no es igual a 0.
        let resultado=nu2/ nu3;
        document.write("El primer número negativo y La division de los otros dos es: "+resultado);
    }else{
        document.write("Error: No se puede dividir entre cero.");
    }//fin if

}//fin if