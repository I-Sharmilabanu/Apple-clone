import React  from "react"
import { FaApple } from "react-icons/fa";
import { IoMdSearch } from "react-icons/io";
import { FaLock } from "react-icons/fa";
import { TbLayoutNavbarInactive } from "react-icons/tb";




const navLink=[
    {   
        icon:<FaApple size={15}/>,
        href:"#",
    },
      

    {
        name: "Home",
        href: "#",
    },
     {
        name: "Store",
        href: "#",
    },
     {
        name: "Mac",
        href: "#",
    },
     {
        name: "iPad",
        href: "#",
    },
     {
        name: "iPhone",
        href: "#",
    },
     {
        name: "Watch",
        href: "#",
    },
     {
        name: "Airpods",
        href: "#",
    },
     {
        name: "TV & Home",
        href: "#",
    },
     {
        name: "Entertainment",
        href: "#",
    },
     {
        name: "Accessories",
        href: "#",
    },
     {
        name: "Support",
        href: "#",
    },
    {    
        icon:<IoMdSearch  size={15}/>,
         href:"#",
    },
     {  
        icon:<FaLock size={15}/>
,        href: "#",
    },


   ];


function Navbar(){
    return(
        
        <nav className=" sticky bg-black text-gray-400 text-xs font-normal  md:block">
            <div className="flex flex-row items-center justify-around p-2  md:hidden sm:block ">
                
            <p ><FaApple size={20}/></p>
                    <IoMdSearch size={20}/>
                    <FaLock size={20}/>
                    <TbLayoutNavbarInactive size={20}/>

                
            </div>
            <div className="container mx-auto flex items-center justify-around py-3">
            <ul className="flex space-x-6">

            {navLink.map((link,index) =>(
            <li key={index}>
                <a href={link.href}
                className="flex sticky z-70  items-center gap-4 hover:text-white  hidden md:block">
                {link.name }
                {link.icon}
                
                
                </a></li>
                
            ))}
                 
        </ul> </div> </nav>)
}
export default Navbar;