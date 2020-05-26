module.exports = {
  title: "Joke's front",
  description: "description",
  base: "vuepress-blog",
  head: [
    ["link", { rel: "icon", href: "/img/logo.ico" }],
    ["link", { rel: "manifest", href: "/manifest.json" }],
  ],
  themeConfig: {
    nav: [
      { text: "主页", link: "/" },
      { text: "文章", link: "/article/variableTop" },
      { text: "Github", link: "https://www.github.com/YeahPotato" },
    ],
    sidebar: {
      "/article/": [
        {
          title: "js进阶提升",
          collapsable: true,
          children: [
            ["variableTop.md", "变量提升"],
            ["scopeChain.md", "作用域和作用域链查找机制"],
            ["memory.md", "堆栈内存"],
            ["closure.md", "闭包的机制"],
            ["let&var.md", "let和var的区别"],
            ["single&factory.md", "单例/工厂设计模式"],
            ["object.md", "面向对象基础理论"],
            ["prototype.md", "原型和原型链"],
            ["this.md", "this问题"],
            ["call&apply&bind.md", "call/apply/bind"],
          ],
        },
      ],
    },
  },
};
