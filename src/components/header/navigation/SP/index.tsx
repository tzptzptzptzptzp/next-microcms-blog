import { useCallback, useEffect, useState } from 'react'
import { useRecoilState } from 'recoil'

import { menuState } from '../../../../states/menuState'
import { sectionsOffsetState } from '../../../../states/sectionsOffsetState'

import useCurrentPage from "../../../../hooks/useCurrentPage"

export function SPNavigation() {
  const currentPage = useCurrentPage()

  const [menuOpen, setMenuOpen] = useRecoilState(menuState)

  const [sectionDistances, setSectionDistances] = useRecoilState(sectionsOffsetState)
  const [sectionIndex, setSectionIndex] = useState(0)

  // メニューボタンの状態を更新
  const handleClick = useCallback((e: React.MouseEvent<HTMLElement>) => {
    setMenuOpen(!menuOpen)
  }, [menuOpen, setMenuOpen])

  // 各セクションの位置を取得し配列に追加
  useEffect(() => {
    const handleSectionDistances = () => {
      const sections = Array.from(document.querySelectorAll('section, footer'))
      const distances = sections.map(section => {
        const rect = section.getBoundingClientRect()
        return rect.top + window.scrollY
      })
      setSectionDistances(distances)
    }
    // DOMの描画が完了した後に位置の取得を実行
    const timeoutId = setTimeout(handleSectionDistances, 0)
    return () => clearTimeout(timeoutId)
  }, [setSectionDistances])

  // スクロール時に現在位置を取得しセクション管理番号を更新
  useEffect(() => {
    const handleScroll = () => {
      const index = sectionDistances.findIndex((distance) => scrollY < (distance - 100))
      setSectionIndex(index !== -1 ? (index - 1) : (sectionDistances.length - 1))
    }
    addEventListener('scroll', handleScroll)
    return () => {
      removeEventListener('scroll', handleScroll)
    }
  }, [sectionIndex, sectionDistances])

  // 下セクションへ移動ボタンクリック時の処理
  const incrementIndex = () => {
    if (sectionIndex < sectionDistances.length - 1) {
      const newIndex = sectionIndex + 1
      scrollTo({
        top: sectionDistances[newIndex],
        behavior: 'smooth'
      })
    }
  }

  // 上セクションへ移動ボタンクリック時の処理
  const decrementIndex = () => {
    if (sectionIndex > 0) {
      const newIndex = sectionIndex - 1
      scrollTo({
        top: sectionDistances[newIndex],
        behavior: 'smooth'
      })
    }
  }

  // ページに毎に表示するコンテンツを管理
  let content
  if (currentPage === '' || currentPage === '/') {
    content = <ul className="flex gap-8">
      <li onClick={decrementIndex} className='cursor-pointer'>
        <svg width="34" height="20" viewBox="0 0 34 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M31 17L17 3" stroke="#301E1E" strokeWidth="5.83333" strokeLinecap="round" />
          <path d="M3 17L17 3.00001" stroke="#301E1E" strokeWidth="5.83333" strokeLinecap="round" />
        </svg>
      </li>
      <li onClick={incrementIndex} className='cursor-pointer'>
        <svg width="34" height="20" viewBox="0 0 34 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M3 3L17 17" stroke="#301E1E" strokeWidth="5.83333" strokeLinecap="round" />
          <path d="M31 3L17 17" stroke="#301E1E" strokeWidth="5.83333" strokeLinecap="round" />
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