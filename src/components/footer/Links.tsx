import Image from "next/image"

export function Links() {
  return (
    <div className="flex gap-4 ml-8 m:ml-0 s:ml-0">
      <a href="https://twitter.com/tetsuka_hiroki">
        <Image src="/img/links/icon_01.svg" className="w-auto" alt="twitter" width={20} height={20} />
      </a>
      <a href="https://www.youtube.com/channel/UCdT6RgpVc2gSol0DMxVfO0Q">
        <Image src="/img/links/icon_02.svg" className="w-auto" alt="YouTube" width={20} height={20} />
      </a>
      <a href="https://www.instagram.com/tzptzptzptzptzp/">
        <Image src="/img/links/icon_03.svg" className="w-auto" alt="Instagram" width={20} height={20} />
      </a>
      <a href="https://www.facebook.com/tzptzptzptzptzptzp">
        <Image src="/img/links/icon_04.svg" className="w-auto" alt="Facebook" width={20} height={20} />
      </a>
      <a href="https://39boubiroku.com/">
        <Image src="/img/links/icon_05.svg" className="w-auto" alt="Blog" width={20} height={20} />
      </a>
      <a href="https://design-tomato.com/">
        <Image src="/img/links/icon_06.svg" className="w-auto" alt="DESIGN TOMATO" width={20} height={20} />
      </a>
    </div>
  )
}