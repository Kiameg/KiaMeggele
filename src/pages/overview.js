import Image from "next/image";
export default function Overview() {
  return (
    <>
      <h1>All projects</h1>

      <section>
        <div>
          <Image src="/jouxli_cover.png" alt="Jouxli projekt" />
        </div>
        <div>
          <Image src="/meal_cover.png" alt="Mealplan projekt" />
        </div>
        <div>
          <Image src="/Superkilen_cover.png" alt="Superkilen projekt" />
        </div>
        <div>
          <Image src="/wonderworks_cover.png" alt="Wonderworks firma" />
        </div>
        <div>
          <Image src="/Uldahl_cover.png" alt="Uldahl projekt" />
        </div>
        <div>
          <Image src="/wonderful_cph.png" alt="A city for all projekt" />
        </div>
      </section>
    </>
  );
}
