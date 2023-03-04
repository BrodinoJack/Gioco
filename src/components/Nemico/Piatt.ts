import FabioIacolare from "../../scenes/FabioIacolare";
import Nemico from "./Nemico";

export default class Piatt extends Nemico {
  private _vel: number = 50;
  constructor(params: genericConfig) {
    super(params);
    this.setName("Soldato")
    this.create();
  }
  create() {


    this._body
      .setCollideWorldBounds(true, 0.5)
      .setImmovable(true)
      .setGravity(0, 1200)
      .setMaxVelocity(250, 550);

    this._body.setVelocityX(50);

    /*let _animation = {
      key: "move",
      frames: this.anims.generateFrameNumbers(this._config.key, {
        frames: [4, 5, 6, 7]
      }),
      frameRate: 10,
      yoyo: false,
      repeat: -1
    };
    this.setFlipX(true);
    this.anims.create(_animation);
    this.play("move");*/
    
   let _animation= {
      key: "Stop",
      frames: this.anims.generateFrameNumbers("enemy", { frames: [0,1,2,3] }),
      frameRate: 4,
      yoyo: false,
      repeat: -1
    }
    this.anims.create(_animation);

     /* let _morte: Phaser.Types.Animations.Animation = {
        key: "died",
        frames: this.anims.generateFrameNumbers("Soldato", { frames: [ 0,1,2,3,4,5,6] }),
        frameRate: 6,
        yoyo: false,
        repeat: 0,
      };
      this.anims.create(_animation);
      this.time.addEvent({
        delay: 1000,
        callback: () => { console.log(this._enemy1.destroy) },
        callbackScope: this
        });*/



    }
    Stop() {
      this._enemy1.setEnable(false);
      this.setAlpha(0);
    }
  changeDirection(): void {

    if (this._vel == 50) {
      this._vel = -50;
      this.setFlipX(false);
    } else {
      this._vel = 50;
      this.setFlipX(true);
    }
    this._body.setVelocityX(this._vel);
  }


  update(time: number, delta: number) { 
    this.anims.play('enemy', true);
  }
}