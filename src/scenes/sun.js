class SceneSun extends Phaser.Scene {
  constructor() {
    super({ key: "SceneSun", active: true });
  }

  preload() {
    this.load.image("sun", "./resource/backgrounds/sun.jpg");
  }

  create() {
    const widthGame = this.game.config.width;
    const heightGame = this.game.config.height;

    const graphics = this.add.graphics();
    graphics.fillStyle(0xf2c233, 1);
    graphics.fillRect(84, 2, widthGame-200, heightGame-100);

    graphics.fillRect(2, 166, 80, 80);


    const titleTabText = this.add.text(10, 190, "SOL", { font:"32px sans-serif", color:"#293425" } )
    titleTabText.setInteractive()

    titleTabText.on("pointerdown",() => {
        this.scene.bringToTop("SceneSun")
      })

    this.add.text(90, 10, "SOLECITO", { font:"32px sans-serif", color:"#293425" } )

    const imgSun = this.add.image(90, 56, "sun")
    imgSun.setOrigin(0, 0)

  }

  update() {}
}

export default SceneSun;
