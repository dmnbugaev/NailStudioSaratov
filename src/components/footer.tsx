import { Heart, Instagram, Send, MessageCircle, Phone, Mail, MapPin } from 'lucide-react';
import { FolkFlower } from './decorative-pattern';

export function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#570228] text-white">
      {/* Main footer content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-4 gap-8 mb-8">
          {/* Brand column */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-[#FA9EBC] rounded-full flex items-center justify-center">
                <span className="text-[#570228]">Н</span>
              </div>
              <div>
                <h3 className="text-white">НогтепилЪня</h3>
              </div>
            </div>
            <p className="text-white/70 mb-4" style={{ fontSize: '0.875rem' }}>
              Студия красоты, где традиции встречаются с инновациями
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-white mb-4">Навигация</h4>
            <ul className="space-y-2" style={{ fontSize: '0.875rem' }}>
              <li>
                <button 
                  onClick={() => scrollToSection('prices')}
                  className="text-white/70 hover:text-[#FA9EBC] transition-colors"
                >
                  Прайс-лист
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('reviews')}
                  className="text-white/70 hover:text-[#FA9EBC] transition-colors"
                >
                  Отзывы
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('booking')}
                  className="text-white/70 hover:text-[#FA9EBC] transition-colors"
                >
                  Запись онлайн
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('about')}
                  className="text-white/70 hover:text-[#FA9EBC] transition-colors"
                >
                  О нас
                </button>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white mb-4">Услуги</h4>
            <ul className="space-y-2" style={{ fontSize: '0.875rem' }}>
              <li className="text-white/70">Маникюр</li>
              <li className="text-white/70">Педикюр</li>
              <li className="text-white/70">Покрытие гель-лаком</li>
              <li className="text-white/70">Дизайн ногтей</li>
              <li className="text-white/70">Наращивание</li>
              <li className="text-white/70">SPA-уход</li>
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h4 className="text-white mb-4">Контакты</h4>
            <ul className="space-y-3" style={{ fontSize: '0.875rem' }}>
              <li className="flex items-start gap-2">
                <MapPin size={16} className="text-[#FA9EBC] mt-1 flex-shrink-0" />
                <span className="text-white/70">
                  ул. имени Академика О.К. Антонова, 24
                </span>
              </li>
              <li className="flex items-start gap-2">
                <Phone size={16} className="text-[#FA9EBC] mt-1 flex-shrink-0" />
                <a href="tel:+79379702024" className="text-white/70 hover:text-[#FA9EBC] transition-colors">
                  +7 (937) 970-20-24
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Mail size={16} className="text-[#FA9EBC] mt-1 flex-shrink-0" />
                <a href="mailto:info@nogtepilnya.ru" className="text-white/70 hover:text-[#FA9EBC] transition-colors">
                  info@mail.ru
                </a>
              </li>
            </ul>

            {/* Social media */}
            <div className="mt-4">
              <h4 className="text-white mb-3" style={{ fontSize: '0.875rem' }}>Мы в соцсетях</h4>
              <div className="flex gap-3">
                <a
                  href="https://instagram.com/nogtepilnya"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#FA9EBC] transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram size={16} />
                </a>
                <a
                  href="https://t.me/nogtepilnya"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#FA9EBC] transition-colors"
                  aria-label="Telegram"
                >
                  <Send size={16} />
                </a>
                <a
                  href="https://wa.me/79001234567"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#FA9EBC] transition-colors"
                  aria-label="WhatsApp"
                >
                  <MessageCircle size={16} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative divider */}
        <div className="border-t border-white/20 my-8"></div>

        {/* Bottom bar */}
        <div className="flex items-center justify-center">
          <p className="text-white/60 text-center lg:text-left" style={{ fontSize: '0.875rem' }}>
            © 2025 НогтепилЪня. Все права защищены.
          </p>
        </div>
      </div>
    </footer>
  );
}
