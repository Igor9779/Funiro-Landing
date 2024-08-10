import Header from '../app/components/Header';
import HeroSection from '../app/components/HeroSection';
import Achievements from '../app/components/Achievements';
import OurProducts from '../app/components/OurProducts';
import Rooms from '../app/components/Rooms';
import Footer from '../app/components/Footer'

export default function Home() {
  return (
    <div>
      <Header />
      <HeroSection />
      <Achievements />
      <OurProducts />
      <Rooms />
      <Footer />
    </div>
  );
}
