import Link from 'next/link'
import { Blog } from "../../../type/blog"

import useDeviceType from "../../../hooks/useDeviceType"

type Blogs = {
  blog: Blog
}
export function Breadcrumb({ blog }: Blogs) {
  const { isMobile } = useDeviceType()

  const category = blog.category[0]
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
    <div className="mb-32 s:mb-16 px-8 s:px-6">
      <div className="flex s:block w-full max-w-[1536px] m-auto text-4xl leading-tight">
        <Link href='/' className='after:content-["ー"] after:px-4'>
          トップ
        </Link>
        <Link href={`/#${category}`} className='after:content-["ー"] after:px-4'>
          {secTtl(category)}
        </Link>
        <br className='ll:hidden l:hidden' />
        <h1>{blog.title}</h1>
      </div>
    </div>
  )
}