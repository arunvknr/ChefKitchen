import { BellIcon, Contact, Contact2, Contact2Icon, ContactIcon, ContactRoundIcon, Menu, Settings, User, UserRound } from 'lucide-react'
import React from 'react'

const Header = () => {
  return (
    <div className='flex w-full  bg-amber-950  flex-row  justify-between p-6 h-fit'>
        <span className='text-white lg:text-2xl text-sm h '>Dashboard</span>
      <div className='bg-pink-500 flex flex-row gap-4'>
        <BellIcon/>
          <UserRound/>
        <Settings/>
      </div>
    </div>
  )
}
export default Header
