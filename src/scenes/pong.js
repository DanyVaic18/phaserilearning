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

    //Counters 
    this.leftCounter = this.add.text((widthGame / 2)-64, 28, "0", { font: "32px sans-serif", fill: "#00DFE7" })
    this.rigthCounter = this.add.text((widthGame / 2)+50, 28, "0", { font: "32px sans-serif", fill: "#ff00ff" })
    

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
    
    this.ball.setVelocityX(300);
    this.ball.setCollideWorldBounds(true);
    this.ball.setBounce(1);
    this.ball.setMaxVelocity(500, 500)
    this.handlePalletColisionBall = (ball, pallet) => {
        this.ball.setVelocityY(Phaser.Math.Between(-300, 300));  
    };

    this.setBallPosition = (side) => {
      this.ball.setPosition(widthGame/2, getRandomInt(250, heightGame-250))
      this.ball.setAcceleration(0, 0)
      if(side === "left"){
        this.ball.setVelocity(-200, 0)
      }else{
        this.ball.setVelocity(200, 0)
      }

    }

    //Collisions
    this.physics.add.collider(this.ball, this.leftPallete, this.handlePalletColisionBall, null, this)
    this.physics.add.collider(this.ball, this.rightPallete, this.handlePalletColisionBall, null, this)

    //Move Pallets

    //Left
    this.cursor_W = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W)
    this.cursor_S = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S)
    //right
    console.log(Phaser.Input.Keyboard);
    this.cursor_UpRow = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.UP)
    this.cursor_DownRow = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.DOWN)

    console.log("Creando PONG");
  }

  update () {
    if(this.ball.body.x <= 0){
      this.setBallPosition("left")
      let currentRightCounter = parseFloat(this.rigthCounter.text)
      this.rigthCounter.setText(currentRightCounter+1)
      this.rightPallete.y = this.game.config.height/2
      this.leftPallete.y = this.game.config.height/2
    }else if (this.ball.body.x >= this.game.config.width) {
      this.setBallPosition("rigth")
      let currentLeftCounter = parseFloat(this.leftCounter.text)
      this.leftCounter.setText(currentLeftCounter+1)
      this.rightPallete.y = this.game.config.height/2
     
       this.leftPallete.y = this.game.config.height/2
    }
  //Move Pallets

  //Left
    if(this.cursor_W.isDown){
      this.leftPallete.body.setVelocityY(-320)
    }else if(this.cursor_S.isDown){
      this.leftPallete.body.setVelocityY(320)
    }else{
      this.leftPallete.body.setVelocityY(0)
    }
  //Rigth
  if(this.cursor_UpRow.isDown){
    this.rightPallete.body.setVelocityY(-320)
  }else if(this.cursor_DownRow.isDown){
    this.rightPallete.body.setVelocityY(320)
  }else{
    this.rightPallete.body.setVelocityY(0)
  }
  }
}

export default ScenePong;
