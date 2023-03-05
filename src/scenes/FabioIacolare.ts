import Main from "../components/Player/Main";
import Player from "../components/Player/Main";
import Nemico from "../components/Nemico/Nemico"; 
import { GameData } from "../GameData";
import Piatt from "../components/Nemico/Piatt";
import { GameObjects } from "phaser";
import Victory from "./Victory";
export default class FabioIacolare extends Phaser.Scene {
 
  
  private _vita: Phaser.GameObjects.Image;
  private _tre: Phaser.GameObjects.Text;
  private _colpi:Phaser.GameObjects.Image;
  private _ncolpi:Phaser.GameObjects.Text;
  private _ncolpi2: number=12;
  private _player: Main;  
  private _Enemy: Piatt;
  private _Score2: number=0;

  private L: Phaser.GameObjects.Image;
    private _bg: Phaser.GameObjects.TileSprite;
    private _P: Phaser.Physics.Arcade.Sprite;
    private GruppoPavimento: Phaser.GameObjects.Group;
    private strada: Phaser.GameObjects.TileSprite;
    private _enemyGroup: Phaser.GameObjects.Group;
    private _TriggerGroup: Phaser.GameObjects.Group;
    private _triggered: Phaser.Physics.Arcade.Sprite;
    private _enemy: Phaser.Physics.Arcade.Sprite;
    

    private Sparata!: Phaser.Physics.Arcade.Group

    private _level: number=1;
    private map: Phaser.Tilemaps.Tilemap;
    private tileset: Phaser.Tilemaps.Tileset;
    private tileset1: Phaser.Tilemaps.Tileset;
    private tileset2: Phaser.Tilemaps.Tileset;
    private tileset3: Phaser.Tilemaps.Tileset;

    private layer: Phaser.Tilemaps.TilemapLayer;
    private layer1: Phaser.Tilemaps.TilemapLayer;
    private layer2: Phaser.Tilemaps.TilemapLayer;
    private layer3: Phaser.Tilemaps.TilemapLayer;
    private layer4: Phaser.Tilemaps.TilemapLayer;
    private layercav: Phaser.Tilemaps.TilemapLayer;
    private layerkill: Phaser.Tilemaps.TilemapLayer;

 
    private _proiettileGroup: Phaser.GameObjects.Group;
    private _music: Phaser.Sound.BaseSound;
    _Proie:any

    constructor() {
        super({ key: "FabioIacolare" });   
      } 

      
      init(data: {level:number}) {

        if (data.level != null) {
          this._level = data.level;
        }
      }


create(){
  this._enemyGroup = this.add.group({ runChildUpdate: true });
  this._proiettileGroup = this.add.group({ runChildUpdate: true });
  this._TriggerGroup= this.add.group({runChildUpdate: true});

  this._music = this.sound.add("_level1", { loop: true, volume: 0.1 });
  this._music.play();

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
  this._level=1;
  this.cameras.main.startFollow(this._player);
    this.physics.add.collider(this.Sparata, this._enemyGroup, (
      _Proie, _enemy,
    )=>{
      this.events.emit("update-score", [100]);
    this.removeProie(_Proie)
    _enemy.destroy()
    })
    this.physics.add.collider(this.Sparata, this._TriggerGroup, (
      _Proie, _enemy,
    )=>{
    this.removeProie(_Proie)
    _enemy.destroy()
    this.events.emit("update-score", [100]);
    })
      this.physics.add.collider(this.Sparata, this.layer1,(_Proie)=>{
        this.removeProie(_Proie)
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
 if (this.map != null) 
  this.map.destroy();
      this._bg = this.add.tileSprite(0, 0, 1024, 600, "lvl1city").setOrigin(0).setScrollFactor(0);
      this.map = this.make.tilemap({ key: "level-" + this._level });
  
       this.cameras.main.setBounds(
        0,
        0,
        2050,
        this.map.heightInPixels
      );
      this.physics.world.setBounds(
        0,
        0,
        2050,
        650
      );
  
      this.tileset = this.map.addTilesetImage("Blocchi", "Pav");
      this.tileset1 = this.map.addTilesetImage("grass", "Verde");
      this.tileset2 = this.map.addTilesetImage("macchine", "Car");
      this.tileset3 = this.map.addTilesetImage("blocchi_caverna", "PavCav");


        if (this._level==1){
      this.layer = this.map
        .createLayer("Pavimento-1", this.tileset, 0, 90)
        .setDepth(9)
        .setAlpha(1);
      }else{
        this._bg = this.add.tileSprite(0, 0, 1024, 600, "Caverna").setOrigin(0).setScrollFactor(0);
        this.layercav = this.map
        .createLayer("Pavimento-2", this.tileset3, 0, 90)
        .setDepth(9)
        .setAlpha(1);
        this.layercav.setCollisionByProperty({
          collide: true,})}
  
      this.layer1 = this.map
        .createLayer("Collide-"+ this._level, this.tileset1, 0, 90)
        .setDepth(9)
        .setAlpha(0);
        this.layer1.setCollisionByProperty({
          collide: true,})
  
      this.layer2 = this.map
        .createLayer("BlocchiNem-"+ this._level, this.tileset, 0, 90)
        .setDepth(9)
        .setAlpha(1);
        this.layer2.setCollisionByProperty({
          collide: true,})

        

      this.layer3 = this.map
        .createLayer("Exit-" + this._level, this.tileset, 1537, 90)
        .setDepth(9)
        .setAlpha(1);
        this.layer3.setCollisionByProperty({
          collide: false,
          exit: true
          })

          
      if (this._level==1){
      this.layer4 = this.map
        .createLayer("Macchine-1", this.tileset2, 0, 65)
        .setDepth(9)
        .setAlpha(1);
      }else{
        this.layerkill = this.map
        .createLayer("Macchine-2", this.tileset3, 0, 65)
        .setDepth(9)
        .setAlpha(1);
        this.layerkill.setCollisionByProperty({
          kill: true,
      })
    }
this.physics.add.collider(
      this._player,
      this.layerkill,
      (_player: any, _tile: any) => {
        if (_tile.properties.kill == true) {
          this.events.emit("decrease-vite", [1]);
        }
      },
          );

      this.physics.add.collider(
          this._player,
          this.layer1
          );
        
          this.physics.add.collider(
            this._player,
            this.layer3,
            (_player: any, _tile: any) => {
              if (_tile.properties.exit == true) {
                this.levelCompleted(); 
                if (this._level==2){
                  this.scene.start("Victory")
                }
              }
            },
            undefined,
            this
          );
          
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
      
              this.physics.add.collider(
                this._player,
                this._enemyGroup,
                (_player: any, _direction: any) => {
                 
                    this.events.emit("decrease-vite", [1]);
                  
                },
                    );
    }



      addEnemy(enemy: Nemico){
        this._enemyGroup.add(enemy)
      }
      addEnemy2(enemy: Nemico){
        this._TriggerGroup.add(enemy)
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
     
      
      getPlayer(): Main {
        return this._player;
        
      }

      getEnemyGroup(): Phaser.GameObjects.Group{
        return this._enemyGroup

      }

      getTriggersGroup(): Phaser.GameObjects.Group{
        return this._TriggerGroup;
      }

      
      levelCompleted(): void {
        this.events.emit("level-completed", [this._level]);
      }

      
     setupEnemies(): void {
      let _objLayer: Phaser.Tilemaps.ObjectLayer = this.map.getObjectLayer("nemico-" + this._level);
      if (_objLayer != null) {
        let _Soldato: any = _objLayer.objects as any[];
      
      console.log(_Soldato)
       _Soldato.forEach((tile: Phaser.Tilemaps.Tile) => {

       new Piatt({
        scene: this, x: tile.x, y: tile.y, key: "enemy"})})}
     }


    
    

  update(time: number, delta: number): void {
    this._player.update(time, delta);
 
  }
} 