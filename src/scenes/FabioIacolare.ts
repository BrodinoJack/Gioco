export default class FabioIacolare extends Phaser.Scene {
    private _M: Phaser.Physics.Arcade.Sprite;
    private _P: Phaser.Physics.Arcade.Sprite;
    private _Dio: Array<number>=[0,1,2,3,4,5,6,7,8,9];
    private _d: Phaser.Input.Keyboard.Key;
    private _Indice: number=0;
    private Mov: number=20;
    private GruppoPavimento: Phaser.GameObjects.Group;

    private map: Phaser.Tilemaps.Tilemap;
	private tileset: Phaser.Tilemaps.Tileset;
	private layer: Phaser.Tilemaps.TilemapLayer;
	private layer2: Phaser.Tilemaps.TilemapLayer;




    constructor() {    
        super({ key: "FabioIacolare" });
        
      }   


create(){
    var Pavimento;
    this.map = this.make.tilemap({ key: "level1"});
    this.cameras.main.setBounds(
		0, //x	
		0, //y
		this.map.widthInPixels, //width
		this.map.heightInPixels //height
	);
    	this.physics.world.setBounds(
		0, //x
		0, //y
		this.map.widthInPixels, //width
		this.map.heightInPixels //height
	);
    this.layer = this.map 
	.createLayer("world", this.tileset, 0, 0)
	.setDepth(9)
	.setAlpha(1);
	this.layer2 = this.map
	.createLayer("collision", this.tileset, 0, 0)
	.setDepth(0)
	.setAlpha(1);
    this.layer2.setCollisionByProperty({ collide: true });



    this.GruppoPavimento=this.add.group();


   
    this._d = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);    
    this._M=this.physics.add.sprite(20, 300,"Main").setImmovable(false).setDepth(1);
    this._M.setGravityY(1000);
    Pavimento=this.physics.add.sprite(170, 500,"Pavimento").setImmovable(true);
    Pavimento.body.setAllowGravity(false);
    Pavimento.body.setSize(420,100);
    
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
