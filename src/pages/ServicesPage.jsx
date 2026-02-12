import React from 'react';
import { motion } from 'framer-motion';
import ServicesList from '../components/services/ServicesList';
import Button from '../components/common/Button';
import { Link } from 'react-router-dom';
import { FaCode, FaLaptopCode, FaCogs, FaBuilding } from 'react-icons/fa';

const ServicesPage = () => {
  const services = [
    {
      icon: <FaLaptopCode className="text-4xl" />,
      title: "Conception de sites web",
      description: "Design moderne et intuitif, expérience utilisateur optimale, interfaces responsives et adaptées à tous les écrans.",
      features: [
        "Design personnalisé",
        "UI/UX optimisé",
        "Responsive design",
        "Animations fluides"
      ]
    },
    {
      icon: <FaCode className="text-4xl" />,
      title: "Développement web",
      description: "Applications web performantes, sécurisées et évolutives avec les dernières technologies du marché.",
      features: [
        "React.js / Next.js",
        "Node.js / Express",
        "Bases de données",
        "API RESTful"
      ]
    },
    {
      icon: <FaCogs className="text-4xl" />,
      title: "Développement logiciel",
      description: "Solutions logicielles sur mesure pour automatiser et optimiser vos processus métier.",
      features: [
        "Logiciels de gestion",
        "Applications desktop",
        "Outils métier",
        "Intégration système"
      ]
    },
    {
      icon: <FaBuilding className="text-4xl" />,
      title: "Création pour entreprises",
      description: "Accompagnement complet des entreprises dans leur transformation digitale et stratégie web.",
      features: [
        "Sites vitrine",
        "E-commerce",
        "Extranet",
        "Maintenance"
      ]
    }
  ];

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
              Nos <span className="text-primary-600">Services</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Des solutions complètes et sur mesure pour répondre à tous vos besoins 
              en matière de développement web et logiciel
            </p>
          </motion.div>
        </div>
      </section>

      <ServicesList services={services} />

      {/* Processus Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Notre <span className="text-primary-600">Méthodologie</span>
            </h2>
            <p className="text-xl text-gray-600">
              Une approche structurée pour garantir le succès de vos projets
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: 1, title: "Analyse", desc: "Compréhension de vos besoins et objectifs" },
              { step: 2, title: "Conception", desc: "Création des maquettes et architecture" },
              { step: 3, title: "Développement", desc: "Réalisation technique et tests" },
              { step: 4, title: "Déploiement", desc: "Mise en production et maintenance" }
            ].map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary-600">{item.step}</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Technologies <span className="text-primary-600">Maîtrisées</span>
            </h2>
            <p className="text-xl text-gray-600">
              Nous utilisons les technologies les plus récentes et performantes
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {[
              "React", "Node.js", "Python", "JavaScript", "TypeScript", "MongoDB",
              "PostgreSQL", "AWS", "Docker", "Git", "Figma", "Tailwind"
            ].map((tech, index) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-white rounded-lg p-4 text-center shadow-sm hover:shadow-md transition-shadow"
              >
                <span className="font-medium text-gray-800">{tech}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-600">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Vous avez un projet en tête ?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Discutons de vos besoins et trouvons ensemble la meilleure solution
            </p>
            <Link to="/contact">
              <Button 
                variant="outline" 
                size="lg"
                className="bg-white text-primary-600 hover:bg-gray-100 border-white"
              >
                Demander un devis gratuit
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default ServicesPage;