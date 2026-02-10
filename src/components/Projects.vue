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
            <button class="img-button" @click="openModal(project)">
              <img :src="project.image" :alt="project.title" />
            </button>
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

    <!-- Lightbox modal -->
    <div v-if="modalOpen" class="lightbox" @click.self="closeModal">
      <div class="lightbox-content">
        <button class="lightbox-close" @click="closeModal" aria-label="Fermer">×</button>
        <img :src="modalImage" alt="Aperçu du projet" />
      </div>
    </div>

  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import festivalImg from '@/assets/img/Festival.PNG';
import tachesImg from '@/assets/img/Taches.PNG';
import ecommerceImg from '@/assets/img/E-commerce.PNG';
import applicationImg from '@/assets/img/Application.PNG';
import linkDong from '@/assets/img/linkdong.PNG';
import learningTracker from '@/assets/img/learningTracker.PNG';

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
    description: "LearningTracker — application web pour suivre facilement sa progression dans des cours en ligne. Les utilisateurs peuvent s’inscrire/se connecter, parcourir les cours et marquer chaque contenu comme lu/terminé. La progression est calculée par contenu et par cours (pourcentage / barre de progression), avec un tableau de bord qui affiche l’avancement global. Un espace admin permet de créer, modifier ou supprimer cours et contenus et de consulter les statistiques de progression.",
    image: learningTracker,
    technologies: ["React", "MUI (Material Design)","Spring Boot", "Tech3"],
    link: null
  }
];

// Lightbox state & handlers
const modalOpen = ref(false);
const modalImage = ref(null);

function openModal(project) {
  modalImage.value = project.image;
  modalOpen.value = true;
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  modalOpen.value = false;
  modalImage.value = null;
  document.body.style.overflow = '';
}

function onKeyDown(e) {
  if (e.key === 'Escape' && modalOpen.value) closeModal();
}

onMounted(() => window.addEventListener('keydown', onKeyDown));
onUnmounted(() => {
  window.removeEventListener('keydown', onKeyDown);
  document.body.style.overflow = '';
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
  margin: 4rem auto;      /* même top que skills */
  padding: 3rem 5%;       /* padding interne comme skills */
  background-color: #f8f9fa; /* optionnel : si tu veux un encadré comme skills */
  border-radius: 8px;     /* optionnel : coins arrondis comme skills */
  text-align: center;
  font-family: 'Roboto', sans-serif;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1); /* optionnel */
  box-sizing: border-box;
}

/* Grid responsive */
.project-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
  justify-items: center;
}
/* CARD */
.project-card {
  background: white;
  border-radius: 14px;
  padding: 1.8rem;
  box-shadow: 0 6px 20px rgba(0,0,0,0.08);
  transition: transform .25s ease, box-shadow .25s ease;
}

.project-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 10px 30px rgba(0,0,0,0.12);
}

/* MOCKUP */
.mockup {
  background: #e8e8e8;
  border-radius: 10px;
  padding: 12px;
  position: relative;
  margin-bottom: 1rem;
}

.mockup::before {
  content: "";
  position: absolute;
  top: -6px;
  left: 50%;
  width: 60px;
  height: 6px;
  background: #ccc;
  border-radius: 10px;
  transform: translateX(-50%);
}

.mockup-screen {
  height: 180px;
  overflow: hidden;
  border-radius: 6px;
}

.mockup-screen img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  object-position: center;
  background-color: #fff;
  display: block;
}

/* Clickable image button */
.img-button {
  background: none;
  border: 0;
  padding: 0;
  margin: 0;
  width: 100%;
  height: 100%;
  cursor: zoom-in;
}

.img-button:focus {
  outline: 2px solid rgba(0,123,255,0.25);
}

/* Lightbox / modal */
.lightbox {
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 20px;
}

.lightbox-content {
  position: relative;
  max-width: 1100px;
  width: 100%;
  max-height: 90vh;
}

.lightbox-content img {
  width: 100%;
  height: auto;
  max-height: 90vh;
  object-fit: contain;
  border-radius: 8px;
  background: #fff;
  display: block;
}

.lightbox-close {
  position: absolute;
  top: -10px;
  right: -10px;
  background: #fff;
  border: none;
  border-radius: 50%;
  width: 36px;
  height: 36px;
  box-shadow: 0 2px 6px rgba(0,0,0,0.2);
  cursor: pointer;
  font-size: 20px;
  line-height: 1;
}

/* TEXT */
.projects h2 {
  font-size: 2rem;
  margin-top: 0;          /* top réduit */
  margin-bottom: 1rem;    /* espace comme skills */
}

.projects p {
  text-align: center;
  margin-bottom: 3rem;
  color: #555;
  font-size: 1rem;
}



h3 {
  margin-top: 0.6rem;
}

.description {
  color: #555;
  min-height: 60px;
  margin-bottom: 1rem;
  text-align: center;
}

/* STACK */
.stack {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: .5rem;
  margin-bottom: 1.3rem;
}

.stack span {
  background: #eef1f7;
  padding: 0.35rem 0.8rem;
  border-radius: 20px;
  font-size: .85rem;
  color: #333;
  font-weight: 500;
}

/* LINKS */
.links {
  display: flex;
  justify-content: center;
  gap: 1.2rem;
}

.view-link {
  padding: 0.45rem 1rem;
  background: #007bff;
  color: white;
  border-radius: 6px;
  text-decoration: none;
  transition: background .2s;
}

.view-link:hover { background: #005dcc; }

.github-link {
  font-size: 1.6rem;
  color: #333;
  transition: color .2s;
}

.github-link:hover { color: #000; }

@media(max-width: 600px) {
  .mockup-screen {
    height: 150px;
  }
  .lightbox-content { max-width: 95%; }
}

/* Petits écrans (iPhone SE et similaires) */
@media (max-width: 400px) {
  .project-grid {
    grid-template-columns: 1fr; /* une seule colonne */
    gap: 1rem;
  }

  .project-card {
    width: 100%;
    max-width: 100%; /* occupe toute la largeur dispo */
    box-sizing: border-box;
  }
}


</style>

