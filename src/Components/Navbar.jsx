"use client"
import Link from "next/link"
import { useState } from "react"
import Image from "next/image"
import NavLink from './NavLink'


const links = [
    {url: '/', title: "Home"},
    {url: '/about', title: "About"},
    {url: '/portfolio', title: "Portfolio"},
    {url: '/contact', title: "Contact"}
]


const Navbar = () => {
    const [open, setOpen] = useState(false)
    
    return (
        <div className="h-full flex items-center justify-between px-4  sm:px-8 md:px-12 lg:px-20 xl:px-48 text-xl">
            <div className="hidden md:flex gap-4 w-1/3">
                {links.map(link=>(
                    <NavLink link={link} key={link.title}/>
                ))}
            </div>
            {/*Logo*/}
            <div className="md:hidden lg:flex xl:w-1/3 xl:justify-center">
                <Link href="/" className="text-sm bg-black rounded-md p-1 font-semibold flex items-center justify-center">
                    <span className="text-white mr-1 px-1">Aryan</span>
                    <span className="w-12 h-8 rounded bg-white text-black flex items-center justify-center">Mac</span>
                </Link>
            </div>
            <div className="hidden md:flex gap-4 w-1/3">
                <Link href="https://github.com/Aryan-Mac01">
                    <Image src="/github.png" alt="" width={24} height={24}/>
                </Link>
                <Link href="https://in.pinterest.com/aryanmishra3011/">
                    <Image src="/pinterest.png" alt="" width={24} height={24}/>
                </Link>
                <Link href="https://www.instagram.com/aryan_.m30/">
                    <Image src="/instagram.png" alt="" width={24} height={24}/>
                </Link>
                <Link href="https://www.linkedin.com/in/aryan-mishra-931214243/">
                    <Image src="/linkedin.png" alt="" width={24} height={24}/>
                </Link>
            </div>
            <div className="md:hidden">
                <button className="w-10 h-8 flex flex-col justify-between z-50 relative" onClick={(()=>setOpen(!open))}>
                    <div className="w-10 h-1 bg-black rounded"></div>
                    <div className="w-10 h-1 bg-black rounded"></div>
                    <div className="w-10 h-1 bg-black rounded"></div>
                </button>
                {
                    open &&(
                
                <div className="absolute top-0 left-0 w-screen h-screen bg-black text-white flex flex-col justify-center items-center gap-8 text-4xl">
                    {links.map(link=>(
                        <Link href={link.url} key={link.title}>{link.title}</Link>
                    ))}
                </div>
                )}
            </div>
        </div>

    )
}

export default Navbar