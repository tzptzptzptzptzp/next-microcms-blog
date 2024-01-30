import { useEffect, useState } from "react";
import { GetStaticPropsContext } from "next";
import NextHeadSeo from "next-head-seo";

import Transition from "../src/utils/transition";
import { client } from "../libs/client";

import { Header } from "../src/components/header";
import { Footer } from "../src/components/footer";
import { Menu } from "../src/components/menu";
import { KeyVisual } from "../src/components/blog/keyvisual";
import { Breadcrumb } from "../src/components/blog/breadcrumb";
import { Share } from "../src/components/blog/share";
import { Content } from "../src/components/blog/content";
import { Comments } from "../src/components/blog/comments";

import type { Blog } from "../src/type/blog";

import { MetaData } from "../src/data/meta.data";

export const getStaticPaths = async () => {
  const data = await client.get({ endpoint: "blog" });
  const paths = data.contents.map((content: Blog) => `/${content.id}`);
  return {
    paths,
    fallback: false,
  };
};

// SSG
export const getStaticProps = async (context: GetStaticPropsContext) => {
  const id = context.params?.id;
  const blog = await client.get({ endpoint: "blog", contentId: `${id}` });

  return {
    props: {
      blog: blog || null,
    },
    revalidate: 60,
  };
};

type Blogs = {
  blog: Blog;
};

export default function Blog({ blog }: Blogs) {
  const [comments, setComments] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://tzp.pink/arekore-api/api/read/?postId=${blog.id}`
        );
        const jsonData = await response.json();
        setComments(jsonData);
      } catch (err) {
        console.error("Error fetching data:", err);
      }
    };
    fetchData();
  }, []);

  return (
    <Transition>
      <NextHeadSeo
        {...MetaData}
        og={{ ...MetaData.og, title: `${blog.title} | WEBのあれこれ` }}
        twitter={{ ...MetaData.twitter }}
        title={`${blog.title} | WEBのあれこれ`}
        canonical={`https://xn--l8j8a4kb.website/${blog.id}`}
      />
      <div className="wrapper bg-bg text-text">
        <Header position="fixed" bg="bg-bg"></Header>
        <Menu></Menu>
        <div>
          <KeyVisual blog={blog}></KeyVisual>
          <Breadcrumb blog={blog}></Breadcrumb>
          <Share blog={blog}></Share>
          <Content blog={blog}></Content>
          <Share blog={blog}></Share>
          <Comments blog={blog} comments={comments}></Comments>
        </div>
        <Footer></Footer>
      </div>
    </Transition>
  );
}
