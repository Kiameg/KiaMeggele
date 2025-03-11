import Image from "next/image"
import styles from '@/styles/gradient.module.css';


export default function Footer() {

  return (
    <div className={`${styles.gradientReverse}`}>
      <footer className="flex flex-col-2 mx-auto justify-between max-w-[1000px] pb-32">
        <div>
          <h1 className="text-5xl">Are we a match?</h1>
          <p className="mt-4">Have questions? I have answers (and snacks).</p>
        </div>
        <div className="">
          <h2 className="text-xl underline">Contact</h2>
          <div className="flex gap-10 mt-4">
            <p>Email</p>
            <a className="underline hover:text-[#ff8cb8]" href="mailto:kiameggele@gmail.com">kiameggele@gmail.com</a>
          </div>
          <Image className="mt-4" src="/linkedin.svg" width={20} height={20} alt="Linkedin"></Image>
        </div>
      </footer>
    </div>

  )
}