"use client"

import { ReactNode } from "react"
import Navbar from "./Navbar"
import { motion } from "motion/react"
import { usePathname } from "next/navigation"

const TranProvider = ({ children }: { children: ReactNode }) => {
  const pathName = usePathname()
  const pageName = pathName.replace("/", "")

  return (
    <div>
      {pathName !== "/" && (
        <motion.div
          key={pathName}
          initial={{ y: "-100%" }}
          animate={{ y: ["-100%", "0%", "100%"] }}
          transition={{
            duration: 1.2,
            times: [0, 0.5, 1],
            ease: "easeInOut",
          }}
          className="h-screen w-full fixed bg-black z-40 top-0 left-0 flex items-center justify-center"
        >
          <h1 className="text-white text-4xl md:text-6xl font-bold capitalize">
            {pageName}
          </h1>
        </motion.div>
      )}

  
      <motion.div
        key={pathName + "-content"}
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 0.6,
          delay: 0.6, 
          ease: "easeOut",
        }}
      >
        <div className="h-19">
          <Navbar />
        </div>
        <div>{children}</div>
      </motion.div>
    </div>
  )
}

export default TranProvider