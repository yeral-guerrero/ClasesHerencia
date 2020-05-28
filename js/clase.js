// *** ESTRUCTURA DE UNA CLASE ***

// CLASES a partir de ECMAScript 2015
class Rombo {
    // constructor
      constructor(lado, dmayor, dmenor) {
      this.lado = lado;
      this.dmayor = dmayor;
      this.dmenor = dmenor;
    }
    // métodos
    
  }
  
  // HERENCIA
  class area extends Rombo {
    constructor(lado, dmayor, dmenor, area) {
      // se invoca al super constructor, en este caso es Persona
      super(nombre, apellidos, edad, nacionalidad);
      // this con los propios atributos de Desarrollador
      this.lenguaje = lenguaje;
    }
    // métodos
    /*saludar() {
      console.log(
        ` Hola me llamo ${this.nombre} ${this.apellidos} y trabajo con el lenguaje ${this.lenguaje}`
      );
    }*/
    area() {
        console.log(` Area (${this.dmayor} * ${this.dmenor}) / 2}`);
      }
  }
  
  class perimetro extends Rombo {
    constructor(lado, dmayor, dmenor, perimetro) {
      // se invoca al super constructor, en este caso es Persona
      super(lado, dmayor, dmenor, perimetro);
      // this con los propios atributos de Desarrollador
      this.perimetro = perimetro;
    }
    // métodos
  
    perimetro() {
        console.log(` Perimetro (${this.dmayor} * ${this.dmenor}`);
      }
  }

  // INSTANCIA (instancia de Persona)
  var diego = new Persona("Diego", "Torre", 34);
  var maria = new Persona("Maria", "Sanchez", 56);
  var ana = new Persona("Ana", "Linares", 23, undefined, "Python");