import React from 'react';
import { motion } from 'framer-motion';
import Button from '../components/common/Button';
import { Link } from 'react-router-dom';
import { FaUsers, FaRocket, FaHeart, FaShieldAlt } from 'react-icons/fa';

const AboutPage = () => {
  const values = [
    {
      icon: <FaUsers className="text-3xl" />,
      title: "Collaboration",
      description: "Nous travaillons main dans la main avec nos clients pour comprendre parfaitement leurs besoins et objectifs."
    },
    {
      icon: <FaRocket className="text-3xl" />,
      title: "Innovation",
      description: "Nous restons à la pointe de la technologie pour offrir des solutions modernes et performantes."
    },
    {
      icon: <FaHeart className="text-3xl" />,
      title: "Passion",
      description: "Chaque projet est une nouvelle aventure que nous abordons avec enthousiasme et dévouement."
    },
    {
      icon: <FaShieldAlt className="text-3xl" />,
      title: "Intégrité",
      description: "Transparence, honnêteté et respect des engagements sont au cœur de notre relation client."
    }
  ];

  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary-600 to-secondary-600 text-white py-32">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              À propos d'<span className="text-yellow-300">ICE DEV</span>
            </h1>
            <p className="text-xl text-white/90 leading-relaxed">
              Nous transformons les idées en solutions digitales innovantes depuis notre création, 
              accompagnant entreprises et entrepreneurs dans leur réussite numérique.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-primary-50 rounded-2xl p-8">
                <h2 className="text-3xl font-bold mb-6 text-primary-600">Notre Mission</h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Démocratiser l'accès aux technologies numériques de pointe en proposant des 
                  solutions web et logicielles sur mesure, accessibles et performantes pour 
                  toutes les entreprises, quelle que soit leur taille.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-secondary-50 rounded-2xl p-8">
                <h2 className="text-3xl font-bold mb-6 text-secondary-600">Notre Vision</h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Devenir le partenaire technologique de référence pour les entreprises innovantes, 
                  en créant un écosystème digital où créativité et performance se rencontrent pour 
                  façonner le futur du business.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Valeurs */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Nos <span className="text-primary-600">Valeurs</span>
            </h2>
            <p className="text-xl text-gray-600">
              Des principes forts qui guident chacune de nos actions
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="text-primary-600 mb-4 flex justify-center">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Équipe */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Notre <span className="text-primary-600">Équipe</span>
            </h2>
            <p className="text-xl text-gray-600">
              Des experts passionnés à votre service
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Evarice Eziou",
                role: "Directeur Technique",
                bio: "4 ans d'expérience en développement web et architecture logicielle"
              },
              {
                name: "Miclel Djato",
                role: "Lead Designer",
                bio: "Experte en UX/UI design et création d'interfaces intuitives"
              },
              {
                name: "Arjen Assogba",
                role: "Développeur Senior",
                bio: "Spécialiste React et Node.js, passionné par les nouvelles technologies"
              }
            ].map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-50 rounded-xl p-6 text-center"
              >
                <div className="w-32 h-32 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-4xl text-white font-bold">
                    {member.name.charAt(0)}
                  </span>
                </div>
                <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                <p className="text-primary-600 font-medium mb-3">{member.role}</p>
                <p className="text-gray-600">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-secondary-600">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Rejoignez notre aventure !
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Travaillons ensemble pour donner vie à vos projets les plus ambitieux
            </p>
            <Link to="/contact">
              <Button 
                variant="outline" 
                size="lg"
                className="bg-white text-primary-600 hover:bg-gray-100 border-white"
              >
                Contactez-nous
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default AboutPage;