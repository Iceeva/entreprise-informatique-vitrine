import React from 'react';
import { motion } from 'framer-motion';
import Button from '../common/Button';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-br from-primary-50 via-white to-secondary-50">
      <div className="container-custom pt-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="mb-6">
              <span className="block text-primary-600 mb-2">ICE DEV</span>
              <span className="block text-4xl md:text-5xl lg:text-6xl">
                Votre Partenaire
                <span className="text-secondary-500"> Digital</span>
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-lg">
              Conception et développement de solutions web et logicielles sur mesure 
              pour propulser votre entreprise vers l'avenir numérique.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/contact">
                <Button size="lg">Démarrer votre projet</Button>
              </Link>
              <Link to="/services">
                <Button variant="outline" size="lg">Nos services</Button>
              </Link>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative z-10">
              <img 
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt="Développement web"
                className="rounded-2xl shadow-2xl"
                loading="eager"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-primary-200 rounded-full blur-3xl opacity-30"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;