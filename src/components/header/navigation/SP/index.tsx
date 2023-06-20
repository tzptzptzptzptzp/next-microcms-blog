import { useCallback, useEffect, useState } from 'react'
import { useRecoilState } from 'recoil'

import { menuState } from '../../../../states/menuState'

import useCurrentPage from "../../../../hooks/useCurrentPage"

export function SPNavigation() {
  const currentPage = useCurrentPage()

  const [menuOpen, setMenuOpen] = useRecoilState(menuState)

  // メニューボタンの状態を更新
  const handleClick = useCallback((e: React.MouseEvent<HTMLElement>) => {
    setMenuOpen(!menuOpen)
  }, [menuOpen, setMenuOpen])

  // ページに毎に表示するコンテンツを管理
  let content
  if (currentPage === '' || currentPage === '/') {
    content = <ul className="flex gap-8">
      <li className='cursor-pointer'>
        <svg width="34" height="20" viewBox="0 0 34 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M31 17L17 3" stroke="#301E1E" stroke-width="5.83333" stroke-linecap="round" />
          <path d="M3 17L17 3.00001" stroke="#301E1E" stroke-width="5.83333" stroke-linecap="round" />
        </svg>
      </li>
      <li className='cursor-pointer'>
        <svg width="34" height="20" viewBox="0 0 34 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M3 3L17 17" stroke="#301E1E" stroke-width="5.83333" stroke-linecap="round" />
          <path d="M31 3L17 17" stroke="#301E1E" stroke-width="5.83333" stroke-linecap="round" />
        </svg>
      </li>
    </ul>
  } else {
    content = <div onClick={handleClick} className="relative w-12 h-8">
      <span className={`absolute w-full h-[4px] rounded-full bg-text`} style={{ top: menuOpen ? '50%' : '0', transform: menuOpen ? 'translateY(-50%) rotate(45deg)' : '', transition: '.3s' }}></span>
      <span className={`absolute centering-y w-full h-[4px] rounded-full bg-text`} style={{ top: menuOpen ? '50%' : '50%', transform: menuOpen ? 'translateY(-50%) rotate(135deg)' : '', transition: '.3s' }}></span>
      <span className={`absolute bottom-0 w-full h-[4px] rounded-full bg-text`} style={{ bottom: menuOpen ? '50%' : '0', transform: menuOpen ? 'translateY(50%) rotate(-135deg)' : '', transition: '.3s' }}></span>
    </div>
  }

  return (
    <nav className="h-full block">
      {content}
    </nav>
  )
}