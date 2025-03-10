import Image from "next/image"



export default function Footer() {

  return (
    <footer className="z-10 relative bg-[#e2cbdc] flex flex-col-2 items-center items p-20 justify-between">
      <div>
        <h1 className="text-3xl">Are we a match?</h1>
        <p className="mt-4">Have questions? I have answers (and snacks).</p>
      </div>
      <div className="">
        <h2 className="text-xl underline">Contact</h2>
        <div className="flex gap-10">
          <p>Email</p>
          <a className="underline hover:text-[#ff8cb8]" href="mailto:kiameggele@gmail.com">kiameggele@gmail.com</a>
        </div>
        <Image src="/linkedin.svg" width={20} height={20} alt="Linkedin"></Image>
      </div>
    </footer>

  )
}