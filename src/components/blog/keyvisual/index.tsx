import Image from "next/image"
import { useRecoilValue } from 'recoil'
import { Blog } from "../../../type/blog"
import { headerHeightState } from "../../../states/headerHeightState"

import useDeviceType from "../../../hooks/useDeviceType"

type Blogs = {
  blog: Blog
}
export function KeyVisual({ blog }: Blogs) {
  const { isMobile } = useDeviceType()

  const headerHeight = useRecoilValue(headerHeightState)

  return (
    <div className="flex flex-col justify-center items-center w-full h-[70rem] s:h-auto s:mb-8 px-8 s:px-6" style={isMobile ? { paddingTop: `${headerHeight}px` } : {}}>
      <Image src={blog.thumbnail.url} className="h-auto" alt={blog.title} width={isMobile ? 375 : 1034} height={isMobile ? 211 : 581} />
    </div>
  )
}