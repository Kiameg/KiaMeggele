import Image from "next/image";
export default function Overview() {
  return (
    <>
      <h1>All projects</h1>

      <section>
        <div>
          <Image src="/jouxli_cover.png" width={200} height={200} alt="Jouxli projekt" />
        </div>
        <div>
          <Image src="/meal_cover.png" width={200} height={200} alt="Mealplan projekt" />
        </div>
        <div>
          <Image src="/Superkilen_cover.png" width={200} height={200} alt="Superkilen projekt" />
        </div>
        <div>
          <Image src="/wonderworks_cover.png" width={200} height={200} alt="Wonderworks firma" />
        </div>
        <div>
          <Image src="/Uldahl_cover.png" width={200} height={200} alt="Uldahl projekt" />
        </div>
        <div>
          <Image src="/wonderful_cph.png" width={200} height={200} alt="A city for all projekt" />
        </div>
      </section>
    </>
  );
}
