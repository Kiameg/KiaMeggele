import Image from 'next/image';
import styles from './gradient.module.css';
import NotFound from '@/app/not-found';
import DOMPurify from 'isomorphic-dompurify';

export default async function Projectview({ params }) {
  const PROJECTSDATA = {
    jouxli: {
      title: 'Jouxli',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      description2:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      problem:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      heroImage: '/jouxli_cover.png',
      appImage1: '/jouxli_app1.png',
      appImage2: '/jouxli_app2.png',
      research1: 'lorem ipsum dolor sit amet lorem ipsum dolor sit amet',
      research2: 'lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet',
      research3:
        'lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit ametlorem ipsum dolor sit amet',
      research4: 'lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet',
      solutionDescriptionHtml: `<p>lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet</p>
        <br />
        <p>lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet</p>
        <br />
        <p>We did this by: </p>
        <ul>
          <li>lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet</li>
          <li>lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet</li>
          <li>lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet</li>
        </ul>
        `,
      solutionImage: '/jouxli_cover.png',
    },
    tapnplan: {
      title: 'Tapnplan',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      description2:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      problem:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      heroImage: '/meal_cover.png',
      appImage1: '/tapnplan_app1.png',
      appImage2: '/tapnplan_app2.png',
      research1: 'lorem ipsum dolor sit amet lorem ipsum dolor sit amet',
      research2: 'lorem ipsum dolor sit amet lorem ipsum dolor sit amet',
      research3: 'lorem ipsum dolor sit amet lorem ipsum dolor sit amet',
      research4: 'lorem ipsum dolor sit amet lorem ipsum dolor sit amet',
      solutionDescriptionHtml: `<p>lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet</p>
        <br />
        <p>lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet</p>
        <br />
        <p>We did this by: </p>
        <ul>
          <li>lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet</li>
          <li>lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet</li>
          <li>lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet</li>
        </ul>
        `,
      solutionImage: '/tapnplan_solution.png',
    },
    superkilen: {
      title: 'Superkilen',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      description2:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      problem:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      heroImage: '/Superkilen_cover.png',
      appImage1: '/superkilen_app1.png',
      appImage2: '/superkilen_app2.png',
      research1: 'lorem ipsum dolor sit amet lorem ipsum dolor sit amet',
      research2: 'lorem ipsum dolor sit amet lorem ipsum dolor sit amet',
      research3: 'lorem ipsum dolor sit amet lorem ipsum dolor sit amet',
      research4: 'lorem ipsum dolor sit amet lorem ipsum dolor sit amet',
      solutionDescriptionHtml: `<p>lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet</p>
        <br />
        <p>lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet</p>
        <br />
        <p>We did this by: </p>
        <ul>
          <li>lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet</li>
          <li>lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet</li>
          <li>lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet</li>
        </ul>
        `,
      solutionImage: '/superkilen_solution.png',
    },
    wonderworks: {
      title: 'Wonderworks',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      description2:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      problem:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      heroImage: '/wonderworks_cover.png',
      appImage1: '/wonderworks_app1.png',
      appImage2: '/wonderworks_app2.png',
      research1: 'lorem ipsum dolor sit amet lorem ipsum dolor sit amet',
      research2: 'lorem ipsum dolor sit amet lorem ipsum dolor sit amet',
      research3: 'lorem ipsum dolor sit amet lorem ipsum dolor sit amet',
      research4: 'lorem ipsum dolor sit amet lorem ipsum dolor sit amet',
      solutionDescriptionHtml: `<p>lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet</p>
        <br />
        <p>lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet</p>
        <br />
        <p>We did this by: </p>
        <ul>
          <li>lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet</li>
          <li>lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet</li>
          <li>lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet</li>
        </ul>
        `,
      solutionImage: '/wonderworks_solution.png',
    },
    uldahl: {
      title: 'Uldahl',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      description2:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      problem:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      heroImage: '/uldahl_cover.png',
      appImage1: '/uldahl_app1.png',
      appImage2: '/uldahl_app2.png',
      research1: 'lorem ipsum dolor sit amet lorem ipsum dolor sit amet',
      research2: 'lorem ipsum dolor sit amet lorem ipsum dolor sit amet',
      research3: 'lorem ipsum dolor sit amet lorem ipsum dolor sit amet',
      research4: 'lorem ipsum dolor sit amet lorem ipsum dolor sit amet',
      solutionDescriptionHtml: `<p>lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet</p>
        <br />
        <p>lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet</p>
        <br />
        <p>We did this by: </p>
        <ul>
          <li>lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet</li>
          <li>lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet</li>
          <li>lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet</li>
        </ul>
        `,
      solutionImage: '/uldahl_solution.png',
    },
    wonderfulcph: {
      title: 'Wonderful Copenhagen',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      description2:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      problem:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      heroImage: '/wonderful_cph.png',
      appImage1: '/wonderfulcph_app1.png',
      appImage2: '/wonderfulcph_app2.png',
      research1: 'lorem ipsum dolor sit amet lorem ipsum dolor sit amet',
      research2: 'lorem ipsum dolor sit amet lorem ipsum dolor sit amet',
      research3: 'lorem ipsum dolor sit amet lorem ipsum dolor sit amet',
      research4: 'lorem ipsum dolor sit amet lorem ipsum dolor sit amet',
      solutionDescriptionHtml: `<p>lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet</p>
        <br />
        <p>lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet</p>
        <br />
        <p>We did this by: </p>
        <ul className="hidden">
          <li>lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet</li>
          <li>lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet</li>
          <li>lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet</li>
        </ul>
        `,
      solutionImage: '/wonderfulcph_solution.png',
    },
  };

  const { projectname } = await params;
  const cleanHtml = DOMPurify.sanitize(PROJECTSDATA[projectname]?.solutionDescriptionHtml);

  // If the projectname is not found, return the NotFound component which is a custom 404 page
  if (!PROJECTSDATA[projectname]) {
    return <NotFound />;
  }

  return (
    <>
      {/* Hero area */}
      <section className={`${styles.gradient} flex flex-col items-center justify-center py-12`}>
        <div className="py-20">
          {/* Hero title */}
          <h1 className="text-5xl font-light mb-4 text-center">
            {PROJECTSDATA[projectname]?.title}
          </h1>
          {/* Hero links */}
          <div className="flex gap-2">
            <a className="underline" href="#problem-area">
              Problem area
            </a>
            <span>|</span>
            <a className="underline" href="#solution">
              Solution
            </a>
          </div>
        </div>

        <div className="grid grid-cols-[1fr_3fr_1fr] grid-rows-1 w-full items-center">
          <div className="w-1/2 h-0.5 bg-black"></div>
          <div className="w-full relative aspect-video">
            {/* Hero image */}
            <Image
              src={PROJECTSDATA[projectname]?.heroImage}
              alt={PROJECTSDATA[projectname]?.title}
              fill
              className="object-cover rounded-lg"
              priority
            />
          </div>
          <div className="w-1/2 h-0.5 bg-black justify-self-end"></div>
        </div>
      </section>

      {/* Wave SVG Top */}
      <section>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#e6e4e8"
            fillOpacity="1"
            d="M0,128L60,144C120,160,240,192,360,186.7C480,181,600,139,720,133.3C840,128,960,160,1080,176C1200,192,1320,192,1380,192L1440,192L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
          ></path>
        </svg>
      </section>

      {/* Problem area */}
      <section id="problem-area" className="md:max-w-6xl md:mx-auto md:pb-24 md:pt-0 py-12 px-4">
        {/* Problem area title */}
        <h2 className="text-4xl font-light pb-4">Problem area</h2>
        {/* Problem area grid */}
        <div className="md:grid md:grid-cols-2 flex flex-col gap-8">
          {/* Problem area description */}
          <div className="space-y-6 border-t border-black pt-4">
            {/* Description 1*/}
            <p className="">{PROJECTSDATA[projectname]?.description}</p>
            {/* Description 2*/}
            <p className="">{PROJECTSDATA[projectname]?.description2}</p>
            {/* Problem */}
            <div className="bg-[#ddd1e0] rounded-3xl py-14 px-8">
              <p className="text-center font-semibold">{PROJECTSDATA[projectname]?.problem}</p>
            </div>
          </div>
          {/* App images */}
          <div className="md:grid md:grid-cols-[150px_150px] md:gap-8 md:justify-items-center md:justify-self-end flex justify-around">
            {/* App image 1 */}
            <Image
              src={PROJECTSDATA[projectname]?.appImage1}
              alt="Wonderful Copenhagen App Screenshot 1"
              width={150}
              height={320}
              className="object-contain max-h-80"
            />
            {/* App image 2 */}
            <Image
              src={PROJECTSDATA[projectname]?.appImage2}
              alt="Wonderful Copenhagen App Screenshot 2"
              width={150}
              height={320}
              className="object-contain max-h-80 md:self-end"
            />
          </div>
        </div>
      </section>

      {/* Research */}
      <section id="research" className="md:max-w-6xl md:mx-auto md:pt-48 md:pb-0 pt-24 pb-12 px-4">
        {/* Research title */}
        <h3 className="text-4xl font-light pb-4 text-center">Insight from research</h3>
        {/* Research grid */}
        <div className="grid md:grid-cols-2 grid-cols-1 md:gap-y-32 gap-y-10 gap-x-4 items-center justify-items-center pt-8">
          {/* Research 1 */}
          <div className="flex flex-col gap-2 text-center h-full">
            <h3 className="text-6xl font-bold">1</h3>
            <p className="max-w-96">{PROJECTSDATA[projectname]?.research1}</p>
          </div>
          {/* Research 2 */}
          <div className="flex flex-col gap-2 text-center h-full">
            <h3 className="text-6xl font-bold">2</h3>
            <p className="max-w-96">{PROJECTSDATA[projectname]?.research2}</p>
          </div>
          {/* Research 3 */}
          <div className="flex flex-col gap-2 text-center h-full">
            <h3 className="text-6xl font-bold">3</h3>
            <p className="max-w-96">{PROJECTSDATA[projectname]?.research3}</p>
          </div>
          {/* Research 4 */}
          <div className="flex flex-col gap-2 text-center h-full">
            <h3 className="text-6xl font-bold">4</h3>
            <p className="max-w-96">{PROJECTSDATA[projectname]?.research4}</p>
          </div>
        </div>
      </section>

      {/* Wave SVG Bottom */}
      <section>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#e6e4e8"
            fillOpacity="1"
            d="M0,128L60,144C120,160,240,192,360,186.7C480,181,600,139,720,133.3C840,128,960,160,1080,176C1200,192,1320,192,1380,192L1440,192L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
          ></path>
        </svg>
      </section>

      {/* Solution */}
      <div className={`${styles.gradientReverse}`}>
        <section id="solution" className="md:max-w-6xl md:mx-auto pb-24 md:pt-0 pt-12 px-4">
          {/* Solution title */}
          <h3 className="text-4xl font-light pb-4">Solution</h3>
          {/* Solution grid */}
          <div className="md:grid md:grid-cols-2 md:gap-8 flex flex-col gap-12">
            {/* Solution description */}
            <div className={`${styles.solutionDescription}`}>
              <div
                className="border-t border-black pt-4"
                dangerouslySetInnerHTML={{ __html: cleanHtml }}
              />
            </div>
            {/* Solution image */}
            <div className="w-full relative aspect-video self-center">
              <Image
                src={PROJECTSDATA[projectname]?.solutionImage}
                alt={PROJECTSDATA[projectname]?.title}
                fill
                className="object-cover rounded-lg"
                priority
              />
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
