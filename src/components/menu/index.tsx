import React from 'react'

import { Header } from '../header'
import { PCNavigation } from '../header/navigation/PC'

export function Menu() {
  return (
    <div id='menu' className='fixed top-0 z-30 w-screen h-screen bg-main'>
      <div>
        <Header position='relative' bg=''></Header>
        <PCNavigation></PCNavigation>
      </div>
    </div>
  )
}