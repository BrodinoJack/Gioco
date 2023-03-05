import FabioIacolare from "../../scenes/FabioIacolare";
import Nemico from "./Nemico";

export default class Piatt extends Nemico {
  private _vel: number = 50;
  private _direction: string;
  private _isAttacking: boolean=false;
  private trigger: boolean= false;
  
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

    
   let _animation= {
      key: "Stop",
      frames: this.anims.generateFrameNumbers("enemy", { frames: [0,1,2,3] }),
      frameRate: 4,
      yoyo: false,
      repeat: -1
    }
    this.anims.create(_animation);

    this.anims.create(_animation);
    this.anims.play('Stop', true);
    let _animation2= {
      key: "sparare",
      frames: this.anims.generateFrameNumbers("shot", { frames: [0,1,2,3] }),
      frameRate: 4,
      yoyo: false,
      repeat: -1
    }
    this.anims.create(_animation2);
    
    }




    
    Stop() {
      this._enemy1.setEnable(true);
      this.setAlpha(0);
    }
    
    

  changeDirection(): void {

    if (this._vel == 50) {
      this._vel = -50;
      this.setFlipX(false);
      this._direction="left";
    } else {
      this._vel = 50;
      this.setFlipX(true);
      this._direction="right";
    }
    this._body.setVelocityX(this._vel);
  }


  update(time: number, delta: number) { 

   /* if(this.isActive()){
      let _playerY = this._scene.getPlayer().y +70;
      let _distanceY: number=0;
      let _sameDirection: boolean=false;

      if(_playerY>this.y && _playerY){
        _distanceY=_playerY-_playerY
      }
      if (this._direction =="left" && this.x>this._scene.getPlayer().x || this._direction=="right" && this.x < this._scene.getPlayer().x){
        _sameDirection=true;
      }
      let _distance = Phaser.Math.Distance.BetweenPoints({x:this.x,y:this.y},{x:this._scene.getPlayer().x,y:
      _playerY})
      if(_sameDirection && _distanceY < 30 && _distance <200 && ! this._isAttacking){
        this.trigger=true
        this.attack();
        
      }
    }
  }
  attack() {
    // Implementa la logica di attacco del nemico qui
    this._isAttacking = true;
    this._enemy1.setEnable(false);
    this.setAlpha(1);





  }
  isActive(): boolean {
    return this.active;*/
  }
}