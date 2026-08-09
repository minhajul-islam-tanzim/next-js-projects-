"use client"

import Link from "next/link"

const HeroButtons = () => {
 

  

  return (
    <div className="flex gap-3 sm:gap-4 mt-6">
  <button
    
    className="px-3 sm:px-5 md:px-3 py-1.5 sm:py-2 text-xs sm:text-sm md:text-base bg-blue-800 text-white rounded-md font-semibold hover:bg-blue-900 transition-colors cursor-pointer"
  >
    View my work
  </button>


<Link href={'contact'}>
  <button
    
    className="px-3 sm:px-5 md:px-6 py-1.5 sm:py-2 text-xs sm:text-sm md:text-base border border-gray-400 text-gray-800 rounded-md font-medium hover:bg-gray-100 transition-colors cursor-pointer"
    >
     Contact me
  </button>
    </Link>
</div>
  )
}

export default HeroButtons