class SceneMoon extends Phaser.Scene {
    /* El contructor se usa para definir y crear la scena */  
    constructor() {
      super({ key: "SceneMoon", active:true });
    }
  
    preload() {
      this.load.image("moon", "./resource/backgrounds/lunap.jpg");
    }
  
    create() {
  
      const widthWorld = this.game.config.width
      const heightWorld = this.game.config.height
  
      const graphics = this.add.graphics()
      graphics.fillStyle(0xF1F1F1, 1)
      //Fonde de la Scena
      graphics.fillRect(84, 2, widthWorld-200, heightWorld-100)
      //Identificación de la scena WORLD
  
      graphics.fillRect(2, 84, 80, 80)
  
  
      this.add.text(14, 112, "MO", { font: "32px sans-serif", fill: "#212121" });
      this.add.text(90, 10, "Luna", { font: "32px sans-serif", fill: "#212121" });
  
      const imgMoon = this.add.image(90, 48, "moon");
      imgMoon.setOrigin(0, 0);
    }
  
    update() {
        
    }
  }
  
  export default SceneMoon;