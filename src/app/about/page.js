'use client';

import WaveBottom from '@/components/wave-bottom';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { IconCode, IconPalette, IconBulb, IconUsers } from '@tabler/icons-react';

export default function About() {
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

  const passions = [

    {
      icon: <IconPalette size={24} />,
      title: 'Design',
      description: 'UI/UX design that combines aesthetics with user-centered functionality',
    },
    {
      icon: <IconBulb size={24} />,
      title: 'Innovation',
      description: 'Creative problem-solving and concept development for digital solutions',
    },
    {
      icon: <IconUsers size={24} />,
      title: 'Collaboration',
      description: 'Working with teams to bring diverse perspectives together',
    },
  ];

  return (
    <>
      <motion.section
        initial="hidden"
        animate="show"
        variants={container}
        className="max-w-[1000px] mx-auto px-4 md:px-0 mt-32 mb-20"
      >
        <motion.div className="grid md:grid-cols-2 gap-10 items-start">
          <motion.div variants={item} className="order-2 md:order-1">
            <h1 className="text-4xl md:text-5xl mb-8 bg-gradient-to-r from-[#ad87c7] to-[#fad3e2] bg-clip-text text-transparent">
              About me
            </h1>

            <motion.div variants={item} className="space-y-6 text-gray-600">
              <p className="leading-relaxed">
                My name is Kia, and I am a passionate and creative woman dedicated to developing
                solutions that make a real impact. I have a background in Multimedia Design
                and Digital Concept Development, which has teached me that good concepts balances aesthetics, function and user experience.
              </p>

              <p className="leading-relaxed">
                I currently work at WonderWorks, a digital agency where I focus on marketing, web
                design, frontend development, and concept development.
              </p>

              <p className="leading-relaxed">
                With years of experience in sales and customer service, I have gained valuable
                insights into communication, customer experience, and user needs. This allows me to
                approach every project with a deep understanding of how to create solutions that
                don&apos;t just look good but truly connect with people.
              </p>

              <p className="leading-relaxed">
                I thrive in collaborative environments where different perspectives come together to
                build something greater, and I am always excited to take on projects that challenge
                me to grow.
              </p>

              <p className="leading-relaxed">
                I am currently looking for work or an internship where I can further develop my
                skills and contribute to creating solutions and concepts that are both visually
                compelling and functionally impactful.
              </p>
            </motion.div>
          </motion.div>

          <motion.div variants={item} className="order-1 md:order-2 space-y-10">
            <div className="flex justify-center">
              <div className="relative w-64 h-64">
                <Image
                  src="/me2.jpeg"
                  fill
                  className="drop-shadow-lg object-cover rounded-2xl transition-transform duration-300 group-hover:scale-[1.02]"
                  alt="Portrait of Kia Meggele"
                  sizes="(max-width: 768px) 100vw, 256px"
                  priority
                />
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#ad87c7] to-[#fad3e2] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </div>

            <div className="hidden md:block">
              <h2 className="text-2xl mb-6 bg-gradient-to-r from-[#ad87c7] to-[#fad3e2] bg-clip-text text-transparent">
                What Drives Me
              </h2>
              <div className="grid grid-cols-1 gap-4">
                {passions.map((passion, index) => (
                  <motion.div
                    key={passion.title}
                    variants={{
                      hidden: { opacity: 0, y: 20 },
                      show: {
                        opacity: 1,
                        y: 0,
                        transition: { delay: index * 0.1 },
                      },
                    }}
                    className="group p-4 rounded-lg bg-white border border-gray-100 hover:border-pink-200 transition-all duration-300 hover:shadow-lg"
                  >
                    <div className="flex items-center gap-3">
                      <div className="text-[#ad87c7] group-hover:text-pink-500 transition-colors duration-300">
                        {passion.icon}
                      </div>
                      <h3 className="text-lg font-medium text-gray-800">{passion.title}</h3>
                    </div>
                    <p className="text-sm text-gray-600 mt-2">{passion.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>

        <motion.div variants={item} className="mt-20 md:hidden">
          <h2 className="text-2xl mb-6 bg-gradient-to-r from-[#ad87c7] to-[#fad3e2] bg-clip-text text-transparent">
            What Drives Me
          </h2>
          <div className="grid grid-cols-1 gap-4">
            {passions.map((passion, index) => (
              <motion.div
                key={passion.title}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  show: {
                    opacity: 1,
                    y: 0,
                    transition: { delay: index * 0.1 },
                  },
                }}
                className="group p-4 rounded-lg bg-white border border-gray-100 hover:border-pink-200 transition-all duration-300 hover:shadow-lg"
              >
                <div className="flex items-center gap-3">
                  <div className="text-[#ad87c7] group-hover:text-pink-500 transition-colors duration-300">
                    {passion.icon}
                  </div>
                  <h3 className="text-lg font-medium text-gray-800">{passion.title}</h3>
                </div>
                <p className="text-sm text-gray-600 mt-2">{passion.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.section>
      <WaveBottom />
    </>
  );
}
