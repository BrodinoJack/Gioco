export default class Intro extends Phaser.Scene {

  private _logo: Phaser.GameObjects.Image;
  private _play: Phaser.GameObjects.BitmapText;
  private _credits:Phaser.GameObjects.BitmapText;
  private _music: Phaser.Sound.BaseSound;
  private _music2: Phaser.Sound.BaseSound;
  private _creditsContainer: Phaser.GameObjects.Container;
  private _creditsContainerText: Phaser.GameObjects.Text;
  private _creditsContainerBackground: Phaser.GameObjects.Image;
  private _creditsContainerBackground2: Phaser.GameObjects.Image;
  private _creditsContainerEsc: Phaser.GameObjects.Image;

  
  constructor() {
    super({
      key: "Intro",
    });


  }

  create() {


    this._music = this.sound.add("_intro", { loop: true, volume: 0.7 });
    this._music.play();
    this._creditsContainer = this.add.container().setAlpha(0).setDepth(10);
    this._creditsContainerText = this.add.text(this.game.canvas.width / 2, 100, "").setTint(0xff0000).setOrigin(.5);
    this._creditsContainerBackground = this.add.image(0, 0, "").setOrigin(.0).setScale(.1).setPosition(450,0);
    this._creditsContainerBackground2=this.add.image(this.game.canvas.width / 2, 120, "options");
    
    this._creditsContainer.add([
      this._creditsContainerBackground,
       this._creditsContainerText,
       this._creditsContainerBackground2,
       this.add.text(this.game.canvas.width / 2, 100, "Creators").setFontFamily('Georgia,"Goudy Booletter 1911",Times,serif').setScale(1.4).setPosition(475,15),
       this.add.text(this.game.canvas.width / 2, 100, "Andrea Iacolare / andrue").setFontFamily('Georgia,"Goudy Booletter 1911",Times,serif').setScale(1.4).setPosition(378,45),
       this.add.text(this.game.canvas.width / 2, 100, "Michele Pascarella / zozne").setFontFamily('Georgia,"Goudy Booletter 1911",Times,serif').setScale(1.4).setPosition(378,75),
       this.add.text(this.game.canvas.width / 2, 100, "Fabio Iacolare / fasbruk").setFontFamily('Georgia,"Goudy Booletter 1911",Times,serif').setScale(1.4).setPosition(378,105),
       this.add.text(this.game.canvas.width / 2, 100, "Giovanni Torrente / zio gio").setFontFamily('Georgia,"Goudy Booletter 1911",Times,serif').setScale(1.4).setPosition(378,135),
       this.add.text(this.game.canvas.width / 2, 100, "Angelo  Galzerano / brodino").setFontFamily('Georgia,"Goudy Booletter 1911",Times,serif').setScale(1.4).setPosition(378,165),
       this.add.text(this.game.canvas.width / 2, 100, "Gabriele Di Maio / nog").setFontFamily('Georgia,"Goudy Booletter 1911",Times,serif').setScale(1.4).setPosition(378,195),
       this.add.text(this.game.canvas.width / 2, 100, "Giampoalo La Cerra / tondus").setFontFamily('Georgia,"Goudy Booletter 1911",Times,serif').setScale(1.4).setPosition(378,225),
       this.add.image(0, 0, "popup").setOrigin(.0).setScale(.1).setPosition(640,0).setInteractive()
       .on("pointerdown", () => {
      this.closeCredits();
    })]);
   

//fratellone
    this.cameras.main.setBackgroundColor(0xffffff);
    this._logo=this.add.image(this.game.canvas.width / 2, 50, "arkanoid").setAlpha(0);
    this._play = this.add
      .bitmapText(this.game.canvas.width / 2, 350,  "arcade", "PLAY")
      .setAlpha(1)
      .setOrigin(0.5)
      .setInteractive()
      .setDepth(100)
      .setScale(1.1)
      .setTint(0x2d8665)
      .on("pointerup", () => {
        this._play.removeInteractive();
        this.startGame();
      })
      .on("pointerover", () => {
        this._play.setTint(0x7ad1b1).setScale(1.3);
        this._music2= this.sound.add("_button", { loop: false, volume: 0.7 });
        this._music2.play();
      })
      .on("pointerout", () => { 
        this._play.setTint(0x2d8665).setScale(1.1);
      });
      
//difpv
//c
      this._credits = this.add
      .bitmapText(this.game.canvas.width / 2, 400, "arcade", "CREDITS")
      .setAlpha(1)
      .setOrigin(0.5)
      .setInteractive()
      .setDepth(100)
      .setScale(1)
      .setTint(0x2d8665)
      .on("pointerup", () => {
        this._credits.removeInteractive();
      })
      .on("pointerover", () => {
        this._credits.setTint(0x7ad1b1).setScale(1.3);
        this._music2= this.sound.add("_button", { loop: false, volume: 0.7 });
        this._music2.play();
      })
      .on("pointerout", () => { 
        this._credits.setTint(0x2d8665).setScale(1);
      })
      .on("pointerdown", this.openCredits, this);
     
    }


      
 

  openCredits() {
    this._credits.disableInteractive();
    this._play.disableInteractive();
    this.tweens.add({
      targets: this._creditsContainer, alpha: 1, duration: 1000, onComplete: () => {
        this._creditsContainerBackground.setInteractive()
      }
    })}
  
  closeCredits() {
      this.tweens.add({
        targets: this._creditsContainer, alpha: 0, duration: 1000, onComplete: () => {
          this._play.setInteractive();
          this._credits.setInteractive();
        }
      })
    }

  startGame() {

    this.scene.stop("Intro");
    this.scene.start("GamePlay");
    this.scene.start("Hud");
    this.scene.bringToTop("Hud");
  }
    
    
  update(time: number, delta: number): void {
   
   
   
    }
    
  
  
  }
  

