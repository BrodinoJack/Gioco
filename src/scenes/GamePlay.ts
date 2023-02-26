
export default class GamePlay extends Phaser.Scene {
private _illustrazione: Phaser.GameObjects.Text;
private _cliccare: Phaser.GameObjects.Text;
private _frase1: Phaser.GameObjects.Text;
private _frase2:Phaser.GameObjects.Text;
  private _frase3:Phaser.GameObjects.Text;
  private _frase4:Phaser.GameObjects.Text;
  private _frase5:Phaser.GameObjects.Text;
  private _frase6:Phaser.GameObjects.Text;
  private _frase7:Phaser.GameObjects.Text;
  private _frase8:Phaser.GameObjects.Text;
  private _frase9:Phaser.GameObjects.Text;
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
    this._cliccare= this.add.text(this.game.canvas.width / 2, 100, "clicca per continuare a leggere." ).setTint(0xff0000).setFontFamily('Georgia,"Goudy Booletter 1911",Times,serif').setScale(1.4).setPosition(700,500).setInteractive().on("pointerdown", () => {
     this._frase1=this.add.text(this.game.canvas.width / 2, 100, "SAVE US è un gioco che tratta di una guerra avvenuta tra due nazioni, (x, y).")
           .setTint(0xffffff)
           .setFontFamily('Georgia,"Goudy Booletter 1911",Times,serif')
           .setScale(1.2)
           .setPosition(180,45)
          })
           this._cliccare.setText("continua").setInteractive().on("pointerdown", () => { 
            this._frase2=this.add.text(this.game.canvas.width / 2, 100, "La Nazione y sovrasta completamente la Nazione x sterminandone tutti gli abitanti e soldati,").setTint(0xffffff).setScale(1.2).setScale(1.2)  .setPosition(125,75)
          }) 
            
          this._cliccare.setInteractive().on("pointerdown", () => {
              this._frase3=this.add.text(this.game.canvas.width / 2, 100, "di questa Nazione però sopravvive un solo soldato fuggito dalla guerra per paura,").setTint(0xffffff).setScale(1.2).setPosition(180,105)
            })
  
            this._cliccare.setInteractive().on("pointerdown", () => {
              this._frase4=this.add.text(this.game.canvas.width / 2, 100, "costui dopo aver saputo della guerra persa").setTint(0xffffff).setScale(1.2).setPosition(335,135)
              this._frase5=this.add.text(this.game.canvas.width / 2, 100, "si sente in colpa per non aver aiutato la Nazione e decide di dirigersi a nord.").setTint(0xffffff).setScale(1.2).setPosition(180,165)
            })
            
            this._cliccare.setInteractive().on("pointerdown", () => {
              this._frase6=this.add.text(this.game.canvas.width / 2, 100, "L’ex-soldato riuscì a trovare un paese ospitale dove trascorrere le notti,").setTint(0xffffff).setScale(1.2).setPosition(195,195)
            })
            
            this._cliccare.setInteractive().on("pointerdown", () => {
              this._frase7=this.add.text(this.game.canvas.width / 2, 100, "passate un paio di settimane, entra nella locanda").setTint(0xffffff).setScale(1.2).setPosition(315,225)
              this._frase8=this.add.text(this.game.canvas.width / 2, 100, "dove era solito passare le serate per prendere da bere,").setTint(0xffffff).setScale(1.2).setPosition(290,255)
            })
            
            this._cliccare.setInteractive().on("pointerdown", () => {
              this._frase9=this.add.text(this.game.canvas.width / 2, 100, "ma ad un certo punto…").setTint(0xffffff).setScale(1.2).setPosition(424,285)
            })
           
      }
        
   
  
  /*this.time.addEvent({
    delay: 0,
    callback: () => { console.log(this._frase1=this.add.text(this.game.canvas.width / 2, 100, "La Nazione y sovrasta completamente la Nazione x sterminandone tutti gli abitanti e soldati,").setTint(0xffffff).setFontFamily('Georgia,"Goudy Booletter 1911",Times,serif').setScale(1.2).setPosition(125,75))
  },
    callbackScope: this
});*/
   
  /*this._cliccare.setInteractive().on("pointerdown", () => {
    this.time.addEvent({
      delay: 4000,
      callback: () => { console.log(this._frase1=this.add.text(this.game.canvas.width / 2, 100, "di questa Nazione però sopravvive un solo soldato fuggito dalla guerra per paura,").setTint(0xffffff).setFontFamily('Georgia,"Goudy Booletter 1911",Times,serif').setScale(1.2).setPosition(180,105))
    },
      callbackScope: this
  });
    } )*/

    
    
    /*this._illustrazione= this.add.text(this.game.canvas.width / 2, 100, "sencio da").setTint(0xff0000).setFontFamily('Georgia,"Goudy Booletter 1911",Times,serif').setScale(1.4).setPosition(424,50);*/
   
    
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

