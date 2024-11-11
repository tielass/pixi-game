import { AnimatedSprite, Assets, Spritesheet } from "pixi.js";

export async function createSprites(app) {
  const runAtlasData = {
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

  const jumpAtlasData = {
    frames: {
      jump1: {
        frame: { x: 0, y: 0, w: 120, h: 80 },
        sourceSize: { w: 120, h: 80 },
        spriteSourceSize: { x: 0, y: 0, w: 120, h: 80 },
      },
      jump2: {
        frame: { x: 120, y: 0, w: 120, h: 80 },
        sourceSize: { w: 120, h: 80 },
        spriteSourceSize: { x: 0, y: 0, w: 120, h: 80 },
      },
      jump3: {
        frame: { x: 240, y: 0, w: 120, h: 80 },
        sourceSize: { w: 120, h: 80 },
        spriteSourceSize: { x: 0, y: 0, w: 120, h: 80 },
      },
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

  const idleAtlasData = {
    frames: {
      idle1: {
        frame: { x: 0, y: 0, w: 120, h: 80 },
        sourceSize: { w: 120, h: 80 },
        spriteSourceSize: { x: 0, y: 0, w: 120, h: 80 },
      },
      idle2: {
        frame: { x: 120, y: 0, w: 120, h: 80 },
        sourceSize: { w: 120, h: 80 },
        spriteSourceSize: { x: 0, y: 0, w: 120, h: 80 },
      },
      idle3: {
        frame: { x: 240, y: 0, w: 120, h: 80 },
        sourceSize: { w: 120, h: 80 },
        spriteSourceSize: { x: 0, y: 0, w: 120, h: 80 },
      },
      idle4: {
        frame: { x: 360, y: 0, w: 120, h: 80 },
        sourceSize: { w: 120, h: 80 },
        spriteSourceSize: { x: 0, y: 0, w: 120, h: 80 },
      },
      idle5: {
        frame: { x: 480, y: 0, w: 120, h: 80 },
        sourceSize: { w: 120, h: 80 },
        spriteSourceSize: { x: 0, y: 0, w: 120, h: 80 },
      },
      idle6: {
        frame: { x: 600, y: 0, w: 120, h: 80 },
        sourceSize: { w: 120, h: 80 },
        spriteSourceSize: { x: 0, y: 0, w: 120, h: 80 },
      },
      idle7: {
        frame: { x: 720, y: 0, w: 120, h: 80 },
        sourceSize: { w: 120, h: 80 },
        spriteSourceSize: { x: 0, y: 0, w: 120, h: 80 },
      },
      idle8: {
        frame: { x: 840, y: 0, w: 120, h: 80 },
        sourceSize: { w: 120, h: 80 },
        spriteSourceSize: { x: 0, y: 0, w: 120, h: 80 },
      },
      idle9: {
        frame: { x: 960, y: 0, w: 120, h: 80 },
        sourceSize: { w: 120, h: 80 },
        spriteSourceSize: { x: 0, y: 0, w: 120, h: 80 },
      },
      idle10: {
        frame: { x: 1080, y: 0, w: 120, h: 80 },
        sourceSize: { w: 120, h: 80 },
        spriteSourceSize: { x: 0, y: 0, w: 120, h: 80 },
      },
    },
    meta: {
      image: "images/_Idle.png",
      size: { w: 1200, h: 80 },
      scale: 1,
    },
    animations: {
      idle: [
        "idle1",
        "idle2",
        "idle3",
        "idle4",
        "idle5",
        "idle6",
        "idle7",
        "idle8",
        "idle9",
        "idle10",
      ],
    },
  };

  const attackAtlasData = {
    frames: {
      attack1: {
        frame: { x: 0, y: 0, w: 120, h: 80 },
        sourceSize: { w: 120, h: 80 },
        spriteSourceSize: { x: 0, y: 0, w: 120, h: 80 },
      },
      attack2: {
        frame: { x: 120, y: 0, w: 120, h: 80 },
        sourceSize: { w: 120, h: 80 },
        spriteSourceSize: { x: 0, y: 0, w: 120, h: 80 },
      },
      attack3: {
        frame: { x: 240, y: 0, w: 120, h: 80 },
        sourceSize: { w: 120, h: 80 },
        spriteSourceSize: { x: 0, y: 0, w: 120, h: 80 },
      },
      attack4: {
        frame: { x: 360, y: 0, w: 120, h: 80 },
        sourceSize: { w: 120, h: 80 },
        spriteSourceSize: { x: 0, y: 0, w: 120, h: 80 },
      },
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

  const deathAtlasData = {
    frames: {
      death1: { frame: { x: 0, y: 0, w: 120, h: 80 }, sourceSize: { w: 120, h: 80 }, spriteSourceSize: { x: 0, y: 0, w: 120, h: 80 } },
      death2: { frame: { x: 120, y: 0, w: 120, h: 80 }, sourceSize: { w: 120, h: 80 }, spriteSourceSize: { x: 0, y: 0, w: 120, h: 80 } },
      death3: { frame: { x: 240, y: 0, w: 120, h: 80 }, sourceSize: { w: 120, h: 80 }, spriteSourceSize: { x: 0, y: 0, w: 120, h: 80 } },
      death4: { frame: { x: 360, y: 0, w: 120, h: 80 }, sourceSize: { w: 120, h: 80 }, spriteSourceSize: { x: 0, y: 0, w: 120, h: 80 } },
      death5: { frame: { x: 480, y: 0, w: 120, h: 80 }, sourceSize: { w: 120, h: 80 }, spriteSourceSize: { x: 0, y: 0, w: 120, h: 80 } },
      death6: { frame: { x: 600, y: 0, w: 120, h: 80 }, sourceSize: { w: 120, h: 80 }, spriteSourceSize: { x: 0, y: 0, w: 120, h: 80 } },
      death7: { frame: { x: 720, y: 0, w: 120, h: 80 }, sourceSize: { w: 120, h: 80 }, spriteSourceSize: { x: 0, y: 0, w: 120, h: 80 } },
      death8: { frame: { x: 840, y: 0, w: 120, h: 80 }, sourceSize: { w: 120, h: 80 }, spriteSourceSize: { x: 0, y: 0, w: 120, h: 80 } },
      death9: { frame: { x: 960, y: 0, w: 120, h: 80 }, sourceSize: { w: 120, h: 80 }, spriteSourceSize: { x: 0, y: 0, w: 120, h: 80 } },
      death10: { frame: { x: 1080, y: 0, w: 120, h: 80 }, sourceSize: { w: 120, h: 80 }, spriteSourceSize: { x: 0, y: 0, w: 120, h: 80 } },
    },
    meta: {
      image: "images/_Death.png",
      size: { w: 1200, h: 80 },
      scale: 1,
    },
    animations: {
      death: ["death1", "death2", "death3", "death4", "death5", "death6", "death7", "death8", "death9", "death10"],
    },
  };

  const runTexture = await Assets.load(runAtlasData.meta.image);
  const runSpritesheet = new Spritesheet(runTexture, runAtlasData);
  await runSpritesheet.parse();
  const runTextures = new AnimatedSprite(runSpritesheet.animations.run);

  const idleTexture = await Assets.load(idleAtlasData.meta.image);
  const idleSpritesheet = new Spritesheet(idleTexture, idleAtlasData);
  await idleSpritesheet.parse();
  const idleTextures = new AnimatedSprite(idleSpritesheet.animations.idle);

  const jumpTexture = await Assets.load(jumpAtlasData.meta.image);
  const jumpSpritesheet = new Spritesheet(jumpTexture, jumpAtlasData);
  await jumpSpritesheet.parse();
  const jumpTextures = new AnimatedSprite(jumpSpritesheet.animations.jump);

  const attackTexture = await Assets.load(attackAtlasData.meta.image);
  const attackSpritesheet = new Spritesheet(attackTexture, attackAtlasData);
  await attackSpritesheet.parse();
  const attackTextures = new AnimatedSprite(attackSpritesheet.animations.attack);

  const deathTexture = await Assets.load(deathAtlasData.meta.image);
  const deathSpritesheet = new Spritesheet(deathTexture, deathAtlasData);
  await deathSpritesheet.parse();
  const deathTextures = new AnimatedSprite(deathSpritesheet.animations.death);

  const animatedSprite = new AnimatedSprite(idleSpritesheet.animations.idle); // Start with idle animation

  animatedSprite.anchor.set(0.5, 0.5);
  animatedSprite.scale.set(2);
  animatedSprite.x = app.canvas.width / 2 - animatedSprite.width / 2;
  animatedSprite.y = app.canvas.height - 96 - animatedSprite.height / 2;
  animatedSprite.animationSpeed = 0.3;

  animatedSprite.play();

  return {
    idleTextures,
    attackTextures,
    jumpTextures,
    runTextures,
    deathTextures,
    idleSpritesheet,
    attackSpritesheet,
    animatedSprite,
    jumpSpritesheet,
    runSpritesheet,
    deathSpritesheet,
  };
}
