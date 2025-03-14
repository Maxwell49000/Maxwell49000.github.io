<template>
  <section class="projects" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">
    <h2>Mes Projets</h2>
    <p>Voici quelques-uns des projets sur lesquels j'ai travaillé :</p>

    <div class="project-list">
      <a 
        v-for="(project, index) in projects" 
        :key="index" 
        :href="project.link" 
        target="_blank" 
        class="project-card-link"
        :data-aos="'fade-up'"
        :data-aos-duration="1000" 
        :data-aos-delay="200 + (index * 100)"
      >
        <div class="project-card">
          <div class="project-img-container">
            <img :src="project.image" :alt="project.title" class="project-img" />
          </div>
          <h3>{{ project.title }}</h3>
          <div class="project-description">
            <p>{{ project.description }}</p>
          </div>
          <div class="technologies">
            <span v-for="tech in project.technologies" :key="tech">{{ tech }}</span>
          </div>
          <div class="project-link">Voir sur GitHub</div>
        </div>
      </a>
    </div>
  </section>
</template>

<script setup>
import festivalImg from '@/assets/img/Festival.PNG';
import tachesImg from '@/assets/img/Taches.PNG';
import ecommerceImg from '@/assets/img/E-commerce.PNG';
import applicationImg from '@/assets/img/Application.PNG';

const projects = [
  {
    title: "Festival",
    description: "Un projet développé en PHP principalement, permet aux clients de voir et de réserver un spectacle/animation, et consulter les avis liés aux activités. Une partie administrateur permet la gestion des activités, avis et utilisateurs.",
    image: festivalImg,
    technologies: ["HTML", "CSS", "Bootstrap", "PHP", "JS", "MySQL"],
    link: "https://github.com/Maxwell49000/Projet-Festival"
  },
  {
    title: "Gestionnaire de tâches",
    description: "Une petite application pour la gestion des tâches. Possibilité d'ajouter, masquer ou supprimer les tâches saisies.",
    image: tachesImg,
    technologies: ["Vue.js", "HTML", "JS", "CSS"],
    link: "https://github.com/Maxwell49000/Gestionnaire-de-tache-"
  },
  {
    title: "Site e-commerce",
    description: "Un site e-commerce créé avec PHP, consommation d'une API (API MARKET). Gestion des avis et commandes.",
    image: ecommerceImg,
    technologies: ["PHP", "MySQL", "HTML", "JS", "CSS", "Node.js (API)"],
    link: "https://github.com/Maxwell49000/e-commerce-Market"
  },
  {
    title: "Application mobile",
    description: "Un projet d'application mobile, mise en place d'une navigation, d'un panier.",
    image: applicationImg,
    technologies: ["React", "JS", "CSS"],
    link: "https://github.com/Maxwell49000/Application-mobile"
  }
];
</script>

<style scoped>
.projects {
  width: 90%;
  max-width: 1200px;
  margin: 4rem auto;
  padding: 3rem 5%;
  background-color: #f8f9fa;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  text-align: center;
  font-family: 'Roboto', sans-serif;
}

.projects h2 {
  font-size: 2.2rem;
  font-weight: bold;
  color: #343a40;
  margin-bottom: 1.5rem;
}

.projects p {
  font-size: 1.2rem;
  color: #495057;
  margin-bottom: 2rem;
  text-align: center;
}

.project-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  justify-content: center;
}

/* Style des liens de projet */
.project-card-link {
  text-decoration: none;
  color: inherit;
  display: block;
  height: 100%;
}

/* Style des cartes de projet */
.project-card {
  background: white;
  padding: 1.5rem;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  text-align: center;
  transition: transform 0.3s ease-in-out;
  display: flex;
  flex-direction: column;
  height: 500px;
  width: 100%;
}

.project-card-link:hover .project-card {
  transform: translateY(-5px);
}

/* Conteneur d'image */
.project-img-container {
  width: 100%;
  height: 180px;
  overflow: hidden;
  border-radius: 8px;
  margin-bottom: 0.5rem;
}

.project-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* Titre du projet */
.project-card h3 {
  font-size: 1.5rem;
  margin: 0.5rem 0;
  color: #343a40;
}

/* Description du projet */
.project-description {
  flex-grow: 1;
  margin-bottom: 1rem;
  padding: 0 0.5rem;
}

.project-description p {
  font-size: 1rem;
  line-height: 1.6;
  text-align: justify;
  color: #495057;
  margin: 0;
}

/* Technologies */
.technologies {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.5rem;
  margin: 1rem 0;
}

.technologies span {
  padding: 0.3rem 0.6rem;
  background: #007bff;
  color: white;
  border-radius: 4px;
  font-size: 0.9rem;
}

/* Lien du projet */
.project-link {
  padding: 0.5rem 1rem;
  background: #007bff;
  color: white;
  border-radius: 5px;
  transition: background 0.3s ease;
  margin-top: auto;
  cursor: pointer;
  font-weight: 500;
}

.project-link:hover {
  background: #0056b3;
}

/* Responsive */
@media (max-width: 768px) {
  .projects {
    width: 95%;
    padding: 2rem;
  }

  .projects h2 {
    font-size: 1.8rem;
  }

  .projects p {
    font-size: 1rem;
  }
  
  .project-card {
    height: 450px;
    padding: 1rem;
  }
  
  .project-img-container {
    height: 150px;
  }
  
  .technologies span {
    font-size: 0.8rem;
  }
}
</style>