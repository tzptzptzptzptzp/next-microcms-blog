import NextHeadSeo from 'next-head-seo'
import Transition from '../src/utils/transition'
import { client } from '../libs/client'

import { Header } from '../src/components/header'
import { Footer } from '../src/components/footer'
import { KeyVisual } from '../src/components/top/keyvisual'
import { BlogLists } from '../src/components/top/bloglists'

import type { Blog } from '../src/type/blog'

// SSG
export const getStaticProps = async () => {
  const blog = await client.get({ endpoint: 'blog' })
  return {
    props: {
      blogs: blog.contents,
    }
  }
}

type Blogs = {
  blogs: Blog[]
}

export default function Home({ blogs }: Blogs) {
  return (
    <Transition>
      <NextHeadSeo
        title='WEBのあれこれ | WEBのGOODな情報を発信中！'
        description='コピペで使えるJavaScriptレシピ(TypeScript対応)やよりサイト制作を行いやすくなるノウハウを発信中'
        canonical='https://xn--l8j8a4kb.website/'
        og={{
          title: 'WEBのあれこれ | WEBのGOODな情報を発信中！',
          description: 'コピペで使えるJavaScriptレシピ(TypeScript対応)やよりサイト制作を行いやすくなるノウハウを発信中',
          image: 'https://xn--l8j8a4kb.website/img/ogp.jpg',
          type: 'website',
          siteName: 'WEBのあれこれ'
        }}
        twitter={{ card: "summary_large_image" }}
      />
      <div className='wrapper bg-bg text-text'>
        <Header position='fixed' bg='bg-bg'></Header>
        <KeyVisual></KeyVisual>
        <BlogLists category='recipe' blogs={blogs}></BlogLists>
        <BlogLists category='javascript' blogs={blogs}></BlogLists>
        <BlogLists category='css' blogs={blogs}></BlogLists>
        <BlogLists category='html' blogs={blogs}></BlogLists>
        <Footer></Footer>
      </div>
    </Transition>
  )
}
