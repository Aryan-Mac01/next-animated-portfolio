"use client"
import Link from "next/link"
import { useState } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"
import NavLink from './NavLink'
import { motion } from "framer-motion"
import { TwitterIcon, GithubIcon, LinkedInIcon, PinterestIcon } from './icons/Icons'



const topVariants = {
    closed: {
      rotate: 0,
    },
    opened: {
      rotate: 45,
      backgroundColor: "rgb(255,255,255)",
    },
  };
  const centerVariants = {
    closed: {
      opacity: 1,
    },
    opened: {
      opacity: 0,
    },
  };

  const bottomVariants = {
    closed: {
      rotate: 0,
    },
    opened: {
      rotate: -45,
      backgroundColor: "rgb(255,255,255)",
    },
  };

  const listVariants = {
    closed: {
      x: "100vw",
    },
    opened: {
      x: 0,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
  };

  const listItemVariants = {
    closed: {
      x: -10,
      opacity: 0,
    },
    opened: {
      x: 0,
      opacity: 1,
    },
  };



const links = [
    {url: '/', title: "Home"},
    {url: '/about', title: "About"},
    {url: '/portfolio', title: "Portfolio"},
    {url: '/contact', title: "Contact"}
]


const CustomLink = ({href, title, className=""}) => {
    const router = useRouter();

    return(
        
        <Link href = {href} className={`${className} relative group`}>
            {title}
            <span className={`h-[1px] inline-block bg-dark absolute left-0 -bottom-0.5 
            group-hover:w-full transition-[width] ease duration-300
            ${router.asPath === href ? 'w-full' : 'w-0'}`}
            >
                &nbsp;</span>
        </Link>
    )
}


const Navbar = () => {
    const [open, setOpen] = useState(false)
    //px-32
return (
    <header
    className='w-full py-8 px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 font-medium flex items-center justify-between'
    >

        <nav>
            <CustomLink href="/" title="Home" className='mr-4'/>
            <CustomLink href="/about" title="About" className='mx-4'/>
            <CustomLink href="/portfolio" title="Portfolio" className='mx-4'/>
            <CustomLink href="/contact" title="Contact" className='ml-4'/>      
        </nav>
        <div className="md:hidden lg:flex xl:w-1/3 xl:justify-center">
                <Link href="/" className="text-sm bg-black rounded-md p-1 font-semibold flex items-center justify-center">
                    <span className="text-white mr-1 px-1">Aryan</span>
                    <span className="w-12 h-8 rounded bg-white text-black flex items-center justify-center">Mac</span>
                </Link>
        </div>

        <nav className='flex items-center justify-center flex-wrap'>
            <motion.a href="https://twitter.com" target = {"_blank"}
            whileHover={{y:-2}}
            className='w-6 mx-3'
            whileTap={{scale:0.9}}
            >
                <TwitterIcon/>
            </motion.a>
            <motion.a href="https://github.com/Aryan-Mac01" target = {"_blank"}
            whileHover={{y:-2}}
            className='w-6 mx-3'
            whileTap={{scale:0.9}}
            >
                <GithubIcon/>
            </motion.a>
            <motion.a href="https://www.linkedin.com/in/aryan-mishra-931214243/" target = {"_blank"}
            whileHover={{y:-2}}
            className='w-6 mx-3'
            whileTap={{scale:0.9}}
            >
                <LinkedInIcon/>
            </motion.a>
            <motion.a href="https://in.pinterest.com" target = {"_blank"}
            whileHover={{y:-2}}
            className='w-6 ml-3'
            whileTap={{scale:0.9}}
            >
                <PinterestIcon/>
            </motion.a>
        </nav>
        <div className="md:hidden">
        {/* MENU BUTTON */}
        <button
          className="w-10 h-8 flex flex-col justify-between z-50 relative"
          onClick={() => setOpen((prev) => !prev)}
        >
          <motion.div
            variants={topVariants}
            animate={open ? "opened" : "closed"}
            className="w-10 h-1 bg-black rounded origin-left"
          ></motion.div>
          <motion.div
            variants={centerVariants}
            animate={open ? "opened" : "closed"}
            className="w-10 h-1 bg-black rounded"
          ></motion.div>
          <motion.div
            variants={bottomVariants}
            animate={open ? "opened" : "closed"}
            className="w-10 h-1 bg-black rounded origin-left"
          ></motion.div>
        </button>
        {/* MENU LIST */}
        {open && (
          <motion.div
            variants={listVariants}
            initial="closed"
            animate="opened"
            className="absolute top-0 left-0 w-screen h-screen bg-black text-white flex flex-col items-center justify-center gap-8 text-4xl z-40"
          >
            {links.map((link) => (
              <motion.div
                variants={listItemVariants}
                className=""
                key={link.title}
              >
                <Link href={link.url}>{link.title}</Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>

        
    </header>
    )
}

export default Navbar