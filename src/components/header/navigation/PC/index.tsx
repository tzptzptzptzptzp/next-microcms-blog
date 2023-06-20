import Link from 'next/link'

import useCurrentPage from "../../../../hooks/useCurrentPage"

export function PCNavigation() {
  const currentPage = useCurrentPage()

  return (
    <nav className="h-full block">
      <ul className="flex s:flex-col gap-16 s:gap-0 h-full s:px-12 text-[2.5rem]">
        <li className="s:px-4 s:py-6 s:border-b-2 s:border-text">
          {currentPage === '' || currentPage === '/' ? <a href="/#" className="h-circle">トップ</a> : <Link href="/#" className="h-circle">トップ</Link>}
        </li>
        <li className="s:px-4 s:py-6 s:border-b-2 s:border-text">
          {currentPage === '' || currentPage === '/' ? <a href="/#recipe" className="h-circle">レシピ</a> : <Link href="/#recipe" className="h-circle">レシピ</Link>}
        </li>
        <li className="s:px-4 s:py-6 s:border-b-2 s:border-text">
          {currentPage === '' || currentPage === '/' ? <a href="/#javascript" className="h-circle">JavaScript</a> : <Link href="/#javascript" className="h-circle">JavaScript</Link>}
        </li>
        <li className="s:px-4 s:py-6 s:border-b-2 s:border-text">
          {currentPage === '' || currentPage === '/' ? <a href="/#css" className="h-circle">CSS</a> : <Link href="/#css" className="h-circle">CSS</Link>}
        </li>
        <li className="s:px-4 s:py-6">
          {currentPage === '' || currentPage === '/' ? <a href="/#html" className="h-circle">HTML</a> : <Link href="/#html" className="h-circle">HTML</Link>}
        </li>
      </ul>
    </nav>
  )
}