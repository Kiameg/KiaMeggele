import Hero from '@/components/hero';
import { FocusCards } from '@/components/ui/focus-cards';
import WaveBottom from '@/components/wave-bottom';

export default function Home() {
  const cards = [
    {
      title: 'jOUXli',
      src: '/jouxli_cover.webp',
      href: '/project/jouxli',
    },
    {
      title: 'Wonderful CPH',
      src: '/acityforall_cover.webp',
      href: '/project/wonderfulcph',
    },
    {
      title: 'Superkilen',
      src: '/superkilen_cover.webp',
      href: '/project/superkilen',
    },
    {
      title: 'Wonderworks',
      src: '/wonderworks_cover.webp',
      href: '/project/wonderworks',
    },
  ];

  return (
    <>
      <section>
        <div>
          <Hero />
        </div>
        <div className="flex flex-col gap-4 px-4">
          <h2 className="text-2xl text-center">Check out my projects</h2>
          <div>
            <FocusCards cards={cards} />
          </div>
        </div>
      </section>
      <WaveBottom />
    </>
  );
}
