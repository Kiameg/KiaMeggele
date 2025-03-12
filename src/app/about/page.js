import Image from "next/image";



export default function About() {
  return (
    <>
      <section>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#DFCCDB"
            fillOpacity="1"
            d="M0,128L60,144C120,160,240,192,360,186.7C480,181,600,139,720,133.3C840,128,960,160,1080,176C1200,192,1320,192,1380,192L1440,192L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
          ></path>
        </svg>
      </section>
      <section className=" max-w-[1000px] grid grid-cols-2 justify-center align-center mx-auto gap-11 -m-28">
        <div>
          <h1 className="text-3xl">About me</h1>
          <p className="mt-7">
            My name is Kia, and I am a passionate and creative woman dedicated to developing digital solutions that make a real impact. I have a background in Multimedia Design and Digital Concept Development, which has given me a strong foundation in mixing creativity with strategy to create meaningful experiences.
            I currently work at WonderWorks, a digital agency where I focus on marketing, web design, frontend development, and digital concepts.
          </p>
          <p className="mt-4"> With years of experience in sales and customer service, I have gained valuable insights into communication, customer experience, and user needs. This allows me to approach every project with a deep understanding of how to create solutions that don’t just look good but truly connect with people.
            I thrive in collaborative environments where different perspectives come together to build something greater, and I am always excited to take on projects that challenge me to grow.</p>
          <p className="mt-4"> I am currently looking for work or an internship where I can further develop my skills and contribute to creating digital solutions that are both visually compelling and functionally impactful.</p>
          <p className="mt-7 text-xl">Want to know more about me?</p>
          <p>Feel free to catch me on <a className="underline hover:text-[#ff8cb8]" href="mailto:kiameggele@gmail.com">email</a> or <a className="underline hover:text-[#ff8cb8]" href="https://www.linkedin.com/in/kia-meggele-042705208">Linkedin</a></p>
        </div>
        <div>
          <Image src="/me2.jpeg" width={500} height={700} className="object-cover rounded-2xl h-full" alt="Portrait" />
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

  )
}