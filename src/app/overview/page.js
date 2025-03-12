import Image from 'next/image';
import Link from 'next/link';
export default function Overview() {
  return (
    <>
      <h1 className="text-center mb-20 mt-20 text-3xl">All projects</h1>

      <section className="grid grid-cols-[450px,450px,450px] grid-rows-[420px,420px] items-center justify-items-center justify-center gap-4 mb-20 ">
        <Link href={`/project/jouxli`}>
          <div className="relative h-[370px] w-[450px]  cursor-pointer group">
            <Image
              className="h-full w-full object-cover rounded-2xl"
              src="/jouxli_cover.webp"
              width={400}
              height={400}
              alt="Jouxli projekt"
            />
            <div className="absolute top-0 left-0 w-full h-full bg-white opacity-0 rounded-2xl transition-opacity duration-300 group-hover:opacity-40"></div>
            <h2 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-black text-3xl opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              jOUXli
            </h2>
          </div>
        </Link>

        <Link href={`/project/superkilen`}>
          <div className="relative h-[370px] w-[450px] cursor-pointer group">
            <Image
              className="h-full w-full object-cover rounded-2xl"
              src="/superkilen_cover.webp"
              width={400}
              height={400}
              alt="Superkilen projekt"
            />
            <div className="absolute top-0 left-0 w-full h-full bg-white opacity-0 rounded-2xl transition-opacity duration-300 group-hover:opacity-40"></div>
            <h2 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-black text-3xl opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              Superkilen
            </h2>
          </div>
        </Link>

        <Link href={`/project/wonderworks`}>
          <div className="relative h-[370px] w-[450px] cursor-pointer group">
            <Image
              className="h-full w-full object-cover rounded-2xl"
              src="/wonderworks_cover.webp"
              width={400}
              height={400}
              alt="Wonderworks"
            />
            <div className="absolute top-0 left-0 w-full h-full bg-white opacity-0 rounded-2xl transition-opacity duration-300 group-hover:opacity-40"></div>
            <h2 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-black text-3xl opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              Wonderworks
            </h2>
          </div>
        </Link>

        <Link href={`/project/uldahl`}>
          <div className="relative h-[370px] w-[450px] cursor-pointer group">
            <Image
              className="h-full w-full object-cover rounded-2xl"
              src="/uldahl_cover.webp"
              width={400}
              height={400}
              alt="Uldahl bedemand projekt"
            />
            <div className="absolute top-0 left-0 w-full h-full bg-white opacity-0 rounded-2xl transition-opacity duration-300 group-hover:opacity-40"></div>
            <h2 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-black text-3xl opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              Uldahl
            </h2>
          </div>
        </Link>

        <Link href={`/project/wonderfulcph`}>
          <div className="relative h-[370px] w-[450px] cursor-pointer group">
            <Image
              className="h-full w-full object-cover rounded-2xl"
              src="/cityforall_cover.webp"
              width={400}
              height={400}
              alt="City for All projekt"
            />
            <div className="absolute top-0 left-0 w-full h-full bg-white opacity-0 rounded-2xl transition-opacity duration-300 group-hover:opacity-40"></div>
            <h2 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-black text-3xl opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              A City For All
            </h2>
          </div>
        </Link>
      </section>
    </>
  );
}
