import Image from 'next/image';
import styles from '@/styles/gradient.module.css';
import NotFound from '@/app/not-found';
import DOMPurify from 'isomorphic-dompurify';
import WaveTop from '@/components/wave-top';
import WaveBottom from '@/components/wave-bottom';

export default async function Projectview({ params }) {
  const PROJECTSDATA = {
    jouxli: {
      hero: {
        title: 'Jouxli',
        image: '/jouxli_comp.webp',
      },
      problem: {
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        description2:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        problemStatement:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        appImage1: '/jouxli_mobil.webp',
        appImage2: '/jouxli_mobil2.webp',
      },
      research: {
        insights: [
          'lorem ipsum dolor sit amet lorem ipsum dolor sit amet',
          'lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet',
          'lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet',
          'lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet',
        ],
      },
      solution: {
        description: `<p>lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet</p>
          <br />
          <p>lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet</p>
          <br />
          <p>We did this by: </p>
          <ul>
            <li>lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet</li>
            <li>lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet</li>
            <li>lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet</li>
          </ul>`,
        video: '/videos/jouxli_vid2.mp4',
      },
    },
    superkilen: {
      hero: {
        title: 'Superkilen',
        image: '/Superkilen_comp.webp',
      },
      problem: {
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        description2:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        problemStatement:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        image: '/superkilen.webp',
      },
      research: {
        insights: [
          'lorem ipsum dolor sit amet lorem ipsum dolor sit amet',
          'lorem ipsum dolor sit amet lorem ipsum dolor sit amet',
          'lorem ipsum dolor sit amet lorem ipsum dolor sit amet',
          'lorem ipsum dolor sit amet lorem ipsum dolor sit amet',
        ],
      },
      solution: {
        description: `<p>lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet</p>
          <br />
          <p>lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet</p>
          <br />
          <p>We did this by: </p>
          <ul>
            <li>lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet</li>
            <li>lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet</li>
            <li>lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet</li>
          </ul>`,
        video: '/videos/superkilen2.mp4',
      },
    },
    wonderworks: {
      hero: {
        title: 'Wonderworks',
        image: '/wonderworks_comp.webp',
      },
      whoarewe: {
        description:
          'We are a small agency with just 4 employees. A group of passionate individuals who strives to be your creative parthner in turning visions into visually impressive reality.',
        ulist: ['Branding', 'Visual Identity', 'Content Creation', 'Strategy & Marketing'],
      },
      creativelead: {
        description:
          'As a creative lead in a small company, my tasks can be very broad. The main focus areas I handle are product design, frontend development, UX & UI. However, I also contribute to strategy, marketing, and client communication.',
      },
      work: {
        description:
          "I work passionately on my own and our projects and have extensive experience with user experience and ux research. We place great emphasis on the user's story and needs in order to create a personalized solution that tells their story. It should not only look good, but also feel right. We have a variety of tools in out toolkit and come from different backgrounds that support our passionate and high-quality work.",
      },
      image: '/wonderworks_cover.webp',
    },
    wonderfulcph: {
      hero: {
        title: 'Wonderful Copenhagen',
        image: '/wonderfulcph_comp.webp',
      },
      problem: {
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        description2:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        problemStatement:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        image: '/wonderfulcph.png',
      },
      research: {
        insights: [
          'lorem ipsum dolor sit amet lorem ipsum dolor sit amet',
          'lorem ipsum dolor sit amet lorem ipsum dolor sit amet',
          'lorem ipsum dolor sit amet lorem ipsum dolor sit amet',
          'lorem ipsum dolor sit amet lorem ipsum dolor sit amet',
        ],
      },
      solution: {
        description: `<p>lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet</p>
          <br />
          <p>lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet</p>
          <br />
          <p>We did this by: </p>
          <ul>
            <li>lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet</li>
            <li>lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet</li>
            <li>lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet</li>
          </ul>`,
        video: '/videos/wonderful_cph2.mp4',
      },
    },
  };

  const { projectname } = await params;
  const project = PROJECTSDATA[projectname];

  // If the projectname is not found, return the NotFound component
  if (!project) {
    return <NotFound />;
  }

  const cleanHtml = project.solution?.description
    ? DOMPurify.sanitize(project.solution.description)
    : '';

  return (
    <>
      {project.hero && (
        <section className={`${styles.gradient} flex flex-col items-center justify-center py-12`}>
          <div className="py-20">
            <h1 className="text-5xl font-light mb-4 text-center">{project.hero.title}</h1>
            <div className="flex gap-2 justify-center">
              {project.problem && (
                <>
                  <a className="underline" href="#problem-area">
                    Problem area
                  </a>
                  <span>|</span>
                </>
              )}
              {project.solution && (
                <a className="underline" href="#solution">
                  Solution
                </a>
              )}
            </div>
          </div>

          <div className="grid grid-cols-[1fr_3fr_1fr] grid-rows-1 w-full items-center">
            <div className="w-1/2 h-0.5 bg-black"></div>
            <div className="w-full relative aspect-video">
              <Image
                src={project.hero.image}
                alt={project.hero.title}
                fill
                className="object-cover rounded-lg"
                priority
              />
            </div>
            <div className="w-1/2 h-0.5 bg-black justify-self-end"></div>
          </div>
        </section>
      )}

      {/*Wonderworks only section */}
      {project.whoarewe && (
        <>
          <WaveTop />
          <div className="flex flex-col md:flex-row gap-8 md:gap-16 md:max-w-7xl md:mx-auto px-4 md:px-8 py-12 md:py-16">
            <section className="flex-1">
              <div className="mb-16">
                <h2 className="text-5xl font-light mb-6 border-b border-black pb-4">Who are we?</h2>
                <p className="text-lg mb-8">{project.whoarewe.description}</p>
                <p className="text-lg">What we work with:</p>
                <ul className="mt-4 flex flex-col gap-3 list-disc list-inside">
                  {project.whoarewe.ulist.map((item, index) => (
                    <li key={index} className="text-lg">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mb-16">
                <h3 className="text-4xl font-light mb-6">Creative Lead</h3>
                <p className="text-lg">{project.creativelead.description}</p>
              </div>
              <div>
                <h3 className="text-4xl font-light mb-6">Work</h3>
                <p className="text-lg">{project.work.description}</p>
              </div>
            </section>
            <section className="flex-1">
              <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden">
                <Image
                  src={project.image}
                  alt="Wonderworks team"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </section>
          </div>
        </>
      )}

      {project.problem && (
        <>
          <div id="problem-area">
            <WaveTop />
          </div>

          <section className="md:max-w-6xl md:mx-auto md:pb-24 md:pt-0 py-12 px-4">
            <h2 className="text-4xl font-light pb-4">Problem area</h2>
            <div className="md:grid md:grid-cols-2 flex flex-col gap-8">
              <div className="space-y-6 border-t border-black pt-4">
                <p>{project.problem.description}</p>
                <p>{project.problem.description2}</p>
                <div className="bg-[#ddd1e0] rounded-3xl py-14 px-8">
                  <p className="text-center font-semibold">{project.problem.problemStatement}</p>
                </div>
              </div>
              {project.problem.appImage1 && project.problem.appImage2 ? (
                // For projects with two mobile app images
                <div className="md:grid md:gap-8 md:justify-items-center md:justify-self-end flex justify-around">
                  <div className="md:grid md:grid-cols-[150px_150px] md:gap-8 flex gap-4">
                    <Image
                      src={project.problem.appImage1}
                      alt={`${project.hero.title} App Screenshot 1`}
                      width={150}
                      height={320}
                      className="object-contain max-h-80"
                    />
                    <Image
                      src={project.problem.appImage2}
                      alt={`${project.hero.title} App Screenshot 2`}
                      width={150}
                      height={320}
                      className="object-contain max-h-80 md:self-end"
                    />
                  </div>
                </div>
              ) : project.problem.image ? (
                // For projects with a single image
                <div className="flex items-center">
                  <div className="w-full relative aspect-video">
                    <Image
                      src={project.problem.image}
                      alt={`${project.hero.title} Problem Illustration`}
                      fill
                      className="object-cover rounded-lg"
                    />
                  </div>
                </div>
              ) : null}
            </div>
          </section>
        </>
      )}

      {project.research && (
        <section
          id="research"
          className="md:max-w-6xl md:mx-auto md:pt-48 md:pb-0 pt-24 pb-12 px-4"
        >
          <h3 className="text-4xl font-light pb-4 text-center">Insight from research</h3>
          <div className="grid md:grid-cols-2 grid-cols-1 md:gap-y-32 gap-y-10 gap-x-4 items-center justify-items-center pt-8">
            {project.research.insights.map((insight, index) => (
              <div key={index} className="flex flex-col gap-2 text-center h-full">
                <h3 className="text-6xl font-bold">{index + 1}</h3>
                <p className="max-w-96">{insight}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {project === 'wonderworks' ? null : <WaveBottom />}

      {project.solution && (
        <div className={`${styles.gradientReverse}`}>
          <section id="solution" className="md:max-w-6xl md:mx-auto pb-48 md:pt-0 pt-12 px-4">
            <h3 className="text-4xl font-light pb-4">Solution</h3>
            <div className="md:grid md:grid-cols-2 md:gap-8 flex flex-col gap-12">
              <div className={`${styles.solutionDescription}`}>
                <div
                  className="border-t border-black pt-4"
                  dangerouslySetInnerHTML={{ __html: cleanHtml }}
                />
              </div>
              <div className="w-full relative aspect-video self-center">
                {project.solution.video ? (
                  <video
                    src={project.solution.video}
                    controls
                    className="w-full h-full rounded-lg"
                    poster={project.hero.image}
                    muted={true}
                  />
                ) : (
                  project.solution.image && (
                    <Image
                      src={project.solution.image}
                      alt={project.hero.title}
                      fill
                      className="object-cover rounded-lg"
                      priority
                    />
                  )
                )}
              </div>
            </div>
          </section>
        </div>
      )}
    </>
  );
}
