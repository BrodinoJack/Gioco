import FabioIacolare from "./FabioIacolare";

export default class Hud extends Phaser.Scene {
  private _vita: Phaser.GameObjects.Image;
  private _tre: Phaser.GameObjects.BitmapText;
  private _vite: number;
  private _colpi: Phaser.GameObjects.Image;
  private _spacebar: Phaser.Input.Keyboard.Key;
  private _nocolpi: Phaser.GameObjects.Image;
  private _ncolpi:Phaser.GameObjects.BitmapText;
  private _ncolpi2: number;
  private _FabioIacolare:FabioIacolare;

  constructor() {
    super({
      key: "Hud",
    });
  }

  preload() { }

  create() {
    this._vite = 3;
    this._ncolpi2 = 12;
    this._FabioIacolare = <FabioIacolare>this.scene.get("FabioIacolare");

    this._FabioIacolare.events.off("decrease-vitr", this.decreasevite, this);
    this._FabioIacolare.events.on("decrease-vite", this.decreasevite, this);

    this._FabioIacolare.events.off("decrease-Colpi", this.decreaseColpi, this);
    this._FabioIacolare.events.on("decrease-Colpi", this.decreaseColpi, this);


    this._ncolpi= this.add
    .bitmapText(20, 20, "arcade", "0")
    .setFontSize(30)
    .setTint(0xffffff)
    .setOrigin(0);

  this._tre = this.add
    .bitmapText(1024 - 40, 20, "arcade", "" + this._tre)
    .setFontSize(30)
    .setTint(0xffffff)
    .setOrigin(0);
  



  



    /*this._FabioIacolare = <FabioIacolare>this.scene.get("FabioIacolare");
    this._vita= this.add.image(this.game.canvas.width/ 2,100, "cuore").setPosition(980,40).setScale(.1).setAlpha(1);
  this._tre= this.add.text(this.game.canvas.width/ 2,100, "3").setPosition(977,25).setScale(1).setAlpha(1).setFontFamily('Georgia,"Goudy Booletter 1911",Times,serif').setTint(0x000000);
  
  this._colpi= this.add.image(this.game.canvas.width/ 2,100, "proiettili_pieni").setPosition(915,37).setScale(.3).setAlpha(1).setScrollFactor(0);
  this._ncolpi2= 12;
  this._ncolpi=this.add.text(this.game.canvas.width/2,100, ""+ this._ncolpi2).setPosition(860,25).setScale(1.2).setAlpha(1).setTint(0x000000).setFontFamily('Georgia,"Goudy Booletter 1911",Times,serif').setTint(0x000000)
 */
  }
 update(time: number, delta: number): void {
    
    }
  

  private decreasevite(): void {
    this._vite--;
    this._tre.setText(this._vite + "");
    if (this._vite == 0) this.gameOver();

  } 
  private decreaseColpi(): void {
    this._ncolpi2--;
    this._ncolpi.setText(this._ncolpi2 + "");
  } 

  private gameOver() {

    
    this.scene.stop("Hud");
    this.scene.stop("GamePlay");
    this.scene.start("GameOver");

  }}