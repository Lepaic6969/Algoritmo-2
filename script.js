//La información se la va a agregar en un Array de Objetos.

//Esta clase es para crear los nuevos objetos.
class Situacion{
    constructor(tipo,calificacion){
        this.tipo=tipo;
        this.calificacion=calificacion;
    }
}
let situaciones=[];
let tipo="Ninguno";
let valor=0;

//Estos arreglos son para almacenar los valores filtrados por tipo del arreglo de situaciones original.
let panico=[];
let traumaMental=[];
let danioFisico=[];


const validarTipo=(tipo)=>{
    if(tipo===""){
        alert("No ha ingresado el dato")
        return "";
    }
    if(tipo!="P" && tipo!="T" && tipo!="F"){
        alert("Dato inválido, recuerde que los tipos sólo pueden ser P=>Pánico T=>Trauma Mental F=>Daño Físico");
        return "";
    }
    return tipo;
}
const validarCalificacion=(calificacion)=>{
    if(calificacion===""){
        alert("No ha ingresado la calificación");
        return null;
    }
    calificacion=Number(calificacion);
    if(isNaN(calificacion)){
        alert("La calificación ingresada no es numérica, verifique e intente nuevamente.");
        return null;
    }
    if(calificacion<1 || calificacion>10){
        alert("La calificación debe estar entre el 1 y 10, verifique y vuelva a intentarlo");
        return null;
    }
    
    return calificacion;

}

const pedirTipo=(i)=>{
    tipo=prompt(`
    Situación ${i+1}:
    Por favor ingresa el tipo de maltrato a la que fue sometido Morty`).toUpperCase(); //Para que acepte minúsculas
       tipo=validarTipo(tipo);
}

const pedirCalificacion=()=>{
    flag=true;
    while(flag){
        valor=prompt("Ingrese la calificacion");
        valor=validarCalificacion(valor);
        if(valor!==null){
           flag=false;
        }
    }
  
}

const clasificarPorTipo=()=>{
    //Primero hacemos un reset de los arreglos.
    panico=[];
    traumaMental=[];
    danioFisico=[];

    //Ahora clasifico según el tipo de matrato
    panico=situaciones.filter(element=>element.tipo==="P");
    traumaMental=situaciones.filter(element=>element.tipo==="T");
    danioFisico=situaciones.filter(element=>element.tipo==="F");

}

const calcularPromedio=(arr)=>{
    let contador=0;
    arr.forEach(element=>{
        contador+=element.calificacion;
    });
    if(arr.length===0){
        return 0;
    }

    return contador/arr.length;

}


for(let i=0;i<20;i++){
   pedirTipo(i);
   if(tipo===""){
       i--; //Para que repita la iteración e ingrese bien el dato
       continue; //Para que acabe la iteración actual y la repita
   }
   pedirCalificacion();
   situaciones.push(new Situacion(tipo,valor));
}

clasificarPorTipo();
console.log(situaciones);
let resultadoFinal=
`Maltrato por pánico => casos: ${panico.length} promedio: ${calcularPromedio(panico).toFixed(2)}
Maltrato por trauma mental => casos: ${traumaMental.length} promedio: ${calcularPromedio(traumaMental).toFixed(2)}
Maltrato por daño físico => casos: ${danioFisico.length} promedio: ${calcularPromedio(danioFisico).toFixed(2)}

`
if(calcularPromedio(traumaMental)>7 || calcularPromedio(danioFisico)>7){
 resultadoFinal+=`¡SE RECOMIENDA UN MÁXIMO CASTIGO PARA EL ACUSADO!`;
}
alert(resultadoFinal);

// console.log(`Promedio de pánico: ${calcularPromedio(panico)}`);
// console.log(`Promedio trauma mental: ${calcularPromedio(traumaMental)}`);
// console.log(`Promedio daño Físico: ${calcularPromedio(danioFisico)}`);