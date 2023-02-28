import GamePlay from "./GamePlay";

export default class Hud extends Phaser.Scene {
private _life:Phaser.GameObjects.Image;
  constructor() {
    super({
      key: "Hud",
    });
  }

  preload() { }

  create() {
    this._life= this.add.image(this.game.canvas.width/ 2,100, "life").setPosition(100,900);
    //console.log("create:HUD")


  }



  private gameOver() {

    this.scene.stop("Hud");
    this.scene.stop("GamePlay");
    this.scene.start("GameOver");

  }
}
