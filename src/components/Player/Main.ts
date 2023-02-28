import IMain from "./IMain";
import FabioIacolare from "../../scenes/FabioIacolare";

export default class Main extends Phaser.GameObjects.Sprite implements IMain{
    protected _config: genericConfig;
    private _scene: FabioIacolare;

    private _M: Phaser.Physics.Arcade.Body; 
    private _d: Phaser.Input.Keyboard.Key;
    private _a: Phaser.Input.Keyboard.Key;
    private _spacebar: Phaser.Input.Keyboard.Key;
    private _Andre: boolean = false


constructor(params: genericConfig) {

		super(params.scene, params.x, params.y, params.key);
        this._scene = <FabioIacolare>params.scene;
        this._scene.physics.world.enable(this);
        this._M = <Phaser.Physics.Arcade.Body>this.body;
        this._scene.add.existing(this);
			this._M = <Phaser.Physics.Arcade.Body>this.body;
			this.createAnimations();
            this._M.setDragX(1000)
      .setCollideWorldBounds(true, 0.5)
      .setImmovable(true)
      .setGravity(0, 1200)
      .setMaxVelocity(250, 550)
      .setGravityY(1500)
      
      this._d = this._scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
      this._a = this._scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
      this._spacebar = this._scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);


      let _animation : Phaser.Types.Animations.Animation = {

        key: "move",
        frames: this.anims.generateFrameNumbers("Main", {
          frames: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
        }),
        frameRate: 10,
        yoyo: false,
        repeat: -1
      };
      this.anims.create(_animation);
      this.setDepth(11);
		}
        getMain(): Phaser.Physics.Arcade.Body { return this._M }
       
        
        createAnimations() {
            
            
        }
    update(time: number, delta: number) {
        if (this._d.isDown ) {
            this.anims.play('move', true);
            this._M.setVelocityX(100);
          }
          if (this._a.isDown) {
            this.anims.play('move', true);
            this._M.setVelocityX(-100)
      
          }
          if (Phaser.Input.Keyboard.JustDown(this._spacebar)) {
            if (this._M.onFloor()) {
              // player can only double jump if it is on the floor
              this._Andre = true;
              this._M.setVelocityY(-550);
            } 
          }
    }
}
