import { useState } from 'react';
import { ChevronDown, ChevronUp, Sparkles } from 'lucide-react';
import { DecorativePattern } from './decorative-pattern';

interface Service {
  price: string;
  duration?: string;
}

interface Category {
  id: string;
  title: string;
  services: Service[];
}

const priceData: Category[] = [
  {
    id: 'manicure',
    title: 'Маникюр',
    services: [
      { price: '1500 ₽', duration: '60 мин' },
      { price: '1200 ₽', duration: '45 мин' },
      { price: '1800 ₽', duration: '60 мин' },
      { price: '2000 ₽', duration: '75 мин' },
      { price: '2500 ₽', duration: '90 мин' },
      { price: '1600 ₽', duration: '60 мин' },
      { price: '800 ₽', duration: '30 мин' },
    ],
  },
  {
    id: 'coating',
    title: 'Покрытие',
    services: [
      { price: '1800 ₽', duration: '30 мин' },
      { price: '2200 ₽', duration: '40 мин' },
      { price: '2400 ₽', duration: '45 мин' },
      { price: '2600 ₽', duration: '50 мин' },
      { price: '2400 ₽', duration: '45 мин' },
      { price: '+300 ₽', duration: '+10 мин' },
      { price: '400 ₽', duration: '20 мин' },
      { price: '+500 ₽', duration: '+15 мин' },
    ],
  },
  {
    id: 'nailart',
    title: 'Дизайн ногтей',
    services: [
      { price: '100 ₽' },
      { price: '200 ₽' },
      { price: '300 ₽' },
      { price: 'от 500 ₽' },
      { price: 'от 150 ₽' },
      { price: '50 ₽/шт' },
      { price: '200 ₽' },
      { price: '+200 ₽' },
      { price: '+300 ₽' },
    ],
  },
  {
    id: 'pedicure',
    title: 'Педикюр',
    services: [
      { price: '2500 ₽', duration: '90 мин' },
      { price: '2800 ₽', duration: '90 мин' },
      { price: '3000 ₽', duration: '100 мин' },
      { price: '3800 ₽', duration: '120 мин' },
      { price: '2600 ₽', duration: '90 мин' },
      { price: '+1000 ₽', duration: '+30 мин' },
    ],
  },
  {
    id: 'extension',
    title: 'Наращивание',
    services: [
      { price: '3500 ₽', duration: '150 мин' },
      { price: '3500 ₽', duration: '150 мин' },
      { price: '3800 ₽', duration: '150 мин' },
      { price: '2500 ₽', duration: '120 мин' },
      { price: '200 ₽', duration: '15 мин' },
    ],
  },
  {
    id: 'care',
    title: 'Уход',
    services: [
      { price: '800 ₽', duration: '30 мин' },
      { price: '1000 ₽', duration: '30 мин' },
      { price: '600 ₽', duration: '20 мин' },
      { price: '800 ₽', duration: '30 мин' },
      { price: '500 ₽', duration: '15 мин' },
      { price: '700 ₽', duration: '20 мин' },
    ],
  },
];

export function PriceList() {
  const [expandedCategories, setExpandedCategories] = useState<string[]>(['manicure']);
  const [selectedFilter, setSelectedFilter] = useState<string>('all');

  const toggleCategory = (categoryId: string) => {
    setExpandedCategories(prev =>
      prev.includes(categoryId)
        ? prev.filter(id => id !== categoryId)
        : [...prev, categoryId]
    );
  };

  const filteredData = selectedFilter === 'all' 
    ? priceData 
    : priceData.filter(cat => cat.id === selectedFilter);

  return (
    <section id="prices" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 mb-4">
            <Sparkles className="text-[#FA9EBC]" size={24} />
            <span className="text-[#570228]/70">Прозрачные цены</span>
          </div>
          <h2 className="text-[#570228] mb-4">Прайс-лист услуг</h2>
          <p className="text-[#570228]/70 max-w-2xl mx-auto">
            Мы ценим ваше время и доверие. Все цены указаны честно и прозрачно. 
            Комплексные услуги могут иметь специальные предложения.
          </p>
          <DecorativePattern />
        </div>

        {/* Filter buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          <button
            onClick={() => setSelectedFilter('all')}
            className={`px-6 py-2 rounded-full transition-all duration-300 ${
              selectedFilter === 'all'
                ? 'bg-[#570228] text-white'
                : 'bg-[#FFDBD1] text-[#570228] hover:bg-[#FA9EBC]'
            }`}
          >
            Все услуги
          </button>
          {priceData.map(category => (
            <button
              key={category.id}
              onClick={() => setSelectedFilter(category.id)}
              className={`px-6 py-2 rounded-full transition-all duration-300 ${
                selectedFilter === category.id
                  ? 'bg-[#570228] text-white'
                  : 'bg-[#FFDBD1] text-[#570228] hover:bg-[#FA9EBC]'
              }`}
            >
              {category.title}
            </button>
          ))}
        </div>

        {/* Price categories */}
        <div className="max-w-4xl mx-auto space-y-4">
          {filteredData.map(category => (
            <div
              key={category.id}
              className="bg-[#F8F3EA] rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <button
                onClick={() => toggleCategory(category.id)}
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-[#FFDBD1]/30 transition-colors duration-300"
              >
                <h3 className="text-[#570228]">{category.title}</h3>
                {expandedCategories.includes(category.id) ? (
                  <ChevronUp className="text-[#570228]" size={24} />
                ) : (
                  <ChevronDown className="text-[#570228]" size={24} />
                )}
              </button>

              {expandedCategories.includes(category.id) && (
                <div className="px-6 pb-6">
                  <div className="space-y-2">
                    {category.services.map((service, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between py-3 px-4 bg-white rounded-lg hover:bg-[#FFDBD1]/20 transition-colors duration-200 group"
                      >
                        <div className="flex-1">
                          <p className="text-[#570228]">позиция</p>
                          {service.duration && (
                            <span className="text-[#570228]/50" style={{ fontSize: '0.875rem' }}>
                              {service.duration}
                            </span>
                          )}
                        </div>
                        <div className="text-[#570228] group-hover:text-[#FA9EBC] transition-colors">
                          {service.price}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <div className="mt-12 text-center">
          <div className="inline-block bg-[#FFDBD1]/30 rounded-lg px-6 py-4 max-w-2xl">
            <p className="text-[#570228]/70">
              💝 Скидка 10% на первое посещение<br/>
              🎁 Накопительная система бонусов для постоянных клиентов
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
