class Pallets extends Phaser.GameObjects.Sprite {
  constructor(scene = Phaser.Scene, x = 0, y = 0, texture = "") {
    super(scene, x, y, texture);
    scene.add.existing(this);
    scene.physics.world.enable(this);
    this.body.setImmovable(true)
    this.body.setCollideWorldBounds(true)
    this.setScale(1, 2)
  }
}

export default Pallets;
