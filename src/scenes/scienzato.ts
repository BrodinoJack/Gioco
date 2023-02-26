import { GameData } from "../GameData";
export default class GamePlay extends Phaser.Scene {
private _prova:Phaser.GameObjects.Text;


constructor() {
  super({key: "scienzato"});
}

create(){
    this.cameras.main.setBackgroundColor(0x00000);
    this._prova=this.add.text(this.game.canvas.width / 2,100, "mammt"  ).setTint(0xff0000).setFontFamily('Georgia,"Goudy Booletter 1911",Times,serif').setScale(1.4).setPosition(423,15);
}
}