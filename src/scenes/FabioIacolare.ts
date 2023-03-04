import Main from "../components/Player/Main";
import Player from "../components/Player/Main";
import Nemico from "../components/Nemico/Nemico"; 
import { GameData } from "../GameData";
import Piatt from "../components/Nemico/Piatt";
export default class FabioIacolare extends Phaser.Scene {
 
  
  private _vita: Phaser.GameObjects.Image;
  private _tre: Phaser.GameObjects.Text;
  private _colpi:Phaser.GameObjects.Image;
  private _ncolpi:Phaser.GameObjects.Text;
  private _ncolpi2: number=12;
  private _player: Main;  
  private _Enemy: Piatt;

  private L: Phaser.GameObjects.Image;
    private _bg: Phaser.GameObjects.TileSprite;
    private _P: Phaser.Physics.Arcade.Sprite;
    private GruppoPavimento: Phaser.GameObjects.Group;
    private strada: Phaser.GameObjects.TileSprite;
    private _enemyGroup: Phaser.GameObjects.Group;
    private _enemy: Phaser.Physics.Arcade.Sprite;
    

    private Sparata: Phaser.Physics.Arcade.Group

    private map: Phaser.Tilemaps.Tilemap;
  private tileset: Phaser.Tilemaps.Tileset;
  private tileset1: Phaser.Tilemaps.Tileset;

  private layer: Phaser.Tilemaps.TilemapLayer;
  private layer1: Phaser.Tilemaps.TilemapLayer;
  private layer2: Phaser.Tilemaps.TilemapLayer;
  private layer3: Phaser.Tilemaps.TilemapLayer;

 
    private _proiettileGroup: Phaser.GameObjects.Group;
  


    constructor() {
        super({ key: "FabioIacolare" });   

      } 
      
      preload(){
        this.load.spritesheet('enemy', 'assets/Mappa/nemicocammina22_40.png')
      }


create(){
  
 
 this._vita= this.add.image(this.game.canvas.width/ 2,100, "cuore").setPosition(980,40).setScale(.1).setAlpha(1).setScrollFactor(0);
 this._tre= this.add.text(this.game.canvas.width/ 2,100, "3").setPosition(977,25).setScale(1).setAlpha(1).setScrollFactor(0).setFontFamily('Georgia,"Goudy Booletter 1911",Times,serif').setTint(0x000000),
 this._colpi= this.add.image(this.game.canvas.width /2,100, "proiettil").setPosition(910,35).setScale(.35).setAlpha(1).setScrollFactor(0);
  
  this._enemyGroup = this.add.group({ runChildUpdate: true });
  this._proiettileGroup = this.add.group({ runChildUpdate: true });

  this.Sparata = this.physics.add.group({
    classType: Phaser.Physics.Arcade.Image,
    maxSize: 12
  })
  this._player = new Player({
    scene: this, x: 60, y:
      450, key: "Main"     
  });  
  this._player.setProie(this.Sparata)

  
  
  
  this.createMap();  
  this.setupEnemies(); 
  
      }


createMap(): void {
  this._bg = this.add.tileSprite(0, 0, 1024, 600, "lvl1city").setOrigin(0).setScrollFactor(0);
  if (this.map != null) this.map.destroy();

    this.map = this.make.tilemap({ key: "level-2" });

     this.cameras.main.setBounds(
      0,
      0,
      2100,
      this.map.heightInPixels
    );
    this.physics.world.setBounds(
      0,
      0,
      2100,
      650
    );

    this.tileset = this.map.addTilesetImage("blocchi_caverna", "PavCav");
    //this.tileset1 = this.map.addTilesetImage("macchine", "Car");

    this.layer = this.map
      .createLayer("Pavimento", this.tileset, 0, 85)
      .setDepth(9)
      .setAlpha(1);

    this.layer1 = this.map
      .createLayer("Collisioni", this.tileset, 0, 90)
      .setDepth(9)
      .setAlpha(1);
      this.layer1.setCollisionByProperty({
        collide: true,})

    this.layer2 = this.map
      .createLayer("BlocchiNem", this.tileset, 0, 90)
      .setDepth(9)
      .setAlpha(1);
      this.layer2.setCollisionByProperty({
          collide: true,})
      
        /*  this.physics.add.collider(
            this._enemyGroup,
            this.layer1,
            () => {
              //qui è possibile eseguire del codice specifico
            },
            undefined,
            this
          );*/

          this.physics.add.collider(
            this._enemyGroup,
            this.layer2,
            (enemy: any) => {
              //quando ENEMY collide con una tile di questo layer viene richiamato per l'ENEMY il metodo changeDirection
              let _enemy: Nemico = <Nemico>enemy;
              _enemy.changeDirection();
      
            },
            undefined,
            this
          );

          
      
      }

      addEnemy(enemy: Nemico){
        this._enemyGroup.add(enemy)
      }

     

      
      

  
     setupEnemies(): void {
      let _objLayer: Phaser.Tilemaps.ObjectLayer = this.map.getObjectLayer("nemico");
      if (_objLayer != null) {
        let _Soldato: any = _objLayer.objects as any[];
      
      console.log(_Soldato)
       _Soldato.forEach((tile: Phaser.Tilemaps.Tile) => {

        //aggungiamo un nuovo nemico nella positione indicata dalla TILE
       new Piatt({
        scene: this, x: tile.x, y: tile.y, key: "enemy"})})}
     }

    
        
    
  





  update(time: number, delta: number): void {
    this._player.update(time, delta);
    this.cameras.main.startFollow(this._player);
      this.physics.add.collider(this.Sparata, this.layer1,()=>{
      });
      this.physics.add.collider(this._player, this.layer1);
      this.physics.add.collider(this._enemyGroup, this.layer2);

      this.physics.add.collider(
        this._enemyGroup,
        this.layer1,
        () => {
        },
        undefined,
        this
      );

 
  }
} 