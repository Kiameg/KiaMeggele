"use client"

import Image from "next/image";
import Link from "next/link";
import { Chip } from "@heroui/react";


export default function CV() {
  return (
    <>
      <section>
        <section>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill="#DFCCDB"
              fillOpacity="1"
              d="M0,128L60,144C120,160,240,192,360,186.7C480,181,600,139,720,133.3C840,128,960,160,1080,176C1200,192,1320,192,1380,192L1440,192L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
            ></path>
          </svg>
        </section>
        <div className="flex flex-col justify-center max-w-[1000px] mx-auto -m-40 ">
          <div className="flex justify-between items-center w-full">
            <h1 className="text-4xl">Kia Meggele</h1>
            <div className="w-40 h-40 overflow-hidden rounded-full">
              <Image
                src="/me2.jpeg"
                width={160}
                height={160}
                className="rounded-full object-cover"
                alt="Photo of me"
              />
            </div>
          </div>
          <section className="grid grid-cols-2 mt-10 gap-10 ">
            <h1 className="text-3xl">Education</h1>
            <h1 className="text-3xl pl-14">Experience</h1>
            <div className="education pr-14 ">
              <h2 className="text-xl">Copenhagen School of Design and Technology</h2>
              <div className="flex justify-between text-l mt-5">
                <p>BA in Digital Concept Development</p>
                <p>2024 - Now</p>
              </div>
              <div className="flex justify-between text-l mt-5">
                <p>AP Graduate in Multimedia Design</p>
                <p>2022 - 2024</p>
              </div>
              <div className="mt-7">
                <h2 className="text-xl">KVUC, HF</h2>
                <div className="flex justify-between text-l mt-2">
                  <p>Upper Secondary Education</p>
                  <p>2020 - 2022</p>
                </div>
              </div>
              <div className="mt-7">
                <h2 className="text-xl">Matas</h2>
                <div className="flex justify-between text-l mt-2">
                  <p>Materalist Education</p>
                  <p>2016 - 2018</p>
                </div>
              </div>
            </div>
            <div className="experience pl-14">
              <h2 className="text-xl">Tutor at KEA</h2>
              <div className="flex justify-between text-l mt-2">
                <p>Multimediadesign tutor</p>
                <p>2024 - Now</p>
              </div>
              <div className="mt-7">
                <h2 className="text-xl">Wonderworks</h2>
                <div className="flex justify-between text-l mt-2">
                  <p>Creative Lead</p>
                  <p>2024 - Now</p>
                </div>
              </div>
              <div className="mt-7">
                <h2 className="text-xl">Matas</h2>
                <div className="flex justify-between text-l mt-2">
                  <p>Part Time Sales Assistent</p>
                  <p>2020 - 2023</p>
                </div>
                <div className="flex justify-between text-l mt-5">
                  <p>Full Time Sales Assistant</p>
                  <p>2018 - 2020</p>
                </div>
              </div>
            </div>
          </section>

          <div className="text-3xl mt-20 max-w-[400px] mb-10">
            <h1>Experience with</h1>
            <div className="">
              <Chip
                classNames={{ base: "bg-gradient-to-br from-indigo-500 to-pink-500 border-small border-white/50 shadow-pink-500/30", content: "drop-shadow shadow-black text-white", }} variant="shadow">
                UX Research
              </Chip>
              <Chip
                classNames={{ base: "bg-gradient-to-br from-indigo-500 to-pink-500 border-small border-white/50 shadow-pink-500/30", content: "drop-shadow shadow-black text-white", }} variant="shadow">
                Concept Development
              </Chip>
              <Chip
                classNames={{ base: "bg-gradient-to-br from-indigo-500 to-pink-500 border-small border-white/50 shadow-pink-500/30", content: "drop-shadow shadow-black text-white", }} variant="shadow">
                UI & UX Design
              </Chip>
              <Chip
                classNames={{ base: "bg-gradient-to-br from-indigo-500 to-pink-500 border-small border-white/50 shadow-pink-500/30", content: "drop-shadow shadow-black text-white", }} variant="shadow">
                Design Thinking
              </Chip>
              <Chip
                classNames={{ base: "bg-gradient-to-br from-indigo-500 to-pink-500 border-small border-white/50 shadow-pink-500/30", content: "drop-shadow shadow-black text-white", }} variant="shadow">
                Webdesign
              </Chip>
              <Chip
                classNames={{ base: "bg-gradient-to-br from-indigo-500 to-pink-500 border-small border-white/50 shadow-pink-500/30", content: "drop-shadow shadow-black text-white", }} variant="shadow">
                Marketing
              </Chip>
              <Chip
                classNames={{ base: "bg-gradient-to-br from-indigo-500 to-pink-500 border-small border-white/50 shadow-pink-500/30", content: "drop-shadow shadow-black text-white", }} variant="shadow">
                Frontend Development
              </Chip>
            </div>
          </div>
        </div>
      </section>
      <section>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#DFCCDB"
            fillOpacity="1"
            d="M0,128L60,144C120,160,240,192,360,186.7C480,181,600,139,720,133.3C840,128,960,160,1080,176C1200,192,1320,192,1380,192L1440,192L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
          ></path>
        </svg>
      </section>

    </>
  );
}
