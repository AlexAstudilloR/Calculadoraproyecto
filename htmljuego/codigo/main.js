class Juego{
    constructor(){
        this.puntoUsuario=0;
        this.puntoPc=0;
        this.instrucciones=document.querySelector("#instrucciones");
        this.contenedorPuntoUsuario=document.querySelector("#user-score");
        this.contenedorPuntoPc=document.querySelector("#pc-score");
        this.mensaje=document.querySelector("#mensaje");
        this.contenedorGanador=document.querySelector("#win");
        this.eleccionUsuario=document.querySelector("#jugador-eleccion");
        this.eleccionPc=document.querySelector("#pc-eleccion");
        this.user=""
        this.pc=0
        this.arma=document.querySelector("#elegir-arma");
        this.botones=document.querySelectorAll(".arma");
        this.reiniciar=document.querySelector("#reiniciar");
        this.menuBoton1=document.querySelector("#boton1");
        this.menuBoton2=document.querySelector("#boton2");
        this.menuBoton3=document.querySelector("#boton3");
        this.menu=document.querySelector("#menu");
        this.juego=document.querySelector(".juego");
        this.reglas=document.querySelector(".reglas");
        this.regresar=document.querySelectorAll(".volver");
        this.extra=document.querySelector(".more-content");
    }
    //Metodos
    Iniciarturno(e){
        this.pc= Math.floor(Math.random()*3);
        this.user=e.currentTarget.id
        //piedra =0
        //papel=1
        //tijera=2
        switch(this.pc){
            case 0:
                this.pc="piedra";
                break
            case 1:
                this.pc="papel";
                break
            case 2:
                this.pc="tijera";
                break
        }
        if (this.user === "piedra" && this.pc === "tijera" || this.user === "papel" && this.pc === "piedra"
        || this.user === "tijera" && this.pc === "papel"){
            obj.ganaUser()
        }else if (this.pc === "piedra" && this.user === "tijera"|| this.pc==="papel" && this.user === "piedra"
        || this.pc=== "tijera" && this.user === "papel"){
            obj.ganaPc()
        }else{
            obj.empate()
        }
        obj.mensaje.classList.remove("disabled");
        obj.reiniciar.classList.remove("disabled");
        obj.eleccionPc.innerText = this.pc;
        obj.eleccionUsuario.innerText=this.user;
        obj.finPartida();
    }
    ganaUser(){
        this.puntoUsuario=this.puntoUsuario+1;
        this.contenedorPuntoUsuario.innerText=this.puntoUsuario;
        this.contenedorGanador.innerText="Ganaste un punto 🔥"
    }
    ganaPc(){
        this.puntoPc=this.puntoPc+1;
        this.contenedorPuntoPc.innerText=this.puntoPc;
        this.contenedorGanador.innerText="La computadora ganó un punto 🔥"
    }
    empate(){
        this.contenedorGanador.innerText="Nadie ganó 😱"
    }
    finPartida(){
        if (this.puntoUsuario ===5){
            obj.instrucciones.innerText="🔥 Ganaste el juego 🔥"
            obj.reiniciar.classList.remove("disabled");
            obj.arma.classList.add("disabled");
        }else if(this.puntoPc ===5){
            obj.instrucciones.innerText="😱 La computadora ganó 😱"
            obj.reiniciar.classList.remove("disabled");
            obj.arma.classList.add("disabled");
         }
    }
    reiniciarJuego(){
        obj.reiniciar.classList.add("disabled")
        obj.mensaje.classList.add("disabled")
        obj.arma.classList.remove("disabled");
        obj.instrucciones.innerText="Gana el primero en llegar a 5 puntos"
        obj.puntoPc=0;
        obj.puntoUsuario=0;
        obj.contenedorPuntoPc.innerText=obj.puntoPc;
        obj.contenedorPuntoUsuario.innerText=obj.puntoUsuario;
    }
    juegonuevo(){
        obj.menu.classList.add("disabled");
        obj.juego.classList.remove("disabled");
    }
    mostrarReglas(){
        obj.reglas.classList.remove("disabled");
        obj.menu.classList.add("disabled");
    }
    volver(){
        obj.menu.classList.remove("disabled");
        obj.juego.classList.add("disabled");
        obj.reglas.classList.add("disabled");
        obj.extra.classList.add("disabled");
    }
    mostrarProyectos(){
        obj.menu.classList.add("disabled");
        obj.extra.classList.remove("disabled");
    }
}

const obj= new Juego()
obj.botones.forEach(boton => { boton.addEventListener("click",obj.Iniciarturno)})
obj.reiniciar.addEventListener("click",obj.reiniciarJuego);
obj.menuBoton1.addEventListener("click",obj.juegonuevo)
obj.menuBoton2.addEventListener("click",obj.mostrarReglas);
obj.menuBoton3.addEventListener("click",obj.mostrarProyectos);
const obj2 = new Juego();
obj2.regresar.forEach(botonR =>{ botonR.addEventListener("click",obj2.volver); });
