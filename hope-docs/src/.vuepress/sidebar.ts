import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/": [
    {
      text: "Guide",
      prefix: "guide/",
      icon: "book",
      children: "structure",
    },
  ],
});
