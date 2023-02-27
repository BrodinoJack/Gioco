
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
    /*this._illustrazione= this.add.text(this.game.canvas.width / 2, 100, "sencio da").setTint(0xff0000).setFontFamily('Georgia,"Goudy Booletter 1911",Times,serif').setScale(1.4).setPosition(424,50);*/
   this.time.addEvent({
      delay: 5000,
      callback: () => { console.log(this._illustrazione= this.add.text(this.game.canvas.width / 2, 100, "sencio da").setTint(0xff0000).setAlpha(0).setFontFamily('Georgia,"Goudy Booletter 1911",Times,serif').setScale(1.4).setPosition(424,50)) },
      callbackScope: this
      });
    }
  
    
  }
    

    

  