// Classes de Produto
class LightButton {
    render() {
      return "Botão branco criado";
    }
  }
  class DarkButton {
    render() {
      return "Botão preto criado";
    }
  }
  class LightWindow {
    render() {
      return "Janela clara aberta";
    }
  }
  class DarkWindow {
    render() {
      return "Janela escura aberta";
    }
  }
  
  // Fábrica Abstrata
  class UIFactory {
    createButton() {
      throw new Error("Método abstrato deve ser implementado");
    }
    createWindow() {
      throw new Error("Método abstrato deve ser implementado");
    }
  }
  
  // Fábricas Concretas
  class LightFactory extends UIFactory {
    createButton() {
      return new LightButton();
    }
    createWindow() {
      return new LightWindow();
    }
  }
  
  class DarkFactory extends UIFactory {
    createButton() {
      return new DarkButton();
    }
    createWindow() {
      return new DarkWindow();
    }
  }
  
  // Cliente
  function main(factory) {
    const button = factory.createButton();
    const windowUI = factory.createWindow();
  
    console.log(button.render());
    console.log(windowUI.render());
  }
  
  // Uso da aplicação
  const lightFactory = new LightFactory();
  const darkFactory = new DarkFactory();
  
  console.log(">> Tema Claro <<");
  main(lightFactory);
  
  console.log("\n>> Tema Escuro <<");
  main(darkFactory);