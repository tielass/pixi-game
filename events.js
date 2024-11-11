// export function setupEventListeners(animatedSprite, jump, runTextures, idleTextures, movement) {
//   // Event listeners for keydown and keyup
//   window.addEventListener("keydown", (event) => {
//     if (event.key === "ArrowLeft") {
//       movement.moveLeft = true;
//       animatedSprite.textures = runTextures.textures; 
//       animatedSprite.play();
//       animatedSprite.scale.x = -2; 
//     } else if (event.key === "ArrowRight") {
//       movement.moveRight = true;
//       animatedSprite.textures = runTextures.textures; 
//       animatedSprite.play();
//       animatedSprite.scale.x = 2; 
//     } else if (event.key === "ArrowUp") {
//       movement.moveUp = true;
//       jump();
//     }
//   });

//   window.addEventListener("keyup", (event) => {
//     if (event.key === "ArrowLeft") {
//       movement.moveLeft = false;
//       if (!movement.moveRight) {
//         animatedSprite.textures = idleTextures.textures; 
//         animatedSprite.play();
//       }
//     } else if (event.key === "ArrowRight") {
//       movement.moveRight = false;
//       if (!movement.moveLeft) {
//         animatedSprite.textures = idleTextures.textures; 
//         animatedSprite.play();
//       }
//     } else if (event.key === "ArrowUp") {
//       movement.moveUp = false;
//     }
//   });
// }