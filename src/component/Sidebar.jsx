import React from 'react'
import m1 from '../assets/icn1.svg'
import m2 from '../assets/icn2.svg'
import m3 from '../assets/icn3.svg'
import m4 from '../assets/icn4.svg'
import m5 from '../assets/icn5.svg'
import m6 from '../assets/icn6.svg'
import m7 from '../assets/icn7.svg'

const Sidebar = () => {
  return (
    <div className='bg-[#1F1D2B] min-h-screen w-[104px] flex flex-col justify-center items-center fixed top-0 '>
        <img src="/Logo.png" alt="" className='mt-4 w-15 h-15'/>
      <div className='  flex flex-col w-[45px] gap-y-14 mt-7 h-[570px]'>
        <img src={m2} alt="" className='hover:bg-orange-400/30 p-2 rounded-sm' />
        <img src={m3} alt=""className='hover:bg-orange-400/30 p-2 rounded-sm' />
        <img src={m4} alt=""className='hover:bg-orange-400/30 p-2 rounded-sm' />
        <img src={m5} alt="" className='hover:bg-orange-400/30 p-2 rounded-sm'/>
        <img src={m6} alt="" className='hover:bg-orange-400/30 p-2 rounded-sm'/> 
      </div>
      <img src={m7} alt="" className='w-[45px] hover:bg-orange-400/30  rounded-sm p-2' />

    </div>
  )
}

export default Sidebar
