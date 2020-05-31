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
  class Angulo extends Rombo {
    constructor(dmayor, dmenor, angulo) {
      // se invoca al super constructor, en este caso es Rombo
      super(dmayor, dmenor);
      // this con los propios atributos de angulo
      this.angulo = angulo;
    }
    // métodos
    saludar() {
      console.log(` Diagonal Mayor: ${this.dmayor} \n Diagonal Menor: ${this.dmenor} \nAngulo ${this.angulo} Grados`);
    }
    
  }
  
  //HERENCIA
  class Perimetro extends Rombo {
    constructor(dmayor, dmenor, lado) {
      // se invoca al super constructor, en este caso es Rombo
      super(dmayor, dmenor);
      // this con los propios atributos de Perimetro
      this.lado = lado;
    }
    // métodos
  
    perim() {
        console.log(` Perimetro del Rombo: ${this.lado*4}`);
      }
  }

  // INSTANCIA (instancia de Rombo)

  var angulo01 = new Angulo(4,5,30);
  var perimetro01 = new Perimetro(5,6,3);
  perimetro01.perim();
  angulo01.saludar();