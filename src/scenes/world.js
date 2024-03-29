// Se definie una Scena o Lienzo del juego, donde se dibujaran los objetos y la logica del juego.
// Se importa la clase Phaser.Scene para crear una escena y extenderla en toda la Clase de Phaser.

class SceneWorld extends Phaser.Scene {
  /* El contructor se usa para definir y crear la scena */  
  constructor() {
    super({ key: "SceneWorld" });
  }

  preload() {
    this.load.image("world", "./resource/backgrounds/world_freepick.jpg");
    this.load.image("perrito", "./resource/argenperrito.png")
    this.load.image("casita-perrito", "./resource/casita.png")
  }

  create() {
    this.scene.bringToTop("SceneWorld")

    const widthWorld = this.game.config.width
    const heightWorld = this.game.config.height

    const graphics = this.add.graphics()
    graphics.fillStyle(0x1d2e84, 1)
    //Fonde de la Scena
    graphics.fillRect(84, 2, widthWorld-200, heightWorld-100)
    //Identificación de la scena WORLD

    graphics.fillRect(2, 2, 80, 80)


    const titleTabText = this.add.text(14, 28, "WO", { font: "32px sans-serif", fill: "#00DFE7" });
    titleTabText.setInteractive();

    titleTabText.on("pointerdown",() => {
      this.scene.bringToTop("SceneWorld")
    })

    this.add.text(90, 10, "Mapa del Mundo", { font: "32px sans-serif", fill: "#00DFE7" });

    const imgWorld = this.add.image(90, 48, "world");
    imgWorld.setOrigin(0, 0);

    this.casitaChangeScene = this.physics.add.image(widthWorld+20, heightWorld - 100, "casita-perrito");
    // this.casitaChangeScene.setAlpha(0)
    this.casitaChangeScene.setScale(0.4)
    this.casitaChangeScene.setOrigin(0, 0)
    this.casitaChangeScene.setCollideWorldBounds(true)
    this.casitaChangeScene.setImmovable(true)

    this.perrito = this.physics.add.image(widthWorld/2, heightWorld, "perrito")
    this.perrito.setScale(0.4)
    this.perrito.setCollideWorldBounds(true)
    this.perrito.setBounceX(0.2)
    
    this.currentScene = "SceneWorld"

    this.physics.add.collider(this.perrito, this.casitaChangeScene, () => {
      this.perrito.setX(widthWorld/2)
      this.perrito.setVelocityX(0)
      const collisionChangeScene = (name="SceneWorld") => {
        this.scene.bringToTop(name)
        this.currentScene = name
      }

      if(this.currentScene === "SceneWorld"){
        collisionChangeScene("SceneMoon")
      }else if(this.currentScene === "SceneMoon"){
        collisionChangeScene("SceneSun")
      }else if(this.currentScene === "SceneSun"){
        collisionChangeScene()
      }
      
    })

    this.cursors = this.input.keyboard.createCursorKeys();

    this.input.keyboard.on("keydown-SPACE", (ev) => {
      this.perrito.setVelocityY(this.perrito.body.height * -2);
  })

    // Scene arriba del todo
    

    //Scenes no listadas en el CONFIG, se agregan de esta manera
    //De esta forma se puede cambiar de mapa ya que la scene que llama esta función se desactiva y activa la siguiente:
    // this.scene.add("key_scene", new SceneExample)
    // this.start("key_scene")

    /*
    this.scene.bringToTop() //*Encima de todas*
    this.scene.sendToBack() //*Atras de todas*
    this.scene.moveUp() //*Un paso arriba*
    this.scene.moveDown() //*Un paso atras*
    this.scene.moveAbove() //*Encima de una scene*
    this.scene.moveBelow() //*ABajo de una scene*
    */

  }

  update() {
    if (this.cursors.left.isDown) {
      if((12 * 20)* - 1 < this.perrito.body.velocity.x){
        this.perrito.setVelocityX(this.perrito.body.velocity.x - 12);
      }
  
      this.perrito.setFlipX(true);
    } else if (this.cursors.right.isDown) {
      
      if(this.perrito.body.velocity.x < (12 * 20)){
        this.perrito.setVelocityX(this.perrito.body.velocity.x + 12);
      }
  
      this.perrito.setFlipX(false);
    }
  }
}

export default SceneWorld;