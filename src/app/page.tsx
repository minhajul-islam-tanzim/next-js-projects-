import Image from "next/image"
import hero from "@/assets/hero.png"
const Homepage = () => {
  return (
    <div className="flex flex-col w-full container">
        {/* image section  */}
        <div className="h-1/2 ">
          
          <Image src={hero} className="h-170" alt="this is hero image"></Image>

        </div>



        {/* text section  */}
        <div className="h-1/2">

        </div>


    </div>
  )
}

export default Homepage
