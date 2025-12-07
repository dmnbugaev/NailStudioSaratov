import { Header } from './components/header';
import { Hero } from './components/hero';
import { PriceList } from './components/price-list';
import { Reviews } from './components/reviews';
import { Booking } from './components/booking';
import { About } from './components/about';
import { Footer } from './components/footer';

export default function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <PriceList />
        <Reviews />
        <Booking />
        <About />
      </main>
      <Footer />
    </div>
  );
}
