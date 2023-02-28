import IMain from "./IMain";
import FabioIacolare from "../../scenes/FabioIacolare";

export default class Main extends Phaser.GameObjects.Sprite implements IMain{
    protected _config: genericConfig;
    private _scene: FabioIacolare;

    private _M: Phaser.Physics.Arcade.Body; 
    private _d: Phaser.Input.Keyboard.Key;





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
      .setGravityY(1000)
      

      let _animation = {
        key: "idle",
        frames: this.anims.generateFrameNumbers("this._config.key", {
          frames: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
        }),
        frameRate: 10,
        yoyo: false,
        repeat: 0
      };
      this.anims.create(_animation);
      this.setDepth(11);
		}
        getMain(): Phaser.Physics.Arcade.Body { return this._M }
       
        
        createAnimations() {
            
            
        }
    update(time: number, delta: number) {
        if (this._d.isDown) {  
            this.anims.play('idle', true);
            this._M.x += .7;
            console.log("po");
            
      
        }
    }
    }
    
