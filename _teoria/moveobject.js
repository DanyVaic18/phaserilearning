// import Phaser from "phaser";

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
      arcade:{
        gravity:{
          y: 300,
        }
      }
    },
  };
  
  const game = new Phaser.Game(config);
  
  function preload() {
    this.load.image("perrito", "./resource/argenperrito.png");
  }
  
  
  function create() {
  
    this.perrito = this.physics.add.image(0, this.game.config.height, "perrito");
    this.perrito.setOrigin(0, 0);
    this.perrito.setCollideWorldBounds(true);
    this.perrito.setScale(0.5);
    console.log(this.perrito.body);
  
    this.input.keyboard.on("keydown-A", (ev) => {
      if((12 * 12)* - 1 < this.perrito.body.velocity.x){
        this.perrito.setVelocityX(this.perrito.body.velocity.x - 12);
        this.perrito.setFlipX(true);
      }
    })
  
    this.input.keyboard.on("keydown-D", (ev) => {
      if(this.perrito.body.velocity.x < (12 * 12)){
        this.perrito.setVelocityX(this.perrito.body.velocity.x + 12);
        this.perrito.setFlipX(false);
      }
    })
  
    this.input.keyboard.on("keydown-W", (ev) => {
      if(this.perrito.body.velocity.y > -(12 * 12)){
        this.perrito.setVelocityY(this.perrito.body.velocity.y - 12);
      }
    })
  
    this.input.keyboard.on("keydown-S", (ev) => {
      if(this.perrito.body.velocity.y < (12 * 12)){
        this.perrito.setVelocityY(this.perrito.body.velocity.y + 12);
      }
    })
  
    this.input.keyboard.on("keydown-SPACE", (ev) => {
        this.perrito.setVelocityY(this.perrito.body.height * -2);
    })
  
    this.right = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
  
    this.cursors = this.input.keyboard.createCursorKeys();
    console.log(this.cursors);
  }
  
  function update(time, delta) {
    
    if(this.right.isDown){
      if(this.perrito.body.velocity.x < (12 * 12)){
        this.perrito.setVelocityX(this.perrito.body.velocity.x + 12);
      }
      this.perrito.setFlipX(false);
    }
  
  
    if (this.cursors.left.isDown) {
      if((12 * 12)* - 1 < this.perrito.body.velocity.x){
        this.perrito.setVelocityX(this.perrito.body.velocity.x - 12);
      }
  
      this.perrito.setFlipX(true);
    } else if (this.cursors.right.isDown) {
      
      if(this.perrito.body.velocity.x < (12 * 12)){
        this.perrito.setVelocityX(this.perrito.body.velocity.x + 12);
      }
  
      this.perrito.setFlipX(false);
    } else if (this.cursors.up.isDown) {
      
      if(this.perrito.body.velocity.y > -(12 * 12)){
        this.perrito.setVelocityY(this.perrito.body.velocity.y - 12);
      }
    } else if (this.cursors.down.isDown) {
      if(this.perrito.body.velocity.y < (12 * 12)){
        this.perrito.setVelocityY(this.perrito.body.velocity.y + 12);
      }
    }
  }
  
  
  
  