import 'tailwindcss/tailwind.css'
import Image from 'next/image'
import React from 'react'

const Menu = () =>{
    return (
    <div className="flex flex-col text-left h-screen bg-gray-100">
	<div className="justify-center m-8 h-24 w-24">
	    <Image
	    className="rounded-full"
	    src="/avatar.jpg"
	    alt="avatar"
	    width={140}
	    height={140}
	    /></div>
	    <div className="text-black text-left font-semibold text-xl mt-8 ml-8">
	<div className="">Documents</div>
	<div className="">Accounts</div>
	<div className="">User</div>
	</div>
	</div>
      )
}
export default Menu;
