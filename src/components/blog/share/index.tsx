import React from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'
import clipboardCopy from 'clipboard-copy'
import { Blog } from "../../../type/blog"

import useDeviceType from "../../../hooks/useDeviceType"

type Blogs = {
  blog: Blog
}

export function Share({ blog }: Blogs) {
  const { isMobile } = useDeviceType()
  const url = useRouter().asPath

  const handleClick = (url: string) => {
    clipboardCopy(url)
      .then(() => {
        alert(`コピーしました！\n${url}`)
      })
      .catch((error: Error) => {
        alert('コピーに失敗しました。')
      })
  }

  const handleCopy = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    handleClick(`https://あれこれ.website${url}/`)
  }

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
      <div className="flex gap-8 justify-center m-auto text-bg text-[1.8rem]leading-tight">
        <a className='h-share flex items-center justify-center gap-1 w-[17.5rem] s:w-14 h-auto s:h-14 py-3 rounded-lg s:rounded-full bg-[#73C7FB]' href={`https://twitter.com/share?url=https://あれこれ.website/${url}&text=【${secTtl(blog.category[0])}】${blog.title}｜WEBのあれこれ`} rel="nofollow noopener" target="_blank">
          <Image src='/img/links/share_twitter.svg' className='w-auto h-[18px]' style={{ transform: 'translateY(1px)' }} width={22} height={18} alt={blog.title} />
          {isMobile ? null : <><span>つ</span><span>い</span><span>っ</span><span>た</span><span>ー</span></>}
        </a>
        <a className='h-share flex items-center justify-center gap-1 w-[17.5rem] s:w-14 h-auto s:h-14 py-3 rounded-lg s:rounded-full bg-[#768FC1]' href={`http://www.facebook.com/share.php?u=https://あれこれ.website/${url}`} rel="nofollow noopener" target="_blank">
          <Image src='/img/links/share_facebook.svg' className='w-auto h-[18px]' style={{ transform: 'translateY(1px)' }} width={22} height={18} alt={blog.title} />
          {isMobile ? null : <><span>ふ</span><span>ぇ</span><span>い</span><span>す</span><span>ぶ</span><span>っ</span><span>く</span></>}
        </a>
        <button className='h-share flex items-center justify-center gap-1 w-[17.5rem] s:w-14 h-auto s:h-14 py-3 rounded-lg s:rounded-full bg-[#BBBBBB]' onClick={handleCopy}>
          <Image src='/img/links/share_link.svg' className='w-auto h-[18px]' style={{ transform: 'translateY(1px)' }} width={22} height={18} alt={blog.title} />
          {isMobile ? null : <><span>り</span><span>ん</span><span>く</span><span>こ</span><span>ぴ</span><span>ー</span></>}
        </button>
      </div>
    </div>
  )
}