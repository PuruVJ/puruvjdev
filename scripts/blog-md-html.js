const { readdir, readFile, writeFile, stat } = require("fs").promises;
const markdown = require("markdown-it");
const shiki = require("shiki");
const fm = require("front-matter");

(async () => {
  // Shiki instance
  const highlighter = await shiki.getHighlighter({
    theme: "Material-Theme-Palenight",
  });

  // Prepare md for shiki
  const md = markdown({ html: true, highlight: highlighter.codeToHtml });

  // get all blogs in directory
  const filesAbs = await readdir("../src/blog");

  const files = filesAbs.map((absFile) => `../src/blog/${absFile}`);

  // Let's do it
  files.forEach(async (filePath, i) => {
    const fileName = filesAbs[i].split(".")[0];

    // Let's get the contents of the file
    const fileData = await readFile(filePath, { encoding: "utf-8" });

    // Get the metadata inside the markdown
    const { attributes, body } = fm(fileData);

    // Let's render it
    const html = md.render(body);

    await writeFile(
      `../src/assets/blog/${fileName}.json`,
      JSON.stringify({ ...attributes, body: html })
    );
  });
})();
