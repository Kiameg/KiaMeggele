import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative w-full min-h-[80vh] md:min-h-screen">
      {/* Background Image */}
      <div className="absolute inset-0 -z-0">
        <Image
          src="/bund.png"
          alt="Background"
          fill
          priority
          quality={90}
          className="image object-fill object-center"
          sizes="100vw"
        />
      </div>
      <section className="h-[700px] py-8 max-w-[1000px] mx-auto relative z-10 justify-center align-center grid grid-cols-[1fr,1.8fr,1fr,1fr] grid-rows-3 gap-4">
        <div className="bg-white rounded-2xl flex justify-center items-center">logo</div>
        <div className="bg-white rounded-2xl flex justify-center items-center">project1</div>
        <div className="bg-white rounded-2xl col-span-2 flex justify-center items-center">All projects</div>
        <div className="bg-white rounded-2xl row-span-2 h-full flex justify-center items-center"> <Image src={"/me2.jpeg"} width={500} height={700} className="object-cover rounded-2xl h-full" alt="yes" /></div>
        <div className="bg-white rounded-2xl flex justify-center items-center">project2</div>
        <div className="bg-white rounded-2xl row-span-2 flex justify-center items-center">Contact</div>
        <div className="bg-white rounded-2xl row-span-2 flex justify-center items-center">CV</div>
        <div className="bg-white rounded-2xl flex justify-center items-center">project3</div>
      </section>
    </section>
  );
}