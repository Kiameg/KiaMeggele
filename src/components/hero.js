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
}
