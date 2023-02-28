
export default class FabioIacolare extends Phaser.Scene {
    private _M: Phaser.Physics.Arcade.Sprite;
    private _P: Phaser.Physics.Arcade.Sprite;
    private _Dio: Array<number>=[0,1,2,3,4,5,6,7,8,9];
    private _d: Phaser.Input.Keyboard.Key;
    private _Indice: number=0;
    private Mov: number=20;
    private GruppoPavimento: Phaser.GameObjects.Group;

 

    constructor() {    
        super({ key: "FabioIacolare" });
        
      }   
      preload(){
        this.load.image('Map', "map/Dio.png"),

        this.load.tilemapTiledJSON('Mappa', "Gioco/map/Dio.json")
      }

create(){
     this.add.image(100,450, 'Map')





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
    if (this._d.isDown) {  
      this._M.x += .4;
      console.log("po");
      

  }

}


}
