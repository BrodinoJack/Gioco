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
      path: "assets/images/Gambe.png",
      width: 18,
      height: 50,
      frames: 10,
    },
    {
      name: "blocchi",
      path: "assets/map/blocchi.png",
      width: 32,
      height: 32,
      spacing: 2,
      margin: 1,
    },
    {
      name: "car",
      path: "assets/map/macchine.png",
      width: 83,
      height: 58,
      spacing: 2,
      margin: 1,
    },
    {
      name: "intro",
      path: "assets/map/intro.png",
      width: 32,
      height: 32,
      spacing: 2,
      margin: 1,
    },
    {
      name: "truck",
      path: "assets/map/camion.png",
      width: 261,
      height: 107,
      spacing: 2,
      margin: 1,
    },
    {
      name: "trash",
      path: "assets/map/immondizia.png",
      width: 30,
      height: 30,
      spacing: 2,
      margin: 1,
    },
  ],

  images: [
    {
      name: "player_intro",
      path: "assets/images/playerintro.png",
    },
    {
      name: "aereo",
      path: "assets/images/aereo.png",
    },
    {
      name: "Pavimento",
      path: "assets/images/P.png",
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
      key: "Intro",
      path: "assets/map/intro.json",
      },
	],

};
