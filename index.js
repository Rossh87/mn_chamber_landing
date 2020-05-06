const { readFile, writeFile } = require("fs");
const inline = require("inline-css");
const replace = require("replace-in-file");

const inlinedOptions = {
    url: " ",
};

const replaceOptions = {
    files: "./index.html",
    from: "/.png/g",
    to: ".jpg",
};

readFile("./index.html", "utf8", async (err, html) => {
    const inlined = await inline(html, inlinedOptions);
    writeFile("./output.html", inlined, (e) => console.error(e));
});
