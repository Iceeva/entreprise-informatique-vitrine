import React from 'react';
import { motion } from 'framer-motion';
import ContactForm from '../components/contact/ContactForm';
import { FaClock, FaGlobe, FaCheckCircle } from 'react-icons/fa';

const ContactPage = () => {
  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-primary-50 to-white py-20">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Contactez-<span className="text-primary-600">nous</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Vous avez un projet en tête ? Une question ? Notre équipe est là pour vous répondre
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <ContactForm />
        </div>
      </section>

      {/* Informations complémentaires */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white rounded-xl p-8 text-center shadow-md"
            >
              <div className="text-primary-600 text-4xl mb-4 flex justify-center">
                <FaClock />
              </div>
              <h3 className="text-xl font-semibold mb-3">Disponibilité</h3>
              <p className="text-gray-600">
                Lun - Ven: 9h00 - 18h00<br />
                Réponse sous 24h
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-xl p-8 text-center shadow-md"
            >
              <div className="text-primary-600 text-4xl mb-4 flex justify-center">
                <FaGlobe />
              </div>
              <h3 className="text-xl font-semibold mb-3">Localisation</h3>
              <p className="text-gray-600">
                Services à distance<br />
                Clients dans le monde entier
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-white rounded-xl p-8 text-center shadow-md"
            >
              <div className="text-primary-600 text-4xl mb-4 flex justify-center">
                <FaCheckCircle />
              </div>
              <h3 className="text-xl font-semibold mb-3">Satisfaction</h3>
              <p className="text-gray-600">
                100% de clients satisfaits<br />
                Accompagnement personnalisé
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Carte ou localisation */}
      <section className="py-20 bg-white">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-6">
              Prêt à <span className="text-primary-600">démarrer</span> ?
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Ne laissez pas vos idées sur le papier. Contactez-nous dès aujourd'hui 
              et donnez vie à votre projet digital.
            </p>
            <a 
              href="mailto:iceeva0@gmail.com" 
              className="inline-block bg-primary-600 text-white px-8 py-4 rounded-lg font-medium hover:bg-primary-700 transition-colors"
            >
              Envoyer un email maintenant
            </a>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default ContactPage;