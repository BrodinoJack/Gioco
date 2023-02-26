
export default class GamePlay extends Phaser.Scene {
private _M: Phaser.Physics.Arcade.Sprite;
private _P: Phaser.Physics.Arcade.Sprite;
private _Dio: Array<number>=[0,1,2,3,4,5,6,7,8,9];
private _d: Phaser.Input.Keyboard.Key;
private _Indice: number=0;
private GruppoPavimento: Phaser.GameObjects.Group;




  constructor() {    
    super({ key: "GamePlay" });
    
  }


  create() {
    var Pavimento;

    this.GruppoPavimento=this.add.group();


   
    this._d = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);    
    this._M=this.physics.add.sprite(20, 300,"Main");
    this._M.setGravity(1).setGravityY(1000);
    Pavimento=this.physics.add.sprite(170, 500,"Pavimento")
    Pavimento.body.setSize(420,100);
    
    this.GruppoPavimento.add(Pavimento);

  
   
    

      this.input.on("pointerdown", () => {
       //@ts-ignore
       this._M.body.velocity.y = -20;
        });

   /* let _animation = { 
      key: "Cicciobello", 
      frames: this.anims.generateFrameNumbers("Main", { frames: this._Dio }), 
      frameRate: 1, 
      yoyo: false, 
      repeat: -1 };

        this.anims.create(_animation);*/
        

      }



  update(time: number, delta: number): void {
    if (this._d.isDown) {  
      this._M.setAccelerationX(2);
      this._M.setFrame(this._Indice)
      //this._M.play("Cicciobello"); 
      console.log("po");
      this._Indice++;
  }
}

 }