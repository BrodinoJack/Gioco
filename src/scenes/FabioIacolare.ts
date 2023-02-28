import Main from "../components/Player/Main";
import Player from "../components/Player/Main";
export default class FabioIacolare extends Phaser.Scene {

  private _player: Main;
  private L: Phaser.GameObjects.Image;

    private _bg: Phaser.GameObjects.TileSprite;
    private _P: Phaser.Physics.Arcade.Sprite;
    private GruppoPavimento: Phaser.GameObjects.Group;

 

    constructor() {    
        super({ key: "FabioIacolare" });
        
      }   

create(){

  this._bg = this.add.tileSprite(0, 0, 1024, 600, "bg").setOrigin(0).setScrollFactor(0).setDepth(0);

  this._player = new Player({
    scene: this, x: this.game.canvas.width / 2, y:
      450, key: "Main"
  });
    this.physics.add.collider(this._player, this.L, ()=>{
    });    
      }



  update(time: number, delta: number): void {

    
    this._player.update(time, delta);
  }

}
