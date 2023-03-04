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
    this._ncolpi2 = 24;
    this._FabioIacolare = <FabioIacolare>this.scene.get("FabioIacolare");

    this._FabioIacolare.events.off("decrease-vite", this.decreasevite, this);
    this._FabioIacolare.events.on("decrease-vite", this.decreasevite, this);

    this._FabioIacolare.events.off("decrease-Colpi", this.decreaseColpi, this);
    this._FabioIacolare.events.on("decrease-Colpi", this.decreaseColpi, this);


    this._ncolpi= this.add
    .bitmapText(20, 20, "arcade", ""+ this._ncolpi2)
    .setFontSize(20)
    .setTint(0x000000)
    .setOrigin(0)
    .setPosition(840,27)
    .setDepth(10);
    
    this._colpi= this.add.image(this.game.canvas.width/ 2,100, "proiettil")
    .setPosition(915,37)
    .setScale(.3)
    .setDepth(10)
    .setAlpha(1)
    .setScrollFactor(0);

    this._tre = this.add
    .bitmapText(1024 - 40, 20, "arcade", "" + this._vite)
    .setFontSize(20)
    .setTint(0x000000)
    .setPosition(971,30)
    .setOrigin(0)
    .setDepth(11);

    this.add.image(this.game.canvas.width/ 2,100, "cuore")
    .setPosition(980,40)
    .setScale(.1)
    .setDepth(10)
    .setAlpha(1);




  


/*
    this._FabioIacolare = <FabioIacolare>this.scene.get("FabioIacolare");
    this._vita= this.add.image(this.game.canvas.width/ 2,100, "cuore").setPosition(980,40).setScale(.1).setDepth(10).setAlpha(1);
  this._tre= this.add.bitmapText(this.game.canvas.width/ 2,100, "3").setPosition(977,25).setScale(1).setDepth(11).setAlpha(1).setTint(0x000000);
  
  this._colpi= this.add.image(this.game.canvas.width/ 2,100, "proiettili_pieni").setPosition(915,37).setScale(.3).setDepth(10).setAlpha(1).setScrollFactor(0);
  this._ncolpi2= 12;
  this._ncolpi=this.add.bitmapText(this.game.canvas.width/2,100, ""+ this._ncolpi2).setPosition(860,25).setScale(1.2).setDepth(10).setAlpha(1).setTint(0x000000).setTint(0x000000)
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