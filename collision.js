export function checkCollision(sprite1, sprite2) {
    const bounds1 = sprite1.getBounds();
    const bounds2 = sprite2.getBounds();
    let xDelta = sprite1.isAttacking ? 0 : sprite1.width / 2;
    let yDelta = sprite1.height / 2;
    let collision = (
      bounds1.minX + xDelta < bounds2.maxX &&
      bounds1.maxX - xDelta > bounds2.minX &&
      bounds1.minY + yDelta < bounds2.maxY &&
      bounds1.maxY - yDelta > bounds2.minY
    );
    if (collision) {
      console.log("Collision " + bounds1 + ", " + bounds2);
    }
    return collision;
  }
  