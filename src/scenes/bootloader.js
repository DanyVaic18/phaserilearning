class SceneBootLoader extends Phaser.Scene {
  constructor() {
    super({
      key: "SceneBootLoader",
    });
  }

  preload() {
    //!!!IMPORTANTE
    //Metodo que indica que ya se cargó toda está escena por completo.
    this.load.on("complete", () => {
        this.scene.start("ScenePong");
    })
    //Ya que estos archivos son llamados asincronos como de promesas se tratasen
    this.load.image("ball", "./resource/pong-assets/ball.png");
    this.load.image("leftPallete", "./resource/pong-assets/leftPallete.png");
    this.load.image("rightPallete", "./resource/pong-assets/rightPallete.png");
    this.load.image("separator", "./resource/pong-assets/separator.png");
  }

  create() {}
  update() {}
}

export default SceneBootLoader;
