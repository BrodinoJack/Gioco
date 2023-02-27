export default class scienziato extends Phaser.Scene {
  private _bar:Phaser.GameObjects.TileSprite;
  private _dialogo:Phaser.GameObjects.BitmapText;
  private _dialogo2:Phaser.GameObjects.BitmapText;

  //container 1
  private _dialogoContainer: Phaser.GameObjects.Container;
  private _dialogoContainerText: Phaser.GameObjects.Text;
  private _dialogoContainerBackground: Phaser.GameObjects.Image;
  private _dialogoContainerBackground2: Phaser.GameObjects.Image;
  private _dialogoContainerEsc: Phaser.GameObjects.Image; 

  //container 2
  private _dialogo2Container: Phaser.GameObjects.Container;
  private _dialogo2ContainerText: Phaser.GameObjects.Text;
  private _dialogo2ContainerBackground: Phaser.GameObjects.Image;
  private _dialogo2ContainerBackground2: Phaser.GameObjects.Image;
  private _dialogo2ContainerEsc: Phaser.GameObjects.Image; 

   //container 3
   private _dialogo3Container: Phaser.GameObjects.Container;
   private _dialogo3ContainerText: Phaser.GameObjects.Text;
   private _dialogo3ContainerBackground: Phaser.GameObjects.Image;
   private _dialogo3ContainerBackground2: Phaser.GameObjects.Image;
   private _dialogo3ContainerEsc: Phaser.GameObjects.Image; 

    //container 4
  private _dialogo4Container: Phaser.GameObjects.Container;
  private _dialogo4ContainerText: Phaser.GameObjects.Text;
  private _dialogo4ContainerBackground: Phaser.GameObjects.Image;
  private _dialogo4ContainerBackground2: Phaser.GameObjects.Image;
  private _dialogo4ContainerEsc: Phaser.GameObjects.Image; 

   //container 5
   private _dialogo5Container: Phaser.GameObjects.Container;
   private _dialogo5ContainerText: Phaser.GameObjects.Text;
   private _dialogo5ContainerBackground: Phaser.GameObjects.Image;
   private _dialogo5ContainerBackground2: Phaser.GameObjects.Image;
   private _dialogo5ContainerEsc: Phaser.GameObjects.Image; 

    //container 6
  private _dialogo6Container: Phaser.GameObjects.Container;
  private _dialogo6ContainerText: Phaser.GameObjects.Text;
  private _dialogo6ContainerBackground: Phaser.GameObjects.Image;
  private _dialogo6ContainerBackground2: Phaser.GameObjects.Image;
  private _dialogo6ContainerEsc: Phaser.GameObjects.Image; 

   //container 7
   private _dialogo7Container: Phaser.GameObjects.Container;
   private _dialogo7ContainerText: Phaser.GameObjects.Text;
   private _dialogo7ContainerBackground: Phaser.GameObjects.Image;
   private _dialogo7ContainerBackground2: Phaser.GameObjects.Image;
   private _dialogo7ContainerEsc: Phaser.GameObjects.Image; 

  //musica
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

  this._bar=this.add.tileSprite(500,250,0,0, "bar_contipi").setAlpha(1).setOrigin(1).setPosition(1024,600)
  this.music_bar=this.sound.add("_musicbar", { loop: true, volume: 0.05 });
  this.music_bar.play();


  this._dialogoContainer = this.add.container().setAlpha(0).setDepth(10);
    this._dialogoContainerText = this.add.text(this.game.canvas.width / 2, 100, "").setTint(0xff0000).setOrigin(.5);
     this._dialogoContainerBackground = this.add.image(0, 0, "").setOrigin(.0).setScale(.1).setPosition(450,0);
    this._dialogoContainerBackground2=this.add.image(this.game.canvas.width / 2, 120, "dialogo_destra").setDepth(2).setScale(4,3).setPosition(390,267).setOrigin(0.5);
  this._dialogoContainer = this.add.container().setAlpha(0).setDepth(10);


  this._dialogoContainer.add([
    this._dialogoContainerBackground,
     this._dialogoContainerText,
     this._dialogoContainerBackground2,
     this.add.text(this.game.canvas.width / 2, 100, "Forestiero, e' da un po' di tempo che ").setTint(0x00000).setFontFamily('Georgia,"Goudy Booletter 1911",Times,serif').setDepth(10).setScale(1.2).setPosition(240,220),
     this.add.text(this.game.canvas.width / 2, 100, "ti vedo da queste parti, da dove vieni?").setTint(0x00000).setFontFamily('Georgia,"Goudy Booletter 1911",Times,serif').setDepth(10).setScale(1.2).setPosition(240,245),
     this.add.image(0, 0, "freccia").setOrigin(0.5).setScale(0.1).setDepth(15).setPosition(1010,420).setInteractive()
     .on("pointerdown", () => {
      this.closedialogo(),
    this.opendialogo2();
  }),])
   

 this._dialogo2Container = this.add.container().setAlpha(0).setDepth(10);
    this._dialogo2ContainerText = this.add.text(this.game.canvas.width / 2, 100, "").setTint(0xff0000).setOrigin(.5);
     this._dialogo2ContainerBackground = this.add.image(0, 0, "").setOrigin(.0).setScale(.1).setPosition(450,0);
    this._dialogo2ContainerBackground2=this.add.image(this.game.canvas.width / 2, 120, "dialogo_sinistra").setDepth(2).setScale(4,3).setPosition(610,280).setOrigin(0.5);
  this._dialogo2Container = this.add.container().setAlpha(0).setDepth(10);

  this._dialogo2Container.add([
    this._dialogo2ContainerBackground,
     this._dialogo2ContainerText,
     this._dialogo2ContainerBackground2,
     this.add.text(this.game.canvas.width / 2, 100, "Vengo da una Nazione ").setTint(0x00000).setFontFamily('Georgia,"Goudy Booletter 1911",Times,serif').setDepth(10).setScale(1.2).setPosition(500,230),
     this.add.text(this.game.canvas.width / 2, 100, "del sud chiamata Clover").setTint(0x00000).setFontFamily('Georgia,"Goudy Booletter 1911",Times,serif').setDepth(10).setScale(1.2).setPosition(500,265),
     this.add.image(0, 0, "freccia").setOrigin(0.5).setScale(0.1).setPosition(1010,420).setDepth(15).setInteractive()
     .on("pointerdown", () => {
    this.closedialogo2();
  }),])



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

      opendialogo2() {
        this.tweens.add({
          targets: this._dialogo2Container, alpha: 1, duration: 1000, onComplete: () => {
            this._dialogo2ContainerBackground.setInteractive()
          }
        })}
      
      closedialogo2() {
          this.tweens.add({
            targets: this._dialogo2Container, alpha: 0, duration: 1000, onComplete: () => {
              this._dialogo.setInteractive();
            }
          })
        }

}

