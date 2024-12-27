import Image from "next/image";
import hero from "../public/Hero.jpg";
import FirstSection from "./components/firstSection/FirstSection";
import SecondSection from './components/secondSection/SecondSection'
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="h-screen relative">
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent">
          <Image
            className="absolute z-[-10] top-0 right-0 w-full h-full xl:object-cover"
            src={hero}
            alt="hero image"
          />
        </div>
        <div className="flex justify-center items-center h-full text-center z-10 relative mx-2">
          <div className="">
            <h1 className="text-5xl font-bold mb-4 text-white">Natural Beauty, Perfect Vision</h1>
            <p className="text-lg text-customGold">Transform Your Look with Lebanon&apos;s Finest Natural Contact Lenses</p>
            <Link href={'/products'}>
              <button className="bg-customGold text-xl px-5 py-2 rounded-lg mt-5 hover:bg-black hover:text-customGold transition-all duration-300 ease-in-out">
                Shop Now
              </button>
            </Link>
          </div>
        </div>
      </div>
      <FirstSection />
      <SecondSection />
    </>
  );
}
