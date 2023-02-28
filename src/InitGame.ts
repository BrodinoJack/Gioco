import "phaser";
import Boot from "./scenes/Boot";
import Preloader from "./scenes/Preloader";
import Intro from "./scenes/Intro";
import Hud from "./scenes/Hud";
import GameOver from "./scenes/GameOver";
import GamePlay from "./scenes/GamePlay";
import scienziato from "./scenes/scienziato";
<<<<<<< HEAD
import Fabio from "./scenes/Fabio";
=======
import FabioIacolare from "./scenes/FabioIacolare";
import laboratorio from "./scenes/laboratorio";
>>>>>>> d64db73fe32cb9ed2eda48627b5d9b5681747353
import { GameData } from "./GameData";

window.addEventListener("load", () => {

  const config: any = {
    type: Phaser.WEBGL,
    backgroundColor: GameData.globals.bgColor,
    parent: "my-game",
    scale: {
      mode: Phaser.Scale.FIT,
      width: GameData.globals.gameWidth,
      height: GameData.globals.gameHeight,
    },

    scene: [
      Boot,
      Preloader,
      Intro,
      Hud,
      GamePlay,  
      GameOver,
<<<<<<< HEAD
      scienziato, 
      Fabio
=======
      scienziato,
      FabioIacolare,
      laboratorio
>>>>>>> d64db73fe32cb9ed2eda48627b5d9b5681747353
  
      
    ],
   

    physics: {
      default: "arcade",
      arcade: {
        
        debug: true,
      }
    },

    input: {
      activePointers: 2,
      keyboard: true,
    },

    render: {
      pixelArt: true,
      antialias: false,
    },
  };

  const game = new Phaser.Game(config);


});
