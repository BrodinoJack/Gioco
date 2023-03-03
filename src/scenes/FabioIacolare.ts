import Main from "../components/Player/Main";
import Player from "../components/Player/Main";
import Nemico from "../components/Nemico/Nemico"; 
export default class FabioIacolare extends Phaser.Scene {
 
  private _vita: Phaser.GameObjects.Image;
  private _tre: Phaser.GameObjects.Text;
  private _colpi:Phaser.GameObjects.Image;
  private _ncolpi:Phaser.GameObjects.Text;
  private _ncolpi2: number=12;
  private _player: Main;
  private L: Phaser.GameObjects.Image;
    private _bg: Phaser.GameObjects.TileSprite;
    private _P: Phaser.Physics.Arcade.Sprite;
    private GruppoPavimento: Phaser.GameObjects.Group;
    private strada: Phaser.GameObjects.TileSprite;
    private _enemyGroup: Phaser.GameObjects.Group;

    private Sparata: Phaser.Physics.Arcade.Group

    private map: Phaser.Tilemaps.Tilemap;
  private tileset: Phaser.Tilemaps.Tileset;
  private tileset1: Phaser.Tilemaps.Tileset;

  private layer: Phaser.Tilemaps.TilemapLayer;
  private layer1: Phaser.Tilemaps.TilemapLayer;
 
    private _proiettileGroup: Phaser.GameObjects.Group


    constructor() {
        super({ key: "FabioIacolare" });   
      } 
      
      preload(){
   
      }


create(){
 this.createMap();  
 this._vita= this.add.image(this.game.canvas.width/ 2,100, "cuore").setPosition(980,40).setScale(.1).setAlpha(1).setScrollFactor(0);
 this._tre= this.add.text(this.game.canvas.width/ 2,100, "3").setPosition(977,25).setScale(1).setAlpha(1).setScrollFactor(0).setFontFamily('Georgia,"Goudy Booletter 1911",Times,serif').setTint(0x000000),
this._colpi= this.add.image(this.game.canvas.width /2,100, "proiettil").setPosition(450,250).setScale(.1).setAlpha(1).setScrollFactor(0);

  this.add.tileSprite(500, 250, 0, 0, "blocconero").setOrigin(1).setPosition(1024,600); 
  this.add.tileSprite(500, 250, 0, 0, "strada").setOrigin(1).setPosition(1024,600); 
  this._enemyGroup = this.add.group({ runChildUpdate: true });
  this._proiettileGroup = this.add.group({ runChildUpdate: true });

  this.Sparata = this.physics.add.group({
    classType: Phaser.Physics.Arcade.Image,
    maxSize: 24
  })
  this._player = new Player({
    scene: this, x: 60, y:
      450, key: "Main"     
  });  
  this._player.setProie(this.Sparata)
  this.setupEnemies();
      }


createMap(): void {
  this._bg = this.add.tileSprite(0, 0, 1024, 600, "bg").setOrigin(0).setScrollFactor(0);
  if (this.map != null) this.map.destroy();

    this.map = this.make.tilemap({ key: "level-0" });

    
    this.physics.world.setBounds(
      0,
      0,
      10000,
      this.map.heightInPixels
    );

    this.tileset = this.map.addTilesetImage("Blocchi", "Pav");
    this.tileset1 = this.map.addTilesetImage("macchine", "Car");

    this.layer = this.map
      .createLayer("Pavimento", this.tileset, 0, 0)
      .setDepth(100)
      .setAlpha(1);
      this.layer.setCollisionByProperty({
        collide: true,
      });
    this.layer1 = this.map
      .createLayer("Macchine", this.tileset, 0, 0)
      .setDepth(0)
      .setAlpha(0);

    this.layer1.setCollisionByProperty({
      collide: true,
    });
    };
  
    setupEnemies(): void {

      let _objLayer: Phaser.Tilemaps.ObjectLayer = this.map.getObjectLayer("enemies");
      if (_objLayer != null) {

        let _enemies: any = _objLayer.objects as any[];
  
        _enemies.forEach((tile: Phaser.Tilemaps.Tile) => {
  
      
        })};}





  update(time: number, delta: number): void {
    
    this._player.update(time, delta);
    this.cameras.main.startFollow(
      this._player);
      this.physics.add.collider(this.Sparata, this.layer,()=>{
      });
      this.physics.add.collider(this._player, this.layer);

 
  }
} 