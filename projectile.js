import { Sprite, Assets } from "pixi.js";

export async function createProjectile(app, startX, startY, direction) {
  const texture = await Assets.load("images/projectile1-1.png");
  const projectile = new Sprite(texture);

  projectile.anchor.set(0.5);
  projectile.scale.set(2);
  projectile.x = startX;
  projectile.y = startY;
  projectile.vx = direction === "right" ? 5 : -10; 

  app.stage.addChild(projectile);
  return projectile;
}

export function updateProjectiles(projectiles) {
  projectiles.forEach((projectile, index) => {
    projectile.x += projectile.vx;

    if (projectile.x < 0 || projectile.x > window.innerWidth) {
      projectile.parent.removeChild(projectile);
      projectiles.splice(index, 1);
    }
  });
}

export function generateRandomProjectile(app, groundY) {
  const startX = Math.random() < 0.5 ? 0 : window.innerWidth; 
  const startY = groundY - 80 + Math.random() * 100;
  const direction = startX === 0 ? "right" : "left";

  return createProjectile(app, startX, startY, direction);
}

export function checkCollision(sprite1, sprite2) {
  const bounds1 = sprite1.getBounds();
  const bounds2 = sprite2.getBounds();


  return bounds1.x < bounds2.x + bounds2.width &&
         bounds1.x + bounds1.width > bounds2.x &&
         bounds1.y < bounds2.y + bounds2.height &&
         bounds1.y + bounds1.height > bounds2.y;
}