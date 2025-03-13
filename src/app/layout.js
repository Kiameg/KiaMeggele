import Header from '@/components/header';
import { Playfair_Display, Montserrat } from 'next/font/google';
import HeroUIWrapper from '../wrappers/herouiwrapper';
import './globals.css';
import Footer from '@/components/footer';

const playfairDisplay = Playfair_Display({
  variable: '--font-playfair-display',
  subsets: ['latin'],
});

const montSerrat = Montserrat({
  variable: '--font-montserrat',
  subsets: ['latin'],
});

export const metadata = {
  title: 'Kia Meggele | Creative Concept Developer Portfolio',
  description:
    'Discover the creative concepts and projects of Kia Meggele, a passionate Creative Concept Developer student. Explore her innovative ideas in design, branding, and storytelling. Get in touch today!',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${playfairDisplay.variable} ${montSerrat.variable} antialiased`}>
        <HeroUIWrapper>
          <Header />
          <main>{children}</main>
          <Footer />
        </HeroUIWrapper>
      </body>
    </html>
  );
}
