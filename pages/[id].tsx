import { GetStaticPropsContext } from 'next'
import { client } from '../libs/client'

import { Header } from '../src/components/header'
import { Footer } from '../src/components/footer'
import { KeyVisual } from '../src/components/blog/keyvisual'
import { Breadcrumb } from '../src/components/blog/breadcrumb'
import { Share } from '../src/components/blog/share'
import { Content } from '../src/components/blog/content'

import type { Blog } from '../src/type/blog'

export const getStaticPaths = async () => {
  const data = await client.get({ endpoint: 'blog' })
  const paths = data.contents.map((content: Blog) => `/${content.id}`)
  return {
    paths,
    fallback: false
  }
}

// SSG
export const getStaticProps = async (context: GetStaticPropsContext) => {
  const id = context.params?.id
  const blog = await client.get({ endpoint: 'blog', contentId: `${id}` })
  return {
    props: {
      blog: blog || null,
    }
  }
}

type Blogs = {
  blog: Blog
}

export default function Blog({ blog }: Blogs) {
  return (
    <div className='wrapper bg-bg text-text'>
      <Header position='fixed' bg='bg-bg'></Header>
      <div>
        <KeyVisual blog={blog}></KeyVisual>
        <Breadcrumb blog={blog}></Breadcrumb>
        <Share blog={blog}></Share>
        <Content blog={blog}></Content>
        <Share blog={blog}></Share>
      </div>
      <Footer></Footer>
    </div>
  )
}
