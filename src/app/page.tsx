import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
    <div className="bg-blue-200 rounded-b-full p-8">
      <div className="text-gray-800 text-center text-7xl font-mono font-bold">
      <h1>Improve Your</h1>
      <h1>Performance using</h1>
      <h1 className="text-blue-500"> INSANE Optimization</h1>
      <h1 className="text-blue-500"> Tools</h1>
      </div>
      <div className="text-center mt-6 font-serif text-gray-500"><p>We provide all the necessary tools to increase your device's and game's</p>
      <p> performance to the maximum. Try INSANE using our free trial and see yourself.</p>
      </div>
      <div className="text-center mt-8 -space-x-72">
        <Link href="/login">
        <button className="bg-white py-3 px-9 rounded-r-full rounded-l-full font-medium hover:bg-blue-400 hover:text-white">Login</button>
        </Link>
        <Link href="/signup">
        <button className="bg-white py-3 px-8 rounded-r-full rounded-l-full font-medium hover:bg-blue-400 hover:text-white">Signup</button>
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
    <h1 className="font-bold text-blue-600 font-mono text-2xl ml-6">OPTIMIZE BOTH YOUR DEVICE AND GAME</h1>
    <h1 className="text-5xl font-thin font-mono ml-6 mt-5">Things We Do For You</h1>
    <h1 className="mt-6 ml-6 text-gray-600">Pc is packed with high end spec but not performing well on</h1>
    <h1 className="ml-6 text-gray-600"> your favourite games? We got you.</h1>
    <button className="ml-6 bg-blue-500 py-3 px-7 rounded-l-full rounded-r-full mt-7 text-white">Get Started Now</button>
    </div>
  );
}
