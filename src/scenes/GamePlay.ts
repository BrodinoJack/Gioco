
export default class GamePlay extends Phaser.Scene {
private _illustrazione: Phaser.GameObjects.Text;
private _frase1: Phaser.GameObjects.Text;

private _M: Phaser.Physics.Arcade.Sprite;
private _P: Phaser.Physics.Arcade.Sprite;
private _Dio: Array<number>=[0,1,2,3,4,5,6,7,8,9];
private _d: Phaser.Input.Keyboard.Key;
private _Indice: number=0;
private Mov: number=20;
private GruppoPavimento: Phaser.GameObjects.Group;





  constructor() {    
    super({ key: "GamePlay" });
    
  }


  create() {
    this.cameras.main.setBackgroundColor(0x00000);
    this._illustrazione= this.add.text(this.game.canvas.width / 2, 100, "Illustrazione:").setTint(0xff0000).setFontFamily('Georgia,"Goudy Booletter 1911",Times,serif').setScale(1.4).setPosition(424,15);
   // this._illustrazione= this.add.text(this.game.canvas.width / 2, 100, "sencio da").setTint(0xff0000).setFontFamily('Georgia,"Goudy Booletter 1911",Times,serif').setScale(1.4).setPosition(424,50).setAlpha(0);
 //  this.time.addEvent({
    //  delay: 5000,
    //  callback: () => { console.log(this._illustrazione= this.add.text(this.game.canvas.width / 2, 100, "sencio da")
    //  .setTint(0xff0000)
    //  .setFontFamily('Georgia,"Goudy Booletter 1911",Times,serif')
    //  .setScale(1.4)
    //  .setPosition(424,50)
    //  .setAlpha(0))
    //  this._illustrazione= this._illustrazione.setAlpha(1);
   // },
  //    callbackScope: this
  //    });
 //   }//sodddd
  
 

 
    
    //this._illustrazione= this.add.text(500, 250, "aka gami no shanks").setTint(0xffffff).setAlpha(1).setDepth(5);
    

    /*var Pavimento;

    this.GruppoPavimento=this.add.group();


   
    this._d = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);    
    this._M=this.physics.add.sprite(20, 300,"Main").setImmovable(false).setDepth(1);
    this._M.setGravityY(1000);
    Pavimento=this.physics.add.sprite(170, 500,"Pavimento").setImmovable(true);
    Pavimento.body.setAllowGravity(false);
    Pavimento.body.setSize(420,100);
    
    this.GruppoPavimento.add(Pavimento);
    this.physics.add.collider(this._M, this.GruppoPavimento, ()=>{
        console.log("Dio")
    });
  
   
    

      this.input.on("pointerdown", () => {
  
    
        });

    let _animation = { 
      key: "Cicciobello", 
      frames: this.anims.generateFrameNumbers("Main", { frames: this._Dio }), 
      frameRate: 10, 
      yoyo: false, 
      repeat: -1 };

        this.anims.create(_animation);
        

      }



  update(time: number, delta: number): void {
    if (this._d.isDown) {  
      this._M.setX(this.Mov+50)
      //this._M.setFrame(this._Indice)
      this._M.play("Cicciobello"); 
      console.log("po");
      //this._Indice+1;*/
  }

}
  