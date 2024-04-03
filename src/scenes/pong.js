import { getRandomInt } from "../utils/complemets";
import Pallets from "../gameobjects/pallets";

class ScenePong extends Phaser.Scene {
  constructor() {
    super({ key: "ScenePong" });
  }

  preload() {}

  create() {
    const widthGame = this.game.config.width;
    const heightGame = this.game.config.height;

    // physics the border in world
    this.physics.world.setBoundsCollision(false, false, true, true)

    //Separator, load in SceneBootLoader
    this.separator = this.add.image(widthGame / 2, heightGame / 2, "separator");
    this.separator.setScale(1, 1.2);

    let distanceFromSides = 30;

    this.leftPallete = new Pallets(
      this,
      distanceFromSides,
      heightGame / 2,
      "leftPallete"
    );

    this.rightPallete = new Pallets(
      this,
      widthGame - distanceFromSides,
      heightGame / 2,
      "rightPallete"
    );

    this.ball = this.physics.add.image(
      widthGame/2, 
      heightGame/2,
      "ball"
    );
    
    this.ball.setVelocityX(100);
    this.ball.setCollideWorldBounds(true);
    this.ball.setBounce(1);

    this.handlePalletColisionBall = () => {
      // this.ball.setAcceleration(-200, 5)
    };

    this.physics.add.collider(this.ball, this.leftPallete, this.handlePalletColisionBall, null, this)
    this.physics.add.collider(this.ball, this.rightPallete, this.handlePalletColisionBall, null, this)


    console.log("Creando PONG");
  }
}

export default ScenePong;
