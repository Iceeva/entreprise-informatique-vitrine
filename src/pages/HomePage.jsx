import React from 'react';
import { motion } from 'framer-motion';
import Hero from '../components/home/Hero';
import Services from '../components/home/Services';
import Advantages from '../components/home/Advantages';
import Testimonials from '../components/home/Testimonials';
import Button from '../components/common/Button';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';

const HomePage = () => {
  return (
    <main>
      <Hero />
      <Services />
      <Advantages />
      <Testimonials />
      
      {/* Section CTA */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-secondary-600">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Prêt à concrétiser votre projet ?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Transformez vos idées en réalité numérique avec notre équipe d'experts
            </p>
            <Link to="/contact">
              <Button 
                variant="outline" 
                size="lg"
                className="bg-white text-primary-600 hover:bg-gray-100 border-white"
              >
                Démarrer maintenant
                <FaArrowRight className="ml-2" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default HomePage;