import Phaser from "phaser";

const config = {
  width: 1280,
  height: 720,
  parent: "app",
  type: Phaser.CANVAS,
  scene: {
    preload: preload,
    create: create,
    update: update,
  },
  physics:{
    default:"arcade",
    arcade:{
      gravity:{
        y:300
      }
    }
  }
};

const game = new Phaser.Game(config);

// Aquí se agregan todas las imagenes 
function preload() {
  this.load.image("perrito", "/argenperrito.png")
}

// Aquí se crean todos los objetos y sus funcinalidades
function create() {
  
  const perrito = this.physics.add.image(0, game.config.height-256, "perrito")
  perrito.setCollideWorldBounds(true)
  perrito.setOrigin(0, 0)
  perrito.setBounce(0.2)
  perrito.setAcceleration(100, 0)
  perrito.setVelocity(500, 0)
}

// Aquí se actualiza todo lo que se va a mostrar en la pantalla
function update(time, delta) {

}


