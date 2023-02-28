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
  this._bg = this.add.tileSprite(0, 0, 1024, 600, "bg").setOrigin(0).setScrollFactor(0);
   
    this.L=this.add.image(500,250,"Pavimento")
    
    this.physics.add.collider(this._player, this.L, ()=>{
    });    
      }



  update(time: number, delta: number): void {

    this._player.update(time, delta)
  }

}
