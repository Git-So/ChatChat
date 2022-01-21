import twemoji from "twemoji";

const preview = (text: string): string => {
  // 换行处理
  text = text.replaceAll(/(\r\n|\r|\n)/g, "<br/>");

  // emoji 处理
  text = twemoji.parse(text, {
    base: "./img/",
    folder: "twemoji",
    ext: ".svg",
  });

  console.log(text);

  return text;
};

const parseHTML = (dom: HTMLElement): string => {
  let text = "";
  dom.childNodes.forEach((node) => {
    switch (node.nodeName) {
      case "BR":
        text += "\n";
        break;
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
