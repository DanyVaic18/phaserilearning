// Se definie una Scena o Lienzo del juego, donde se dibujaran los objetos y la logica del juego.
// Se importa la clase Phaser.Scene para crear una escena y extenderla en toda la Clase de Phaser.

class SceneWorld extends Phaser.Scene {
  /* El contructor se usa para definir y crear la scena */  
  constructor() {
    super({ key: "SceneWorld" });
  }

  preload() {
    this.load.image("world", "./resource/backgrounds/world_freepick.jpg");
  }

  create() {

    const widthWorld = this.game.config.width
    const heightWorld = this.game.config.height



    const graphics = this.add.graphics()
    graphics.fillStyle(0x1d2e84, 1)
    //Fonde de la Scena
    graphics.fillRect(84, 2, widthWorld-200, heightWorld-100)
    //Identificación de la scena WORLD

    graphics.fillRect(2, 2, 80, 80)


    this.add.text(14, 28, "WO", { font: "32px sans-serif", fill: "#00DFE7" });
    this.add.text(90, 10, "Mapa del Mundo", { font: "32px sans-serif", fill: "#00DFE7" });

    const imgWorld = this.add.image(90, 48, "world");
    imgWorld.setOrigin(0, 0);
  }

  update() {
      
  }
}

export default SceneWorld;