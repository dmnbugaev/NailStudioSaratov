import { Star, Quote } from 'lucide-react';
import { DecorativePattern } from './decorative-pattern';

interface Review {
  id: number;
  name: string;
  rating: number;
  date: string;
  text: string;
}

const reviews: Review[] = [
  {
    id: 1,
    name: 'Людмила',
    rating: 5,
    date: '3 октября 2025',
    text: 'Долго искала то место , где можно сделать прекрасный маникюр и записаться в любое удобное для меня время ! Девочки, профессионалы своего дела ! Преобразят ваши ногти до неузнаваемости ! Аура в помещение очень благоприятная и можно выпить ароматный кофе во время процедуры ! Кто хочет навести красоту и приятно провести время , то советую обратиться именно сюда ! ',
  },
  {
    id: 2,
    name: 'Александра.',
    rating: 5,
    date: '25 сентября 2025',
    text: 'Сегодня была на педикюре в качестве модели! Получила огромное удовольствие! Изумительно подобрали цвет и дизайн! Удобные кресло, мастер замечательно отработал! Салон светлый, красивый, приятная музыка! Чудесное обслуживание! Легко, удобно, комфортно! Очень советую!',
  },
  {
    id: 3,
    name: 'Светлана.',
    rating: 5,
    date: '27 августа 2025',
    text: 'торой раз посещаю данную студию. Замечательные, внимательные мастера. По маникюру Марина , по педикюру - Елена - настоящие профессионалы своего дела. Обязательно приеду ещё. Рекомендую.',
  },
];

export function Reviews() {
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }).map((_, index) => (
      <Star
        key={index}
        size={16}
        className={index < rating ? 'fill-[#FA9EBC] text-[#FA9EBC]' : 'text-gray-300'}
      />
    ));
  };

  return (
    <section id="reviews" className="py-20 bg-[#F8F3EA]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 mb-4">
            <Quote className="text-[#FA9EBC]" size={24} />
            <span className="text-[#570228]/70">Отзывы наших клиентов</span>
          </div>
          <h2 className="text-[#570228] mb-4">Что говорят о нас</h2>
          <p className="text-[#570228]/70 max-w-2xl mx-auto">
            Мы гордимся каждым отзывом и стремимся сделать ваш визит незабываемым
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto mb-12">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              {/* Header */}
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h4 className="text-[#570228]">{review.name}</h4>
                  <p className="text-[#570228]/50" style={{ fontSize: '0.75rem' }}>
                    {review.date}
                  </p>
                </div>
                <Quote className="text-[#FFDBD1]" size={24} />
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-4">{renderStars(review.rating)}</div>

              {/* Text */}
              <p className="text-[#570228]/80 leading-relaxed" style={{ fontSize: '0.875rem' }}>
                {review.text}
              </p>

              {/* Decorative element */}
              <div className="mt-4 pt-4 border-t border-[#570228]/10">
                <div className="flex gap-1">
                  <div className="w-2 h-2 bg-[#FA9EBC] rounded-full"></div>
                  <div className="w-2 h-2 bg-[#FFDBD1] rounded-full"></div>
                  <div className="w-2 h-2 bg-[#570228] rounded-full"></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
          <div className="bg-white rounded-xl p-6 text-center shadow-md">
            <div className="text-[#570228]" style={{ fontSize: '2rem' }}>130+</div>
            <p className="text-[#570228]/70">Отзывов на 5 звезд</p>
          </div>
          <div className="bg-white rounded-xl p-6 text-center shadow-md">
            <div className="text-[#570228]" style={{ fontSize: '2rem' }}>5.0</div>
            <p className="text-[#570228]/70">Средняя оценка</p>
          </div>
          <div className="bg-white rounded-xl p-6 text-center shadow-md">
            <div className="text-[#570228]" style={{ fontSize: '2rem' }}>98%</div>
            <p className="text-[#570228]/70">Возвращаются снова</p>
          </div>
          <div className="bg-white rounded-xl p-6 text-center shadow-md">
            <div className="text-[#570228]" style={{ fontSize: '2rem' }}>10+</div>
            <p className="text-[#570228]/70">Лет опыта</p>
          </div>
        </div>
      </div>
    </section>
  );
}
