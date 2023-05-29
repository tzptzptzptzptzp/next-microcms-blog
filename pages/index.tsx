import { client } from '../libs/client'
import type { Blog } from '../src/type/blog'
import { Header } from '../src/components/header'
import { Footer } from '../src/components/footer'
import { KeyVisual } from '../src/components/keyvisual'

// SSG
export const getStaticProps = async () => {
  const blog = await client.get({ endpoint: 'blog' })
  return {
    props: {
      blogs: blog.contents,
    }
  }
}

type Props = {
  blogs: Blog[]
}

export default function Home({ blogs }: Props) {
  return (
    <div className='wrapper bg-bg text-text'>
      <Header></Header>
      <KeyVisual></KeyVisual>
      {blogs.map((blog) => (
        <div key={blog.id}>
          <p>{blog.title}</p>
          <div dangerouslySetInnerHTML={{ __html: `${blog.body}` }}></div>
          <img src={blog.thumbnail.url} alt={blog.title} />
        </div>
      ))}
      <Footer></Footer>
    </div>
  )
}
