export default class Victory extends Phaser.Scene {

    private _blurcity :Phaser.GameObjects.Image;
    private _rigioca: Phaser.GameObjects.BitmapText;
    private _menu: Phaser.GameObjects.BitmapText;
    private _text: Phaser.GameObjects.BitmapText;
    private _text2: Phaser.GameObjects.Text;


    constructor() {
        super({
          key: "Victory",
        });
    }

    create() {
        this.cameras.main.setBackgroundColor(0x00000);
        this._text = this.add.bitmapText(this.game.canvas.width / 1.99, 350,  "arcade", "HAI VINTO").setDepth(1).setOrigin(0,5).setPosition(185,500).setScale(2.3).setTint(0xff0000)
        this._blurcity=this.add.image(this.game.canvas.width / 2,300, "blurcity").setOrigin(0.5).setDepth(0).setAlpha(0.1)
        console.log("Create:gameover")
        this._rigioca = this.add
          .bitmapText(this.game.canvas.width / 2, 350,  "arcade", "RIGIOCA")
          .setAlpha(1)
          .setOrigin(0.5)
          .setInteractive()
          .setDepth(100)
          .setPosition(500,400)
          .setScale(1.1)
          .setTint(0xff0000)
          .on("pointerover",() =>{
            this._rigioca.setTint(0x530000).setScale(1.3);
          })
          .on("pointerup",() =>{
            this,this.startGame()
          })
          .on("pointerout",() =>{
            this._rigioca.setTint(0xff0000).setScale(1.1);
          })
          this._menu = this.add
          .bitmapText(this.game.canvas.width / 2, 350,  "arcade", "MENU")
          .setAlpha(1)
          .setOrigin(0.5)
          .setInteractive()
          .setDepth(100)
          .setPosition(500,450)
          .setScale(1.1)
          .setTint(0xff0000)
          .on("pointerover",() =>{
            this._menu.setTint(0x530000).setScale(1.3);
          })
          .on("pointerup",() =>{
            this,this.startIntro()
          })
          .on("pointerout",() =>{
            this._menu.setTint(0xff0000).setScale(1.1);
          })
          
          
          
      }
    
    
      startGame(){
        this.scene.start("GamePlay")
        this.scene.stop("GameOver")
        this.scene.start("Hud");
        this.scene.bringToTop("Hud");
      }
    
      startIntro(){
        this.scene.start("Intro")
        this.scene.stop("GameOver")
      }
}