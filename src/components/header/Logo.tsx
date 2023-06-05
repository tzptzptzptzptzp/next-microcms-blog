import Link from "next/link";
import Image from "next/image"

export function Logo() {
  return (
    <Link href="/">
      <Image src="/img/logo_text.svg" alt="WEBのあれこれ" width={210} height={36} />
    </Link>
  )
}