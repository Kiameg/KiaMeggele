import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative w-full min-h-[80vh] md:min-h-screen">
      {/* Background Image */}
      <div className="absolute inset-0 -z-0">
        <Image
          src="/forside_2.png"
          alt="Background"
          fill
          priority
          quality={90}
          className="object-fill object-center"
          sizes="100vw"
        />
      </div>

      {/* Content Container */}
      <div className="relative z-10 container mx-auto px-4 h-full min-h-[80vh] md:min-h-screen flex items-center justify-center">
        <div className="w-full max-w-6xl">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 lg:gap-16">
            {/* Profile Image - Left on desktop */}
            <div className="w-full max-w-[300px] md:w-1/2 lg:max-w-[400px] order-1 md:order-none">
              <div className="relative aspect-square">
                <Image
                  src="/me.png"
                  alt="Picture of me"
                  fill
                  priority
                  quality={90}
                  className="rounded-full object-cover border-4 border-white shadow-xl"
                  sizes="(max-width: 768px) 90vw, (max-width: 1200px) 40vw, 30vw"
                />
              </div>
            </div>

            {/* Text Content - Right on desktop */}
            <div className="w-full md:w-1/2 text-center md:text-left space-y-6 md:space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold">
                  Welcome!
                </h1>
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold">
                  I am Kia
                </h1>
              </div>

              <p className="text-lg md:text-xl lg:text-2xl">
                As a student in digital concept development, I prioritize understanding user needs to shape meaningful solutions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}