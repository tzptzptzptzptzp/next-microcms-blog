import React from 'react'
import { useRecoilState } from 'recoil'

import { Header } from '../header'
import { PCNavigation } from '../header/navigation/PC'

import { menuState } from '../../states/menuState'

export function Menu() {
  const [menuOpen, setMenuOpen] = useRecoilState(menuState)

  const handleClick = () => {
    setMenuOpen(false)
  }

  return (
    <div id='menu' className='fixed top-0 z-30 w-screen h-screen bg-main' style={{ left: menuOpen ? '0' : '100%', transition: '.3s' }}>
      <div onClick={handleClick}>
        <Header position='relative' bg=''></Header>
        <PCNavigation></PCNavigation>
      </div>
    </div>
  )
}