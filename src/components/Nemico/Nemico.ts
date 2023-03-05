import FabioIacolare from "../../scenes/FabioIacolare";
import INemico from "./INemico";

export default class Nemico extends Phaser.GameObjects.Sprite implements INemico {
  protected _config: genericConfig;
  protected _scene: FabioIacolare;
  protected _body: Phaser.Physics.Arcade.Body;
    private _type:number=0;
    public _enemy1:Phaser.Physics.Arcade.Body;
    private _enemyGroup: Phaser.GameObjects.Group;
    private _scene2:Phaser.Scene;
    private _trigger: Phaser.GameObjects.Zone;
    private triggered: boolean;
    private _attack: number;
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
   
        this._scene.addEnemy(this);
    
       
  }

  getEnemy(): Phaser.Physics.Arcade.Body {return this._body}

  
  create() {





    }


   
  update(time: number, delta: number) { }

  changeDirection(): void { }
  getBody(): Phaser.Physics.Arcade.Body { return this._body; }
}