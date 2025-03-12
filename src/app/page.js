'use client';

import Hero from '@/components/hero';
import { FocusCards } from '@/components/ui/focus-cards';
import WaveBottom from '@/components/wave-bottom';
import { motion } from 'framer-motion';

export default function Home() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  const cards = [
    {
      title: 'jOUXli',
      src: '/jouxli_cover.webp',
      href: '/project/jouxli',
    },
    {
      title: 'Wonderful CPH',
      src: '/acityforall_cover.webp',
      href: '/project/wonderfulcph',
    },
    {
      title: 'Superkilen',
      src: '/superkilen_cover.webp',
      href: '/project/superkilen',
    },
    {
      title: 'Wonderworks',
      src: '/wonderworks_cover.webp',
      href: '/project/wonderworks',
    },
  ];

  return (
    <>
      <motion.section initial="hidden" animate="show" variants={container}>
        <motion.div variants={item}>
          <Hero />
        </motion.div>
        <motion.div variants={item} className="flex flex-col gap-4 px-4">
          <motion.h2 variants={item} className="text-2xl text-center">
            Check out my projects
          </motion.h2>
          <motion.div variants={item}>
            <FocusCards cards={cards} />
          </motion.div>
        </motion.div>
      </motion.section>
      <WaveBottom />
    </>
  );
}
