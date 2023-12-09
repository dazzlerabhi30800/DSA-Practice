const textContainer = document.getElementById("editor");
const previewContainer = document.getElementById("preview");


previewContainer.classList.add("language-javascript")
marked.setOptions({
  breaks: true,
})

textContainer.oninput = (e) => {
  let value = e.target.value;
  previewContainer.innerHTML = marked.parse(value);
};

// previeContainer.innerHTML = marked.parse(
//   "# Marked in Browser\n\nRendered by **marked**.",
// );

function getMarkdown() {
  textContainer.value = `
# Heading 1
## Heading 2
### Heading 3
\` <div></div> \`
[links](https://www.freecodecamp.org)
> Block Quotes!

\`\`\`
  // this is multi-line code:

  function anotherExample(firstLine, lastLine) {
    if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
      return multiLineCode;
    }
  }
\`\`\`

**bold**

1. And there are numbered lists too.
2. Use just 1s if you want!
3. And last but not least, let's not forget embedded images:

![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)

  `
  previewContainer.innerHTML = marked.parse(textContainer.value);
}

getMarkdown();
