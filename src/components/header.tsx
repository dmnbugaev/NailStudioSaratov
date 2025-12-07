import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#F8F3EA]/95 backdrop-blur-sm border-b border-[#570228]/10">
      <div className="container mx-auto px-4 py-4 lg:py-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 lg:w-12 lg:h-12 bg-[#570228] rounded-full flex items-center justify-center">
              <span className="text-[#F8F3EA]">Н</span>
            </div>
            <div>
              <h1 className="text-[#570228] tracking-wide">НогтепилЪня</h1>
              <p className="text-[#570228]/60" style={{ fontSize: '0.75rem' }}>Nail Studio</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            <button 
              onClick={() => scrollToSection('prices')}
              className="text-[#570228] hover:text-[#FA9EBC] transition-colors"
            >
              Прайс
            </button>
            <button 
              onClick={() => scrollToSection('reviews')}
              className="text-[#570228] hover:text-[#FA9EBC] transition-colors"
            >
              Отзывы
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="text-[#570228] hover:text-[#FA9EBC] transition-colors"
            >
              О нас
            </button>
            <button 
              onClick={() => scrollToSection('booking')}
              className="bg-[#570228] text-white px-6 py-2 rounded-full hover:bg-[#FA9EBC] hover:text-[#570228] transition-all duration-300"
            >
              Записаться
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden text-[#570228] p-2"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="lg:hidden mt-6 pb-4 flex flex-col gap-4 border-t border-[#570228]/10 pt-4">
            <button 
              onClick={() => scrollToSection('prices')}
              className="text-[#570228] hover:text-[#FA9EBC] transition-colors text-left"
            >
              Прайс
            </button>
            <button 
              onClick={() => scrollToSection('reviews')}
              className="text-[#570228] hover:text-[#FA9EBC] transition-colors text-left"
            >
              Отзывы
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="text-[#570228] hover:text-[#FA9EBC] transition-colors text-left"
            >
              О нас
            </button>
            <button 
              onClick={() => scrollToSection('booking')}
              className="bg-[#570228] text-white px-6 py-2 rounded-full hover:bg-[#FA9EBC] hover:text-[#570228] transition-all duration-300 text-left"
            >
              Записаться
            </button>
          </nav>
        )}
      </div>
    </header>
  );
}