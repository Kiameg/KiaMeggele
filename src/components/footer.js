import { Mail } from 'lucide-react';
import { IconBrandLinkedin } from '@tabler/icons-react';

export default function Footer() {
  return (
    <div className="bg-[#DFCCDB]">
      <footer className="text-center md:text-inherit flex flex-col gap-4 mx-auto justify-center items-center max-w-[1000px] py-12 md:pb-24 md:pt-0 md:-mt-24">
        <div>
          <h1 className="text-5xl">Are we a match?</h1>
          <p className="mt-4">Have questions? I have answers (and snacks).</p>
        </div>
        <div className="flex gap-4">
          <a className="hover:text-[#ff8cb8]" href="mailto:kiameggele@gmail.com">
            <Mail size={28} />
          </a>
          <IconBrandLinkedin size={28} className="hover:text-[#ff8cb8] cursor-pointer" />
        </div>
      </footer>
    </div>
  );
}
