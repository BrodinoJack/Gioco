import Main from "../components/Player/Main";
import Player from "../components/Player/Main";
import Nemico from "../components/Nemico/Nemico"; 
import { GameData } from "../GameData";
import Piatt from "../components/Nemico/Piatt";
import { GameObjects } from "phaser";
export default class FabioIacolare extends Phaser.Scene {
 
  
  private _vita: Phaser.GameObjects.Image;
  private _tre: Phaser.GameObjects.Text;
  private _colpi:Phaser.GameObjects.Image;
  private _ncolpi:Phaser.GameObjects.Text;
  private _ncolpi2: number=24;
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
  private layer4: Phaser.Tilemaps.TilemapLayer;

 
    private _proiettileGroup: Phaser.GameObjects.Group;
  
    private _music: Phaser.Sound.BaseSound;
    _Proie:any

    constructor() {
        super({ key: "FabioIacolare" });   

      } 
      
      preload(){
        this.load.spritesheet('enemy', 'assets/Mappa/nemicocammina22_40.png')
      }


create(){
  this._enemyGroup = this.add.group({ runChildUpdate: true });
  this._proiettileGroup = this.add.group({ runChildUpdate: true });
  const trigger = this.add.sprite(40, 40, 'enemy');
  trigger.visible = false;
  this._music = this.sound.add("_level1", { loop: true, volume: 1 });
  this._music.play();

  this.Sparata = this.physics.add.group({
    classType: Phaser.Physics.Arcade.Image,
    maxSize: 24
  })
  this._player = new Player({
    scene: this, x: 60, y:
      450, key: "Main"     
  });  
  this._player.setProie(this.Sparata)

  
  
  
  this.createMap();  
  this.setupEnemies(); 
  this.cameras.main.startFollow(this._player);
    this.physics.add.collider(this.Sparata, this._enemyGroup,(
      _Proie, _enemy
    )=>{
    this.removeProie(_Proie)
    _enemy.destroy()
    })
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
        )
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
    this.layer3 = this.map
      .createLayer("Exit", this.tileset, 0, 90)
      .setDepth(9)
      .setAlpha(1);
      this.layer3.setCollisionByProperty({
          exit: true
        })
    this.layer4 = this.map
      .createLayer("morte", this.tileset, 0, 90)
      .setDepth(9)
      .setAlpha(1);
      this.layer4.setCollisionByProperty({
          kill: true
        })

      this.physics.add.collider(
          this._player,
          this.layer3,
          (_player: any, _tile: any) => {
            if (_tile.properties.exit == true) {
              console.log("level completed");
            }
          },
          undefined,
          this
        );
        this.physics.add.collider(
          this._player,
          this.layer4,
          (_player: any, _tile: any) => {
            if (_tile.properties.kill == true) {
              console.log("Dio");
            }
          },
          undefined,
          this
        );
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
      removeEnemy(enemy: Nemico) {
        this._enemyGroup.remove(enemy, true, true);
        
      }

      addProie(_Proie: any){
        this._proiettileGroup.add(_Proie)
      }

      removeProie(_Proie: any) {
        _Proie.destroy()
       
        
      }

      
      

  
     setupEnemies(): void {
      let _objLayer: Phaser.Tilemaps.ObjectLayer = this.map.getObjectLayer("nemico");
      if (_objLayer != null) {
        let _Soldato: any = _objLayer.objects as any[];
      
      console.log(_Soldato)
       _Soldato.forEach((tile: Phaser.Tilemaps.Tile) => {

       new Piatt({
        scene: this, x: tile.x, y: tile.y, key: "enemy"})})}
     }
    
  




  update(time: number, delta: number): void {
    this._player.update(time, delta);
    this.physics.add.overlap(this._player, this._enemy, () => {
      console.log("shot");
  })
} }