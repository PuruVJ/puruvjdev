const ffmpegInstaller = require("@ffmpeg-installer/ffmpeg");
const ffprobe = require("@ffprobe-installer/ffprobe");
const { mkdir } = require("fs").promises;
const { resolve: absPath } = require("path");

const ffmpeg = require("fluent-ffmpeg")()
  .setFfprobePath(ffprobe.path)
  .setFfmpegPath(ffmpegInstaller.path);

/**
 * This function converts gif to video and returns the necessary markup
 * @param {string} fileName without extension
 */
async function optimizeGif(fileName = "dumbledore-pretty-hard") {
  const gifPath = `../src/assets/media/${fileName}.gif`;
  const folderPath = `../src/assets/media/${fileName}`;

  try {
    await mkdir(folderPath);
  } catch (e) {}

  console.log(`Starting gif conversion: ${fileName}`);
  await new Promise((resolve) =>
    ffmpeg
      .input(gifPath)
      .noAudio()
      .on("end", () => {
        resolve();
      })
      .output(`${folderPath}/vidgif.webm`)
      .output(`${folderPath}/vidgif.mp4`)
      .run()
  );
  console.log(`Done with GIF: ${fileName}`);
  console.log();
}

function gifMarkup() {
  const baseForMarkup = `../../assets/media/${fileName}`;

  return `
  <div class="gif-vid-container">
    <video autoplay loop muted playsinline>
      <source src="${baseForMarkup}/vidgif.webm" type="video/webm">
      <source src="${baseForMarkup}/vidgif.mp4" type="video/mp4">
    </video>
  </div>
  `;
}

module.exports = { optimizeGif, gifMarkup };
