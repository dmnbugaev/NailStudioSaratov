import { ImageWithFallback } from './figma/ImageWithFallback';
import { FolkFlower } from './decorative-pattern';

export function Hero() {
  const scrollToBooking = () => {
    const element = document.getElementById('booking');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="grid grid-cols-6 gap-8 p-8">
          {Array.from({ length: 24 }).map((_, i) => (
            <FolkFlower key={i} className="w-16 h-16" />
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 lg:py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            
            <h1 className="mb-6" style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', lineHeight: '1.2' }}>
              <span className="text-[#570228]">НогтепилЪня</span>
              <br />
              <span className="text-[#FA9EBC]">Nail Studio</span>
            </h1>
            
            <p className="text-[#570228]/80 mb-8 max-w-xl mx-auto lg:mx-0">
              Место, где традиции встречаются с современными техниками маникюра. 
              Создаем красоту с любовью и вниманием к каждой детали.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button 
                onClick={scrollToBooking}
                className="bg-[#570228] text-white px-8 py-3 rounded-full hover:bg-[#FA9EBC] hover:text-[#570228] transition-all duration-300 shadow-lg"
              >
                Записаться на прием
              </button>
              <button 
                onClick={() => {
                  const element = document.getElementById('prices');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
                className="border-2 border-[#570228] text-[#570228] px-8 py-3 rounded-full hover:bg-[#570228] hover:text-white transition-all duration-300"
              >
                Посмотреть прайс
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-12 max-w-md mx-auto lg:mx-0">
              <div className="text-center lg:text-left">
                <div className="text-[#570228]" style={{ fontSize: '1.5rem' }}>10+</div>
                <p className="text-[#570228]/60" style={{ fontSize: '0.875rem' }}>Лет опыта</p>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-[#570228]" style={{ fontSize: '1.5rem' }}>1000+</div>
                <p className="text-[#570228]/60" style={{ fontSize: '0.875rem' }}>Клиентов</p>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-[#570228]" style={{ fontSize: '1.5rem' }}>50+</div>
                <p className="text-[#570228]/60" style={{ fontSize: '0.875rem' }}>Услуг</p>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src=""
                alt="Elegant Manicure"
                className="w-full h-[500px] object-cover"
              />
              {/* Decorative overlay */}
              <div className="absolute top-0 left-0 w-20 h-20 bg-[#FA9EBC] opacity-20 rounded-br-full"></div>
              <div className="absolute bottom-0 right-0 w-32 h-32 bg-[#570228] opacity-20 rounded-tl-full"></div>
            </div>

            {/* Floating decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 border-4 border-[#FFDBD1] rounded-full hidden lg:block"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-[#FA9EBC]/30 rounded-full hidden lg:block"></div>
          </div>
        </div>
      </div>
    </section>
  );
}