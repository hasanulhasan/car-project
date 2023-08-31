import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Navbar() {
  return (
    <header className='w-full absolute z-10'>
      <nav className='max-w-[1140px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4'>
        <Link href='/' className='flex justify-center'></Link>
        <Image src='/logo.svg' alt='car logo'/>
      </nav>
    </header>
  )
}

export default Navbar