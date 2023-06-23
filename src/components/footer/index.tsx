import Link from "next/link";
import Image from "next/image"
import { Profile } from "./Profile"

export function Footer() {
  return (
    <footer className="s:mt-[-7rem] s:pt-28">
      <div className="rounded-t-[10rem] s:rounded-[5rem] bg-main text-bg">
        <div className="px-8 s:px-6 py-16 s:py-8">
          <div className='flex l:flex-col m:flex-col s:flex-col l:gap-8 m:gap-12 s:gap-12 items-center justify-between max-w-[1536px] s:h-auto m-auto s:mb-6'>
            <div className="flex m:flex-col s:flex-col gap-20 m:gap-8 s:gap-8 items-center justify-center">
              <p className="m:hidden s:hidden h-[32rem] border-l-[10px] l:border-l-8 text-[8rem] l:text-[7rem] leading-[1.1]" style={{ transform: 'rotate(180deg)', paddingLeft: '1.5rem', textAlign: 'center', writingMode: 'vertical-rl', textOrientation: 'sideways' }}>Editor</p>
              <p className="ll:hidden l:hidden text-[6rem] leading-[1.1] pb-4 w-full" style={{ borderBottom: '6px solid #FFFBEC', textAlign: 'center' }}>Editor</p>
              <Image src="/img/icon.png" className="rounded-[5rem]" alt="テツカ ヒロキ" width={250} height={250} />
              <Profile></Profile>
            </div>
            <Link href="/" className="h-scale">
              <Image src="/img/logo_white.svg" alt="WEBのあれこれ" width={300} height={60} />
            </Link>
          </div>
        </div>
        <div className="flex items-center justify-center h-20 bg-text">
          <small className="text-[2.2rem]">てづっぴ.inc</small>
        </div>
      </div>
    </footer>
  )
}