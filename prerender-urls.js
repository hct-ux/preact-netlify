const { generateFileList } = require("./src/crawler");
const { join } = require("path");
const fs = require("fs");
const parseMD = require("parse-md").default;

const [blogs, components] = generateFileList(join(__dirname, "content")).nodes;
const navData = {
  blogs,
  components,
};
module.exports = () => {
  let pages = [
    {
      url: "/",
      seo: {
        cover: "/assets/profile.jpg",
      },
    },
    { url: "/contact/" },
    { url: "/contact/success" },
  ];

  // adding blogs list posts page
  pages.push({
    url: "/blogs/",
    data: blogs,
  });

  //adding components list posts page
  pages.push({
    url: "/components/",
    data: components,
  });

  // adding all blog pages
  pages.push(
    ...blogs.edges.map((blog) => {
      let data;
      if (blog.format === "md") {
        const { content } = parseMD(
          fs.readFileSync(join("content", "blog", blog.id), "utf-8")
        );
        data = content;
      } else {
        data = fs
          .readFileSync(join("content", "blog", blog.id), "utf-8")
          .replace(/---(.*(\r)?\n)*---/, "");
      }
      return {
        url: `/blog/${blog.id}`,
        seo: blog.details,
        data: {
          details: blog.details,
          content: data,
        },
      };
    })
  );

  //adding all blog pages
  pages.push(
    ...components.edges.map((component) => {
      let data;
      if (component.format === "md") {
        const { content } = parseMD(
          fs.readFileSync(join("content", "component", component.id), "utf-8")
        );
        data = content;
      } else {
        data = fs
          .readFileSync(join("content", "component", component.id), "utf-8")
          .replace(/---(.*(\r)?\n)*---/, "");
      }
      const p = {
        url: `/component/${component.id}`,
        seo: component.details,
        data: {
          details: component.details,
          content: data,
        },
      };
      return p;
    })
  );

  pages = pages.map((p) => ({ ...p, navData }));
  console.log(pages, "pages");

  return pages;
};
