import {React, useState }from 'react'
import pringles3dLogo from "../../../public/Pringles3dLogo.png"
import pringlesImg from "../../../public/pringles-img1.png"
import chipsImg from "../../../public/chips-img2.png"

const Navbar = () => {

  const [isOpen, setOpen] = useState(false);
  function handleOpen(){
    setOpen(!isOpen);
  }

  return (
    <div style={{
    backgroundImage: "linear-gradient(to right,#ea002a, #ec272d, #ed3b31, #ef4935, #f0563a, #f0563a, #f0563a, #f0563a, #ef4935, #ed3b31, #ec272d, #ea002a)",
    width: "100%",
  }} className='w-[100vw] h-30 font-[Font1] text-[#FFFFFF] '>
    <div className='hidden h-full w-full lg:flex '>
      <div className='w-[33%] text-xl flex justify-end p-5 gap-15 items-center'>
        <h2 className='tracking-[0.2em]'>Products</h2>
        <h2 className='tracking-[0.2em]'>About</h2>
        </div> 
       <div className='w-[33%] flex justify-center p-2 items-center '>
        <img className='w-[22%]' src={pringles3dLogo} alt="" />
        </div> 
       <div className='w-[33%] text-xl flex justify-start p-5 gap-15 items-center text-[#FFFFFF]'>
        <h2 className='tracking-[0.2em]'>Contact</h2>
        <h2 className='tracking-[0.2em]'>Shop</h2>
        </div> 
    </div>

    <div className='h-full w-full'>
      <div className='w-full h-full flex'>
        <div className='w-full relative bg-pink-600 flex justify-center items-center'>
          <img className='w-[12%] absolute' src={pringles3dLogo} alt="" />

          <div className='h-fit w-fit py-2 px-4 absolute z-5 right-10' onClick={handleOpen}>
            {
            isOpen ? 
            <i className="ri-close-large-line text-4xl transition-all duration-600 ease-in opacity-100"></i> : 
             <i className=" ri-menu-line text-4xl transition-all duration-600 ease-in opacity-100"></i>}
          </div>
        </div>  
      </div>
    </div>

    <div
     className='h-full overflow-hidden w-full fixed top-0 z-2 flex items-center '>
      <div className='h-full w-[20%]  overflow-hidden flex items-center bg-[#EA002A]'>
        <img className='w-[200%] relative left-30 scale-400 shadow-2xl-rotate-90' src={chipsImg} alt="" />
      </div>
      <div className='h-[100%] py-25 w-[80%] flex flex-col md:justify-between bg-[#F26540] shadow-lg '>
        <div className='h-[40%] w-full flex items-center my-5 pl-4'>
          <img className='w-[60%]' src={pringles3dLogo} alt="" />
        </div>
        <div className='h-[40%] w-full '>
          <div className='h-[25%] w-full flex items-center pl-4 tracking-[.3em]'>
            <h1 className='text-2xl sm:text-4xl font-bold font-[font1]'>PRODUCTS</h1>
          </div>
          <div className='h-[25%] w-full flex items-center pl-4 tracking-[.3em]'>
            <h1 className='text-2xl sm:text-4xl font-bold font-[font1]'>ABOUT</h1>
          </div>
          <div className='h-[25%] w-full flex items-center pl-4 tracking-[.3em]'>
            <h1 className='text-2xl sm:text-4xl font-bold font-[font1]'>CONTACT</h1>
          </div>
          <div className='h-[25%] w-full  flex items-center pl-4 tracking-[.3em]'>
            <h1 className='text-2xl sm:text-4xl font-bold font-[font1]'>SHOP</h1>
          </div>
        </div>
      </div>
    </div>
       
    </div>
  )
}

export default Navbar