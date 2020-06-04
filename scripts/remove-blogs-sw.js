const { readFile } = require("fs/promises");

(async () => {
  const sw = await readFile('../www/sw.js');
  
})();
