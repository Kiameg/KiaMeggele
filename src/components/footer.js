import Image
  from "next/image"


export default function Footer() {
  return (
    <section className='footer'>
      <div className="w-full">
        <Image className="w-full" src={"/bund.png"} width={1000} height={1000} alt="Background"></Image>
      </div>
    </section>

  )
}