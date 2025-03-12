'use client';
import Image from 'next/image';
import Link from 'next/link';
import styles from '@/styles/gradient.module.css';
import { TypewriterEffect, TypewriterEffectSmooth } from './ui/typewriter-effect';
import { FocusCards } from './ui/focus-cards';


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
        <div className="flex flex-col text-center pt-52">
          <h1 className="text-6xl pb-5">Kia Meggele</h1>
          <TypewriterEffect words={words} />
        </div>
        <h2 className="text-center text-xl">Check out my projects</h2>
      </section>
      <section className="z-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#DFCCDB"
            fillOpacity="1"
            d="M0,128L60,144C120,160,240,192,360,186.7C480,181,600,139,720,133.3C840,128,960,160,1080,176C1200,192,1320,192,1380,192L1440,192L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
          ></path>
        </svg>
      </section>
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
