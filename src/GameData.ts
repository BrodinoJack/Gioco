export let GameData: any = {
  globals: {
    leaderboard: false,
    gameWidth: 1024,
    gameHeight: 600,
    bgColor: "#ffffff",
    debug: false,
  },

  preloader: {
    bgColor: "",
    image: "phaser",
    imageX: 500,
    imageY: 300,
    loadingText: "",
  },

  spritesheets: [
    {
      name: "Main",
      path: "assets/images/A_ritagliato2.0.png",
      width: 18,
      height: 70,
      frames: 10,
    },
    {
      name: "Fermo",
      path: "assets/images/Copp.png",
      width: 20,
      height: 50,
      frames: 4,
    },
    {
      name: "sfondo",
      path: "assets/map/sfondo.png",
      width: 32,
      height: 32,
      spacing: 2,
      margin: 1,
    },
  ],

  images: [
    {
      name: "bg",
      path: "assets/images/introcity.png",
    },
    {
      name: "player_intro",
      path: "assets/images/playerintro.png",
    },
    {
      name: "aereo",
      path: "assets/images/aereo.png",
    },
    {
    name: "popup",
    path: "assets/images/x.png",
    },
   {
    name: "options",
    path: "assets/images/options.png",
    },
   {
    name: "galilei",
    path: "assets/images/galilei.png",
    },
    {
      name: "Sfondo",
      path: "assets/images/Sfondo.png",
      },
      {
        name: "intro-image",
        path: "assets/images/introcity.png",
        },
        {
          name: "bar_contipi",
          path: "assets/images/bar_contipi.png",
          },
          {
          name: "freccia",
          path: "assets/images/freccia.png",
          },
          {
            name: "dialogo_destra",
            path: "assets/images/dialogo_destra.png",
          },
          {
            name: "dialogo_sinistra",
            path: "assets/images/dialogo_sinistra.png",
          },
          {
            name: "labs",
            path: "assets/images/labs.png",
          },
         
],
  atlas: [],
  sounds: [{
    name: "sfx",
    jsonpath: "assets/sounds/sfx.json",
    paths: ["assets/sounds/sfx.ogg", "assets/sounds/sfx.m4a"]
  },
  {
    name: "_intro", 
    paths: ["assets/sounds/canzoneintro.ogg", "assets/sounds/canzoneintro.m4a"]
  },
  {
    name: "_button",
    paths: ["assets/sounds/button.ogg", "assets/sounds/button.m4a"]
  },
  {
    name: "_musicbar",
    paths: ["assets/sounds/music-bar.ogg", "assets/sounds/music-bar.m4a"]
  }],
  audio: [],
  bitmapfont: [],
  tilemaps: [
    {
      key: "level-0",
      path: "assets/map/level-0.json",
      },
    
  
	],

};
