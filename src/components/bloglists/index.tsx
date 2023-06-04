import Link from 'next/link'
import Image from 'next/image';

import { Blog } from '../../type/blog'

interface Props {
  category: string
  blogs: Blog[]
}

export function BlogLists({ category, blogs }: Props) {
  const blog = blogs.filter((blog) => blog.category.includes(category))

  const secTtl = (category: string) => {
    if (category === 'recipe') {
      return 'レシピ'
    } else if (category === 'javascript') {
      return 'JavaScript'
    } else if (category === 'css') {
      return 'CSS'
    } else if (category === 'html') {
      return 'HTML'
    }
  }

  return (
    <section id={category} className={`${category === 'html' ? 'mb-40 s:mb-20' : 'mb-20 s:mb-6'} px-8 s:px-6`}>
      <div className='w-full max-w-[1536px] m-auto'>
        <div className='relative h-32 s:h-auto mb-20 s:mb-6'>
          <div className='absolute top-1/2 w-full h-4 s:h-2 bg-text'></div>
          <h2 className={`inline-block absolute s:relative ${category === 'javascript' || category === 'html' ? 'right-28 s:right-auto' : 'left-28'} s:left-6 px-4 s:px-2 bg-bg text-9xl s:text-7xl s:text-center`}>{secTtl(category)}</h2>
        </div>
        <div className='grid grid-cols-4 m:grid-cols-2 s:grid-cols-1 gap-8 s:gap-6'>
          {blog.map((blog) => (
            <Link key={blog.id} href={`/${blog.id}`}>
              <Image src={blog.thumbnail.url} className='w-full h-auto' width={370} height={210} alt={blog.title} />
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}