<template>
  <section class="projects" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">
    <h2>Mes Projets</h2>
    <p>Une sélection de projets réalisés en formation et en autodidacte.</p>

    <div class="project-grid">
      <div 
        class="project-card" 
        v-for="(project, index) in projects" 
        :key="index"
        :data-aos="'fade-up'"
        :data-aos-delay="150 + index * 120"
      >

        <!-- MOCKUP -->
        <div class="mockup">
          <div class="mockup-screen">
            <img :src="project.image" :alt="project.title" />
          </div>
        </div>

        <!-- TITLE -->
        <h3>{{ project.title }}</h3>

        <!-- SHORT DESCRIPTION -->
        <p class="description">{{ project.description }}</p>

        <!-- STACK -->
        <div class="stack">
          <span v-for="tech in project.technologies" :key="tech">{{ tech }}</span>
        </div>        

      </div>
    </div>

  </section>
</template>

<script setup>
import { onMounted, onUnmounted } from 'vue';
import festivalImg from '@/assets/img/Festival.PNG';
import tachesImg from '@/assets/img/Taches.PNG';
import ecommerceImg from '@/assets/img/E-commerce.PNG';
import applicationImg from '@/assets/img/Application.PNG';
import linkDong from '@/assets/img/linkdong.PNG';
import learningTracker from '@/assets/img/learningTracker.PNG';
import chatSpringAI from '@/assets/img/chatSpringAI.PNG';

const projects = [
  {
    title: "Festival",
    description: "Plateforme de réservation de spectacles, système de réservation complet avec espace administrateur pour gérer les événements.",
    image: festivalImg,
    technologies: ["PHP", "MySQL", "Bootstrap", "JS"],    
    link: null
  },
  {
    title: "Gestionnaire de tâches",
    description: "Application simple pour ajouter et gérer ses tâches.",
    image: tachesImg,
    technologies: ["Vue.js", "JavaScript", "CSS"],    
    link: null
  },
  {
    title: "E-commerce",
    description: "Site avec API externe, gestion des avis et commandes.",
    image: ecommerceImg,
    technologies: ["PHP", "MySQL", "API", "Node.js"],    
    link: null
  },
  {
    title: "Application mobile",
    description: "Prototype mobile avec navigation et gestion du panier.",
    image: applicationImg,
    technologies: ["React", "JavaScript"],    
    link: null
  },
  {
    title: "LinkDong",
    description: "Réseau social professionnel full‑stack offrant profils, expériences/compétences, fil d'actualité (posts, likes, commentaires), gestion de connexions et messagerie.",
    image: linkDong,
    technologies: ["Vue.js", "Quasar", "Spring Boot", "MySQL", "MongoDB", "Swagger"],
    link: null
  },
  {
    title: "LearningTracker",
    description: "LearningTracker est une application web de suivi de progression dans des cours en ligne. Les utilisateurs peuvent s'inscrire, se connecter, consulter les cours et marquer les contenus comme terminés. La progression est calculée par contenu et par cours, avec un tableau de bord affichant l'avancement global. Un espace administrateur permet de gérer les cours et contenus ainsi que de consulter les statistiques de progression.",
    image: learningTracker,
    technologies: ["React", "MUI (Material Design)", "Spring Boot", "MySQL", "Swagger"],
    link: null
  },
  {
    title: "ChatSpringAI",
    description: "ChatSpringAI est une application de chat conversationnel moderne qui combine la puissance de la génération de texte avec la récupération de documents pertinents (RAG). Conçue pour fonctionner sur des PC avec ressources limitées en utilisant des modèles IA légers comme Gemma.",
    image: chatSpringAI,
    technologies: ["Vue.js", "Spring Boot", "Spring AI", "PostgreSQL", "Docker", "Ollama", "PGVector"],
    link: null
  }
];

// Keyboard shortcut
function onKeyDown(e) {
  if (e.key === 'Escape') {
    // Future use if needed
  }
}

onMounted(() => globalThis.addEventListener('keydown', onKeyDown));
onUnmounted(() => {
  globalThis.removeEventListener('keydown', onKeyDown);
});
</script>

<style scoped>
/* S'assure qu'aucun élément ne dépasse du body */
body, html {
  overflow-x: hidden;
}

.projects {
  width: 90%;
  max-width: 1200px;
  margin: 4rem auto;
  padding: 3rem 5%;
  background: linear-gradient(180deg, rgba(26, 26, 46, 0.5) 0%, rgba(37, 37, 55, 0.3) 100%);
  border: 1px solid rgba(0, 212, 255, 0.2);
  border-radius: 16px;
  text-align: center;
  font-family: 'Roboto', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  box-shadow: 0 8px 32px rgba(0, 212, 255, 0.1);
  box-sizing: border-box;
  transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.projects:hover {
  border-color: rgba(0, 212, 255, 0.4);
  box-shadow: 0 12px 48px rgba(0, 212, 255, 0.15);
  transform: translateY(-2px);
}

.projects h2 {
  font-size: 2.5rem;
  margin-top: 0;
  margin-bottom: 1rem;
  background: linear-gradient(135deg, #00d4ff 0%, #7c3aed 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  font-weight: 700;
}

.projects > p {
  font-size: 1.1rem;
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 3rem;
  font-weight: 400;
}

/* Grid responsive */
.project-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  justify-items: center;
  width: 100%;
}

/* CARD */
.project-card {
  background: linear-gradient(135deg, rgba(37, 37, 55, 0.8) 0%, rgba(26, 26, 46, 0.5) 100%);
  border: 1px solid rgba(0, 212, 255, 0.2);
  border-radius: 16px;
  padding: 2rem;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.3);
  transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
  position: relative;
  overflow: hidden;
  width: 100%;
  max-width: 360px;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.project-card::before {
  content: '';
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: radial-gradient(circle, rgba(0, 212, 255, 0.1) 0%, transparent 70%);
  transition: all 0.6s ease;
  opacity: 0;
}

.project-card:hover {
  border-color: rgba(0, 212, 255, 0.6);
  box-shadow: 0 16px 48px rgba(0, 212, 255, 0.2);
  transform: translateY(-12px) scale(1.02);
}

.project-card:hover::before {
  opacity: 1;
  top: 0;
  left: 0;
}

/* MOCKUP */
.mockup {
  background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
  border: 2px solid rgba(0, 212, 255, 0.2);
  border-radius: 12px;
  padding: 12px;
  position: relative;
  margin-bottom: 1.5rem;
  overflow: hidden;
}

.mockup::before {
  content: "";
  position: absolute;
  top: -6px;
  left: 50%;
  width: 60px;
  height: 6px;
  background: linear-gradient(90deg, #00d4ff, #7c3aed);
  border-radius: 10px;
  transform: translateX(-50%);
  box-shadow: 0 0 15px rgba(0, 212, 255, 0.4);
}

.mockup-screen {
  height: 200px;
  overflow: hidden;
  border-radius: 8px;
  background: white;
  transition: all 0.3s ease;
}

.project-card:hover .mockup-screen {
  box-shadow: inset 0 0 20px rgba(0, 212, 255, 0.1);
}

.mockup-screen img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  object-position: center;
  background-color: #fff;
  display: block;
  transition: transform 0.3s ease;
}

.project-card:hover .mockup-screen img {
  transform: scale(1.05);
}

/* TEXT */
h3 {
  margin-top: 1rem;
  font-size: 1.5rem;
  color: #00d4ff;
  font-weight: 600;
  text-align: center;
  position: relative;
  z-index: 1;
  transition: all 0.3s ease;
}

.project-card:hover h3 {
  color: #7c3aed;
  text-shadow: 0 0 15px rgba(0, 212, 255, 0.3);
}

.description {
  color: rgba(255, 255, 255, 0.8);
  min-height: 70px;
  margin-bottom: 1.5rem;
  text-align: center;
  font-size: 0.95rem;
  line-height: 1.6;
  position: relative;
  z-index: 1;
}

/* STACK */
.stack {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.7rem;
  margin-bottom: 2rem;
  position: relative;
  z-index: 1;
}

.stack span {
  background: rgba(0, 212, 255, 0.15);
  border: 1px solid rgba(0, 212, 255, 0.3);
  padding: 0.45rem 1rem;
  border-radius: 24px;
  font-size: 0.85rem;
  color: #00d4ff;
  font-weight: 600;
  letter-spacing: 0.5px;
  transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.stack span:hover {
  background: rgba(0, 212, 255, 0.3);
  border-color: rgba(0, 212, 255, 0.6);
  box-shadow: 0 0 20px rgba(0, 212, 255, 0.2);
  transform: translateY(-3px);
}

/* LINKS */
.links {
  display: flex;
  justify-content: center;
  gap: 1.2rem;
  position: relative;
  z-index: 1;
  margin-top: auto;
}

.view-link {
  padding: 0.6rem 1.5rem;
  background: linear-gradient(135deg, #00d4ff 0%, #7c3aed 100%);
  color: white;
  border: none;
  border-radius: 8px;
  text-decoration: none;
  transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
  cursor: pointer;
  font-weight: 600;
  box-shadow: 0 4px 15px rgba(0, 212, 255, 0.2);
}

.view-link:hover {
  box-shadow: 0 8px 25px rgba(0, 212, 255, 0.4);
  transform: translateY(-3px);
}

.view-link:active {
  transform: translateY(-1px);
}

.github-link {
  font-size: 1.8rem;
  color: #ffffff;
  transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  border: 2px solid rgba(0, 212, 255, 0.3);
}

.github-link:hover {
  color: #7c3aed;
  border-color: rgba(0, 212, 255, 0.7);
  box-shadow: 0 0 20px rgba(0, 212, 255, 0.3);
  transform: scale(1.15) rotate(-15deg);
}

@media (max-width: 600px) {
  .projects {
    padding: 2rem 4%;
  }

  .projects h2 {
    font-size: 1.8rem;
  }

  .mockup-screen {
    height: 160px;
  }

  .project-grid {
    gap: 1.5rem;
  }
}

/* Petits écrans (iPhone SE et similaires) */
@media (max-width: 480px) {
  .projects {
    padding: 1.5rem 3%;
    margin: 2rem auto;
  }

  .projects h2 {
    font-size: 1.5rem;
    margin-bottom: 0.8rem;
  }

  .projects > p {
    font-size: 0.95rem;
    margin-bottom: 2rem;
  }

  .project-grid {
    grid-template-columns: 1fr;
    gap: 1.2rem;
  }

  .project-card {
    max-width: 100%;
    padding: 1.5rem;
  }

  h3 {
    font-size: 1.3rem;
  }

  .description {
    min-height: 60px;
    font-size: 0.9rem;
  }

  .stack {
    gap: 0.5rem;
    margin-bottom: 1.5rem;
  }

  .stack span {
    padding: 0.35rem 0.8rem;
    font-size: 0.8rem;
  }

  .links {
    gap: 0.8rem;
  }

  .view-link {
    padding: 0.5rem 1.2rem;
    font-size: 0.9rem;
  }
}
</style>
