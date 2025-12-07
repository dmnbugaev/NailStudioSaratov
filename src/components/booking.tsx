import { ImageWithFallback } from './figma/ImageWithFallback';

export function Booking() {
  const handleBooking = () => {
    // Здесь можно добавить логику для открытия формы записи или перехода на страницу записи
    window.open('https://www.instagram.com/nogtepilnya', '_blank');
  };

  return (
    <section id="booking" className="py-20 bg-[#F8F3EA]">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left - Image */}
            <div className="order-2 lg:order-1">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <ImageWithFallback
                  src=""
                  alt="Spa relaxation"
                  className="w-full h-[500px] lg:h-[600px] object-cover"
                />
                {/* Decorative overlay elements */}
                <div className="absolute top-0 left-0 w-24 h-24 bg-[#FA9EBC] opacity-20 rounded-br-full"></div>
                <div className="absolute bottom-0 right-0 w-32 h-32 bg-[#570228] opacity-20 rounded-tl-full"></div>
              </div>
            </div>

            {/* Right - CTA */}
            <div className="order-1 lg:order-2 text-center lg:text-left">
              <div className="mb-6">
                <span className="text-[#FA9EBC]" style={{ fontSize: '0.875rem', letterSpacing: '0.1em' }}>
                  ЗАПИСЬ ОНЛАЙН
                </span>
              </div>

              <h2 className="text-[#570228] mb-6" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
                Доверьте свои руки<br/>профессионалам
              </h2>

              <p className="text-[#570228]/70 mb-8 max-w-md mx-auto lg:mx-0">
                Запишитесь на процедуру прямо сейчас и получите незабываемый опыт 
                качественного ухода в атмосфере уюта и заботы
              </p>

              <button
                onClick={handleBooking}
                className="bg-[#570228] text-white px-12 py-4 rounded-full hover:bg-[#FA9EBC] hover:text-[#570228] transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105 inline-block"
              >
                Записаться на прием
              </button>

              <p className="mt-6 text-[#570228]/50" style={{ fontSize: '0.875rem' }}>
                Свяжитесь с нами по телефону{' '}
                <a href="tel:+79001234567" className="text-[#FA9EBC] hover:text-[#570228] transition-colors">
                  +7 (900) 123-45-67
                </a>
                <br/>
                или через Instagram{' '}
                <a 
                  href="https://instagram.com/nogtepilnya" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-[#FA9EBC] hover:text-[#570228] transition-colors"
                >
                  @nogtepilnya
                </a>
              </p>

              {/* Additional benefits */}
              <div className="mt-10 grid grid-cols-2 gap-4 max-w-md mx-auto lg:mx-0">
                <div className="bg-white rounded-lg p-4 shadow-md">
                  <div className="text-[#570228]" style={{ fontSize: '1.5rem' }}>10%</div>
                  <p className="text-[#570228]/70" style={{ fontSize: '0.875rem' }}>
                    Скидка на первое посещение
                  </p>
                </div>
                <div className="bg-white rounded-lg p-4 shadow-md">
                  <div className="text-[#570228]" style={{ fontSize: '1.5rem' }}>9-21</div>
                  <p className="text-[#570228]/70" style={{ fontSize: '0.875rem' }}>
                    Работаем без выходных
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
