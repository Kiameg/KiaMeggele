"use client";

import Image from "next/image";
import { useRef } from "react";
import Link from 'next/link';

export default function Hero() {
  return (

    <section className="h-[700px] py-8 max-w-[1000px] mx-auto relative z-10 justify-center align-center grid grid-cols-[1fr,1.8fr,1fr,1fr] grid-rows-3 gap-4">
      <div className="bg-white rounded-2xl flex justify-center items-center">logo</div>
      <HoverVideo src="/wonderworks.png" />
      <div className="bg-white rounded-2xl col-span-2 flex justify-center items-center"><Link href="/overview">All projects</Link></div>
      <HoverVideo src="/me2.jpeg" className="row-span-2" />
      <HoverVideo src="/wonderful_cph.png" videoSrc="/videos/cityforAll_cover_vid.mp4" />
      <div className="bg-white rounded-2xl row-span-2 flex justify-center items-center">Contact</div>
      <div className="bg-white rounded-2xl row-span-2 flex justify-center items-center">CV</div>
      <HoverVideo src="/jouxli.png" videoSrc="/videos/Jouxli_cover_vid.mp4" />
    </section>

  );
}

function HoverVideo({ src, videoSrc = null, className = "" }) {
  const videoRef = useRef(null);
  const hasVideo = Boolean(videoSrc);

  return (
    <div className={`bg-white rounded-2xl flex justify-center items-center overflow-hidden ${className}`}>
      {hasVideo ? (
        <video
          ref={videoRef}
          className="object-cover rounded-2xl h-full w-full"
          loop
          muted
          playsInline
          preload="metadata" //  Load only metadata, avoid browser canceling fetch
          poster={src} // Static image before hover
          onMouseEnter={() => {
            if (videoRef.current) {
              videoRef.current.load(); //  Load video before play
              videoRef.current.currentTime = 0;
              videoRef.current.play().catch((err) => console.error("Playback failed:", err));
            }
          }}
          onMouseLeave={() => {
            if (videoRef.current) {
              videoRef.current.pause();
              videoRef.current.currentTime = 0;
            }
          }}
        >
          <source src={videoSrc} type="video/mp4" />
        </video>
      ) : (
        <Image src={src} width={500} height={700} className="object-cover rounded-2xl h-full" alt="hover-content" />
      )}
    </div>
  );
}
