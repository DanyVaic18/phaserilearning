import { getRandomInt } from "../utils/complemets";

class ScenePong extends Phaser.Scene {
  constructor() {
    super({ key: "ScenePong" });
  }

  preload() {}

  create() {
    const widthGame = this.game.config.width;
    const heightGame = this.game.config.height;

    //Separator, load in SceneBootLoader
    this.separator = this.add.image(widthGame / 2, heightGame / 2, "separator");
    this.separator.setScale(1, 1.2);

    let distanceFromSides = 30;

    this.leftPallete = this.add.image(
      distanceFromSides,
      heightGame / 2,
      "leftPallete"
    );
    
    this.rightPallete = this.add.image(
      widthGame - distanceFromSides,
      heightGame / 2,
      "rightPallete"
    );

    this.ball = this.add.image(
      getRandomInt(distanceFromSides, widthGame - distanceFromSides),
      getRandomInt(0, heightGame),
      "ball"
    );

    console.log("Creando PONG");
  }
}

export default ScenePong;
