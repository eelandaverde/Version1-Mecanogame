var descripcion1 = document.getElementById("descripcion1");
let cajaprincipal1 = document.getElementById("cajaprincipal1");
let segundaPagina = document.getElementById("cajaprincipal2");
let descripcion2 = document.getElementById("descripcion2");
let contadorPadre = document.getElementById("contadorPadre");
let posicionMano = document.getElementById("posicionMano");
let direccionIzquierda = document.getElementsByClassName("direccionIzquierda");
let direccionDerecha = document.getElementsByClassName("direccionDerecha");
let cajaprincipal3 = document.getElementById("cajaprincipal3");
let h2=document.getElementsByClassName("tema");
let teclas=document.getElementsByClassName("teclas");
let pteclah2 = document.getElementById("pteclah2");
let contador = 1; 
let start = document.getElementById("start");
let cajaprincipal4 = document.getElementById("cajaprincipal4");
let contadorPorPagina = 0;
let animacion;
let animacionTeclado;
let tiempo;
//posicionamiento inicial
let rojoInicial      =document.getElementsByClassName("rojoInicial");
let anaranjadoInicial=document.getElementsByClassName("anaranjadoInicial");
let amarilloInicial  =document.getElementsByClassName("amarilloInicial");
let verdeInicial     =document.getElementsByClassName("verdeInicial");
let celesteInicial   =document.getElementsByClassName("celesteInicial");
let azulInicial      =document.getElementsByClassName("azulInicial");
let moradoInicial    =document.getElementsByClassName("moradoInicial");
let lilaInicial      =document.getElementsByClassName("lilaInicial");
let grisInicial = document.getElementsByClassName("grisInicial");
let dedos = document.getElementsByClassName("dedos");
let filaTeclado = document.getElementsByClassName("filaTeclado");
//posicionamiento real
let rojo = document.getElementsByClassName("rojo");
let anaranjado = document.getElementsByClassName("anaranjado");
let amarillo = document.getElementsByClassName("amarillo");
let verde = document.getElementsByClassName("verde");
let celeste = document.getElementsByClassName("celeste");
let azul = document.getElementsByClassName("azul");
let morado = document.getElementsByClassName("morado");
let lila = document.getElementsByClassName("lila");
let gris = document.getElementsByClassName("gris");
//juego
let meñique = document.getElementById("meñique");
let anular = document.getElementById("anular");
let medio = document.getElementById("medio");
let indice = document.getElementById("indice");
let pulgar = document.getElementById("pulgar");

let resultados2 = document.getElementById("resultados2");
let meñique2 = document.getElementById("meñique2");
let anular2 = document.getElementById("anular2");
let medio2 = document.getElementById("medio2");
let indice2 = document.getElementById("indice2");
let pulgar2 = document.getElementById("pulgar2");

let cliqueable = document.getElementsByClassName("cliqueable");
let teclaTransformer = document.getElementsByClassName("teclaTransformer");
let rojoPerdido = document.getElementsByClassName("rojoPerdido");
let anaranjadoPerdido = document.getElementsByClassName("anaranjadoPerdido");
let amarilloPerdido = document.getElementsByClassName("amarilloPerdido");
let azulPerdido = document.getElementsByClassName("azulPerdido");
let moradoPerdido = document.getElementsByClassName("moradoPerdido");

let lilaPerdido = document.getElementsByClassName("lilaPerdido");
let teclasABorrar = document.getElementsByClassName("teclasABorrar");
let btonPause = true;

let colores;
let alea;   
let color; 

let nivel = document.getElementById("puntaje1");
let aciertos = document.getElementById("puntaje2");
let desaciertos = document.getElementById("puntaje3");
let numeroAcierto = 0;
let numeroDesacierto = 0;
var conteoAnimacion = 0;

let resultadoFinal = document.getElementById("rfinal");
let continuar = document.getElementById("continue");
let salir = document.getElementById("salir");
let seguirJugando = document.getElementById("continue");
let SalirdelJuego = document.getElementById("salir");
let testing = document.getElementById("paragraph");
let reinicio = false;
let incremento = 0;
let caracter;
let porcentajeAcierto;
let levelDeseado = 1;
let juegoDirecto = 0;
//pagina1
//pagina2
    descripcion1.addEventListener("click",()=>{
    contador=1;
    segundaPagina.style.display="block";
    cajaprincipal1.style.display="none";
    cajaprincipal3.style.display="none";
    contador=2;
    menu(contador);
});
for(let i=0; i<direccionIzquierda.length;i++)
  {
    direccionIzquierda[i].addEventListener("click",()=>{
    contador--;
    menu(contador);
})};
for(let i=0; i<direccionDerecha.length;i++){
direccionDerecha[i].addEventListener("click",()=>{
    contador++;
    menu(contador);
})}
/*derecha*/
/* Aqui vamos a hacer una funcion  que vaya creando diferentes paginas de una forma dinamica */
function menu (a)
{
switch(a){  
case 1:
    segundaPagina.style.display="none";
    cajaprincipal1.style.display="flex";
    cajaprincipal3.style.display="none";
    cajaprincipal4.style.display = "none";
    console.log(a);
break;
case 2:
    console.log(a);
    cajaprincipal1.style.display="none";
    cajaprincipal3.style.display="none";
    segundaPagina.style.display="flex";
    start.style.display = "none";
    resultadoFinal.style.display = "none";
    cajaprincipal4.style.display = "none";
    contadorPadre.style.display="none";
    for(let i=0; i<teclas.length;i++){teclas[i].style.backgroundColor="black";}
    for(let i=0; i<dedos.length; i++){dedos[i].style.backgroundColor="#ffebaa";}
break;
case 3:
    cajaprincipal1.style.display="none";
    cajaprincipal3.style.display="none";
    segundaPagina.style.display="flex";
    contadorPadre.style.display="none";
    resultadoFinal.style.display = "none";
    start.style.display = "none";
    h2[0].innerHTML="ASI ES COMO TU DEBES DE PONER TUS DEDOS SOBRE EL TECLADO, PARA ESTAR LISTO ANTES DE ESCRIBIR";
    cajaprincipal4.style.display = "none";
    for(let i=0; i<teclas.length; i++)
    {
        teclas[i].style.backgroundColor = "";
        teclas[i].style.backgroundColor = "";
    }
    for(let i=0; i<2; i++)
    {
        rojoInicial[i].style.backgroundColor="red";
        anaranjadoInicial[i].style.backgroundColor="#FB8201";
        amarilloInicial[i].style.backgroundColor=  "yellow";
        verdeInicial   [i].style.backgroundColor=  "green";
        celesteInicial [i].style.backgroundColor=  "#04B5B0";
        azulInicial    [i].style.backgroundColor=  "blue";
        moradoInicial  [i].style.backgroundColor=  "#3F0441";
        lilaInicial   [i].style.backgroundColor=   "#CD46C1";
        grisInicial[i].style.backgroundColor="#5E5E5E";
   } 
   gris[0].style.backgroundColor= "#5E5E5E";
   for(let i=0; i<filaTeclado.length;i++){filaTeclado[i].style.backgroundColor="black";}

    console.log(a);
break;
case 4:
    cajaprincipal1.style.display="none";
    cajaprincipal3.style.display="none";
    segundaPagina.style.display="flex";
    contadorPadre.style.display="none";
    resultadoFinal.style.display = "none";
    start.style.display = "none";
    h2[0].innerHTML="ESTA ES LA POSICION DE CADA DEDO A LA HORA DE ESCRIBIR";
    cajaprincipal4.style.display = "none";
    for(let i=0; i<rojo.length; i++){rojo[i].style.backgroundColor="red";}
    for(let i=0; i<anaranjado.length; i++){anaranjado[i].style.backgroundColor="#FB8201";}
    for(let i=0; i<amarillo.length; i++){amarillo[i].style.backgroundColor="yellow";}
    for(let i=0; i<verde.length; i++){verde[i].style.backgroundColor="green";}
    for(let i=0; i<celeste.length; i++){celeste[i].style.backgroundColor="#04B5B0";}
    for(let i=0; i<azul.length; i++){azul[i].style.backgroundColor="blue";}
    for(let i=0; i<morado.length; i++){morado[i].style.backgroundColor="#3F0441";}
    for(let i=0; i<lila.length; i++){lila[i].style.backgroundColor="#CD46C1";}
    for(let i=0; i<gris.length; i++){gris[i].style.backgroundColor="#5E5E5E";}
    
    for(let i=0; i<rojoPerdido.length; i++){rojoPerdido[i].style.backgroundColor="red";}
    for(let i=0; i<anaranjadoPerdido.length; i++){anaranjadoPerdido[i].style.backgroundColor="#FB8201";}
    for(let i=0; i<amarilloPerdido.length; i++){amarilloPerdido[i].style.backgroundColor="yellow";}
    for(let i=0; i<azulPerdido.length; i++){azulPerdido[i].style.backgroundColor = "blue";}
    for(let i=0; i<moradoPerdido.length; i++){moradoPerdido[i].style.backgroundColor="#3F0441";}
    for(let i=0; i<lilaPerdido.length; i++){lilaPerdido[i].style.backgroundColor="#CD46C1";}
    for(let i=0; i < teclasABorrar.length; i++){let actual = teclasABorrar[i].style.color="";}
    
    console.log(a);
break;
case 5:
    segundaPagina.style.display="none";
    cajaprincipal1.style.display="none";
    h2[0].style.display = "block";
    cajaprincipal3.style.display="flex";
    start.style.display = "none";   
    resultadoFinal.style.display = "none";
    cajaprincipal4.style.display = "none";
    console.log(a);
break;
case 6:
    

    segundaPagina.style.display="none";
    cajaprincipal1.style.display="none";
    h2[0].style.display = "none";
    cajaprincipal3.style.display="none";
    start.style.display = "none";   
    resultadoFinal.style.display = "none";
    cajaprincipal4.style.display = "flex";
break;
case 7:
    // estilos de la pagina actual
    console.clear();
    contadorPorPagina ++;
    segundaPagina.style.display="flex";
    cajaprincipal1.style.display="none";
    cajaprincipal3.style.display="none";
    cajaprincipal4.style.display = "none";
    start.style.display = "block";
    h2[0].style.display = "none";
    start.style.color = "black";
    contadorPadre.style.display = "flex";
    for(let i=0; i < teclasABorrar.length; i++){let actual = teclasABorrar[i].style.color = "transparent";}
    for(let i=0; i <teclas.length;i++){teclas[i].style.backgroundColor="black";}
    for(let i=0; i < dedos.length; i++){dedos[i].style.backgroundColor="#ffebaa";} 
    resultadoFinal.style.borderColor = "";
    contadorPadre.style.borderColor = "";
    //modo manual o automatico
   if(btonPause === true && contadorPorPagina === 1 ){
    setTimeout(function(){intencion = prompt("Presione 1 Si desea programar el nivel a comenzar/continuar <br> o presione cualquier otra tecla, incluso ninguna si desea continuar en automatico");
        while(intencion == 1){
              try
            {
                levelDeseado = Number(prompt("Ponga el nivel de dificultad que desea practicar, provoque poner del 1-8"));
                if(levelDeseado > 0 && levelDeseado < 9)
                {
                    break;
                }
            }
              catch(err)
            {
                console.clear();
                console.error(err);
            }
        }},500);}
        
        //fin modo manual y automatico
 //varios
    
break;
default:
    (contador>6) ? contador=6:contador=contador;
break;
}

}

////solo aplica cuando aparece boton comenzar en case 6
start.addEventListener("click" , () => {
       
    if(btonPause === true ) 
    {
        btonPause = false;
        animacion = intervalo();
        start.innerHTML = "PAUSA";
    }
    else 
    {
        if(btonPause === true){start.innerText = "PAUSA";}
        btonPause = true;
        start.innerHTML = "REANUDAR";
        finInterval(animacion);
    }
})

//////////////////////////////////////////////////////////////////////////
    function azar (parametro)
    {
        aleatorio = Math.floor(Math.random() * parametro);
        return aleatorio;
    } 
    function transformacion()
    { 
        for(let i=0; i<teclaTransformer.length; i++){teclaTransformer[i].style.backgroundColor = ""; teclaTransformer[i].style.color = ""; }
        for(let i=0; i<dedos.length; i++){dedos[i].style.backgroundColor = "";}
    }
    function intervalo () 
    {
        if (levelDeseado == 1)
        {
            tiempo = 3000;
            alert("Estas en el nivel 1");
        }
        else if(levelDeseado == 2)
        {
            tiempo = 1500; 
            alert("Bienvenido al nivel 2");
            setTimeout(function(){},2000);
            nivel.innerHTML=2;
        }
        else if(levelDeseado ==3)
        {
            tiempo = 2500; 
            alert("Bienvenido al nivel 3");
            setTimeout(function(){},2000);
            nivel.innerHTML=3;
        }
        else if(levelDeseado ==4)
        {
            tiempo = 2000; 
            alert("Bienvenido al nivel 4");
            setTimeout(function(){},2000);
            nivel.innerHTML = 4;
        }
        else if(levelDeseado ==5)
        {
            tiempo = 1500; 
            alert("Bienvenido al nivel 5");
            setTimeout(function(){},2000);
            nivel.innerHTML = 5;
        }
        else if(levelDeseado == 6)
        {
            tiempo = 1000;
            alert("Bienvenido al nivel 6");
            setTimeout(function(){},2000);
            nivel.innerHTML = 6;
        }
        else if(levelDeseado ==7)
        {
            tiempo = 800;
            alert("Bienvenido al nivel 7");
            setTimeout(function(){},2000);
            nivel.innerHTML = 7;
        }
        else if(levelDeseado ==8)
        {
            tiempo = 500;
            alert("Bienvenido al nivel 8 y al ultimo nivel");
            setTimeout(function(){},2000);
            nivel.innerHTML = 8;
        }
        else
        {
            if(levelDeseado == 9)
            {
                nivel.innerHTML = 1;
                levelDeseado = 1;
            }
        }
        animacionTeclado = setInterval(juego,tiempo); 
        return animacionTeclado;
    }
    
    function finInterval(fin)
    {
        clearInterval(fin);
    }
    
    function juego () 
    {
        colores = [rojo,anaranjado,amarillo,verde,celeste,azul,morado,lila,gris];
        alea    = azar(colores.length);   
        color   =  azar(colores[alea].length); // esto ayudará para saber el elemento especifico
        conteoAnimacion ++;
        let goodThings =  aciertos.innerHTML;
        porcentajeAcierto = (goodThings*100)/conteoAnimacion;
        
        if(conteoAnimacion === 50 && porcentajeAcierto >= 50)
        {
            conteoAnimacion = 0;
            btonPause = true;
            start.innerHTML = "REANUDAR";
            finInterval(animacion);
            resultadoFinal.style.display = "flex";
            testing.innerHTML = "USTED HA APROBADO EL TESTING";
            resultadoFinal.style.borderColor = "";
            contadorPadre.style.borderColor = "";
            levelDeseado ++;
            if(levelDeseado == 9)
            {
                testing.innerHTML = "USTED HA APROBADO EL TUTORIAL DE MECANOGRAFIA <br> FELICIDADES!!";
            }
        }
        else if(conteoAnimacion === 50 && porcentajeAcierto < 50)
        {
            conteoAnimacion = 0;
            btonPause = true;
            start.innerHTML = "REANUDAR";
            finInterval(animacion);
            resultadoFinal.style.display = "flex";
            resultadoFinal.style.borderColor = "red";
            contadorPadre.style.borderColor = "red";
            testing.innerHTML = "USTED HA REPROBADO EL TESTING";
            levelDeseado = levelDeseado;
        }

        switch (alea)
        {case 0:
            
            colores[alea][color].style.backgroundColor = "red";
            meñique.style.backgroundColor = "red";
            window.onkeydown =  presionar_tecla;  //capturamos el evento y lo mandamos
            setTimeout(transformacion,tiempo/2);
            
        break;
        case 1:
            colores[alea][color].style.backgroundColor = "#FB8201";
            anular.style.backgroundColor = "#FB8201";
            window.onkeydown = presionar_tecla; //capturamos el evento y lo mandamos
            setTimeout(transformacion,tiempo/2);
        break;
        case 2:
            colores[alea][color].style.backgroundColor = "yellow";
            medio.style.backgroundColor = "yellow";
            window.onkeydown = presionar_tecla; //capturamos el evento y lo mandamos
            setTimeout(transformacion,tiempo/2);
        break;
        case 3:
            colores[alea][color].style.backgroundColor = "green";
            indice.style.backgroundColor = "green";
            window.onkeydown = presionar_tecla; //capturamos el evento y lo mandamos
            setTimeout(transformacion,tiempo/2);
        break;
        case 4:
            colores[alea][color].style.backgroundColor = "#04B5B0";
            indice2.style.backgroundColor = "#04B5B0";
            window.onkeydown = presionar_tecla; //capturamos el evento y lo mandamos
            setTimeout(transformacion,tiempo/2);
        break;
        case 5: 
            colores[alea][color].style.backgroundColor = "blue";
            medio2.style.backgroundColor = "blue";
            window.onkeydown = presionar_tecla; //capturamos el evento y lo mandamos
            setTimeout(transformacion,tiempo/2);
        break;
        case 6:
            colores[alea][color].style.backgroundColor = "#3F0441";
            anular2.style.backgroundColor = "#3F0441";
            window.onkeydown = presionar_tecla; //capturamos el evento y lo mandamos
            setTimeout(transformacion,tiempo/2);
        break;
        case 7:
            colores[alea][color].style.backgroundColor = "#CD46C1";
            meñique2.style.backgroundColor = "#CD46C1";
            window.onkeydown = presionar_tecla; //capturamos el evento y lo mandamos
            setTimeout(transformacion,tiempo/2);
        break;
        case 8:
            colores[alea][color].style.backgroundColor = "#5E5E5E";
            pulgar.style.backgroundColor = "#5E5E5E";
            pulgar2.style.backgroundColor = "#5E5E5E";
            window.onkeydown = presionar_tecla; //capturamos el evento y lo mandamos
            setTimeout(transformacion,tiempo/2);
        break;
        default:
        break;
        }
}
    //Botones de advertencia si desea pasar al siguiente nivel o salirse
    seguirJugando.addEventListener("click",()=>
    {
        contadorPadre.style.borderColor = "";
        btonPause = false;
        animacion = intervalo();
        start.innerHTML = "PAUSA";
        resultadoFinal.style.display = "none";
        aciertos.innerHTML = 0;
        desaciertos.innerHTML = 0;
        reinicio = true;
        });
    SalirdelJuego.addEventListener("click", ()=>{
        if(btonPause === true){start.innerText = "PAUSA";}
          btonPause = true;
          start.innerHTML = "COMENZAR";
          finInterval(animacion);
          resultadoFinal.style.display = "none";
          aciertos.innerHTML = 0;
          desaciertos.innerHTML = 0;
          menu(1);
          reinicio = true;
          levelDeseado = 1;
    })
//Fin, advertencia de querer seguir jugando
    function presionar_tecla () 
    {
        caracter = colores[alea][color].innerText;
        let tecla = String.fromCharCode(event.keyCode);
        if (tecla == "À"){ tecla = "Ñ"  }
        if(event.keyCode == 32){tecla = "ESPACIO"};
        if (reinicio === true)
        {
            reinicio = false;
            numeroAcierto = 0;
            numeroDesacierto = 0;
        }
       
        console.log(reinicio);
        
        if(tecla == caracter)
        {
            numeroAcierto++;
            incremento = numeroAcierto;
            aciertos.innerHTML = incremento;
        }
        
        else
        {
            numeroDesacierto++;
            incremento = numeroDesacierto;
            desaciertos.innerHTML = incremento;
        };
       
        }

        //eventos de click aparte del teclado
       for(let i = 0; i < cliqueable.length; i++)
       {
        cliqueable[i].addEventListener("click",function(evento){
            
            if (reinicio === true)
            {
                reinicio = false;
                numeroAcierto = 0;
                numeroDesacierto = 0;
            }
            caracter = colores[alea][color].innerHTML;
            let comparacion = evento.target.innerHTML;
        
            if (caracter == comparacion)
            {
                numeroAcierto++;
               incremento = numeroAcierto;
                aciertos.innerHTML = incremento;
                
            }
            else
        {
            numeroDesacierto++;
            incremento = numeroDesacierto;
            desaciertos.innerHTML = incremento;
        };
        })};    
       
        
        
        
       
////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                SEGUNDA PARTE
////////////////////////////////////////////////////////////////////////////////////////////////////////7///
descripcion2.addEventListener("click", function(){juegoDirecto ++; menu(contador)}); 
if(juegoDirecto > 0){ contador = 7; menu(contador); juegoDirecto = 0;}


    
