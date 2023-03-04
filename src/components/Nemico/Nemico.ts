import FabioIacolare from "../../scenes/FabioIacolare";
import INemico from "./INemico";

export default class Nemico extends Phaser.GameObjects.Sprite implements INemico {
  protected _config: genericConfig;
  protected _scene: FabioIacolare;
  protected _body: Phaser.Physics.Arcade.Body;
    private _type:number=0;
    private _enemy1:Phaser.Physics.Arcade.Body;
    private _enemyGroup: Phaser.GameObjects.Group;
    private _scene2:Phaser.Scene;
    private _trigger: Phaser.GameObjects.Zone;
    private triggered: boolean;
  add: any;
  time: any;
  constructor(params: genericConfig) {
    super(params.scene, params.x, params.y, params.key);
    this._config = params;
    this._scene = <FabioIacolare>params.scene;
    this._config.scene.physics.world.enable(this);
    this._body = <Phaser.Physics.Arcade.Body>this.body;
    this._scene.add.existing(this);
    this._enemy1 = <Phaser.Physics.Arcade.Body>this.body;
    this.createAnimations();
            this._enemy1.setDragX(1000)
      .setCollideWorldBounds(true, 0.5)
      .setImmovable(true)
      .setGravity(0, 1200)
      .setMaxVelocity(250, 550)
      .setGravityY(1500)
    this._scene.addEnemy(FabioIacolare);
    
    
    
    this._enemy1.setSize(35,40)
  
  }
 
  
  create() {
    this._enemy1 = this.add.Sprite(450,250, "enemy").setScale(1).setAlpha(1)
   
    let _animation: Phaser.Types.Animations.Animation = {
      key: "Stop",
      frames: this.anims.generateFrameNumbers("enemy", { frames: [0] }),
      frameRate: 1,
      yoyo: false,
      repeat: -1
    };
    this.anims.create(_animation);

    if(this._enemy1.checkCollision){
      let _animation: Phaser.Types.Animations.Animation = {
        key: "died",
        frames: this.anims.generateFrameNumbers("enemy", { frames: [ 0,1,2,3,4,5,6] }),
        frameRate: 6,
        yoyo: false,
        repeat: 0,
      };
      this.anims.create(_animation);
      this.time.addEvent({
        delay: 1000,
        callback: () => { console.log(this._enemy1.destroy) },
        callbackScope: this
        });



    }


    /*let _sprite = this.add.sprite(450, 250, "");
    this._enemyGroup.add(_sprite);
    this._enemy1=this.add.*/




   /* if (this._config.key == "asteroid-0") {
      this._type = 0;
    } else if (this._config.key == "asteroid-1") {
      this._type = 1;
    } else if (this._config.key == "asteroid-2") {
      this._type = 2;
    } else if (this._config.key == "asteroid-3") {
      this._type = 3;
    }
    /*let _animation = {
      key: "rotate",
      frames: this.anims.generateFrameNumbers(this._config.key, {
        frames: this._runAnimation[this._type].frames
      }),
      frameRate: 10,
      yoyo: false,
      repeat: -1
    };*/
    //this.setAlpha(0).setDepth(11);
    //this._scene.tweens.add({ targets: this, alpha: 1, duration: 200 });
    //this._body
     /* .setCircle(this._runAnimation[this._type].radius, 0, 0)
      .setVelocity(Phaser.Math.RND.integerInRange(80, 200) *
        Phaser.Math.RND.sign(), Phaser.Math.RND.integerInRange(80, 200) *
      Phaser.Math.RND.sign()).setCollideWorldBounds(true)
      .setBounce(0.9, 0.9);
    this.anims.create(_animation);
    this.play("rotate");
   // this._scene.addNemico(this);
    this._scene.add.existing(this);*/
  }
  getNemico(): Phaser.Physics.Arcade.Body {return this._enemy1}
  createAnimations() {
    
  }
  Stop() {
    this._enemy1.setEnable(false);
    this.setAlpha(0);

  }
  died() {
    this._enemy1.setEnable(false);
    this.setAlpha(0);

  }
  relive() {
    this._enemy1.setEnable(true);
    this.setAlpha(1);
    this.setPosition(450,250);
  }
  update(time: number, delta: number) { }

  changeDirection(): void { }
  getBody(): Phaser.Physics.Arcade.Body { return this._body; }
}