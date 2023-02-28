import Main from "../components/Player/Main";
import Player from "../components/Player/Main";
export default class livello extends Phaser.Scene {

 private _player: Main;

private map: Phaser.Tilemaps.Tilemap;
private tileset: Phaser.Tilemaps.Tileset;


private layer: Phaser.Tilemaps.TilemapLayer;

	
private layer2: Phaser.Tilemaps.TilemapLayer;

constructor() {
    super({ key: "livello" });
    
  } 
  preload(){
    this.load.image("sfondo","assets/map/sfondo.png")
    this.load.tilemapTiledJSON('mappa',"assets/map/level-0.png")
  }
  create(){
    this.map = this.make.tilemap({ key: "level-0"});
    
    this._player = new Player({
        scene: this, x: this.game.canvas.width / 2, y:
          450, key: "Main"
      });
    
    this.cameras.main.setBounds(
		0, 
		0, 
		this.map.widthInPixels, 
		this.map.heightInPixels 
	);
    	this.physics.world.setBounds(
		0, 
		0, 
		this.map.widthInPixels, 
		this.map.heightInPixels 
	);

    this.tileset = this.map.addTilesetImage("sfondo");

    this.layer = this.map
	.createLayer("world", this.tileset, 0, 0)
	.setDepth(9)
	.setAlpha(1);

    this.layer2 = this.map
	.createLayer("collision", this.tileset, 0, 0)
	.setDepth(0)
	.setAlpha(1);

    this.layer2.setCollisionByProperty({ collide: true });

    this.physics.add.collider(
		this._player,
		this.layer2,
		(_player: any, _tile: any) => {
		
			if (_tile.properties.exit == true) {
                console.log("level completed");
			}
		},
		undefined,
		this
		);




  }
  update(time: number, delta: number): void {
    this._player.update(time, delta);
  }}











