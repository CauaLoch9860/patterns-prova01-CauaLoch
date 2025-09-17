// Produto
class Lanche {
    constructor(builder) {
      this.pao = builder.pao;
      this.carne = builder.carne;
      this.queijo = builder.queijo;
      this.salada = builder.salada;
      this.molho = builder.molho;
    }
  
    show() {
      console.log("Lanche:", {
        pao: this.pao,
        carne: this.carne,
        queijo: this.queijo,
        salada: this.salada,
        molho: this.molho,
      });
    }
  }
  
  // Builder
  class LancheBuilder {
    constructor() {
      this.pao = false;
      this.carne = false;
      this.queijo = false;
      this.salada = false;
      this.molho = false;
    }
  
    comPao() {
      this.pao = true;
      return this;
    }
  
    comCarne() {
      this.carne = true;
      return this;
    }
  
    comQueijo() {
      this.queijo = true;
      return this;
    }
  
    comSalada() {
      this.salada = true;
      return this;
    }
  
    comMolho() {
      this.molho = true;
      return this;
    }
  
    build() {
      return new Lanche(this);
    }
  }
  
  // Diretor - para montagens pré-definidas
  class LancheDirector {
    static lancheSimples() {
      return new LancheBuilder().comPao().comCarne().build();
    }
  
    static lancheCompleto() {
      return new LancheBuilder()
        .comPao()
        .comCarne()
        .comQueijo()
        .comSalada()
        .comMolho()
        .build();
    }
  }
  
  // Uso
  const lancheSimples = LancheDirector.lancheSimples();
  const lancheCompleto = LancheDirector.lancheCompleto();
  
  lancheSimples.show();
  lancheCompleto.show();