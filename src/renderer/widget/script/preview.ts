import twemoji from "twemoji";

const preview = (text: string): string =>
  twemoji.parse(text, {
    base: "./img/",
    folder: "twemoji",
    ext: ".svg",
  });

const parseHTML = (dom: HTMLElement): string => {
  let text = "";
  dom.childNodes.forEach((node) => {
    switch (node.nodeName) {
      case "IMG":
        text += (node as HTMLImageElement).alt || "";
        break;
      case "#text":
        text += node.nodeValue;
        break;
      default:
        text += (node as HTMLElement).innerText;
    }
  });

  return text;
};

export { parseHTML, preview };
