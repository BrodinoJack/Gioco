export default class Fabio extends Phaser.Scene {
  private L:Phaser.GameObjects.Image;
    private _M: Phaser.Physics.Arcade.Sprite;
    private _P: Phaser.Physics.Arcade.Sprite;
    private _d: Phaser.Input.Keyboard.Key;
    private _Indice: number=0;
    private Mov: number=20;
    private GruppoPavimento: Phaser.GameObjects.Group;

 

    constructor() {    
        super({ key: "Fabio" });       
      }   
      
       

    

create(){
    console.log("Diocoppola")
    var Pavimento;
  
    this._d = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);    
    this._M=this.physics.add.sprite(20,300,"Main").setImmovable(false).setDepth(1).setGravityY(1000);
    this.L=this.physics.add.sprite(500,500,"Pavimento").setImmovable(true);
    let _animation: Phaser.Types.Animations.Animation = {
      key: "Andrea", 
frames: this.anims.generateFrameNumbers("Main", { frames: [0,1,2,3,4,5,6,7] }),
frameRate: 10,
yoyo: false,
repeat: -1
    };
    this.anims.create(_animation);

    
    this.physics.add.collider(this._M, this.L, ()=>{
    });
  

     
      }



  update(time: number, delta: number): void {
    if (this._d.isDown) {  
      this._M.x += .4;
      this._M.play("Andrea", true);

      //this._M.setFrame(this._Indice)
      //this._Indice++

      

  }

}


}
