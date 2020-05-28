// *** ESTRUCTURA DE UNA CLASE ***

// CLASES a partir de ECMAScript 2015
class Rombo {
    // constructor
      constructor(dmayor, dmenor) {
    
      this.dmayor = dmayor;
      this.dmenor = dmenor;
    }
    
  }
  
  // HERENCIA
  class angulo extends Rombo {
    constructor(dmayor, dmenor, angulo) {
      // se invoca al super constructor, en este caso es Rombo
      super(dmayor, dmenor);
      // this con los propios atributos de angulo
      this.angulo = angulo;
    }
    // métodos
    saludar() {
      console.log(` Diagonal Mayor: ${this.dmayor} Diagonal Menor: ${this.dmenor} y Angulo ${this.angulo}`);
    }
    
  }
  
  //HERENCIA
  class perimetro extends Rombo {
    constructor(dmayor, dmenor, lado) {
      // se invoca al super constructor, en este caso es Rombo
      super(dmayor, dmenor);
      // this con los propios atributos de Perimetro
      this.lado = lado;
    }
    // métodos
  
    perimetro() {
        console.log(` Perimetro: (${this.lado} * 4)`);
      }
  }

  // INSTANCIA (instancia de Rombo)
  var angulo01 = new Rombo(4,5,3);
  var perimetro01 = new Rombo(5,6,3);