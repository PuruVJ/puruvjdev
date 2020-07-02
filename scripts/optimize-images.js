const { access, mkdir, readdir, readFile, writeFile } = require("fs").promises;
const fs = require("fs");
const imagemin = require("imagemin");
const webp = require("imagemin-webp");
const jpg = require("imagemin-mozjpeg");
const imgSize = require("image-size");
const resizeImg = require("resize-img");
const { getColorFromURL } = require("color-thief-node");

/**
 * Optimize the image and create its different versions
 * Assuming the image is media folder in assets
 * @param {string} src
 */
async function optimizeBlogImages(src) {
  // Start measuring
  console.log("Starting to retrieve/create image/data");

  // First off, don't optimize this image and save us some CPU time if it
  // already exists
  // First get the filename
  const [filePath] = src.split("/").reverse();
  const [fileName] = filePath.split(".");
  const folderPath = `../src/assets/media/${fileName}`;

  const baseURL = "../../assets/media";

  // The list of file paths to return
  const list = {
    large: {
      webp: `${baseURL}/${fileName}/large.webp`,
      jpg: `${baseURL}/${fileName}/large.jpg`,
    },
    small: {
      webp: `${baseURL}/${fileName}/small.webp`,
      jpg: `${baseURL}/${fileName}/small.jpg`,
    },
    aspectHTW: 1,
    color: [34, 34, 34],
  };

  let shouldOptimize = true;

  // Check if this folder exists
  try {
    shouldOptimize =
      !!(await access(folderPath)) &&
      !!(await readdir(folderPath)).filter((file) => !file.endsWith("json"))
        .length;

    if (!shouldOptimize) {
      if ((await readdir(folderPath)).includes("data.json")) {
        // The data file exists. Get the aspect ratio from there
        const { aspectHTW, color } = JSON.parse(
          await readFile(`${folderPath}/data.json`, "utf-8")
        );

        list.aspectHTW = aspectHTW;
        list.color = color;
      }
    }
  } catch (e) {}

  // The markup

  // Should not optimize
  if (!shouldOptimize) {
    // Log the time
    console.log(`Finished.`);
    console.log();
    return markup(list);
  }

  // The image is optimizable. That means work, boys!
  // Let's try make the folder
  try {
    await mkdir(`../src/assets/media/${fileName}`);
  } catch (e) {}

  // Ok folder exists
  // Now let's get dimensions of the image
  const dimensions = imgSize(`${folderPath}.jpg`);

  // The aspect ratio
  list.aspectHTW = dimensions.height / dimensions.width;

  // Now resize the image
  const resizedImgBuffers = { large: "", small: "" };

  const imgBuffer = fs.readFileSync(`${folderPath}.jpg`);

  // Large
  resizedImgBuffers.large = await resizeImg(imgBuffer, {
    width: 1000,
    height: list.aspectHTW * 1000,
  });

  // Small
  resizedImgBuffers.small = await resizeImg(imgBuffer, {
    width: 600,
    height: list.aspectHTW * 600,
  });

  // Write inside the folder
  await writeFile(`${folderPath}/large.jpg`, resizedImgBuffers.large);
  await writeFile(`${folderPath}/small.jpg`, resizedImgBuffers.small);

  // Now optimize and create copies
  await imagemin([`${folderPath}/*.jpg`], {
    destination: folderPath,
    plugins: [
      webp({
        quality: 85,
      }),
    ],
  });

  await imagemin([`${folderPath}/*.jpg`], {
    destination: folderPath,
    plugins: [
      jpg({
        quality: 85,
      }),
    ],
  });

  // Finally get the dominant color
  list.color = await getColorFromURL(`${folderPath}.jpg`);

  // Also write the data.json
  await writeFile(
    `${folderPath}/data.json`,
    JSON.stringify({
      aspectHTW: list.aspectHTW,
      color: list.color,
    })
  );

  // Log the time
  console.log(`Finished`);
  console.log();

  // Return the list
  return markup(list);
}

function markup(list) {
  const [r, g, b] = list.color;

  return `
  <figure style="width: 100%;padding-top: ${
    list.aspectHTW * 100
  }%;background-color: rgb(${r}, ${g}, ${b})">
    <picture>
      <source
        type="image/webp"
        media="(min-width: 501px)"
        data-srcset="${list.large.webp}"
      ></source>
      <source
        type="image/webp"
        media="(max-width: 500px)"
        data-srcset="${list.small.webp}"
      ></source>
      <source
        type="image/jpg"
        media="(min-width: 501px)"
        data-srcset="${list.large.jpg}"
      ></source>
      <source
        type="image/jpg"
        media="(max-width: 500px)"
        data-srcset="${list.small.jpg}"
      ></source>
      <img alt="Placeholder"
      data-src="${list.large.jpg}"
      class="lazyload blog-img" />
    </picture>
  </figure>
  `;
}

module.exports = { optimizeBlogImages };
