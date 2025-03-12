import Hero from '@/components/hero';
import { FocusCards } from '@/components/ui/focus-cards';

export default function Home() {
  const cards = [
    {
      title: 'jOUXli',
      src: '/jouxli_cover.png',
      href: '/project/jouxli',
    },
    {
      title: 'Wonderful CPH',
      src: '/acityforall_cover.webp',
      href: '/project/wonderfulcph',
    },
    {
      title: 'Superkilen',
      src: '/superkilen_cover.png',
      href: '/project/superkilen',
    },
    {
      title: 'Wonderworks',
      src: '/wonderworks_cover.png',
      href: '/project/wonderworks',
    },
  ];

  return (
    <>
      <section>
        <Hero />
        <div className="flex flex-col gap-4 -m-20 pb-10">
          <h2 className="text-2xl text-center mb-36">Check out my projects</h2>
          <FocusCards cards={cards} />
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
  );
}
