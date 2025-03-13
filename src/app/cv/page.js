'use client';

import Image from 'next/image';
import { Chip } from '@heroui/react';
import WaveBottom from '@/components/wave-bottom';
import { motion } from 'framer-motion';
import { IconDownload } from '@tabler/icons-react';

export default function CV() {
  const experience = [
    'Marketing',
    'Design Thinking',
    'Webdesign',
    'Branding',
    'UX Research',
    'Frontend Development',
    'UI & UX Design',
    'Concept Development',
  ];

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

  return (
    <>
      <motion.section
        initial="hidden"
        animate="show"
        variants={container}
        className="flex flex-col justify-center max-w-[1000px] mx-auto mt-32 px-4 md:px-0"
      >
        <motion.div
          variants={item}
          className="flex flex-col md:flex-row justify-between items-center w-full gap-8"
        >
          <div>
            <h1 className="text-4xl md:text-5xl mb-4">Kia Meggele</h1>
            <p className="text-gray-600 max-w-md">
              Passionate concept developer with a focus on creating solutions that don’t just look good but truly connect with people.
            </p>
          </div>
          <div className="w-40 h-40 overflow-hidden rounded-full drop-shadow-lg hover:scale-105 transition-transform">
            <Image
              src="/me2.jpeg"
              width={160}
              height={160}
              className="rounded-full object-cover"
              alt="Photo of me"
            />
          </div>
        </motion.div>

        <motion.div variants={item} className="mt-12 flex justify-center md:block">
          <a
            href="/cv.pdf"
            download
            className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-br from-indigo-500 to-pink-500 text-white rounded-full hover:opacity-90 transition-opacity"
          >
            <IconDownload size={20} />
            Download CV
          </a>
        </motion.div>

        <motion.section variants={item} className="grid md:grid-cols-2 mt-10 gap-24">
          <div>
            <h2 className="text-3xl mb-8 bg-gradient-to-r from-indigo-500 to-pink-500 bg-clip-text text-transparent">
              Education
            </h2>
            <div className="space-y-8">
              <motion.div variants={item} className="group">
                <h3 className="text-xl group-hover:text-pink-500 transition-colors border-b pb-1">
                  Copenhagen School of Design and Technology
                </h3>
                <div className="flex justify-between text-l mt-2">
                  <p className="text-gray-600 flex-1">BA in Digital Concept Development</p>
                  <p className="text-gray-500 flex-2">2024 - Now</p>
                </div>
                <div className="flex justify-between text-l mt-3">
                  <p className="text-gray-600 flex-1">AP Graduate in Multimedia Design</p>
                  <p className="text-gray-500 flex-2">2022 - 2024</p>
                </div>
              </motion.div>

              <motion.div variants={item} className="group">
                <h3 className="text-xl group-hover:text-pink-500 transition-colors border-b pb-1">
                  KVUC, HF
                </h3>
                <div className="flex justify-between text-l mt-2">
                  <p className="text-gray-600 flex-1">Upper Secondary Education</p>
                  <p className="text-gray-500 flex-2">2020 - 2022</p>
                </div>
              </motion.div>

              <motion.div variants={item} className="group">
                <h3 className="text-xl group-hover:text-pink-500 transition-colors border-b pb-1">
                  Matas
                </h3>
                <div className="flex justify-between text-l mt-2">
                  <p className="text-gray-600 flex-1">Materalist Education</p>
                  <p className="text-gray-500 flex-2">2016 - 2018</p>
                </div>
              </motion.div>
            </div>
          </div>

          <div>
            <h2 className="text-3xl mb-8 bg-gradient-to-r from-indigo-500 to-pink-500 bg-clip-text text-transparent">
              Experience
            </h2>
            <div className="space-y-8">
              <motion.div variants={item} className="group">
                <h3 className="text-xl group-hover:text-pink-500 transition-colors border-b pb-1">
                  Tutor at KEA
                </h3>
                <div className="flex justify-between text-l mt-2">
                  <p className="text-gray-600 flex-1">Multimediadesign tutor</p>
                  <p className="text-gray-500 flex-2">2024 - Now</p>
                </div>
              </motion.div>

              <motion.div variants={item} className="group">
                <h3 className="text-xl group-hover:text-pink-500 transition-colors border-b pb-1">
                  Wonderworks
                </h3>
                <div className="flex justify-between text-l mt-2">
                  <p className="text-gray-600 flex-1">Creative Lead</p>
                  <p className="text-gray-500 flex-2">2024 - Now</p>
                </div>
              </motion.div>

              <motion.div variants={item} className="group">
                <h3 className="text-xl group-hover:text-pink-500 transition-colors border-b pb-1">
                  Matas
                </h3>
                <div className="flex justify-between text-l mt-2">
                  <p className="text-gray-600 flex-1">Part Time Sales Assistant</p>
                  <p className="text-gray-500 flex-2">2020 - 2023</p>
                </div>
                <div className="flex justify-between text-l mt-3">
                  <p className="text-gray-600 flex-1">Full Time Sales Assistant</p>
                  <p className="text-gray-500 flex-2">2018 - 2020</p>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.section>

        <motion.div variants={item} className="mt-20 mb-20">
          <h2 className="text-3xl mb-8 bg-gradient-to-r from-indigo-500 to-pink-500 bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {experience.map((item, index) => (
              <motion.div
                key={item}
                variants={{
                  hidden: { opacity: 0, scale: 0.8 },
                  show: { opacity: 1, scale: 1, transition: { delay: index * 0.1 } },
                }}
              >
                <Chip
                  classNames={{
                    base: 'bg-gradient-to-br from-indigo-500 to-pink-500 border-small border-white/50 shadow-pink-500/30 w-full',
                    content: 'drop-shadow shadow-black text-white text-center',
                  }}
                  variant="shadow"
                >
                  {item}
                </Chip>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.section>
      <WaveBottom />
    </>
  );
}
