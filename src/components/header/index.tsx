import React from 'react'
import { Logo } from './Logo'
import { PCNavigation } from './navigation/PC'
import { SPNavigation } from './navigation/SP'

import useDeviceType from '../../hooks/useDeviceType'
import useElementHeight from '../../hooks/useElementHeight'

interface Props {
  position: string,
  bg: string
}

export function Header(Props: Props) {
  const { isDesktop } = useDeviceType();

  const [elementRef] = useElementHeight();

  return (
    <header ref={elementRef} className={`${Props.position} ${Props.bg} top-0 z-20 w-full p-12 s:p-6`}>
      <div className='flex items-center justify-between max-w-[1920px] m-auto'>
        <Logo></Logo>
        {isDesktop ? <PCNavigation></PCNavigation> : <SPNavigation></SPNavigation>}
      </div>
    </header>
  )
}