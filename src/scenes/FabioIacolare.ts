import Main from "../components/Player/Main";
import Player from "../components/Player/Main";
export default class FabioIacolare extends Phaser.Scene {

  private _player: Main;
  private L: Phaser.GameObjects.Image;
  private _vita: Phaser.GameObjects.Image;
  private _tre: Phaser.GameObjects.Text;

    private _bg: Phaser.GameObjects.TileSprite;
    private _P: Phaser.Physics.Arcade.Sprite;
    private GruppoPavimento: Phaser.GameObjects.Group;

    private strada: Phaser.GameObjects.TileSprite;

 

    constructor() {
        super({ key: "FabioIacolare" });
        
      } 
      
      preload(){
        
      }


create(){
 this._vita= this.add.image(this.game.canvas.width/ 2,100, "cuore").setPosition(450,250).setScale(1).setAlpha(1),
 this._tre= this.add.text(this.game.canvas.width/ 2,100, "3").setPosition(450,300).setScale(1).setAlpha(1).setFontFamily('Georgia,"Goudy Booletter 1911",Times,serif'),

  this.add.tileSprite(500, 250, 0, 0, "blocconero").setOrigin(1).setPosition(1024,600); 
  this.add.tileSprite(500, 250, 0, 0, "strada").setOrigin(1).setPosition(1024,600); 


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