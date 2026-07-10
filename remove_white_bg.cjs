const Jimp = require('jimp');
const path = require('path');
const fs = require('fs');

const mascots = ['japan', 'france', 'uk', 'usa', 'greece', 'bosnia'];
const dir = path.join(__dirname, 'src', 'assets', 'mascots');

async function processImage(mascot) {
  const filePath = path.join(dir, `${mascot}_chibi.png`);
  if (!fs.existsSync(filePath)) {
    console.log(`Skipping ${mascot}, file not found.`);
    return;
  }
  
  try {
    const image = await Jimp.read(filePath);
    
    // Convert to true transparent by flood-filling or just replacing white
    // A simple approach is replacing near-white pixels with transparent
    image.scan(0, 0, image.bitmap.width, image.bitmap.height, function(x, y, idx) {
      const red = this.bitmap.data[idx + 0];
      const green = this.bitmap.data[idx + 1];
      const blue = this.bitmap.data[idx + 2];
      
      // If the pixel is very bright/white (e.g., r,g,b > 240), make it transparent
      if (red > 240 && green > 240 && blue > 240) {
        this.bitmap.data[idx + 3] = 0; // alpha to 0
      }
    });
    
    await image.writeAsync(filePath);
    console.log(`Processed ${mascot}_chibi.png`);
  } catch (err) {
    console.error(`Error processing ${mascot}:`, err);
  }
}

async function main() {
  for (const mascot of mascots) {
    await processImage(mascot);
  }
  console.log("All done!");
}

main();
