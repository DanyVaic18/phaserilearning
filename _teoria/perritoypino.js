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
  physics: {
    default: "arcade",
    arcade: {
      gravity: {
        y: 300,
      },
    },
  },
};

const game = new Phaser.Game(config);

function preload() {
  this.load.image("perrito", "/argenperrito.png");  
  this.load.image("pino", "/pino.png");

}

function create() {
  this.pino = this.physics.add.image(game.config.width/2, game.config.height, "pino");
  this.pino.setOrigin(0.5, 0);
  this.pino.setCollideWorldBounds(true);
  this.pino.setScale(1.4)

  this.perrito = this.physics.add.image(0, game.config.height, "perrito");
  this.perrito.setOrigin(0, 0);
  this.perrito.setCollideWorldBounds(true);
  this.perrito.setScale(0.5)
  console.log(this.pino);
  this.physics.add.collider(this.pino, this.perrito, () => {
      console.log("colision");
      this.perrito.x = this.pino.x - this.pino.width-24 
  });

  this.cursors = this.input.keyboard.createCursorKeys();
  console.log(this.cursors);
}

function update(time, delta) {
  if (this.cursors.left.isDown) {
    this.perrito.x = this.perrito.x - 12;
    this.perrito.setFlipX(true);
  } else if (this.cursors.right.isDown) {
    this.perrito.x = this.perrito.x + 12;
    this.perrito.setFlipX(false);
  }
}
