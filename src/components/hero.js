'use client';

import styles from '@/styles/gradient.module.css';
import { TypewriterEffect } from './ui/typewriter-effect';
import WaveTop from './wave-top';

export default function Hero() {
  const words = [
    {
      text: 'Passionate',
    },
    {
      text: '&',
    },
    {
      text: 'Creative',
    },
    {
      text: 'Concept',
      className: 'text-[#ff8cb8]',
    },
    {
      text: 'Developer',
      className: 'text-[#ff8cb8]',
    },
    {
      text: 'Student',
    },
  ];

  return (
    <>
      <section className={`${styles.gradient}`}>
        <div className="flex flex-col text-center md:pt-52 pt-32">
          <h1 className="text-6xl pb-5">Kia Meggele</h1>
          <TypewriterEffect words={words} />
        </div>
      </section>
      <WaveTop />
    </>
  );
}
{
  /* 
      <section className="h-[700px] py-8 max-w-[1000px] mx-auto relative z-10 justify-center align-center grid grid-cols-[1fr,1.8fr,1fr,1fr] grid-rows-3 gap-4 drop-shadow-md">

        <div className="bg-white rounded-2xl flex justify-center items-center">logo</div>

        <div className="relative bg-white rounded-2xl flex justify-center items-center overflow-hidden cursor-pointer">
          <Link href="/project/wonderworks">
            <Image src="/wonderworks_cover.png" width={500} height={700} className="object-cover rounded-2xl h-full" alt="Wonderworks" />
            <div className="absolute inset-0 bg-white bg-opacity-0 flex flex-col justify-center items-center text-black text-xl opacity-0 transition-all duration-300 hover:bg-opacity-50 hover:opacity-100">
              <h2 className="text-black text-3xl">Wonderworks</h2>
              <p className="underline mt-2">See more</p>
            </div>
          </Link>
        </div>

        <div className=" relative bg-white rounded-2xl col-span-2 flex justify-center items-center overflow-hidden cursor-pointer">
          <Link href="/project/superkilen">
            <Image src="/superkilen_cover.png" width={500} height={700} className="object-cover rounded-2xl h-full" alt="Superkilen Case" />
            <div className="absolute inset-0 bg-white bg-opacity-0 flex flex-col justify-center items-center opacity-0 transition-all duration-300 hover:bg-opacity-50 hover:opacity-100">
              <h2 className="text-black text-3xl">Superkilen</h2>
              <p className="underline mt-2">See more</p>
            </div>
          </Link>
        </div>

        <div className="relative bg-white rounded-2xl row-span-2 h-full flex justify-center items-center overflow-hidden cursor-pointer">

          <Image src="/me2.jpeg" width={500} height={700} className="object-cover rounded-2xl h-full" alt="Photo of me" />
          <div className="absolute inset-0 bg-white bg-opacity-0 flex justify-center items-center text-black text-xl opacity-0 transition-all duration-300 hover:bg-opacity-50 hover:opacity-100">
            <h2 className="underline mt-2 text-3xl"><Link href="/about">About Me </Link></h2>
          </div>

        </div>

        <div className="relative bg-white rounded-2xl flex justify-center items-center overflow-hidden cursor-pointer">
          <Link href="/project/wonderfulcph">
            <Image src="/acityforall_cover.webp" width={500} height={700} className="object-cover rounded-2xl h-full" alt="Wonderful CPH Case" />
            <div className="absolute inset-0 bg-white bg-opacity-0 flex flex-col justify-center items-center opacity-0 transition-all duration-300 hover:bg-opacity-50 hover:opacity-100">
              <h2 className="text-black text-3xl">Wonderful CPH</h2>
              <p className="underline mt-2">See more</p>
            </div>
          </Link>
        </div>

        <div className="bg-white rounded-2xl row-span-2 flex justify-center items-center"> <Link href="/contact">Contact</Link></div>
        <div className="bg-white rounded-2xl row-span-2 flex justify-center items-center"> <Link href="/cv">CV</Link></div>

        <div className="relative bg-white rounded-2xl flex justify-center items-center overflow-hidden cursor-pointer">
          <Link href="/project/jouxli">
            <Image src="/jouxli_cover.png" width={500} height={700} className="object-cover rounded-2xl h-full" alt="Jouxli Case" />
            <div className="absolute inset-0 bg-white bg-opacity-0 flex flex-col justify-center items-center opacity-0 transition-all duration-300 hover:bg-opacity-50 hover:opacity-100">
              <h2 className="text-black text-3xl">jOUXli</h2>
              <p className="underline mt-2">See more</p>
            </div>
          </Link>
        </div>

      </section>
      */
}
