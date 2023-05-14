import { client } from '../libs/client'
import type { Blog } from '../src/type/blog'
import styles from '../styles/Home.module.css'

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
    <div className='wrapper'>
      {blogs.map((blog) => (
        <div key={blog.id}>
          <p>{blog.title}</p>
          <div dangerouslySetInnerHTML={{ __html: `${blog.body}` }}></div>
          <img src={blog.thumbnail.url} alt={blog.title} />
        </div>
      ))}
    </div>
  )
}
