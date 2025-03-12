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

}
