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

	private map: Phaser.Tilemaps.Tilemap;
	private tileset1: Phaser.Tilemaps.Tileset;
  private tileset2: Phaser.Tilemaps.Tileset;
  private tileset3: Phaser.Tilemaps.Tileset;
  private tileset4: Phaser.Tilemaps.Tileset;

	private layer: Phaser.Tilemaps.TilemapLayer; 

	private layer2: Phaser.Tilemaps.TilemapLayer;
  
  constructor() {
    super({
      key: "Intro",
    });


  }

  create() {
    this.add.tileSprite(512, 300, 1024, 600, "Sfondo");
    this.add.tileSprite(500, 250, 0, 0, "Sfondo").setOrigin(1).setPosition(1024,600); 


    

    /*this.map = this.make.tilemap({ key: "intro"});
    this.cameras.main.setBounds(
      0, 
      0, 
      this.map.widthInPixels, 
      this.map.heightInPixels 
    );
        this.physics.world.setBounds(
      0, 
      0, 
      this.map.widthInPixels, 
      this.map.heightInPixels 
    );
	  this.tileset1 = this.map.addTilesetImage("blocchi");
    this.tileset2 = this.map.addTilesetImage("car");
    this.tileset3 = this.map.addTilesetImage("truck");
    this.tileset4 = this.map.addTilesetImage("trash");

    this.layer = this.map
    .createLayer("Livello tile 1", this.tileset1, 0, 0)
    .setDepth(9)
    .setAlpha(1);
    this.layer = this.map
	  .createLayer("veicoli", this.tileset2, 0, 0)
    .setDepth(9)
	  .setAlpha(1);
    this.layer = this.map
	  .createLayer("veicoli", this.tileset3, 0, 0)
	  .setDepth(9)
	  .setAlpha(1);
    this.layer = this.map
	  .createLayer("prima veicoli", this.tileset4, 0, 0)
	  .setDepth(9)
	  .setAlpha(1);


    this.layer2 = this.map
	.createLayer("Livello tile 1", this.tileset1, 0, 0)
	.setDepth(0)
	.setAlpha(1);*/




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
   

    this.cameras.main.setBackgroundColor(0xffffff);
    this._logo=this.add.image(this.game.canvas.width / 2, 50, "arkanoid").setAlpha(0);
    this._play = this.add
      .bitmapText(this.game.canvas.width / 2, 350,  "arcade", "PLAY")
      .setAlpha(1)
      .setOrigin(0.5)
      .setInteractive()
      .setDepth(100)
      .setScale(1.1)
      .setTint(0x800000)
      .on("pointerup", () => {
        this._play.removeInteractive();
        this.startGame();
      })
      .on("pointerover", () => {
        this._play.setTint(0x300000).setScale(1.3);
        this._music2= this.sound.add("_button", { loop: false, volume: 0.7 });
        this._music2.play();
      })
      .on("pointerout", () => { 
        this._play.setTint(0x800000).setScale(1.1);
      });


      this._credits = this.add
      .bitmapText(this.game.canvas.width / 2, 400, "arcade", "CREDITS")
      .setAlpha(1)
      .setOrigin(0.5)
      .setInteractive()
      .setDepth(100)
      .setScale(1)
      .setTint(0x800000)
      .on("pointerup", () => {
        this._credits.removeInteractive();
      })
      .on("pointerover", () => {
        this._credits.setTint(0x300000).setScale(1.3);
        this._music2= this.sound.add("_button", { loop: false, volume: 0.7 });
        this._music2.play();
      })
      .on("pointerout", () => { 
        this._credits.setTint(0x800000).setScale(1);
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
  


