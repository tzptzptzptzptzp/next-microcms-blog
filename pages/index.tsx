import NextHeadSeo from "next-head-seo";
import Transition from "../src/utils/transition";
import { client } from "../libs/client";

import { Header } from "../src/components/header";
import { Footer } from "../src/components/footer";
import { KeyVisual } from "../src/components/top/keyvisual";
import { BlogLists } from "../src/components/top/bloglists";

import type { Blog } from "../src/type/blog";

import { MetaData } from "../src/data/meta.data";

// SSG
export const getStaticProps = async () => {
  const blog = await client.get({ endpoint: "blog" });
  return {
    props: {
      blogs: blog.contents,
    },
  };
};

type Blogs = {
  blogs: Blog[];
};

export default function Home({ blogs }: Blogs) {
  return (
    <Transition>
      <NextHeadSeo
        {...MetaData}
        og={{ ...MetaData.og }}
        twitter={{ ...MetaData.twitter }}
      />
      <div className="wrapper bg-bg text-text">
        <Header position="fixed" bg="bg-bg"></Header>
        <KeyVisual></KeyVisual>
        <BlogLists category="recipe" blogs={blogs}></BlogLists>
        <BlogLists category="javascript" blogs={blogs}></BlogLists>
        <BlogLists category="css" blogs={blogs}></BlogLists>
        <BlogLists category="html" blogs={blogs}></BlogLists>
        <Footer></Footer>
      </div>
    </Transition>
  );
}
