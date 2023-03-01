import Main from "../components/Player/Main";
import Player from "../components/Player/Main";
export default class livello extends Phaser.Scene {

 private _player: Main;

	private sfondo:Phaser.GameObjects.TileSprite;


constructor() {
    super({ key: "livello" });
    
  } 
  preload(){
   
  }
  create(){

    




  }
  update(time: number, delta: number): void {
    this._player.update(time, delta);
  }}











