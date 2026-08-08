"use client"

const HeroButtons = () => {
  const handlePrimaryClick = () => {
    console.log("Primary button clicked")

  }

  const handleSecondaryClick = () => {
    console.log("Secondary button clicked")
   
  }

  return (
    <div className="flex gap-3 sm:gap-4 mt-6">
  <button
    onClick={handlePrimaryClick}
    className="px-3 sm:px-5 md:px-6 py-1.5 sm:py-2 text-xs sm:text-sm md:text-base bg-blue-800 text-white rounded-md font-semibold hover:bg-blue-900 transition-colors"
  >
    View my work
  </button>

  <button
    onClick={handleSecondaryClick}
    className="px-3 sm:px-5 md:px-6 py-1.5 sm:py-2 text-xs sm:text-sm md:text-base border border-gray-400 text-gray-800 rounded-md font-medium hover:bg-gray-100 transition-colors"
  >
    Contact me
  </button>
</div>
  )
}

export default HeroButtons