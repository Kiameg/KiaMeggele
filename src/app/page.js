import Hero from "@/components/hero";
import Footer from "@/components/footer";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Hero />
      <div>
        <Image className="w-full" src={"/mid.png"} width={1000} height={1000} alt="Mid background"></Image>
      </div>
      <Footer />
    </>
  );
}



