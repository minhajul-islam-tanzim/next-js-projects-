import Image from "next/image"
import hero from "@/assets/hero.png"
import HeroButtons from "@/components/HeroButtons"
const Homepage = () => {
  return (
   <div className="flex flex-col md:flex-row w-full mt-12 md:mt-20 items-center justify-center gap-6 md:gap-8 px-6 sm:px-8 md:px-12">
  {/* image section */}
  <div className="w-full md:w-1/2 flex justify-center">
    <Image
      src={hero}
      alt="this is hero image"
      className="w-40 sm:w-56 md:w-full md:max-w-md h-auto object-contain"
      priority
    />
  </div>

  {/* text section */}
  <div className="w-full md:w-1/2 flex flex-col items-center md:items-start justify-center text-center md:text-left">
    <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-snug text-balance">
      I BeLieVe <span className="text-red-600">To AchiVe</span> Skills and{" "}
      <span className="text-blue-800">And I LiKe It</span>
    </h1>
  <p className="mt-4 md:mt-6 text-sm sm:text-base text-gray-600 leading-relaxed max-w-prose">
  I am a software developer specializing in frontend development with{" "}
  <span className="font-semibold text-gray-800">React</span> and{" "}
  <span className="font-semibold text-gray-800">Next.js</span>. My primary focus is building modern, responsive, and performance-optimized web applications. I write type-safe code using{" "}
  <span className="font-semibold text-gray-800">TypeScript</span> and design fast, consistent UIs with{" "}
  <span className="font-semibold text-gray-800">Tailwind CSS</span>. I have hands-on experience with{" "}
  <span className="font-semibold text-gray-800">Next.js</span> features like server-side rendering, image optimization, and routing systems. I place strong emphasis on component-based architecture and writing clean, maintainable code. I continuously update my skills by learning new technologies and apply a logical, creative approach to problem-solving. 
</p>

      {/* button section   */}


  <div className="mt-10">
      <HeroButtons></HeroButtons>

  </div>

  </div>
</div>
  )
}

export default Homepage
