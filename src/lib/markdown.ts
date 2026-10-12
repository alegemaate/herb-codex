// A small Markdown renderer for the subset used in plant descriptions:
// "## headings", paragraphs, "- " lists, **bold** and *italic* / _italic_.
// The input is our own content, and it is HTML-escaped before formatting.

const escapeHtml = (text: string) =>
  text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");

const inline = (text: string) =>
  escapeHtml(text)
    .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
    .replace(/\*(.+?)\*/g, "<em>$1</em>")
    .replace(/(^|\W)_(.+?)_(?=\W|$)/g, "$1<em>$2</em>");

/** Splits Markdown into blocks separated by blank lines. */
const blocks = (markdown: string) =>
  markdown
    .trim()
    .split(/\n\s*\n/)
    .map((block) => block.split("\n"));

export const renderMarkdown = (markdown: string) =>
  blocks(markdown)
    .map((lines) => {
      const heading = lines[0].match(/^(#{2,4}) (.+)$/);
      if (lines.length === 1 && heading) {
        const level = heading[1].length;
        return `<h${level}>${inline(heading[2])}</h${level}>`;
      }
      if (lines.every((line) => line.startsWith("- "))) {
        const items = lines.map((line) => `<li>${inline(line.slice(2))}</li>`);
        return `<ul>${items.join("")}</ul>`;
      }
      return `<p>${inline(lines.join(" "))}</p>`;
    })
    .join("\n");

/** The first paragraph as plain text, for excerpts and meta descriptions. */
export const excerpt = (markdown: string) =>
  (blocks(markdown).find((lines) => !lines[0].startsWith("#")) ?? [])
    .join(" ")
    .replace(/\*\*(.+?)\*\*|\*(.+?)\*|_(.+?)_/g, "$1$2$3");
