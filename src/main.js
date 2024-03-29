// import Phaser from "phaser";
import SceneWorld from "./scenes/world";

const config = {
  width: 1280,
  height: 720,
  parent: "app",
  type: Phaser.CANVAS,
  scene: [SceneWorld],

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

function preload() {}

function create() {}

function update(time, delta) {}
