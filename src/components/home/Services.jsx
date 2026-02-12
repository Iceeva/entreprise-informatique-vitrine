import React from 'react';
import { motion } from 'framer-motion';
import Card from '../common/Card';
import SectionTitle from '../common/SectionTitle';
import { FaLaptopCode, FaCode, FaCogs, FaBuilding } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Services = () => {
  const services = [
    {
      icon: <FaLaptopCode className="text-4xl text-primary-600" />,
      title: "Conception de sites web",
      description: "Design moderne, UI/UX optimisé et interfaces responsives pour une expérience utilisateur exceptionnelle.",
      link: "/services"
    },
    {
      icon: <FaCode className="text-4xl text-primary-600" />,
      title: "Développement web",
      description: "Applications web performantes avec React, Node.js et les dernières technologies du marché.",
      link: "/services"
    },
    {
      icon: <FaCogs className="text-4xl text-primary-600" />,
      title: "Développement logiciel",
      description: "Solutions logicielles sur mesure pour automatiser et optimiser vos processus métier.",
      link: "/services"
    },
    {
      icon: <FaBuilding className="text-4xl text-primary-600" />,
      title: "Création pour entreprises",
      description: "Accompagnement complet dans votre transformation digitale et stratégie web.",
      link: "/services"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container-custom">
        <SectionTitle 
          title="Nos Services" 
          subtitle="Des solutions complètes pour tous vos besoins numériques"
        />
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {services.map((service, index) => (
            <Card key={index} delay={index * 0.1}>
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <Link 
                to={service.link} 
                className="text-primary-600 font-medium hover:text-primary-700 inline-flex items-center"
              >
                En savoir plus
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;