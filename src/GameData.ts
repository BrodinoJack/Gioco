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
      width: 25,
      height: 50,
      frames: 10,
    }
  ],

  images: [
    {
      name: "logo-phaser",
      path: "assets/images/logo-phaser.png",
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
  }],
  audio: [],
  bitmapfont: [],
};