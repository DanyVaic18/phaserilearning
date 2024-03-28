(function () {
  const o = document.createElement("link").relList;
  if (o && o.supports && o.supports("modulepreload")) return;
  for (const e of document.querySelectorAll('link[rel="modulepreload"]')) s(e);
  new MutationObserver((e) => {
    for (const t of e)
      if (t.type === "childList")
        for (const r of t.addedNodes)
          r.tagName === "LINK" && r.rel === "modulepreload" && s(r);
  }).observe(document, { childList: !0, subtree: !0 });
  function c(e) {
    const t = {};
    return (
      e.integrity && (t.integrity = e.integrity),
      e.referrerPolicy && (t.referrerPolicy = e.referrerPolicy),
      e.crossOrigin === "use-credentials"
        ? (t.credentials = "include")
        : e.crossOrigin === "anonymous"
        ? (t.credentials = "omit")
        : (t.credentials = "same-origin"),
      t
    );
  }
  function s(e) {
    if (e.ep) return;
    e.ep = !0;
    const t = c(e);
    fetch(e.href, t);
  }
})();
const y = {
  width: 1280,
  height: 720,
  parent: "app",
  type: Phaser.CANVAS,
  scene: { preload: l, create: p, update: n },
  physics: { default: "arcade", arcade: { gravity: { y: 300 } } },
};
new Phaser.Game(y);
function l() {
  this.load.image("perrito", "./resource/argenperrito.png");
}
function p() {
  (this.perrito = this.physics.add.image(
    0,
    this.game.config.height,
    "perrito"
  )),
    this.perrito.setOrigin(0, 0),
    this.perrito.setCollideWorldBounds(!0),
    this.perrito.setScale(0.5),
    console.log(this.perrito.body),
    this.input.keyboard.on("keydown-A", (i) => {
      12 * 12 * -1 < this.perrito.body.velocity.x &&
        (this.perrito.setVelocityX(this.perrito.body.velocity.x - 12),
        this.perrito.setFlipX(!0));
    }),
    this.input.keyboard.on("keydown-D", (i) => {
      this.perrito.body.velocity.x < 12 * 12 &&
        (this.perrito.setVelocityX(this.perrito.body.velocity.x + 12),
        this.perrito.setFlipX(!1));
    }),
    this.input.keyboard.on("keydown-W", (i) => {
      this.perrito.body.velocity.y > -(12 * 12) &&
        this.perrito.setVelocityY(this.perrito.body.velocity.y - 12);
    }),
    this.input.keyboard.on("keydown-S", (i) => {
      this.perrito.body.velocity.y < 12 * 12 &&
        this.perrito.setVelocityY(this.perrito.body.velocity.y + 12);
    }),
    this.input.keyboard.on("keydown-SPACE", (i) => {
      console.log("holis", this.perrito.body),
        this.perrito.setVelocityY(this.perrito.body.height * -2);
    }),
    (this.cursors = this.input.keyboard.createCursorKeys()),
    console.log(this.cursors);
}
function n(i, o) {
  this.cursors.left.isDown
    ? (12 * 12 * -1 < this.perrito.body.velocity.x &&
        this.perrito.setVelocityX(this.perrito.body.velocity.x - 12),
      this.perrito.setFlipX(!0))
    : this.cursors.right.isDown
    ? (this.perrito.body.velocity.x < 12 * 12 &&
        this.perrito.setVelocityX(this.perrito.body.velocity.x + 12),
      this.perrito.setFlipX(!1))
    : this.cursors.up.isDown
    ? this.perrito.body.velocity.y > -(12 * 12) &&
      this.perrito.setVelocityY(this.perrito.body.velocity.y - 12)
    : this.cursors.down.isDown &&
      this.perrito.body.velocity.y < 12 * 12 &&
      this.perrito.setVelocityY(this.perrito.body.velocity.y + 12);
}
