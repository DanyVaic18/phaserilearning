class SceneBootLoader extends Phaser.Scene {
    constructor () {
        super({
            key:"SceneBootLoader"
        })
    }

    preload(){
        this.load.image("ball", "./resource/pong-assets/ball.png");
        this.load.image("ball", "./resource/pong-assets/left_pallete.png");
        this.load.image("ball", "./resource/pong-assets/right_pallete.png");
        this.load.image("ball", "./resource/pong-assets/separator.png");
    }

    create(){
        console.log("SceneBootLoader");
    }

    update(){

    }

}

export default SceneBootLoader