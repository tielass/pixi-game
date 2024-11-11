import { Application } from "pixi.js";
import { createBackground } from "./background.js";
import { createGround } from "./ground.js";
import { createSprites } from "./sprites.js";
import { jump } from "./jump.js";
import { updateProjectiles, generateRandomProjectile, checkCollision } from "./projectile.js";

(async () => {
  const app = new Application();
  await app.init({
    resizeTo: window,
    backgroundAlpha: 0.5,
    backgroundColor: 0xffea00,
  });
  app.canvas.style.position = "absolute";
  document.body.appendChild(app.canvas);

  await createBackground(app);
  await createGround(app);

  const {
    animatedSprite,
    attackTextures,
    jumpTextures,
    idleTextures,
    runTextures,
    deathTextures,
  } = await createSprites(app);

  animatedSprite.idleTextures = idleTextures;
  const groundY = app.canvas.height - 96 - animatedSprite.height / 2;
  app.stage.addChild(animatedSprite);

  // Movement variables
  let moveLeft = false;
  let moveRight = false;
  let isAttacking = false;
  const speed = 5;

  const projectiles = [];

  // Event listeners for keydown and keyup
  window.addEventListener("keydown", (event) => {
    if (event.key === "a" || event.key === "A") {
      if (!moveLeft) {
        animatedSprite.textures = runTextures.textures;
        animatedSprite.play();
        animatedSprite.scale.x = -2;
      }
      moveLeft = true;
    } else if (event.key === "d" || event.key === "D") {
      if (!moveRight) {
        animatedSprite.textures = runTextures.textures;
        animatedSprite.play();
        animatedSprite.scale.x = 2;
      }
      moveRight = true;
    } else if (event.key === "w" || event.key === "W" || event.key === " ") {
      jump(animatedSprite, jumpTextures, groundY, app);
    } 
    else if (event.key === "t" || event.key === "T") {
      isAttacking = true;
      animatedSprite.textures = attackTextures.textures; 
      animatedSprite.loop = false; 
      animatedSprite.play();
      animatedSprite.onComplete = () => {
        isAttacking = false;
        animatedSprite.textures = idleTextures.textures; 
        animatedSprite.play();
      };
    }
  });

  window.addEventListener("keyup", (event) => {
    if (event.key === "a" || event.key === "A") {
      moveLeft = false;
      if (!moveRight) {
        animatedSprite.textures = idleTextures.textures;
        animatedSprite.play();
      }
    } else if (event.key === "d" || event.key === "D") {
      moveRight = false;
      if (!moveLeft) {
        animatedSprite.textures = idleTextures.textures;
        animatedSprite.play();
      }
    }
  });

  // Update loop
  app.ticker.add(async () => {
    if ((moveLeft || moveRight) && !animatedSprite.playing) {
      animatedSprite.play();
    }

    if (moveLeft) {
      animatedSprite.x -= speed;
    }
    if (moveRight) {
      animatedSprite.x += speed;
    }

    // Collision detection with ground tiles
    if (animatedSprite.y > groundY) {
      animatedSprite.y = groundY;
    }

    // Update projectiles
    updateProjectiles(projectiles);

    // Randomly generate projectiles targeting the character
    if (Math.random() < 0.01) { 
      const projectile = await generateRandomProjectile(app, groundY);
      projectiles.push(projectile);
    }

    projectiles.forEach((projectile, index) => {
      if (checkCollision(animatedSprite, projectile)) {
        if (isAttacking) {
          console.log("Projectile destroyed by attack!");
          projectile.parent.removeChild(projectile);
          projectiles.splice(index, 1);
        } else {
          console.log("Character hit by projectile!");
          animatedSprite.textures = deathTextures.textures;
          animatedSprite.loop = false; // Play the animation only once
          animatedSprite.play();

          // Stop the game and delay the alert until the animation completes
          animatedSprite.onComplete = () => {
            setTimeout(() => {
              alert("Game Over! The character was hit by a projectile.");
            }, 2000);
          };

          // Stop the game loop
          app.ticker.stop();
        }
      }
    });

    app.renderer.render(app.stage);
  });
})();
