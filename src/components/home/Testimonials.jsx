import React from 'react';
import { motion } from 'framer-motion';
import Card from '../common/Card';
import SectionTitle from '../common/SectionTitle';
import { FaStar } from 'react-icons/fa';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sophie",
      role: "CEO, TechStart",
      content: "Une équipe professionnelle et à l'écoute. Notre site web est exactement ce dont nous avions besoin. Je recommande vivement !",
      rating: 5,
      company: "TechStart"
    },
    {
      name: "Marc",
      role: "Directeur, InnovLab",
      content: "Délais respectés, qualité au rendez-vous et un accompagnement parfait. Un partenaire de confiance pour notre transformation digitale.",
      rating: 5,
      company: "InnovLab"
    },
    {
      name: "Claire",
      role: "Fondatrice, EcoSolutions",
      content: "Grâce à eux, notre plateforme e-commerce est opérationnelle et performante. Un grand merci pour votre professionnalisme.",
      rating: 5,
      company: "EcoSolutions"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container-custom">
        <SectionTitle 
          title="Ce qu'ils disent de nous" 
          subtitle="La satisfaction de nos clients est notre plus belle récompense"
        />
        
        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {testimonials.map((testimonial, index) => (
            <Card key={index} delay={index * 0.1}>
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <FaStar key={i} className="text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-700 mb-6 italic">"{testimonial.content}"</p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-lg">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;