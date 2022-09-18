module.exports = [
  { text: "首页", link: "/" },
  { text: "先看", link: "/pre-reading.html" },
  {
    text: "基础",
    children: [
      { text: "计算机组成原理", link: "/cornerstone/math/" },
      { text: "数据结构", link: "/cornerstone/math/" },
      { text: "操作系统", link: "/cornerstone/math/" },
      { text: "计算机网络", link: "/cornerstone/math/" },
    ],
  },
  {
    text: "前端",
    children: [
      { text: "Web", link: "/frontend/web/" },
    ],
  },
  {
    text: "后端",
    children: [
      { text: "Java基础", link: "/backend/nodejs/" },
    ],
  },
  { text: "算法", link: "/algorithms/" },
  {
    text: "更多",
    children: [
      { text: "导航 🎉", link: "/more/navigation.html" },
    ],
  },
  { text: "🚇 开往", link: "https://travellings.cn" },
];
