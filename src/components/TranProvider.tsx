"use client"

import { AnimatePresence } from "motion/react"
import { ReactNode } from "react"
import Navbar from "./Navbar"
import { motion } from "motion/react";
import { usePathname } from "next/navigation";


const TranProvider = ({ children }: { children: ReactNode }) => {

    const pathName = usePathname()
  return (
    <div>
      <AnimatePresence mode="wait">

        <div className="w-full h-screen">

            {/* কালো দাগ উপরে থেকে নিচে নামবে */}
          <motion.div 
  key={pathName} 
  className="h-screen w-full fixed bg-black rounded-2xl z-40 top-0 left-0"
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  exit={{ opacity: 0 }}
  transition={{ duration: 0.5, ease: "easeInOut" }}
/>

          <div className="h-19">
            <Navbar />
          </div>
          <div className="">{children}</div>
        </div>

      </AnimatePresence>
    </div>
  )
}

export default TranProvider