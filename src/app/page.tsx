import Image from "next/image";
import Link from "next/link";
import { MdOutlineVerified } from "react-icons/md";
import { FaBuilding } from "react-icons/fa6";
import { IoBagRemove } from "react-icons/io5";

import PricingPage from "./components/pricingcard";



export default function Home() {
  return (
    <div>
      <div className="bg-blue-200 rounded-b-full p-8">
        <div className="text-gray-800 text-center text-7xl font-mono font-bold">
          <h1>Improve Yours</h1>
          <h1>Performance using</h1>
          <h1 className="text-blue-500">INSANE Optimization</h1>
          <h1 className="text-blue-500">Tools</h1>
        </div>
        <div className="text-center mt-6 font-serif text-gray-500">
          <p>We provide all the necessary tools to increase your device&#39;s and game&#39;s</p>
          <p>performance to the maximum. Try INSANE using our free trial and see yourself.</p>
        </div>
        <div className="text-center mt-8 -space-x-72">
          <Link href="/login">
            <button className="bg-white py-3 px-9 rounded-r-full rounded-l-full font-medium hover:bg-blue-400 hover:text-white">
              Login
            </button>
          </Link>
          <Link href="/signup">
            <button className="bg-white py-3 px-8 rounded-r-full rounded-l-full font-medium hover:bg-blue-400 hover:text-white">
              Signup
            </button>
          </Link>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <Image
          src="/images/webpic.png" // Public folder ke andar ka path
          alt="Description of Image" // Accessibility ke liye
          width={700} // Width define karein
          height={500} // Height define karein
        />
      </div>
      <h1 className="font-bold text-blue-600 font-mono text-2xl ml-6">
        OPTIMIZE BOTH YOUR DEVICE AND GAME
      </h1>
      <h1 className="text-5xl font-thin font-mono ml-6 mt-5">Things We Do For You</h1>
      <h1 className="mt-6 ml-6 text-gray-600">
        PC&#39;s packed with high end spec but not performing well on
      </h1>
      <h1 className="ml-6 text-gray-600">your favourite games? We&#39;ve got you.</h1>
      <Link href="/">
        <button className="ml-6 bg-blue-500 py-3 px-7 rounded-l-full rounded-r-full mt-7 text-white hover:bg-blue-950">
          Get Started Now
        </button>
      </Link>
      <div className="relative flex justify-around items-center p-10">
        {/* First Column */}
        <div className="relative">
          <h1 className="text-gray-200 font-bold text-[250px] text-left ml-20 z-0">1</h1>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center z-10">
            <h2 className="text-black font-bold text-2xl whitespace-nowrap">Device Optimization</h2>
            <p className="text-gray-600 mt-2 text-sm max-w-[200px]">
              Maximize your PC&#39;s potential by eliminating unnecessary background processes and optimizing system resources.
            </p>
          </div>
        </div>

        {/* Second Column */}
        <div className="relative">
          <h1 className="text-gray-200 font-bold text-[250px] text-center z-0">2</h1>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center z-10">
            <h2 className="text-black font-bold text-2xl whitespace-nowrap">Game Optimization</h2>
            <p className="text-gray-600 mt-2 text-sm max-w-[200px]">
              Tailor game settings specifically to your hardware capabilities, achieving the perfect balance between performance and visual quality.
            </p>
          </div>
        </div>

        {/* Third Column */}
        <div className="relative">
          <h1 className="text-gray-200 font-bold text-[250px] text-right mr-20 z-0">3</h1>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center z-10">
            <h2 className="text-black font-bold text-2xl whitespace-nowrap">Game Performance <br />Improvement</h2>
            <p className="text-gray-600 mt-2 text-sm max-w-[200px]">
              Utilize custom settings to push your system beyond its limits, unlocking hidden potential for enhanced frame rates and responsiveness.
            </p>
          </div>
        </div>
      </div>
      <div className="relative">
        <div className="absolute inset-0 bg-[url('/images/circle.png')]  bg-right bg-[length:20%] opacity-5"></div>
        <div className="relative z-10">

          <h1 className="font-bold ml-6 text-4xl text-gray-800">
            Help You Find The Best <br /> Settings For Your Game
          </h1>

          <div className="flex items-center mt-20 ml-6">
            <MdOutlineVerified className="text-5xl text-white bg-blue-500 rounded-md" />
            <h1 className="ml-6 font-bold text-2xl">Trusted and Accurate</h1>
          </div>
          <h1 className="ml-[95px] text-gray-500 mt-4">Use provide accurate settings for all devices which <br />reduces any types of bugs</h1>

          <div className="flex items-center mt-10 ml-6">
            <FaBuilding className="text-5xl text-white bg-blue-500 px-3 rounded-md" />
            <h1 className="ml-6 font-bold text-2xl">Used By Top Players</h1>
          </div>
          <h1 className="ml-[95px] text-gray-500 mt-4">Many experienced and professional players uses our tool<br /> to improve their performance</h1>

          <div className="flex items-center mt-10 ml-6">
            <IoBagRemove className="text-5xl text-white bg-blue-500 px-3 rounded-md" />
            <h1 className="ml-6 font-bold text-2xl">Various Features</h1>
          </div>
          <h1 className="ml-[95px] text-gray-500 mt-4">We provide services from optimizing device to improving <br />in-game performance</h1>

        </div>
      </div>
     
<PricingPage />
</div>
  );
}

