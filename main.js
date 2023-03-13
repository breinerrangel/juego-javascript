let jugar = document.getElementById("jugar"); 
let papel=document.getElementById("papel")
let piedra = document.getElementById("piedra"); 
let tijera = document.getElementById("tijera");
let jugador = document.getElementById("jugador");
let maquina = document.getElementById("maquina");
let jugadorcontado=0
let maquinacontador=0
let contador = 0;
let veces = 0; 
function aletorio(){
  let random = Math.floor(Math.random(1) * 3 + 1);
  return random

}

  
 



jugar.addEventListener("click", function () {
  veces =+prompt("ingrese la cantidad  de veces a jugar");
  while (veces == "" || veces <= 0) {
    veces =+ prompt  ("ingrese la cantidad  de veces a jugar");
  }
  document.querySelector(".contenedor-boton-jugar").style.display="none"
  document.querySelector(".contenedor").style.display="block"
  
}); 

tijera.addEventListener("click",function(){
  tijera=2
  contador=contador+1
  if(contador<veces){
    if(tijera==2 && aletorio()==1 || aletorio()==1 && tijera==2){
      jugadorcontado++
      jugador.innerHTML=jugadorcontado

    }
    else if(tijera==2 && aletorio()==3 || aletorio()==3 && tijera==2){
      maquinacontador++
      maquina.innerHTML=maquinacontador
    }
    else if(tijera==2 && aletorio()==2 || aletorio()==2 && tijera==2){
      alert("empate")
    }

    
    

  } 
  else{
    alert("ya no tienes mas oportunidades")
    contador=0
    jugador.innerHTML=""
    maquina.innerHTML=""
    document.querySelector(".contenedor-boton-jugar").style.display="felx"

  }


}) 
piedra.addEventListener("click",function(){
  piedra=3
  contador=contador+1
  if(contador<veces){
    if(piedra==3 && aletorio()==1 || aletorio()==1 && piedra==3){
     maquinacontador++
      maquina.innerHTML=maquinacontador

    }
    else if(piedra==3 && aletorio()==2 || aletorio()==2 && piedra==3){
      jugadorcontado++
      jugador.innerHTML=jugadorcontado
    }
    else if(piedra==3 && aletorio()==3 || aletorio()==3 && piedra==3){
      alert("empate")
    }

    
    

  } 
  else{
    alert("ya no tienes mas oportunidades")
    contador=0
    jugador.innerHTML=""
    maquina.innerHTML=""
    document.querySelector(".contenedor-boton-jugar").style.display="flex"


  }


})

papel.addEventListener("click",function(){
  papel=1
  contador++
  if(contador<veces){
    if(papel==1 && aletorio()==2 || aletorio()==2 && papel==1){
      maquinacontador++
      maquina.innerHTML=maquinacontador
 
    }
    else if(papel==1 && aletorio()==3 || aletorio()==3 && papel==1){
      jugadorcontado++
      jugador.innerHTML=jugadorcontado
    }
    else if(papel==1 && aletorio()==1 || aletorio()==1 && papel==1){
      alert("empate")
    }
 
     
     
 
  } 
  else{
  alert("ya no tienes mas oportunidades")
  jugador.innerHTML=""
  maquina.innerHTML=""
  contador=0
  document.querySelector(".contenedor-boton-jugar").style.display="flex"


 
  } 



})

 
