import React from 'react';
import { motion } from 'framer-motion';
import Card from '../common/Card';
import SectionTitle from '../common/SectionTitle';
import { FaClock, FaShieldAlt, FaRocket, FaUsers } from 'react-icons/fa';

const Advantages = () => {
  const advantages = [
    {
      icon: <FaRocket className="text-3xl" />,
      title: "Performance",
      description: "Sites web et applications optimisés pour une vitesse de chargement exceptionnelle"
    },
    {
      icon: <FaShieldAlt className="text-3xl" />,
      title: "Sécurité",
      description: "Protection maximale de vos données et de celles de vos utilisateurs"
    },
    {
      icon: <FaUsers className="text-3xl" />,
      title: "Accompagnement",
      description: "Support dédié et formation pour une autonomie totale"
    },
    {
      icon: <FaClock className="text-3xl" />,
      title: "Rapidité",
      description: "Livraison rapide sans compromis sur la qualité"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container-custom">
        <SectionTitle 
          title="Pourquoi nous choisir ?" 
          subtitle="Des avantages concrets pour votre réussite digitale"
        />
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {advantages.map((advantage, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <div className="bg-primary-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 text-primary-600">
                {advantage.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{advantage.title}</h3>
              <p className="text-gray-600">{advantage.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Advantages;