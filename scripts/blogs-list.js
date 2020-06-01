const { readdir, readFile, writeFile, stat } = require("fs").promises;
const fm = require("front-matter");

(async () => {
  // Let's get all the files list
  const filesList = await readdir("../src/blog/");

  // The final list of data
  let finaldata = [];

  console.log("--------- Generating blogs list -----------");

  for (let file of filesList) {
    const filePath = `../src/blog/${file}`;

    // Data
    const data = await readFile(filePath, "utf-8");

    const fileName = file.split(".")[0];

    // Get the metadata inside the markdown
    const { attributes } = fm(data + "");

    // The date to mark the file
    let date = attributes.date;

    // Let's get the date
    if (!date) {
      attributes.date = (await stat(filePath)).birthtime.toString();
    }

    // Let's push
    finaldata.push({
      title: attributes.title,
      description: attributes.description,
      date: attributes.date,
      id: fileName,
    });
  }

  // Write data
  await writeFile(
    "../src/assets/data/blogs-list.json",
    JSON.stringify(finaldata)
  );

  console.log('---------- Generated ------------')
})();
