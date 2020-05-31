const { readdir, readFile, writeFile, stat } = require("fs").promises;
const fm = require("front-matter");

("use strict");
(async () => {
  // Let's get all the files list
  const filesList = await readdir("../src/blog/");

  // The final list of data
  let finaldata = [];

  await Promise.all(
    (
      await Promise.all(
        filesList
          .map((fileName) => `../src/blog/${fileName}`)
          .map(async (path) => await readFile(path, { encoding: "utf-8" }))
      )
    ).forEach(async (data, i) => {
      const filePath = filesList.map((fileName) => `../src/blog/${fileName}`)[
        i
      ];

      const fileName = filesList[i].split(".")[0];

      // Get the metadata inside the markdown
      const { attributes } = fm(data + "");

      // The date to mark the file
      let date = attributes.date;

      // Let's get the date
      if (!date) {
        attributes.date = (await stat(filePath)).birthtime.toString();
      }

      // Let's push
      finaldata.push({ title: attributes.title, date, id: fileName });
    })
  );
})();
