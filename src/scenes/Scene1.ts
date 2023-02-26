export default class Scene1 extends Phaser.Scene {

	private _helloWorld: Phaser.GameObjects.Text;
		private _counter: number;
  		constructor() {
    			super({key: "Scene1"});
   		}

		init() { 
			this._counter = 0;
			this._helloWorld = this.add.text(0, 0, "Hello World");
		}
		preload() { }
		create() {		
				this._counter = 0;
			this._helloWorld = this.add.text(0, 0, "Hello World");
		 }
		update(time: number, delta: number): void { }
}
