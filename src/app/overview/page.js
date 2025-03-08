import Image from 'next/image';
import Link from 'next/link';
export default function Overview() {
  return (
    <>
      <h1>All projects</h1>

      <section className="grid grid-cols-3 justify-center ">
        <div>
          <Link href={`/jouxli`}>
            <Image src="/jouxli_cover.png" width={200} height={200} alt="Jouxli projekt" />
          </Link>
        </div>
        <div>
          <Link href={`/tapnplan`}>
            <Image src="/meal_cover.png" width={200} height={200} alt="Mealplan projekt" />
          </Link>
        </div>
        <div>
          <Link href={`/superkilen`}>
            <Image src="/Superkilen_cover.png" width={200} height={200} alt="Superkilen projekt" />
          </Link>
        </div>
        <div>
          <Link href={`/wonderworks`}>
            <Image src="/wonderworks_cover.png" width={200} height={200} alt="Wonderworks firma" />
          </Link>
        </div>
        <div>
          <Link href={`/uldahl`}>
            <Image src="/Uldahl_cover.png" width={200} height={200} alt="Uldahl projekt" />
          </Link>
        </div>
        <div>
          <Link href={`/wonderfulcph`}>
            <Image src="/wonderful_cph.png" width={200} height={200} alt="A city for all projekt" />
          </Link>
        </div>
      </section>
    </>
  );
}
