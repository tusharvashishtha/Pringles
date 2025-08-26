import React from 'react'
import pringlesLogo from "../../../public/PringlesLogo.png"
import pringles3dLogo from "../../../public/Pringles3dLogo.png"

const Navbar = () => {
  return (
    <div className='w-[100vw] h-30 bg-[#EA3D20] flex font-[Font1] text-[#FFFFFF] '>
       <div className='w-[33%] text-xl flex justify-end gap-15 items-center'>
        <h2 className='tracking-[0.2em]'>Products</h2>
        <h2 className='tracking-[0.2em]'>About</h2>
        </div> 
       <div className='w-[33%] flex justify-center items-center '>
        <img className='w-[22%]' src={pringles3dLogo} alt="" />
        </div> 
       <div className='w-[33%] text-xl flex justify-start gap-15 items-center text-[#FFFFFF]'>
        <h2 className='tracking-[0.2em]'>Contact</h2>
        <h2 className='tracking-[0.2em]'>Shop</h2>
        </div> 
    </div>
  )
}

export default Navbar