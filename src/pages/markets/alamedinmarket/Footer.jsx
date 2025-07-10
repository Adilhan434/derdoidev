import { 
  FaShoppingBag, FaFacebookF, FaInstagram, FaTwitter, FaYoutube, 
  FaMapMarkerAlt, FaPhone, FaClock 
} from 'react-icons/fa';
import { Link } from 'react-scroll';

const Footer = () => {

  return (
    <footer id='contacts' className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div>
            <div className="flex items-center mb-6">
              <div className="bg-blue-800 text-white w-10 h-10 rounded-full flex items-center justify-center mr-3">
                <FaShoppingBag className="text-xl" />
              </div>
              <h3 className="text-xl font-bold">Рынок Аламедин</h3>
            </div>
            <p className="text-gray-400 mb-4">
              Крупнейший вещевой рынок в Бишкеке с 1992 года. Все для вашего дома и семьи.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition">
                <FaFacebookF />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition">
                <FaInstagram />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition">
                <FaTwitter />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition">
                <FaYoutube />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-6">Навигация</h4>
            <ul className="space-y-3">
              <li><Link to="header" smooth={true} duration={500} className="text-gray-400 hover:text-white transition cursor-pointer">Главная</Link></li>
              <li><Link to="tovars" smooth={true} duration={500} className="text-gray-400 hover:text-white transition cursor-pointer">Товары</Link></li>
              <li><Link to="shops" smooth={true} duration={500} className="text-gray-400 hover:text-white transition cursor-pointer">Магазины</Link></li>
              <li><Link to="map" smooth={true} duration={500} className="text-gray-400 hover:text-white transition cursor-pointer">Схема рынка</Link></li>
              <li><Link to="aboutus" smooth={true} duration={500} className="text-gray-400 hover:text-white transition cursor-pointer">О нас</Link></li>
              <li><Link to="contacts" smooth={true} duration={500} className="text-gray-400 hover:text-white transition cursor-pointer">Контакты</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-6">Контакты</h4>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-start">
                <FaMapMarkerAlt className="mt-1 mr-3" />
                <span>г. Бишкек, ул. Аламедин-1</span>
              </li>
              <li className="flex items-center">
                <FaPhone className="mr-3" />
                <span>+996 (312) 123-45-67</span>
              </li>
              <li className="flex items-center">
                <FaClock className="mr-3" />
                <span>Ежедневно 8:00 - 20:00</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 text-center text-gray-500">
          <p>© 2023 Рынок Аламедин. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;