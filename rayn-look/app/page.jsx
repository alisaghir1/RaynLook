import Image from "next/image";
import hero from "../public/Hero.jpg";
import Head from "next/head";

export default function Home() {
  return (
    <div className="h-screen relative">
      <Head>
        <title>My Page Title</title>
        <meta name="description" content="This is the description of my page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className="absolute inset-0">
        <Image
          className="absolute z-[-10] top-0 right-0 w-full h-full xl:object-cover opacity-50"
          src={hero}
          alt="hero image"
        />
      </div>
      <div className="flex justify-center items-center h-full text-center z-10 relative">
        <div className="">
          <h1 className="text-5xl font-bold mb-4 text-white">Natural Beauty, Perfect Vision</h1>
          <p className="text-lg text-gold">Transform Your Look with Lebanon&apos;s Finest Natural Contact Lenses</p>
        </div>
      </div>
    </div>
  );
}
