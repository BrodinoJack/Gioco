import Main from "../components/Player/Main";
import Player from "../components/Player/Main";
export default class FabioIacolare extends Phaser.Scene {
 //vita
  private _vita: Phaser.GameObjects.Image;
  private _tre: Phaser.GameObjects.Text;


  private _player: Main;
  private L: Phaser.GameObjects.Image;

    private _bg: Phaser.GameObjects.TileSprite;
    private _P: Phaser.Physics.Arcade.Sprite;
    private GruppoPavimento: Phaser.GameObjects.Group;

 

    constructor() {
        super({ key: "FabioIacolare" });
        
      } 
      
      preload(){
        this.load.image("cuore", "assets/images/cuore.png")
        this.load.image("bloc","assets/Mappa/blocchi.png")
        this.load.tilemapTiledJSON('Map',"assets/Mappa/Mappa.png")
      }


create(){
  this._vita=this.add.image(this.game.canvas.width/ 2,100, "cuore").setPosition(960,50).setScale(.1).setAlpha(1)
  this._tre=this.add.text(this.game.canvas.width / 2,100, "3").setPosition(966,56).setTint(0x000000).setScale(1.2).setAlpha(1).setOrigin(1).setFontFamily('Georgia,"Goudy Booletter 1911",Times,serif')
const map = this.make.tilemap({ key: "Map", tileWidth: 32, tileHeight: 18});
const tileset = map.addTilesetImage("Blocchi", "bloc");
const layer = map.createLayer("Pavimento", tileset, 500, 250)

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