<template>
  <div :class="{ 'dark-mode': darkMode }">
    <Header :isDarkMode="darkMode" @toggle-dark-mode="toggleDarkMode" />
    <About id="about" />
    <Skills id="skills" />
    <Projects id="projects" />
    <Contact id="contact" />
    <Footer :isDarkMode="darkMode" />
  </div>
</template>


<script setup>
import { ref, onMounted } from 'vue';
import Header from './components/Header.vue';
import About from './components/About.vue';
import Skills from './components/Skills.vue';
import Projects from './components/Projects.vue';
import Contact from './components/Contact.vue';
import Footer from './components/Footer.vue';

const darkMode = ref(true); // Initialisé à true par défaut

// Fonction pour basculer le mode sombre
const toggleDarkMode = () => {
  darkMode.value = !darkMode.value;
  localStorage.setItem('dark-mode', darkMode.value.toString());

  if (darkMode.value) {
    document.body.classList.add('dark-mode');
  } else {
    document.body.classList.remove('dark-mode');
  }
};

// Appliquer le mode sombre immédiatement
onMounted(() => {
  // Forcer le mode sombre par défaut lors du premier chargement
  document.body.classList.add('dark-mode');
  localStorage.setItem('dark-mode', 'true');
});
</script>

<style>
/* Styles globaux - Mode clair par défaut */
body {
  background-color: #fff;
  color: #333;
  overflow-x: hidden;
}

header {
  background-color: white;
}

/* Mode sombre (appliqué lorsque dark-mode est activé) */
body.dark-mode {
  background-color: #121212;
  color: #fff;
}

body.dark-mode header {
  background-color: #333;
  color: #fff;
}


body.dark-mode a {
  color: #fff;
}

body.dark-mode a:hover {
  color: #00aaff;
}

.dark-mode section {
  background-color: #252525 !important;
  border-radius: 8px;
}


.dark-mode .about p,
.dark-mode .about h2 {
  color: #fff;
}
.dark-mode .projects p,
.dark-mode .projects h2{
  color:#fff;
}
.dark-mode .projects{
  color:black;
}

.dark-mode a {
  color: #fff;
}

.dark-mode a:hover {
  color: #00aaff;
}

.dark-mode .projects {
  background-color: #1e1e1e;
  color: white;
}

.dark-mode .projects h2 {
  color: white;
}

.dark-mode .projects p {
  color: white;
}

.dark-mode .project-card {
  background: #292929;
  box-shadow: 0 4px 12px rgba(255, 255, 255, 0.1);
}

.dark-mode .project-card h3 {
  color: white;
}

.dark-mode .project-card p {
  color: white;
}

.dark-mode .technologies span {
  background: #007bff;
  color: white;
}

.dark-mode .project-link {
  background: #007bff;
  color: white;
}

.dark-mode .project-link:hover {
  background: #0056b3;
}

.dark-mode {
  background-color: #121212;
  color: white;
}

/* ---- Dark Mode pour la section "Projets" ---- */
.dark-mode .projects {
  background-color: #1e1e1e;
  color: white;
  box-shadow: 0 4px 12px rgba(255, 255, 255, 0.1);
}

.dark-mode .projects h2 {
  color: white;
}

.dark-mode .projects p {
  color: white;
}

.dark-mode .project-card {
  background: #2a2a2a;
  box-shadow: 0 4px 12px rgba(255, 255, 255, 0.1);
}

.dark-mode .project-card h3 {
  color: white;
}

.dark-mode .project-card p {
  color: white;
}

.dark-mode .technologies span {
  background: #0056b3;
}

.dark-mode .project-link {
  background: #0056b3;
}

.dark-mode .project-link:hover {
  background: #003d80;
}

/* ---- Dark Mode pour la section "Contact" ---- */
.dark-mode .contact {
  background-color: #1e1e1e;
  color: white;
  box-shadow: 0 4px 12px rgba(255, 255, 255, 0.1);
}

.dark-mode .contact h2 {
  color: white;
}

.dark-mode .contact p {
  color: white;
}

.dark-mode .detail-item i {
  color: #4a90e2;
}

.dark-mode .detail-item a {
  color: #4a90e2;
}

.dark-mode .detail-item a:hover {
  color: #2f6baf;
}

.dark-mode .cv-button {
  background-color: #4a90e2;
  color: white;
}

.dark-mode .cv-button:hover {
  background-color: #2f6baf;
}

/* ---- Responsive Dark Mode ---- */
@media (max-width: 768px) {
  .dark-mode .projects,
  .dark-mode .contact {
    width: 95%;
    padding: 2rem;
  }

  .dark-mode .projects h2,
  .dark-mode .contact h2 {
    font-size: 1.8rem;
  }

  .dark-mode .projects p,
  .dark-mode .contact p {
    font-size: 1rem;
  }
}

/* Mode sombre global */
.dark-mode {
  background-color: #121212;
  color: white;
}

/* ---- Dark Mode pour le header ---- */
.dark-mode header {
  background-color: #1e1e1e;
  color: white;
}

.dark-mode .logo h1 {
  color: #4a90e2;
}

.dark-mode nav ul li a {
  color: white;
}

.dark-mode nav ul li a:hover {
  color: #00aaff;
  border-bottom: 2px solid #00aaff;
}

/* ---- Dark Mode pour les éléments du body ---- */
.dark-mode body {
  background-color: #181818;
  color: white;
}

/* ---- Dark Mode pour le bouton de changement de mode sombre ---- */
.dark-mode .dark-mode-toggle {
  color: #fff;
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
}

.dark-mode .dark-mode-toggle span {
  color: white;
}

.dark-mode .dark-mode-toggle:hover {
  color: #00aaff;
}

div.dark-mode {
  width: 100%;
  overflow-x: hidden; /* bloque tout scroll horizontal */
}

</style>
