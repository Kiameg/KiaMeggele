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
        title: 'jOUXli',
        image: '/jouxli_comp.webp',
      },
      problem: {
        description:
          'Jouxli is a jewelry company run by designer Lise Gammeltoft from her home in Charlottenlund. Lise creates unique jewelry pieces from elements she finds around the world. Her jewelry brings together stories from ancient times and modern Scandinavian design. By respecting the soul and origin of the objects, Lise creates a connection to the present by combining the antique parts of her jewelry with modern, sustainable, and contemporary elements. Most important to Lise, however, is the personal connection with her customers. In a society where we increasingly communicate online, she feels the need to share her unique story across platforms.',
        description2: 'With these objectives in mind, we formulated the following problem area:',
        problemStatement:
          'How do we build a consistent visual identity for the client across platforms while effectively communicating her story?',
        appImage1: '/jouxli_mobil.webp',
        appImage2: '/jouxli_mobil2.webp',
      },
      research: {
        insights: [
          'Our respondents place significant value on collaborating with the maker and being involved in the creation of a piece of jewelry',
          'The price is irrelevant to them as long as the jewelry is the right on',
          'Many buy cheaper and trendy jewelry',
          'jOUXli’s main costumer base had been those aged 60 and older',
        ],
      },
      solution: {
        description: `<p>The purpose of our solution is to interpret Jouxli’s style and establish a cohesive visual identity through a multimedia approach. This has been achieved through a structured workflow that encompasses all aspects of Jouxli’s business, aiming to create a well-defined visual identity and effectively communicate her story.</p>
          <br />
          <p>A visit to Jouxli kickstarted the design process, and the third iteration of the prototype finally achieved the personal expression that was our original goal, as we had found great inspiration in Jouxli’s home.</p>
          <br />
          <p>We did this by: </p>
          <ul>
            <li>The implementation of the illustration on the prototype’s background created the unity and continuity across the pages, which also helps to clarify Jouxli’s brand identity</li>
            <li>Overall pleasing, easy and minimalistic design</li>
            <li>A lot of hours spent in JOUXli’s house, observing, interviewing and getting to know the owner</li>
            <li>Besides interviewing, surveys and more, we made sure to user test every prototype before moving on</li>
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
          'The urban space Superkilen was established in 2012 as a project between the City of Copenhagen and Realdania. It was developed in collaboration with the architecture firm BIG, the artist group Superflex, and the landscape architects Topotek1. Divided into colors with sidewalks and bike lanes, the zones are called The Red Square, The Black Square, and The Green Park. The area is designed to create a connection between the collected objects in the park, which have been gathered based on requests from local residents and their stories. Superflex envisioned Superkilen as a space that would evolve with the times of todays digital society, seeking ways to bridge the gap between the physical and digital spaces.',
        description2:
          'With these objectives in mind, I formulated the following problem area:',
        problemStatement:
          'How can a digital platform improve the accessibility of information about Superkilens installations, activities, and events, and thereby strengthen the cultural interaction and community that the area is designed to support?',
        image: '/superkilen.webp',
      },
      research: {
        insights: [
          'The communication of the spaces history is insufficient',
          'There is no overall overview of activities and events at Superkilen',
          'Superkilen is a unique space in the city and a expression of the local environment in Nørrebro',
          'Locals in the area know the space, but not of the installations and the history behind it',
        ],
      },
      solution: {
        description: `<p>After conducting thorough desk research and completing qualitative interviews with local citizens and experts, I identified key challenges regarding the accessibility and understanding of Superkilen's cultural installations and history.</p>
          <br />
          <p>With this in mind, I developed the concept of Superkilen Kulturnet – a digital cultural platform designed to address these challenges. The platform aims to make information about Superkilen's installations, activities, and events more accessible while promoting the cultural interaction and community the area is intended to support.</p>
          <br />
          <p>My vision for the solution involves:</p>
          <ul>
            <li>Creating a digital platform that brings together all activities and events at Superkilen</li>
            <li>Improving the communication and promotion of Superkilen’s history and cultural installations</li>
            <li>Collaborating with the City of Copenhagen to reuse existing data for a resource-efficient and sustainable solution</li>
            <li>A low-maintenance platform that allows locals to contribute without requiring significant resources</li>
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
          'One of the leading organizations working to promote tourism in the Capital Region is Wonderful Copenhagen, a non-profit organization. As a central collaborative body for the regions tourism stakeholders, Wonderful Copenhagen focuses on marketing, events, and innovation to strengthen the regions position as an attractive destination for both tourists and international congresses. Additionally, they aim to further enhance this position through advanced digital tools and sustainable solutions, creating responsible and future-proof travel experiences.',
        description2: 'With these objectives in mind, we formulated the following problem area:',
        problemStatement:
          'How can we create a digital solution that enhances the tourist experience in Copenhagen for people with disabilities, with a particular focus on those with visual or hearing impairments?',
        image: '/wonderfulcph.png',
      },
      research: {
        insights: [
          'Deaf and blind individuals experience significant challenges navigating urban spaces.',
          'Initiatives such as the sunflower and badges create increased safety and awareness for both people with disabilities and their relatives.',
          'Copenhagen can improve its accessibility for people with disabilities.',
          'Deaf and blind individuals often rely on their tactile senses to orient themselves when navigating new surroundings.',
        ],
      },
      solution: {
        description: `<p>As we finished our design sprint, we started developing the concept-  A city for all.</p>
          <br />
          <p>A concept which is about the overall user journey. How we want to take the user by the hand and guide them from start to finish. Even though our focus was on individuals with hearing impairments, we believe that our solution could be used by several individuals with disabilities.</p>
          <br />
          <p>Our vision for the solution involves: </p>
          <ul>
            <li>Creating a better and more intuitive UX experience overall</li>
            <li>A purchase flow that includes people with disabilities</li>
            <li>Creating a safe space at concerts where individuals can bring their relatives and friends</li>
            <li>Free loan of a sensory vest to wear under the concert, providing to a greater experience</li>
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
      {/* Hero section */}
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

          <div className="grid grid-cols-[0.5fr_2.5fr_0.5fr] md:grid-cols-[1fr_2fr_1fr] grid-rows-1 w-full items-center">
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

      {/* Problem area section */}
      {project.problem && (
        <>
          <WaveTop />
          <section
            id="problem-area"
            className="scroll-mt-12 md:scroll-mt-24 md:max-w-6xl md:mx-auto md:pb-24 md:pt-0 px-4 pt-12"
          >
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
                  <div className="md:grid md:grid-cols-[200px_200px] md:gap-8 flex">
                    <Image
                      src={project.problem.appImage1}
                      alt={`${project.hero.title} App Screenshot 1`}
                      width={200}
                      height={350}
                      className="object-contain max-h-56 md:max-h-none"
                    />
                    <Image
                      src={project.problem.appImage2}
                      alt={`${project.hero.title} App Screenshot 2`}
                      width={200}
                      height={350}
                      className="object-contain max-h-56 md:max-h-none md:self-end"
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

      {/* Research section */}
      {project.research && (
        <section id="research" className="md:max-w-6xl md:mx-auto md:py-24 px-4 py-24">
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

      {/* Solution section */}
      {project.solution && (
        <section
          id="solution"
          className="scroll-mt-24 md:scroll-mt-0 md:max-w-6xl md:mx-auto md:pt-24 px-4 pb-12"
        >
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
      )}

      {project === 'wonderworks' ? null : <WaveBottom />}
    </>
  );
}
