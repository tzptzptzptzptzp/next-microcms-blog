import { GetStaticPropsContext } from 'next'
import { client } from '../libs/client'
import type { Blog } from '../src/type/blog'

import { Header } from '../src/components/header'
import { Footer } from '../src/components/footer'

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
      <Header></Header>
      <div>
        <div>
          <h2>{blog.title}</h2>
          <p>{blog.body}</p>
        </div>
      </div>
      <Footer></Footer>
    </div>
  )
}
