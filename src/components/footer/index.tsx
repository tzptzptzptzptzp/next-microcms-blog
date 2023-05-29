import Link from "next/link";
import Image from "next/image"
import { Profile } from "./Profile"

export function Footer() {
  return (
    <footer className="rounded-t-[10rem] s:rounded-[5rem] bg-main text-bg">
      <div className='flex s:flex-col items-center justify-between max-w-[1536px] h-[40rem] s:h-auto m-auto s:mb-6 px-24 s:px-6 py-16 s:py-8'>
        <div className="flex s:flex-col gap-20 s:gap-8 items-center justify-center h-full s:mb-12">
          <p className="text-[8rem] leading-[1.1] pc_only" style={{ transform: 'rotate(180deg)', height: '100%', paddingLeft: '1.5rem', borderLeft: '10px solid #FFFBEC', textAlign: 'center', writingMode: 'vertical-rl', textOrientation: 'sideways' }}>Editor</p>
          <p className=" text-[6rem] leading-[1.1] pb-4 w-full sp_only" style={{ borderBottom: '6px solid #FFFBEC', textAlign: 'center' }}>Editor</p>
          <Image src="/img/icon.png" className="rounded-[5rem]" alt="テツカ ヒロキ" width={250} height={250} />
          <Profile></Profile>
        </div>
        <Link href="/">
          <Image src="/img/logo_white.svg" alt="WEBのあれこれ" width={300} height={60} />
        </Link>
      </div>
      <div className="flex items-center justify-center h-20 bg-text">
        <small className="text-[2.2rem]">てづっぴ.inc</small>
      </div>
    </footer>
  )
}