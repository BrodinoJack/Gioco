export default class scienziato extends Phaser.Scene {
  private _prova:Phaser.GameObjects.Text;
  private _bar:Phaser.GameObjects.TileSprite;
  private _dialogoContainer: Phaser.GameObjects.Container;
  private _dialogoContainerText: Phaser.GameObjects.Text;
  private _dialogoContainerBackground: Phaser.GameObjects.Image;
  private _dialogoContainerBackground2: Phaser.GameObjects.Image;
  private _dialogoContainerEsc: Phaser.GameObjects.Image; 
  private _dialogo:Phaser.GameObjects.BitmapText;
  private music_bar:Phaser.Sound.BaseSound;
  private _music: Phaser.Sound.BaseSound;
  private _music2: Phaser.Sound.BaseSound;
  constructor(){
      super({
          key: "scienziato"
      })
  }

  
 create(){
  this.cameras.main.setBackgroundColor(0xffffff);
  //this._prova=this.add.text(this.game.canvas.width / 2, 100, "mammt").setTint(0xff0000).setTint(0xff0000).setFontFamily('Georgia,"Goudy Booletter 1911",Times,serif').setScale(1.4).setPosition(443,15);
  this._bar=this.add.tileSprite(500,250,0,0, "bar_contipi").setAlpha(1).setOrigin(1).setPosition(1024,600)
  this.music_bar=this.sound.add("_musicbar", { loop: true, volume: 0.05 });
  this.music_bar.play();


  this._dialogoContainer = this.add.container().setAlpha(0).setDepth(10);
    this._dialogoContainerText = this.add.text(this.game.canvas.width / 2, 100, "").setTint(0xff0000).setOrigin(.5);
     this._dialogoContainerBackground = this.add.image(0, 0, "").setOrigin(.0).setScale(.1).setPosition(450,0);
    this._dialogoContainerBackground2=this.add.image(this.game.canvas.width / 2, 120, "dialogo_destra");
  this._dialogoContainer = this.add.container().setAlpha(0).setDepth(10);


  this._dialogoContainer.add([
    this._dialogoContainerBackground,
     this._dialogoContainerText,
     this._dialogoContainerBackground2,
     this.add.text(this.game.canvas.width / 2, 100, "henghneyn").setFontFamily('Georgia,"Goudy Booletter 1911",Times,serif').setScale(1.4).setPosition(475,15),
     this.add.image(0, 0, "popup").setOrigin(.0).setScale(.1).setPosition(640,0).setInteractive()
     .on("pointerdown", () => {
    this.closedialogo();
  })]);



    this._dialogo = this.add
    .bitmapText(this.game.canvas.width / 2, 400, "arcade", "inizia il dialogo")
    .setAlpha(1)
    .setOrigin(0.5)
    .setInteractive()
    .setDepth(100)
    .setScale(0.3)
    .setPosition(915,480)
    .setTint(0xffffff)
    .on("pointerup", () => {
      this._dialogo.removeInteractive();
    })
    .on("pointerover", () => {
      this._dialogo.setTint(0xffffff).setScale(0.4);
      this._music2= this.sound.add("_button", { loop: false, volume: 0.7 });
      this._music2.play();
    })
    .on("pointerout", () => { 
      this._dialogo.setTint(0xffffff).setScale(0.3);
    })
    .on("pointerdown", this.opendialogo, this);
    
  }


    opendialogo() {
      this.tweens.add({
        targets: this._dialogoContainer, alpha: 1, duration: 1000, onComplete: () => {
          this._dialogoContainerBackground.setInteractive()
        }
      })}
    
    closedialogo() {
        this.tweens.add({
          targets: this._dialogoContainer, alpha: 0, duration: 1000, onComplete: () => {
            this._dialogo.setInteractive();
          }
        })
      }
  }



