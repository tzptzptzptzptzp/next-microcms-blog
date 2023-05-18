import Image from "next/image"
import { useRecoilValue } from 'recoil'
import { headerHeightState } from "../../states/headerHeightState"

import useDeviceType from "../../hooks/useDeviceType"

export function KeyVisual() {
  const { isMobile } = useDeviceType()

  const headerHeight = useRecoilValue(headerHeightState)

  return (
    <div className="flex flex-col justify-center items-center w-full h-[70rem] s:h-auto" style={isMobile ? { paddingTop: `${headerHeight}px` } : {}}>
      <h1 className="s:w-full mb-12 s:mb-4 s:pt-8 s:px-8">
        <Image src="/img/logo.png" alt="WEBのあれこれ" width={isMobile ? 335 : 900} height={isMobile ? 67 : 180} />
      </h1>
      <h2 className="mb-10 s:mb-5 text-4xl s:text-[1.6rem] s:text-center leading-loose s:leading-relaxed">コピペで使える<br className="sp_only" />JavaScriptレシピ(TypeScript対応)や<br />よりサイト制作を行いやすくなる<br className="sp_only" />ノウハウを発信中</h2>
      <svg className="w-28 s:w-12 h-auto s:mb-16" width="86" height="51" viewBox="0 0 86 51" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8 8L43 43" stroke="#301E1E" stroke-width="14.5833" stroke-linecap="round" />
        <path d="M78 8L43 43" stroke="#301E1E" stroke-width="14.5833" stroke-linecap="round" />
      </svg>
    </div>
  )
}