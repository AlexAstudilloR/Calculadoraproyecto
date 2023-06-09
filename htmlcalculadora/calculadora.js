
class Calculator {
    constructor() {
      this.pantalla = document.querySelector(".pantalla");
      this.botones = document.querySelectorAll(".btn");
      this.numero1 = null;
      this.numero2 = null;
      
      this.addEventListeners();  // por aquí se recorre los botones y cuando se hace click se invoca la función
    }
  
    addEventListeners() {
      this.botones.forEach((boton) => {
        boton.addEventListener("click", () => {
          this.handleButtonClick(boton);
        });
      });
    }
  
    handleButtonClick(boton) {
      const digito = boton.textContent;
        //el triple igual es para que se cumpla si o si la cosa 
      if (boton.id === "c") {
        this.limpiar();
      } else if (boton.id === "borrar") { 
        this.borrar();
      } else if (boton.id === "igual") {
        this.resultado();
      } else if (boton.id === "exp") {
        this.exponente();
      } else if (boton.id === "div") {
        this.divisionentera();
      } else if (boton.id === "mod") {
        this.mod();
      } else if (boton.id === "sqr") {
        this.raiz();
      } else if (boton.id === "fact") {
        this.factus();
      } else if (boton.id === "dis") {
        this.divisores();
      } else {
        this.accion(digito);
      }
    }
  
    limpiar() {
      this.pantalla.textContent = "0";
    }
  
    borrar() {
      if (this.pantalla.textContent.length === 1 || this.pantalla.textContent === "Error!") {
        this.pantalla.textContent = "0";
      } else {
        this.pantalla.textContent = this.pantalla.textContent.slice(0, -1);
      }  // El slice es para borrar el ultimo digito. pero primero se valida si hay caracteres posibles de borrar
    }
  
    resultado() {
      try {
        this.pantalla.textContent = eval(this.pantalla.textContent);
      } catch {
        this.pantalla.textContent = "Error!";
      } 
    }  // El eval es como tipo el SINTAX ERROR de la calculadora normal, tipo evalua si la funcion se puede realizar o no, PILASSS
  
    exponente() {
      if (this.numero1 === null) {
        this.numero1 = parseFloat(this.pantalla.textContent);
        this.pantalla.textContent = "";
      } else {
        const numero2 = parseFloat(this.pantalla.textContent);
        const resultado = Math.pow(this.numero1, numero2);
        this.pantalla.textContent = resultado;
        this.numero1 = null;
      }
    }
  
    divisionentera() {
      if (this.numero1 === null) {
        this.numero1 = parseFloat(this.pantalla.textContent);
        this.pantalla.textContent = "";
      } else {
        const numero2 = parseFloat(this.pantalla.textContent);
        const resultado = Math.floor(this.numero1 / numero2);
        this.pantalla.textContent = resultado;
        this.numero1 = null;
      }
    }
  
    mod() {
      if (this.numero1 === null) {
        this.numero1 = parseFloat(this.pantalla.textContent);
        this.pantalla.textContent = "";
      } else {
        const numero2 = parseFloat(this.pantalla.textContent);
        const resultado = this.numero1 % numero2;
        this.pantalla.textContent = resultado;
        this.numero1 = null;
      }
    }
  
    raiz() {
      const numero = parseFloat(this.pantalla.textContent);
      const resultado = Math.sqrt(numero);
      this.pantalla.textContent = resultado;
    }
  
    factus() {
      const numero = parseInt(this.pantalla.textContent);
      let factorial = 1;
      for (let i = 1; i <= numero; i++) {
        factorial *= i;
      }
      this.pantalla.textContent = factorial;
    }
  
    divisores() {
      const numero = parseInt(this.pantalla.textContent);
      const divisores = [];
      for (let i = 1; i <= numero; i++) {
        if (numero % i === 0) {
          divisores.push(i);
        }
      }
      this.pantalla.textContent = divisores.join(", ");
      
    } //Si quieren presentar "x" valor del divisor no se olviden de poner la posicion del  []
  
    accion(digito) {
        if (this.pantalla.textContent === "0" || this.pantalla.textContent === "Error!") {
          this.pantalla.textContent = digito;
        } else {
          this.pantalla.textContent += digito;
        }//Esta funcion es la que me permite poner los caracteres y los valores digamos porque sino no se puede poner valores.
      }
    }
    
const calculator = new Calculator();

  