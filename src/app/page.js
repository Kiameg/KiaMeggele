import Hero from "@/components/hero";
import Image from "next/image";
import Footer from "@/components/footer";

export default function Home() {
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
      <Hero />
      <Footer />
    </section>
  );
}



