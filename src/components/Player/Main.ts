import IMain from "./IMain";
import GamePlay from "../../scenes/GamePlay";

export default class Main extends Phaser.GameObjects.Sprite implements IMain {
	private _config: genericConfig;
	private _scene: GamePlay;
	private _body: Phaser.Physics.Arcade.Body;
	private _cursors: Phaser.Types.Input.Keyboard.CursorKeys;
	private _velocity: number = 200;
	private _animations: Array<{ key: string, frames: Array<number>, frameRate: number, yoyo: boolean, repeat: number }> = [
	{ key: "idle", frames: [0, 1, 2, 3], frameRate: 10, yoyo: false, repeat: -1 },
	{ key: "move", frames: [4, 5, 6, 7], frameRate: 10, yoyo: false, repeat: -1 }
	];
constructor(params: genericConfig) {
		super(params.scene, params.x, params.y, params.key);
			this._config = params;
			
			this.create();
			this.createAnimations();
		}
        create() {
            
            this._scene = <GamePlay>this._config.scene;
            
            this._scene.physics.world.enable(this);
            
            this._body = <Phaser.Physics.Arcade.Body>this.body;
           
            this._body.setCollideWorldBounds(true);
           
            this._cursors = this._scene.input.keyboard.createCursorKeys();
            
            this.setDepth(11);
           
            this._scene.add.existing(this);
        }
        
        createAnimations() {
            
            this._animations.forEach(element => {
            
                if (!this._scene.anims.exists(element.key)) {
                    let _animation: Phaser.Types.Animations.Animation = {
                        key: element.key,
                        frames: this.anims.generateFrameNumbers("robo", { frames: element.frames }),
                        frameRate: element.frameRate,
                        yoyo: element.yoyo,
                        repeat: element.repeat
                    };
            
                    this._scene.anims.create(_animation);
                }
            });
        }
    update(time: number, delta: number) {}
    }
    
