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
      <div className="flex s:block w-full max-w-[1536px] m-auto text-4xl s:text-[1.8rem] leading-tight">
        <Link href='/' className='h-circle'>
          トップ
        </Link>
        <p className='inline px-4'>ー</p>
        <Link href={`/#${category}`} className='h-circle'>
          {secTtl(category)}
        </Link>
        <p className='inline px-4'>ー</p>
        <br className='ll:hidden l:hidden' />
        <h1>{blog.title}</h1>
      </div>
    </div>
  )
}