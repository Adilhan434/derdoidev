import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { FaArrowRight, FaArrowLeft, FaCalendarAlt, FaSearch, FaTimes, FaExternalLinkAlt } from "react-icons/fa";

const DynamicNewsPage = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedNews, setSelectedNews] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const featuredNews = [
    {
      id: 1,
      title: "Salymbekov University вошел в топ-50 вузов Центральной Азии",
      date: "15 мая 2023",
      excerpt: "По версии QS Rankings наш университет занял 42 место в регионе",
      image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      content: "Salymbekov University продолжает укреплять свои позиции на международной арене. По результатам ежегодного рейтинга QS Rankings наш университет впервые вошел в топ-50 лучших вузов Центральной Азии, заняв 42 позицию. Это стало возможным благодаря улучшению показателей по международному признанию, качеству исследований и уровню трудоустройства выпускников. Ректор университета отметил, что это только начало большого пути по превращению вуза в ведущий образовательный центр региона."
    },
    {
      id: 2,
      title: "Студенты разработали приложение для диагностики заболеваний",
      date: "10 мая 2023",
      excerpt: "Мобильное приложение использует ИИ для анализа симптомов",
      image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      content: "Команда студентов факультета компьютерных наук разработала инновационное мобильное приложение HealthGuard, которое с точностью 87% определяет возможные заболевания на основе описанных симптомов. Приложение использует алгоритмы машинного обучения и базу данных из более чем 10 000 медицинских случаев. Разработка уже вызвала интерес у нескольких медицинских учреждений и инвесторов. Проект создавался в рамках курсовой работы под руководством профессора Алиевой М.К. и теперь будет дорабатываться для коммерческого использования."
    },
    {
      id: 3,
      title: "Новая программа по кибербезопасности",
      date: "20 апреля 2023",
      excerpt: "Совместно с лидерами IT-индустрии разработан новый курс",
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      content: "С сентября 2023 года Salymbekov University запускает новую магистерскую программу по кибербезопасности, разработанную совместно с ведущими компаниями отрасли. Программа включает углубленное изучение криптографии, анализ уязвимостей, этичный хакинг и управление информационной безопасностью. Особенностью программы станет то, что 70% занятий будут вести практикующие специалисты из компаний-партнеров, а каждый студент получит возможность пройти стажировку в отделе безопасности одной из IT-компаний. Прием заявок уже открыт."
    }
  ];

  const allNews = [
    {
      id: 4,
      title: "День открытых дверей онлайн",
      date: "28 апреля 2023",
      excerpt: "Приглашаем абитуриентов на виртуальную экскурсию по университету",
      content: "28 апреля Salymbekov University проведет день открытых дверей в онлайн-формате. Абитуриенты и их родители смогут виртуально посетить кампус, лаборатории, пообщаться с преподавателями и студентами, а также получить подробную информацию о программах обучения и условиях поступления. Мероприятие начнется в 10:00 по времени Алматы. Для участия необходимо зарегистрироваться на сайте университета. Все зарегистрированные участники получат запись мероприятия и дополнительные материалы для абитуриентов."
    },
    {
      id: 5,
      title: "Конференция по искусственному интеллекту",
      date: "12 апреля 2023",
      excerpt: "Ведущие эксперты обсудят последние тенденции в области ИИ",
      content: "12-14 апреля в Salymbekov University состоится международная конференция 'AI Trends 2023', которая соберет ведущих исследователей искусственного интеллекта из 15 стран. В программе: мастер-классы по машинному обучению, панельные дискуссии об этике ИИ, презентации стартапов и круглые столы с представителями индустрии. Главным спикером выступит профессор Ли Куанг из Сингапурского университета технологий и дизайна. Для студентов университета участие бесплатное, требуется предварительная регистрация."
    },
    {
      id: 6,
      title: "Старт нового учебного года",
      date: "1 сентября 2023",
      excerpt: "Готовимся к началу занятий с обновлённой программой",
      content: "1 сентября 2023 года Salymbekov University откроет двери для новых студентов. В этом году университет обновил 30% учебных программ, добавив новые курсы по цифровым технологиям, предпринимательству и soft skills. Для первокурсников подготовлена специальная адаптационная неделя с экскурсиями, мастер-классами и встречами с кураторами. Также в новом учебном году откроется обновленная библиотека с зонами для коворкинга и цифровым читальным залом. Торжественная линейка состоится 1 сентября в 9:00 на центральной площади кампуса."
    },
    {
      id: 7,
      title: "Сотрудничество с TechCompany",
      date: "5 марта 2023",
      excerpt: "Подписано соглашение о совместных исследованиях",
      content: "Salymbekov University и международная IT-компания TechCompany подписали соглашение о стратегическом партнерстве. В рамках сотрудничества планируется создание совместной исследовательской лаборатории в области big data, проведение хакатонов для студентов и программа стажировок. Компания выделит гранты на 5 перспективных проектов в области искусственного интеллекта. Первым совместным проектом станет разработка системы анализа образовательных траекторий студентов с использованием методов машинного обучения."
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % featuredNews.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const filteredNews = allNews.filter(news =>
    news.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    news.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const openModal = (newsItem) => {
    setSelectedNews(newsItem);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedNews(null), 300);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-12">
        <div className="container mx-auto px-6">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            <span className="text-yellow-300">Новости</span> университета
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl max-w-2xl"
          >
            Будьте в курсе последних событий и достижений
          </motion.p>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="container mx-auto px-6 -mt-8 z-10 relative"
      >
        <div className="relative max-w-2xl">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <FaSearch className="text-gray-400" />
          </div>
          <input
            type="text"
            placeholder="Поиск по новостям..."
            className="pl-10 pr-4 py-3 w-full border border-gray-300 rounded-lg shadow-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </motion.div>

      <div className="container mx-auto px-6 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:w-2/3"
          >
            <div className="relative h-96 md:h-[480px] rounded-2xl overflow-hidden shadow-2xl">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeSlide}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0"
                >
                  <img 
                    src={featuredNews[activeSlide].image} 
                    alt={featuredNews[activeSlide].title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent">
                    <div className="absolute bottom-0 left-0 p-8 text-white">
                      <div className="flex items-center text-sm mb-3">
                        <FaCalendarAlt className="mr-2" />
                        {featuredNews[activeSlide].date}
                      </div>
                      <h2 className="text-2xl md:text-3xl font-bold mb-3">
                        {featuredNews[activeSlide].title}
                      </h2>
                      <p className="text-gray-200 mb-4">
                        {featuredNews[activeSlide].excerpt}
                      </p>
                      <button 
                        onClick={() => openModal(featuredNews[activeSlide])}
                        className="px-6 py-2 bg-yellow-400 text-gray-900 rounded-lg font-bold hover:bg-yellow-300 transition-colors flex items-center"
                      >
                        Читать <FaArrowRight className="ml-2" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              <div className="absolute bottom-8 right-8 flex gap-2">
                {featuredNews.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveSlide(index)}
                    className={`w-3 h-3 rounded-full ${activeSlide === index ? 'bg-yellow-400' : 'bg-white/50'}`}
                  />
                ))}
              </div>

              <button 
                onClick={() => setActiveSlide((prev) => (prev - 1 + featuredNews.length) % featuredNews.length)}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/30 text-white p-3 rounded-full hover:bg-black/50 transition-colors"
              >
                <FaArrowLeft />
              </button>
              <button 
                onClick={() => setActiveSlide((prev) => (prev + 1) % featuredNews.length)}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/30 text-white p-3 rounded-full hover:bg-black/50 transition-colors"
              >
                <FaArrowRight />
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:w-1/3"
          >
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="bg-blue-800 text-white p-4">
                <h2 className="text-xl font-bold">Последние новости</h2>
              </div>

              <div className="divide-y divide-gray-200 max-h-[480px] overflow-y-auto">
                {filteredNews.length > 0 ? (
                  filteredNews.map((news, index) => (
                    <motion.div
                      key={news.id}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      className="p-4 hover:bg-blue-50 transition-colors cursor-pointer"
                      onClick={() => openModal(news)}
                    >
                      <div className="flex items-start">
                        <div className="bg-blue-100 text-blue-800 p-2 rounded-lg mr-4">
                          <FaCalendarAlt />
                        </div>
                        <div>
                          <h3 className="font-bold mb-1">{news.title}</h3>
                          <p className="text-sm text-gray-600 mb-2">{news.excerpt}</p>
                          <div className="flex items-center text-xs text-gray-500">
                            <FaCalendarAlt className="mr-1" />
                            {news.date}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))
                ) : (
                  <div className="p-8 text-center text-gray-500">
                    Новости не найдены
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Модальное окно для новостей */}
      <AnimatePresence>
        {isModalOpen && selectedNews && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
            onClick={closeModal}
          >
            <motion.div
              initial={{ scale: 0.9, y: 50 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 50 }}
              className="relative bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                onClick={closeModal}
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 z-10"
              >
                <FaTimes size={24} />
              </button>

              <div className="p-8">
                <div className="flex items-center text-gray-500 mb-4">
                  <FaCalendarAlt className="mr-2" />
                  <span>{selectedNews.date}</span>
                </div>

                <h2 className="text-2xl md:text-3xl font-bold mb-6">
                  {selectedNews.title}
                </h2>

                {selectedNews.image && (
                  <div className="mb-6 rounded-lg overflow-hidden">
                    <img 
                      src={selectedNews.image} 
                      alt={selectedNews.title}
                      className="w-full h-64 object-cover"
                    />
                  </div>
                )}

                <div className="prose max-w-none mb-8">
                  <p className="text-gray-700 whitespace-pre-line">
                    {selectedNews.content}
                  </p>
                </div>

                <div className="flex flex-wrap gap-4">
                  <button className="px-6 py-2 bg-blue-600 text-white rounded-lg font-bold hover:bg-blue-700 transition-colors flex items-center">
                    Поделиться
                  </button>
                  <button className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg font-bold hover:bg-gray-100 transition-colors flex items-center">
                    <FaExternalLinkAlt className="mr-2" />
                    Открыть оригинал
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16"
      >
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            Подпишитесь на email-рассылку
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Получайте самые важные новости университета прямо на почту
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Ваш email"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:ring-2 focus:ring-yellow-400"
            />
            <button className="px-6 py-3 bg-yellow-400 text-gray-900 rounded-lg font-bold hover:bg-yellow-300 transition-colors">
              Подписаться
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default DynamicNewsPage;