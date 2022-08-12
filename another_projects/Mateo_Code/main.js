window.onload = init;
function init(){
    document.querySelector(".start").addEventListener("click",cronometrar);
    document.querySelector(".stop").addEventListener("click",parar);
    document.querySelector(".reiniciar").addEventListener("click",reiniciar);
    h = 0;
    m = 0;
    s = 0;
    document.getElementById("hms").innerHTML="00:00:00";
}         
function cronometrar(){
    escribir();
    id = setInterval(escribir,10);
    document.querySelector(".start").removeEventListener("click",cronometrar);
}
function escribir(){
    var hAux, mAux, sAux;
    s++;
    if (s>59){m++;s=0;}
    if (m>59){h++;m=0;}
    if (h>24){h=0;}

    if (s<10){sAux="0"+s;}else{sAux=s;}
    if (m<10){mAux="0"+m;}else{mAux=m;}
    if (h<10){hAux="0"+h;}else{hAux=h;}

    document.getElementById("hms").innerHTML = hAux + ":" + mAux + ":" + sAux; 
}
function parar(){
    clearInterval(id);
    document.querySelector(".start").addEventListener("click",cronometrar);

}
function reiniciar(){
    clearInterval(id);
    document.getElementById("hms").innerHTML="00:00:00";
    h=0;m=0;s=0;
    document.querySelector(".start").addEventListener("click",cronometrar);
}

const event_tercera_ley = document.getElementById("event_tercera_ley");
const masa_cuerpo = document.getElementById("masa_cuerpo");
const gravedad = 9.8
let fuerza;
let distancia;

event_tercera_ley.addEventListener("click", ()=>{
    let tiempo = m + (s/100);
    distancia = (1/2)*(gravedad)*(Math.pow(tiempo, 2));
    velocidad_final = gravedad * tiempo;
    fuerza =(masa_cuerpo.value * gravedad);
    
    console.log("Calculo con lo Datos Originales");
    let calculo_original = [["Distancia", distancia], ["Velocidad Final", velocidad_final], ["Fuerza", fuerza]]
    console.table(calculo_original);
    
    console.log("Calculo con lo Datos Simulados");
    let calculo_simulado = [["Distancia", distancia*10], ["Velocidad Final", velocidad_final*10], ["Fuerza", fuerza]]
    console.table(calculo_simulado);
})

