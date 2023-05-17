import { Logo } from './Logo'
import { PCNavigation } from '../navigation/PC'
import { SPNavigation } from '../navigation/SP'

import useDeviceType from '../../hooks/useDeviceType'

export function Header() {
  const { isDesktop } = useDeviceType();
  return (
    <header className="fixed  w-full p-12 s:p-6 bg-bg">
      <div className='flex items-center justify-between max-w-[1920px] m-auto'>
        <Logo></Logo>
        {isDesktop ? <PCNavigation></PCNavigation> : <SPNavigation></SPNavigation>}
      </div>
    </header>
  )
}