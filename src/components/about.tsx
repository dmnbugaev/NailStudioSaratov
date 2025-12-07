import { MapPin, Phone, Mail, Instagram, Clock, Heart, Send, MessageCircle } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { DecorativePattern } from './decorative-pattern';

export function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 mb-4">
            <Heart className="text-[#FA9EBC]" size={24} />
            <span className="text-[#570228]/70">Наша история</span>
          </div>
          <h2 className="text-[#570228] mb-4">О студии НогтепилЪня</h2>
          <DecorativePattern />
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Main content - Two columns */}
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            {/* Left - Images */}
            <div className="space-y-4">
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <ImageWithFallback
                  src=""
                  alt="Nail Studio Interior"
                  className="w-full h-80 object-cover"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-xl overflow-hidden shadow-lg">
                  <ImageWithFallback
                    src=""
                    alt="Elegant Manicure"
                    className="w-full h-48 object-cover"
                  />
                </div>
                <div className="rounded-xl overflow-hidden shadow-lg">
                  <ImageWithFallback
                    src=""
                    alt="Nail Art"
                    className="w-full h-48 object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Right - Text */}
            <div className="flex flex-col justify-center">
              <h3 className="text-[#570228] mb-6">Элегантность и качество</h3>
              <p className="text-[#570228]/80 leading-relaxed mb-6">
                НогтепилЪня — это пространство, где искусство маникюра становится уютным ритуалом заботы о себе. Мы создали атмосферу полного погружения, где каждая деталь — от мягкого света до комфорта кресла — продумана для вашего расслабления и эстетического удовольствия.    
              </p>
              
              <div className="space-y-4 mb-6">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-[#FA9EBC] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 bg-[#570228] rounded-full"></div>
                  </div>
                  <div>
                    <h4 className="text-[#570228] mb-1">Профессиональные мастера</h4>
                    <p className="text-[#570228]/70" style={{ fontSize: '0.875rem' }}>
                      Опытные специалисты с сертификатами и постоянным обучением
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-[#FA9EBC] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 bg-[#570228] rounded-full"></div>
                  </div>
                  <div>
                    <h4 className="text-[#570228] mb-1">Премиум материалы</h4>
                    <p className="text-[#570228]/70" style={{ fontSize: '0.875rem' }}>
                      Работаем только с проверенными брендами и качественной продукцией
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-[#FA9EBC] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 bg-[#570228] rounded-full"></div>
                  </div>
                  <div>
                    <h4 className="text-[#570228] mb-1">Уютная атмосфера</h4>
                    <p className="text-[#570228]/70" style={{ fontSize: '0.875rem' }}>
                      Интерьер с элементами русского стиля создает особое настроение
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-[#FFDBD1]/30 rounded-xl p-6">
                <p className="text-[#570228]/80" style={{ fontSize: '0.875rem' }}>
                  "Мы создаем не просто маникюр - мы дарим ощущение заботы и красоты, 
                  которое остается с вами надолго"
                </p>
              </div>
            </div>
          </div>

          {/* Contact Information - Full Width Card */}
          <div className="bg-[#F8F3EA] rounded-2xl p-8 lg:p-12">
            <h3 className="text-[#570228] text-center mb-8">Контакты и местоположение</h3>
            
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Left - Contact Details */}
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#570228] rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="text-white" size={20} />
                  </div>
                  <div>
                    <h4 className="text-[#570228] mb-1">Адрес</h4>
                    <p className="text-[#570228]/70" style={{ fontSize: '0.875rem' }}>
                      г. Саратов, ул. имени Академика О.К. Антонова, 24
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#570228] rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="text-white" size={20} />
                  </div>
                  <div>
                    <h4 className="text-[#570228] mb-1">Телефон</h4>
                    <a href="tel:+79379702024" className="text-[#FA9EBC] hover:text-[#570228] transition-colors">
                      +7 (937) 970-20-24
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#570228] rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock className="text-white" size={20} />
                  </div>
                  <div>
                    <h4 className="text-[#570228] mb-1">Режим работы</h4>
                    <p className="text-[#570228]/70" style={{ fontSize: '0.875rem' }}>
                      Понедельник - Воскресенье<br/>
                      9:00 - 21:00 (без выходных)
                    </p>
                  </div>
                </div>

                <div className="pt-4 border-t border-[#570228]/10">
                  <h4 className="text-[#570228] mb-3">Мы в социальных сетях</h4>
                  <div className="flex gap-3">
                    <a
                      href="https://instagram.com/nogtepilnya"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-[#570228] rounded-full flex items-center justify-center hover:bg-[#FA9EBC] transition-colors group"
                      aria-label="Instagram"
                    >
                      <Instagram size={18} className="text-white group-hover:text-[#570228]" />
                    </a>
                    <a
                      href="https://t.me/nogtepilnya"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-[#570228] rounded-full flex items-center justify-center hover:bg-[#FA9EBC] transition-colors group"
                      aria-label="Telegram"
                    >
                      <Send size={18} className="text-white group-hover:text-[#570228]" />
                    </a>
                    <a
                      href="https://wa.me/79001234567"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-[#570228] rounded-full flex items-center justify-center hover:bg-[#FA9EBC] transition-colors group"
                      aria-label="WhatsApp"
                    >
                      <MessageCircle size={18} className="text-white group-hover:text-[#570228]" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Right - Map */}
              <div>
                <div className="bg-white rounded-xl overflow-hidden shadow-lg h-full min-h-[350px]">
                  <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3Ad678d167896f681e486e133ad42fba9fec0928e4dabc1914dde5765744a0c05f&amp;source=constructor" width="100%" height="400" frameborder="0"></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
