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

    private strada: Phaser.GameObjects.TileSprite;

    private map: Phaser.Tilemaps.Tilemap;
    private tileset: Phaser.Tilemaps.Tileset;
    private layer: Phaser.Tilemaps.TilemapLayer;
 

    constructor() {
        super({ key: "FabioIacolare" });
        
      } 
      
      preload(){
        
      }


create(){
  this.createMap();  
 this._vita= this.add.image(this.game.canvas.width/ 2,100, "cuore").setPosition(980,40).setScale(.1).setAlpha(1),
 this._tre= this.add.text(this.game.canvas.width/ 2,100, "3").setPosition(977,25).setScale(1).setAlpha(1).setFontFamily('Georgia,"Goudy Booletter 1911",Times,serif').setTint(0x000000),

  this.add.tileSprite(500, 250, 0, 0, "blocconero").setOrigin(1).setPosition(1024,600); 
  this.add.tileSprite(500, 250, 0, 0, "strada").setOrigin(1).setPosition(1024,600); 


  this._player = new Player({
    scene: this, x: 60, y:
      450, key: "Main"
  });  
      }
createMap(): void {
  this.map = this.make.tilemap({ key: "Map" });
  this.tileset = this.map.addTilesetImage("Level_1", "Pav");
  this.layer = this.map
    .createLayer("Livello tile 1", this.tileset, 0, 0)
    .setDepth(100)
    .setAlpha(1);
  }


  update(time: number, delta: number): void {
    

    this._player.update(time, delta);
  }
}