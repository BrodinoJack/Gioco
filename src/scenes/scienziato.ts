export default class scienziato extends Phaser.Scene {
    private _prova:Phaser.GameObjects.Text;
    private _bar:Phaser.GameObjects.TileSprite;
    private _dialogoContainer: Phaser.GameObjects.Container;
    private _dialogoContainerText: Phaser.GameObjects.Text;
    private _dialogoContainerBackground: Phaser.GameObjects.Image;
    private _dialogoContainerBackground2: Phaser.GameObjects.Image;
    private _dialogoContainerEsc: Phaser.GameObjects.Image; 
    private _dialogo:Phaser.GameObjects.BitmapText;
    constructor(){
        super({
            key: "scienziato"
        })
    }
   create(){
    this.cameras.main.setBackgroundColor(0xffffff);
    //this._prova=this.add.text(this.game.canvas.width / 2, 100, "mammt").setTint(0xff0000).setTint(0xff0000).setFontFamily('Georgia,"Goudy Booletter 1911",Times,serif').setScale(1.4).setPosition(443,15);
  this._bar=this.add.tileSprite(500,250,0,0, "bar_contipi").setAlpha(1).setOrigin(1).setPosition(1024,600)
  //this._dialogoContainerBackground= this.add.image(this.game.canvas.width/ 2,100, "dialogo sinistra").setAlpha(1).setOrigin(1).setPosition(425,250)
 
  this._dialogoContainer = this.add.container().setAlpha(0).setDepth(10).setPosition(425,250);
  this._dialogoContainerText=this.add.text(this.game.canvas.width/2,100, "mammt").setFontFamily('Georgia,"Goudy Booletter 1911",Times,serif').setTint(0xff0000).setScale(1.2)
  this._dialogoContainerBackground= this.add.image(this.game.canvas.width/ 2,100, "dialogo_sinistra").setAlpha(1).setOrigin(1).setPosition(425,250)
  this.time.addEvent({
		delay: 0,
		callback: () => { console.log(this._dialogoContainer = this.add.container().setAlpha(0).setDepth(10).setPosition(425,250),
      this._dialogoContainerText=this.add.text(this.game.canvas.width/2,100, "mammt").setFontFamily('Georgia,"Goudy Booletter 1911",Times,serif').setTint(0xff0000).setScale(1.2),
      this._dialogoContainerBackground= this.add.image(this.game.canvas.width/ 2,100, "dialogo_sinistra").setAlpha(1).setOrigin(1).setPosition(425,250)); },
		callbackScope: this
		});

  

 
   }
    }




