import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";
import { usePathname } from 'next/navigation'
const TransitionProvider = ({ children, className = "" }) => {
  const pathName = usePathname()
  return (
    <AnimatePresence>
      <div key={pathName} className="w-full h-full bg-gradient-to-b from-blue-100 to-red-100">
      <motion.div className="h-full w-full fixed bg-black rounded-b-[100px] z-40"
        animate={{height: "0vh"}}
        exit={{height:"100vh"}}
        transition={{duration: 0.5, ease: "easeOut"}}
        />
      
      <div
        className={`w-full h-full inline-block z-0 bg-gradient-to-b from-blue-50 to-red-100 p-32 ${className}`}
      >
        
        {children}
      </div>
      </div>
    </AnimatePresence>
  );
};

export default TransitionProvider;
