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

  this._bg = this.add.tileSprite(0, 0, 1024, 600, "bg").setOrigin(0).setScrollFactor(0).setDepth(0);




  var Pavimento;
 // this.add.image(100, 450, 'Map')
  const map = this.make.tilemap({ key: 'Mappa' })

	// add the tileset image we are using
	const tileset = map.addTilesetImage('Fabio', 'Map')
  map.createLayer('Collisioni', tileset)
	

   
    this._d = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);    
    this._M=this.physics.add.sprite(20, 300,"Main").setImmovable(false).setDepth(1);
    this._M.setGravityY(1000);
   //Pavimento=this.physics.add.sprite(170, 500,"Pavimento").setImmovable(true);
   // Pavimento.body.setAllowGravity(false);
    //Pavimento.body.setSize(420,100);
    
    this.GruppoPavimento.add(Pavimento);
    this.physics.add.collider(this._M, this.GruppoPavimento, ()=>{
    });
  
   
    

      this.input.on("pointerdown", () => {
  
   
        });

     
       }



  update(time: number, delta: number): void {

    
    this._player.update(time, delta);
  }

}
