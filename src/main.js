// import Phaser from "phaser";
import SceneMoon from "./scenes/moon";
import SceneSun from "./scenes/sun";
import SceneWorld from "./scenes/world";

const config = {
  width: 1280,
  height: 720,
  parent: "app",
  type: Phaser.CANVAS,
  scene: [SceneWorld, SceneMoon, SceneSun],

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
