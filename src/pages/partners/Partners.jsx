import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

// Пример данных всех партнеров (расширенные)
const allPartners = [
  { 
    id: 1, 
    name: 'ТехноКорп', 
    logo: 'https://habrastorage.org/getpro/moikrug/uploads/company/100/009/419/7/logo/medium_16fd90be982ab239d04b81b17c0cccb4.png', 
    category: 'Текущие партнеры',
    description: 'Один из ключевых партнеров DORDOI в сфере торговли и логистики',
    website: 'https://xn--e1akiebggk2a.xn--p1ai/',
    contact: 'info@partner1.com',
    since: '2015'
  },
  { 
    id: 2, 
    name: 'ФинТех Альянс', 
    logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3nH1F8qOgKki6wZy-Fims70VMkfCV_BR47Q&s', 
    category: 'Текущие партнеры',
    description: 'Стратегический партнер в области международной торговли',
    website: 'https://www.facebook.com/FinTechAllianceOfficial',
    contact: 'contact@partner2.org',
    since: '2018'
  },
  { 
    id: 3, 
    name: 'Международный партнер 1', 
    logo: 'https://static.tildacdn.com/tild3731-3062-4130-a133-656266323633/0x0.jpg', 
    category: 'Международные проекты',
    description: 'Международная организация, сотрудничающая с DORDOI в рамках глобальных инициатив',
    website: 'https://digital-edu.example',
    contact: 'cooperation@intl-partner.com',
    since: '2020'
  },
  { 
    id: 4, 
    name: 'Партнерство 1', 
    logo: 'https://st3.depositphotos.com/1008648/19275/i/450/depositphotos_192752770-stock-photo-doctor-using-digital-medical-futuristic.jpg', 
    category: 'Партнерство и сотрудничество',
    description: 'Долгосрочное партнерство в сфере образовательных программ',
    website: 'https://cooperation-example.org',
    contact: 'partnership@coop.org',
    since: '2019'
  },
  { 
    id: 5, 
    name: 'Министерство экономики РФ', 
    logo: 'https://upload.wikimedia.org/wikipedia/commons/1/1b/Min-econom-develop-russia-emblem.svg', 
    category: 'Благодарственные письма',
    description: 'Организация, выразившая благодарность за сотрудничество с DORDOI',
    website: 'https://thankyou-org.com',
    contact: 'office@thankyou.org',
    since: '2021'
  },
];

// Градиентный фон в сине-желтых тонах
const EpicBackground = () => (
  <div
    className="fixed inset-0 z-0"
    style={{
      background: 'radial-gradient(circle at 70% 30%, #3b82f6 0%, #ffffff 100%)',
      animation: 'bgMove 12s ease-in-out infinite alternate',
    }}
  />
);

// Анимация для секций
const fadeIn = (direction = 'up', type = 'spring', delay = 0, duration = 0.7) => ({
  hidden: {
    opacity: 0,
    y: direction === 'up' ? 40 : 0,
    x: direction === 'left' ? -40 : 0,
  },
  show: {
    opacity: 1,
    y: 0,
    x: 0,
    transition: { type, delay, duration },
  },
});

// Анимация для модального окна
const modalVariants = {
  hidden: {
    opacity: 0,
    scale: 0.8,
    transition: { type: 'spring', damping: 20, stiffness: 300 }
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { type: 'spring', damping: 20, stiffness: 300 }
  },
  exit: {
    opacity: 0,
    scale: 0.8,
    transition: { ease: 'easeIn', duration: 0.2 }
  }
};

const Partners = () => {
  const [search, setSearch] = useState('');
  const [selectedPartner, setSelectedPartner] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Фильтрация партнеров по поиску
  const filteredPartners = allPartners.filter(partner =>
    partner.name.toLowerCase().includes(search.toLowerCase()) ||
    partner.category.toLowerCase().includes(search.toLowerCase())
  );

  // Открытие модального окна
  const openModal = (partner) => {
    setSelectedPartner(partner);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden'; // Блокируем скролл страницы
  };

  // Закрытие модального окна
  const closeModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedPartner(null), 300); // Ждем завершения анимации
    document.body.style.overflow = 'auto'; // Восстанавливаем скролл страницы
  };

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <EpicBackground />
      <div className="relative z-10 min-h-screen py-10 px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          animate="show"
          variants={fadeIn('up', 'spring', 0.1, 1)}
          className="max-w-7xl mx-auto"
        >
          <h1 className="text-5xl font-extrabold text-center text-gray-900 mb-4 drop-shadow-lg tracking-tight">
            🤝
            <span className="bg-gradient-to-r from-yellow-400 to-yellow-200 bg-clip-text text-transparent">
              Все партнеры DORDOI
            </span>
          </h1>
          <p className="text-center text-lg text-gray-700 mb-10 font-medium">
            Ассоциация «Дордой» — образование торговли и оплот гармоничного развития
          </p>
        </motion.div>

        {/* Основное содержимое */}
        <motion.main
          initial="hidden"
          animate="show"
          variants={fadeIn('up', 'spring', 0.3, 1)}
          className="bg-white/90 backdrop-blur-lg rounded-xl shadow-xl px-6 py-8"
        >
          {/* Поиск */}
          <div className="mb-8">
            <input
              type="text"
              placeholder="🔍 Поиск по партнёрам или категориям..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full px-4 py-3 rounded-lg border border-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
            />
          </div>

          {/* Все партнеры */}
          <motion.section
            variants={fadeIn('up', 'spring', 0.4, 1)}
          >
            {filteredPartners.length > 0 ? (
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
                {filteredPartners.map((partner) => (
                  <motion.div
                    key={partner.id}
                    whileHover={{
                      scale: 1.07,
                      boxShadow: '0 8px 32px 0 rgba(59, 130, 246, 0.25)',
                    }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => openModal(partner)}
                    className="bg-gradient-to-br from-blue-50 to-white rounded-xl p-4 flex flex-col items-center shadow hover:shadow-2xl transition-all duration-200 group cursor-pointer"
                  >
                    <img
                      src={partner.logo}
                      alt={partner.name}
                      className="h-20 w-20 object-contain mb-3 drop-shadow-lg group-hover:scale-110 group-hover:brightness-110 transition-all duration-200"
                    />
                    <h3 className="text-base font-semibold text-center text-gray-700 group-hover:text-blue-600 transition">
                      {partner.name}
                    </h3>
                    <span className="text-xs text-blue-500 mt-1">{partner.category}</span>
                  </motion.div>
                ))}
              </div>
            ) : (
              <p className="text-gray-500 text-center py-8">Партнеры не найдены</p>
            )}
          </motion.section>
        </motion.main>
      </div>

      {/* Модальное окно партнера */}
      <AnimatePresence>
        {isModalOpen && selectedPartner && (
          <>
            {/* Затемнение фона */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeModal}
              className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm"
            />
            
            {/* Само модальное окно */}
            <motion.div
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="fixed inset-0 z-50 flex items-center justify-center p-4"
            >
              <div className="relative max-w-2xl w-full max-h-[90vh] overflow-y-auto bg-gradient-to-br from-blue-50 to-white rounded-2xl shadow-2xl">
                {/* Кнопка закрытия */}
                <button
                  onClick={closeModal}
                  className="absolute top-4 right-4 p-2 rounded-full bg-white/80 hover:bg-gray-100 transition shadow-lg z-10"
                  aria-label="Закрыть"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>

                {/* Содержимое модального окна */}
                <div className="p-8">
                  {/* Заголовок и логотип */}
                  <div className="flex flex-col md:flex-row items-center gap-6 mb-8">
                    <div className="shrink-0">
                      <img 
                        src={selectedPartner.logo} 
                        alt={selectedPartner.name} 
                        className="h-32 w-32 object-contain bg-white p-4 rounded-xl shadow-lg border border-blue-100"
                      />
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold text-gray-900 mb-2">{selectedPartner.name}</h2>
                      <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                        {selectedPartner.category}
                      </span>
                      {selectedPartner.since && (
                        <p className="text-gray-500 mt-2">
                          <span className="font-medium">Сотрудничество с:</span> {selectedPartner.since}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Описание */}
                  <div className="prose prose-blue max-w-none mb-8">
                    <p className="text-gray-700 leading-relaxed">
                      {selectedPartner.description || 'Описание партнера отсутствует.'}
                    </p>
                  </div>

                  {/* Контактная информация */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    {selectedPartner.website && (
                      <div className="bg-white p-4 rounded-lg shadow-sm border border-blue-100">
                        <h3 className="text-sm font-semibold text-blue-600 mb-2">Веб-сайт</h3>
                        <a 
                          href={selectedPartner.website} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-blue-500 hover:text-blue-700 hover:underline break-all"
                        >
                          {selectedPartner.website}
                        </a>
                      </div>
                    )}
                    
                    {selectedPartner.contact && (
                      <div className="bg-white p-4 rounded-lg shadow-sm border border-blue-100">
                        <h3 className="text-sm font-semibold text-blue-600 mb-2">Контакт</h3>
                        <a 
                          href={`mailto:${selectedPartner.contact}`}
                          className="text-blue-500 hover:text-blue-700 hover:underline break-all"
                        >
                          {selectedPartner.contact}
                        </a>
                      </div>
                    )}
                  </div>

                  {/* Дополнительные действия */}
                  <div className="flex flex-wrap gap-4">
                    {selectedPartner.website && (
                      <a
                        href={selectedPartner.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg shadow-md transition flex items-center gap-2"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                        </svg>
                        Посетить сайт
                      </a>
                    )}
                    
                    <button
                      onClick={closeModal}
                      className="px-6 py-3 bg-white hover:bg-gray-100 text-gray-800 font-medium rounded-lg shadow-md transition border border-gray-200 flex items-center gap-2"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
                      </svg>
                      Вернуться к списку
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Анимация фона (CSS) */}
      <style>
        {`
          @keyframes bgMove {
            0% { background-position: 0% 50%; }
            100% { background-position: 100% 50%; }
          }
        `}
      </style>
    </div>
  );
};

export default Partners;