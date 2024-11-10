import { Assets, Sprite } from "pixi.js";

export async function createBackground(app) {
  const backgroundTexture1 = await Assets.load("images/background_layer_1.png");
  const backgroundSprite1 = new Sprite(backgroundTexture1);
  backgroundSprite1.width = app.canvas.width;
  backgroundSprite1.height = app.canvas.height;
  app.stage.addChild(backgroundSprite1);

  const backgroundTexture2 = await Assets.load("images/background_layer_2.png");
  const backgroundSprite2 = new Sprite(backgroundTexture2);
  backgroundSprite2.width = app.canvas.width;
  backgroundSprite2.height = app.canvas.height;
  app.stage.addChild(backgroundSprite2);

  const backgroundTexture3 = await Assets.load("images/background_layer_3.png");
  const backgroundSprite3 = new Sprite(backgroundTexture3);
  backgroundSprite3.width = app.canvas.width;
  backgroundSprite3.height = app.canvas.height;
  app.stage.addChild(backgroundSprite3);
}