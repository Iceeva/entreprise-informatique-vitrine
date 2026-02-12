import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaLinkedin, FaGithub, FaEnvelope, FaPhone } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark text-white pt-16 pb-8">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent">
              ICE DEV
            </h3>
            <p className="text-gray-400 mb-4">
              Votre partenaire de confiance pour la conception et le développement de solutions digitales innovantes.
            </p>
            <div className="flex space-x-4">
              <button type="button" aria-label="Facebook" className="text-gray-400 hover:text-primary-400 transition-colors">
                <FaFacebook size={20} />
              </button>
              <button type="button" aria-label="Twitter" className="text-gray-400 hover:text-primary-400 transition-colors">
                <FaTwitter size={20} />
              </button>
              <button type="button" aria-label="LinkedIn" className="text-gray-400 hover:text-primary-400 transition-colors">
                <FaLinkedin size={20} />
              </button>
              <button type="button" aria-label="GitHub" className="text-gray-400 hover:text-primary-400 transition-colors">
                <FaGithub size={20} />
              </button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Liens rapides</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-primary-400 transition-colors">
                  Accueil
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-primary-400 transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-primary-400 transition-colors">
                  À propos
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-primary-400 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Nos services</h4>
            <ul className="space-y-2">
              <li className="text-gray-400">Conception de sites web</li>
              <li className="text-gray-400">Développement web</li>
              <li className="text-gray-400">Développement logiciel</li>
              <li className="text-gray-400">Création pour entreprises</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <FaEnvelope className="text-primary-400 mt-1 flex-shrink-0" />
                <a href="mailto:iceeva0@gmail.com" className="text-gray-400 hover:text-primary-400 transition-colors">
                  iceeva0@gmail.com
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <FaPhone className="text-primary-400 mt-1 flex-shrink-0" />
                <a href="tel:+2290159122292" className="text-gray-400 hover:text-primary-400 transition-colors">
                  +229 01 59 12 22 92
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-400">
            © {currentYear} ICE DEV. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;