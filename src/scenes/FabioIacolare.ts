import Main from "../components/Player/Main";
import Player from "../components/Player/Main";
export default class FabioIacolare extends Phaser.Scene {
 //vita
  private _vita: Phaser.GameObjects.Image;
  private _tre: Phaser.GameObjects.Text;
  private _colpi: Phaser.GameObjects.Image;
  private _ncolpi:Phaser.GameObjects.Text;
  private _ncolpi2: number
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
        this.scene.start("Hud");
        this.scene.bringToTop("Hud");
      }


create(){
  this.createMap();  

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
  startGame() {
 
    this.scene.start("Hud");
     this.scene.bringToTop("Hud");
    
  }


  update(time: number, delta: number): void {
    

    this._player.update(time, delta);
  }
}