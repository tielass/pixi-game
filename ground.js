import { Container, Sprite, Texture, Assets, Rectangle } from "pixi.js";

export async function createGround(app) {
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
}