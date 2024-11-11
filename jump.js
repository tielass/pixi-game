// export function jump(animatedSprite, jumpTextures, idleTextures, movement) {
//   animatedSprite.textures = jumpTextures.textures; // Use jump textures
//   animatedSprite.play();
//   const initialY = animatedSprite.y;
//   const jumpHeight = 100;
//   const jumpSpeed = 5;

//   // Animate jump
//   const jumpUp = setInterval(() => {
//     if (animatedSprite.y > initialY - jumpHeight) {
//       animatedSprite.y -= jumpSpeed;
//     } else {
//       clearInterval(jumpUp);
//       const fallDown = setInterval(() => {
//         if (animatedSprite.y < initialY) {
//           animatedSprite.y += jumpSpeed;
//         } else {
//           clearInterval(fallDown);
//           animatedSprite.y = initialY;
//           if (movement.moveLeft || movement.moveRight) {
//             animatedSprite.textures = runTextures.textures; // Use run textures
//           } else {
//             animatedSprite.textures = idleTextures.textures; // Use idle textures
//           }
//           animatedSprite.play();
//         }
//       }, 16);
//     }
//   }, 16);
// }

// jump.js
export function jump(animatedSprite, jumpTextures, groundY, app) {
  if (animatedSprite.isJumping) return; // Prevent double jumps
  animatedSprite.isJumping = true;

  // Set the jump textures and start the jump animation
  animatedSprite.textures = jumpTextures.textures;
  animatedSprite.play();

  // Initialize jump physics
  let velocity = -15;  // Jump velocity (negative to move up)
  const gravity = 0.5; // Gravity value to bring the sprite back down

  // Jump animation loop
  const jumpLoop = () => {
    animatedSprite.y += velocity; // Apply velocity to sprite's y position
    velocity += gravity; // Apply gravity to velocity

    // Check if sprite has reached the ground level
    if (animatedSprite.y >= groundY) {
      animatedSprite.y = groundY;
      animatedSprite.isJumping = false;
      animatedSprite.textures = animatedSprite.idleTextures.textures; // Return to idle textures
      animatedSprite.play();
      app.ticker.remove(jumpLoop); // Stop jump loop
    }
  };

  // Add jump loop to the ticker
  app.ticker.add(jumpLoop);
}
