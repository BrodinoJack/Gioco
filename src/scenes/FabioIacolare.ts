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
      
      preload(){
        this.load.image("bloc","assets/Mappa/blocchi.png")
        this.load.tilemapTiledJSON('Map',"assets/Mappa/Mappa.png")
      }


create(){
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