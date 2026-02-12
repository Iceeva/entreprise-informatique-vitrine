import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// Meta tags SEO
const metaTags = {
  title: 'ICE DEV - Conception et Développement Informatique',
  description: 'Agence spécialisée dans la conception de sites web, développement web et logiciel. Solutions digitales sur mesure pour entreprises.',
  keywords: 'développement web, conception site internet, développement logiciel, création site entreprise, agence digitale',
  author: 'ICE DEV'
};

// Ajout des meta tags dynamiquement
const setMetaTags = () => {
  // Title
  document.title = metaTags.title;
  
  // Meta description
  let metaDescription = document.querySelector('meta[name="description"]');
  if (!metaDescription) {
    metaDescription = document.createElement('meta');
    metaDescription.name = 'description';
    document.head.appendChild(metaDescription);
  }
  metaDescription.content = metaTags.description;
  
  // Meta keywords
  let metaKeywords = document.querySelector('meta[name="keywords"]');
  if (!metaKeywords) {
    metaKeywords = document.createElement('meta');
    metaKeywords.name = 'keywords';
    document.head.appendChild(metaKeywords);
  }
  metaKeywords.content = metaTags.keywords;
  
  // Meta author
  let metaAuthor = document.querySelector('meta[name="author"]');
  if (!metaAuthor) {
    metaAuthor = document.createElement('meta');
    metaAuthor.name = 'author';
    document.head.appendChild(metaAuthor);
  }
  metaAuthor.content = metaTags.author;
  
  // Viewport
  let metaViewport = document.querySelector('meta[name="viewport"]');
  if (!metaViewport) {
    metaViewport = document.createElement('meta');
    metaViewport.name = 'viewport';
    metaViewport.content = 'width=device-width, initial-scale=1.0';
    document.head.appendChild(metaViewport);
  }
};

setMetaTags();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);