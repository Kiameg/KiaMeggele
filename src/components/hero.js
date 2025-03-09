import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <>

      <section className="h-[700px] py-8 max-w-[1000px] mx-auto relative z-10 justify-center align-center grid grid-cols-[1fr,1.8fr,1fr,1fr] grid-rows-3 gap-4 drop-shadow-md">

        <div className="bg-white rounded-2xl flex justify-center items-center">logo</div>

        {/* Image with Hover Effect */}
        <div className="relative bg-white rounded-2xl flex justify-center items-center overflow-hidden cursor-pointer">
          <Image src="/wonderworks_cover.png" width={500} height={700} className="object-cover rounded-2xl h-full" alt="Wonderworks" />
          <div className="absolute inset-0 bg-white bg-opacity-0 flex flex-col justify-center items-center text-black text-xl opacity-0 transition-all duration-300 hover:bg-opacity-50 hover:opacity-100">
            <h2 className="text-black text-3xl">Wonderworks</h2>
            <p className="underline mt-2">See more</p>
          </div>
        </div>

        <div className="bg-white rounded-2xl col-span-2 flex justify-center items-center">
          <Link href="/overview">All projects</Link>
        </div>

        {/* Image with Hover Effect */}
        <div className="relative bg-white rounded-2xl row-span-2 h-full flex justify-center items-center overflow-hidden cursor-pointer">
          <Image src="/me2.jpeg" width={500} height={700} className="object-cover rounded-2xl h-full" alt="Photo of me" />
          <div className="absolute inset-0 bg-white bg-opacity-0 flex justify-center items-center text-black text-xl opacity-0 transition-all duration-300 hover:bg-opacity-50 hover:opacity-100">
            <h2 className="underline mt-2 text-3xl">About Me</h2>
          </div>
        </div>

        {/* Image with Hover Effect */}
        <div className="relative bg-white rounded-2xl flex justify-center items-center overflow-hidden cursor-pointer">
          <Image src="/wonderful_cph.png" width={500} height={700} className="object-cover rounded-2xl h-full" alt="Wonderful CPH Case" />
          <div className="absolute inset-0 bg-white bg-opacity-0 flex flex-col justify-center items-center opacity-0 transition-all duration-300 hover:bg-opacity-50 hover:opacity-100">
            <h2 className="text-black text-3xl">A City For All</h2>
            <p className="underline mt-2">See more</p>
          </div>
        </div>

        <div className="bg-white rounded-2xl row-span-2 flex justify-center items-center">Contact</div>
        <div className="bg-white rounded-2xl row-span-2 flex justify-center items-center">CV</div>

        {/* Image with Hover Effect */}
        <div className="relative bg-white rounded-2xl flex justify-center items-center overflow-hidden cursor-pointer">
          <Image src="/jouxli_cover.png" width={500} height={700} className="object-cover rounded-2xl h-full" alt="Jouxli Case" />
          <div className="absolute inset-0 bg-white bg-opacity-0 flex flex-col justify-center items-center opacity-0 transition-all duration-300 hover:bg-opacity-50 hover:opacity-100">
            <h2 className="text-black text-3xl">jOUXli</h2>
            <p className="underline mt-2">See more</p>
          </div>
        </div>

      </section>
    </>
  );
}