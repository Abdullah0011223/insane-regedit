import Image from "next/image";
import Link from "next/link";
import { MdOutlineVerified } from "react-icons/md";
import { FaBuilding } from "react-icons/fa6";
import { IoBagRemove } from "react-icons/io5";
import PricingPage from "./components/pricingcard";

export default function Home() {
  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <div className="bg-blue-200 p-8">
        <div className="text-gray-800 text-center text-4xl md:text-7xl font-mono font-bold space-y-4">
          <h1>Improve Your</h1>
          <h1>Performance using</h1>
          <h1 className="text-blue-500">INSANE Optimization</h1>
          <h1 className="text-blue-500">Tools</h1>
        </div>
        <div className="text-center mt-6 font-serif text-gray-500">
          <p>We provide all the necessary tools to increase your device&#39;s and game&#39;s</p>
          <p>performance to the maximum. Try INSANE using our free trial and see yourself.</p>
        </div>
        <div className="flex justify-center space-x-4 mt-8">
          <Link href="/login">
            <button className="bg-white py-3 px-6 rounded-full font-medium hover:bg-blue-400 hover:text-white transition duration-300">
              Login
            </button>
          </Link>
          <Link href="/signup">
            <button className="bg-white py-3 px-6 rounded-full font-medium hover:bg-blue-400 hover:text-white transition duration-300">
              Signup
            </button>
          </Link>
        </div>
      </div>

      {/* Image Section */}
      <div className="flex justify-center items-center px-4">
        <Image
          src="/images/webpic.png"
          alt="Optimization Tools"
          width={700}
          height={500}
          className="w-full max-w-lg sm:max-w-xl"
        />
      </div>

      {/* Features Section */}
      <div className="px-6 space-y-4">
        <h1 className="font-bold text-blue-600 font-mono text-2xl">
          OPTIMIZE BOTH YOUR DEVICE AND GAME
        </h1>
        <h1 className="text-2xl sm:text-5xl font-thin font-mono">
          Things We Do For You
        </h1>
        <p className="text-gray-600">
          PC&#39;s packed with high-end specs but not performing well on your
          favorite games? We&#39;ve got you.
        </p>
        <Link href="/">
          <button className="bg-blue-500 py-3 px-7 rounded-full mt-4 text-white hover:bg-blue-950 transition duration-300">
            Get Started Now
          </button>
        </Link>
      </div>

      {/* Grid Section */}
      <div className="grid gap-8 px-6 sm:grid-cols-2 lg:grid-cols-3">
        {/* Device Optimization */}
        <div className="relative text-center">
          <h1 className="text-gray-200 font-bold text-6xl md:text-[250px] z-0">1</h1>
          <div className="absolute inset-0 flex flex-col justify-center items-center z-10">
            <h2 className="text-black font-bold text-xl md:text-2xl">
              Device Optimization
            </h2>
            <p className="text-gray-600  text-sm max-w-[200px] ">
              Maximize your PC&#39;s potential by eliminating unnecessary background
              processes and optimizing system resources.
            </p>
          </div>
        </div>

        {/* Game Optimization */}
        <div className="relative text-center">
          <h1 className="text-gray-200 font-bold text-6xl md:text-[250px] z-0 mt-14">2</h1>
          <div className="absolute inset-0 flex flex-col justify-center items-center z-10">
            <h2 className="text-black font-bold text-xl md:text-2xl sm: mt-14">
              Game Optimization
            </h2>
            <p className="text-gray-600 text-sm max-w-[200px]">
              Tailor game settings specifically to your hardware capabilities,
              achieving the perfect balance between performance and visual
              quality.
            </p>
          </div>
        </div>

        {/* Game Performance Improvement */}
        <div className="relative text-center">
          <h1 className="text-gray-200 font-bold text-6xl md:text-[250px] z-0 mt-20">3</h1>
          <div className="absolute inset-0 flex flex-col justify-center items-center z-10">
            <h2 className="text-black font-bold text-xl md:text-2xl sm: mt-40">
              Game Performance Improvement
            </h2>
            <p className="text-gray-600 text-sm max-w-[200px]">
              Utilize custom settings to push your system beyond its limits,
              unlocking hidden potential for enhanced frame rates and
              responsiveness.
            </p>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="relative px-6">
        <div className="absolute inset-0 bg-[url('/images/circle.png')] bg-right bg-[length:20%] opacity-5"></div>
        <div className="relative z-10 space-y-8">
          <h1 className="font-bold text-2xl md:text-4xl text-gray-800 mt-32">
            Help You Find The Best Settings For Your Game
          </h1>

          {/* Trusted and Accurate */}
          <div className="flex items-start space-x-4">
            <MdOutlineVerified className="text-3xl md:text-5xl text-white bg-blue-500 rounded-md p-1" />
            <div>
              <h1 className="font-bold text-xl">Trusted and Accurate</h1>
              <p className="text-gray-500 mt-2">
                We provide accurate settings for all devices,<br/> reducing any types
                of bugs.
              </p>
            </div>
          </div>

          {/* Used By Top Players */}
          <div className="flex items-start space-x-4">
            <FaBuilding className="text-3xl md:text-5xl text-white bg-blue-500 px-1 rounded-md" />
            <div>
              <h1 className="font-bold text-xl">Used By Top Players</h1>
              <p className="text-gray-500 mt-2">
                Many experienced and professional players use our tool<br/> to
                improve their performance.
              </p>
            </div>
          </div>

          {/* Various Features */}
          <div className="flex items-start space-x-4">
            <IoBagRemove className="text-3xl md:text-5xl text-white bg-blue-500 px-1 rounded-md" />
            <div>
              <h1 className="font-bold text-xl">Various Features</h1>
              <p className="text-gray-500 mt-2">
                We provide services from optimizing devices to improving<br/> in-game
                performance.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Pricing Section */}
      <PricingPage />
    </div>
  );
}