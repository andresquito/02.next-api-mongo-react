import Link from 'next/link'
import React from 'react'

const NavBar = () => {
  return (
    <nav>
      <Link
      className='inline-flex items-center px-4 py-2 font-medium text-center text-white bg-slate-700 hover:bg-slate-900 rounded-lg'
      href={"/create"}>
        Crear
      </Link>
    </nav>
    
  )
}

export default NavBar