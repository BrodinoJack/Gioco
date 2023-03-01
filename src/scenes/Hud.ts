import GamePlay from "./GamePlay";

export default class Hud extends Phaser.Scene {
  private _vita: Phaser.GameObjects.Image;
  private _tre: Phaser.GameObjects.Text;


  constructor() {
    super({
      key: "Hud",
    });
  }

  preload() { }

  create() {
    //this._vita=this.add.image(this.game.canvas.width/ 2,100, "cuore").setPosition(100,900)
    //this._tre=this.add.text(this.game.canvas.width / 2,100, "3").setPosition(100,850).setTint(0xff0000)
  }
 update(time: number, delta: number): void {
     
    }
  }
