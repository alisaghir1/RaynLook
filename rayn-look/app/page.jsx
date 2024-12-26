import Image from "next/image";
import hero from "../public/Hero.jpg";
import FirstSection from "./components/FirstSection/FirstSection";

export default function Home() {
  return (
    <>
    <div className="h-screen relative">
      <div className="absolute inset-0">
        <Image
          className="absolute z-[-10] top-0 right-0 w-full h-full xl:object-cover opacity-50"
          src={hero}
          alt="hero image"
        />
      </div>
      <div className="flex justify-center items-center h-full text-center z-10 relative mx-2">
        <div className="">
          <h1 className="text-4xl font-bold mb-4 text-white">Natural Beauty, Perfect Vision</h1>
          <p className="text-lg text-customGold">Transform Your Look with Lebanon&apos;s Finest Natural Contact Lenses</p>
        </div>
      </div>
    </div>
    <FirstSection />
    </>
  );
}
