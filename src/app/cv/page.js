import Image from "next/image";
import Link from "next/link";
export default function CV() {
  return (
    <>
      <section className="flex flex-col justify-center max-w-[1200px] mx-auto">
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
        <section className="grid grid-cols-2 mt-10 gap-10">
          <h1 className="text-3xl">Education</h1>
          <h1 className="text-3xl">Experience</h1>
          <div className="education">
            <h2 className="text-xl">Copenhagen School of Design and Technology</h2>
            <div className="flex justify-between text-l mt-5">
              <p>Bachelor of Digital Concept Development</p>
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
          <div className="experience">
            <h2 className="text-xl">Tutor</h2>
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
        <h1>Familiarity with</h1>
        <p>UX Research</p>
        <p>Concept Development</p>
        <p>UI & UX Design</p>
        <p>Design Thinking</p>
        <p>Webdesign</p>
        <p>Marketing</p>
        <p>Frontend Development</p>
        <p>Branding</p>
      </section>
    </>
  );
}
