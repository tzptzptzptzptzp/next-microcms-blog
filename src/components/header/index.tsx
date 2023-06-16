import React from 'react'
import { Logo } from './Logo'
import { PCNavigation } from './navigation/PC'
import { SPNavigation } from './navigation/SP'

import useDeviceType from '../../hooks/useDeviceType'
import useElementHeight from '../../hooks/useElementHeight'

export function Header() {
  const { isDesktop } = useDeviceType();

  const [elementRef] = useElementHeight();

  return (
    <header ref={elementRef} className="fixed z-20 w-full p-12 s:p-6 bg-bg">
      <div className='flex items-center justify-between max-w-[1920px] m-auto'>
        <Logo></Logo>
        {isDesktop ? <PCNavigation></PCNavigation> : <SPNavigation></SPNavigation>}
      </div>
    </header>
  )
}