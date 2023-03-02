import FabioIacolare from "../../scenes/FabioIacolare";
import Iproiettile from "./Iproiettile";

export default class proiettile extends Phaser.GameObjects.Sprite implements Iproiettile{
  protected _config: genericConfig;
  protected _scene: FabioIacolare;
  private _body: Phaser.Physics.Arcade.Body;
  private _runAnimation: Array<number>=[0, 1, 2, 3, 4, 5];

  constructor(params: genericConfig) {
    super(params.scene, params.x, params.y, params.key);
    this._config = params;
    this._scene = <FabioIacolare>params.scene;
     this._config.scene.physics.world.enable(this);
    this._body = <Phaser.Physics.Arcade.Body>this.body;
    this.create();
  }

  create() {

    let _animation = {
    key: "rotate",
    frames: this.anims.generateFrameNumbers("proiettile", {
    frames: this._runAnimation
    }),
    frameRate: 10,
    yoyo: false,
    repeat: -1
    };
   
    this.setScale(1)
    this._body.setCircle(14, 3, 2).setVelocity(0, -400)
    this.anims.create(_animation);
    this.play("rotate").setAlpha(0).setScale(0.5).setDepth(10);
    this._scene.tweens.add({ targets: this, alpha: 1, scale: 1, duration: 200 });
    this._scene.addproiettile(this);
    this._scene.add.existing(this);
    


  }

  update(time: number, delta: number) {

    if (this.y < 0) { this._scene.removeproiettile(this);}
  }

  removeItem() {}
}