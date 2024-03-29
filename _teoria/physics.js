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
  // setCollideWorldBounds(top, right, botom, left)  || (true || all) Evita que nuestros obejetos se salgan de la pantalla. 
  perrito.setCollideWorldBounds(true)
  // setOrigin(x, y) permite que nuestro objeto se centre en la posicion (0, 0).
  perrito.setOrigin(0, 0)
  // setBounce(x, y) permite que nuestro objeto rebote
  perrito.setBounce(0.2)
  // setAcceleration(x, y) permite que nuestro objeto se mueva y acelere poco a poco su velocidad.
  perrito.setAcceleration(100, 0)
  // setVelocity(x, y) permite que nuestro objeto se mueva en la direccion que le indiquemos jugando con los negativos y positivos.
  perrito.setVelocity(500, 0)
}

// Aquí se actualiza todo lo que se va a mostrar en la pantalla
function update(time, delta) {

}


