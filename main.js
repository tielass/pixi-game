import {
  Application,
  Graphics,
  AnimatedSprite,
  Text,
  TextStyle,
  Texture,
  Assets,
  Sprite,
  Rectangle,
  Container,
  Spritesheet,
} from "pixi.js";
import { createBackground } from "./background.js";

(async () => {
  const app = new Application();
  await app.init({
    // resizeTo: window,
    width: 800,
    height: 600,
    backgroundAlpha: 0.5,
    backgroundColor: 0xffea00,
  });
  app.canvas.style.position = "absolute";
  document.body.appendChild(app.canvas);

  await createBackground(app);

  const tilesetTexture = await Assets.load("images/tileset.png");
  const tileTexture = new Texture(tilesetTexture, new Rectangle(0, 0, 96, 96));
  const groundContainer = new Container();
  const numTiles = Math.ceil(app.canvas.width / 96);
  for (let i = 0; i < numTiles; i++) {
    const tileSprite = new Sprite(tileTexture);
    tileSprite.x = i * 96;
    tileSprite.y = app.canvas.height - 96; 
    groundContainer.addChild(tileSprite);
  }

  app.stage.addChild(groundContainer);

  const atlasData = {
    frames: {
      run1: {
        frame: { x: 0, y: 0, w: 120, h: 80 },
        sourceSize: { w: 120, h: 80 },
        spriteSourceSize: { x: 0, y: 0, w: 120, h: 80 },
      },
      run2: {
        frame: { x: 120, y: 0, w: 120, h: 80 },
        sourceSize: { w: 120, h: 80 },
        spriteSourceSize: { x: 0, y: 0, w: 120, h: 80 },
      },
      run3: {
        frame: { x: 240, y: 0, w: 120, h: 80 },
        sourceSize: { w: 120, h: 80 },
        spriteSourceSize: { x: 0, y: 0, w: 120, h: 80 },
      },
      run4: {
        frame: { x: 360, y: 0, w: 120, h: 80 },
        sourceSize: { w: 120, h: 80 },
        spriteSourceSize: { x: 0, y: 0, w: 120, h: 80 },
      },
      run5: {
        frame: { x: 480, y: 0, w: 120, h: 80 },
        sourceSize: { w: 120, h: 80 },
        spriteSourceSize: { x: 0, y: 0, w: 120, h: 80 },
      },
      run6: {
        frame: { x: 600, y: 0, w: 120, h: 80 },
        sourceSize: { w: 120, h: 80 },
        spriteSourceSize: { x: 0, y: 0, w: 120, h: 80 },
      },
      run7: {
        frame: { x: 720, y: 0, w: 120, h: 80 },
        sourceSize: { w: 120, h: 80 },
        spriteSourceSize: { x: 0, y: 0, w: 120, h: 80 },
      },
      run8: {
        frame: { x: 840, y: 0, w: 120, h: 80 },
        sourceSize: { w: 120, h: 80 },
        spriteSourceSize: { x: 0, y: 0, w: 120, h: 80 },
      },
      run9: {
        frame: { x: 960, y: 0, w: 120, h: 80 },
        sourceSize: { w: 120, h: 80 },
        spriteSourceSize: { x: 0, y: 0, w: 120, h: 80 },
      },
      run10: {
        frame: { x: 1080, y: 0, w: 120, h: 80 },
        sourceSize: { w: 120, h: 80 },
        spriteSourceSize: { x: 0, y: 0, w: 120, h: 80 },
      },
    },
    meta: {
      image: "images/_Run.png",
      size: { w: 1200, h: 80 },
      scale: 1,
    },
    animations: {
      run: [
        "run1",
        "run2",
        "run3",
        "run4",
        "run5",
        "run6",
        "run7",
        "run8",
        "run9",
        "run10",
      ],
    },
  };
  
  const idleAtlasData = {
    frames: {
      idle1: { frame: { x: 0, y: 0, w: 120, h: 80 }, sourceSize: { w: 120, h: 80 }, spriteSourceSize: { x: 0, y: 0, w: 120, h: 80 } },
      idle2: { frame: { x: 120, y: 0, w: 120, h: 80 }, sourceSize: { w: 120, h: 80 }, spriteSourceSize: { x: 0, y: 0, w: 120, h: 80 } },
      idle3: { frame: { x: 240, y: 0, w: 120, h: 80 }, sourceSize: { w: 120, h: 80 }, spriteSourceSize: { x: 0, y: 0, w: 120, h: 80 } },
      idle4: { frame: { x: 360, y: 0, w: 120, h: 80 }, sourceSize: { w: 120, h: 80 }, spriteSourceSize: { x: 0, y: 0, w: 120, h: 80 } },
      idle5: { frame: { x: 480, y: 0, w: 120, h: 80 }, sourceSize: { w: 120, h: 80 }, spriteSourceSize: { x: 0, y: 0, w: 120, h: 80 } },
      idle6: { frame: { x: 600, y: 0, w: 120, h: 80 }, sourceSize: { w: 120, h: 80 }, spriteSourceSize: { x: 0, y: 0, w: 120, h: 80 } },
      idle7: { frame: { x: 720, y: 0, w: 120, h: 80 }, sourceSize: { w: 120, h: 80 }, spriteSourceSize: { x: 0, y: 0, w: 120, h: 80 } },
      idle8: { frame: { x: 840, y: 0, w: 120, h: 80 }, sourceSize: { w: 120, h: 80 }, spriteSourceSize: { x: 0, y: 0, w: 120, h: 80 } },
      idle9: { frame: { x: 960, y: 0, w: 120, h: 80 }, sourceSize: { w: 120, h: 80 }, spriteSourceSize: { x: 0, y: 0, w: 120, h: 80 } },
      idle10: { frame: { x: 1080, y: 0, w: 120, h: 80 }, sourceSize: { w: 120, h: 80 }, spriteSourceSize: { x: 0, y: 0, w: 120, h: 80 } },
    },
    meta: {
      image: "images/_Idle.png",
      size: { w: 1200, h: 80 },
      scale: 1,
    },
    animations: {
      idle: ["idle1", "idle2", "idle3", "idle4", "idle5", "idle6", "idle7", "idle8", "idle9", "idle10"],
    },
  };

  const attackAtlasData = {
    frames: {
      attack1: { frame: { x: 0, y: 0, w: 120, h: 80 }, sourceSize: { w: 120, h: 80 }, spriteSourceSize: { x: 0, y: 0, w: 120, h: 80 } },
      attack2: { frame: { x: 120, y: 0, w: 120, h: 80 }, sourceSize: { w: 120, h: 80 }, spriteSourceSize: { x: 0, y: 0, w: 120, h: 80 } },
      attack3: { frame: { x: 240, y: 0, w: 120, h: 80 }, sourceSize: { w: 120, h: 80 }, spriteSourceSize: { x: 0, y: 0, w: 120, h: 80 } },
      attack4: { frame: { x: 360, y: 0, w: 120, h: 80 }, sourceSize: { w: 120, h: 80 }, spriteSourceSize: { x: 0, y: 0, w: 120, h: 80 } },
    },
    meta: {
      image: "images/_Attack.png",
      size: { w: 480, h: 80 },
      scale: 1,
    },
    animations: {
      attack: ["attack1", "attack2", "attack3", "attack4"],
    },
  };

  const jumpAtlasData = {
    frames: {
      jump1: { frame: { x: 0, y: 0, w: 120, h: 80 }, sourceSize: { w: 120, h: 80 }, spriteSourceSize: { x: 0, y: 0, w: 120, h: 80 } },
      jump2: { frame: { x: 120, y: 0, w: 120, h: 80 }, sourceSize: { w: 120, h: 80 }, spriteSourceSize: { x: 0, y: 0, w: 120, h: 80 } },
      jump3: { frame: { x: 240, y: 0, w: 120, h: 80 }, sourceSize: { w: 120, h: 80 }, spriteSourceSize: { x: 0, y: 0, w: 120, h: 80 } },
    },
    meta: {
      image: "images/_Jump.png",
      size: { w: 360, h: 80 },
      scale: 1,
    },
    animations: {
      jump: ["jump1", "jump2", "jump3"],
    },
  };

  const texture = await Assets.load(atlasData.meta.image);
  const spritesheet = new Spritesheet(texture, atlasData);
  await spritesheet.parse();
  const animatedSprite = new AnimatedSprite(spritesheet.animations.run);

  animatedSprite.scale.set(2);
  animatedSprite.x = app.canvas.width / 2 - animatedSprite.width / 2;
  animatedSprite.y = app.canvas.height - 96 - animatedSprite.height; 
  animatedSprite.animationSpeed = 0.3;

  animatedSprite.play();

  app.stage.addChild(animatedSprite);

  // Movement variables
  let moveLeft = false;
  let moveRight = false;
  const speed = 5;

  // Event listeners for keydown and keyup
  window.addEventListener("keydown", (event) => {
    if (event.key === "ArrowLeft") {
      moveLeft = true;
    } else if (event.key === "ArrowRight") {
      moveRight = true;
    }
  });

  window.addEventListener("keyup", (event) => {
    if (event.key === "ArrowLeft") {
      moveLeft = false;
    } else if (event.key === "ArrowRight") {
      moveRight = false;
    }
  });

  // Update loop
  app.ticker.add(() => {
    if (moveLeft) {
      animatedSprite.x -= speed;
    }
    if (moveRight) {
      animatedSprite.x += speed;
    }
    app.renderer.render(app.stage);
  });
})();
