<template>
  <section class="projects" aria-labelledby="projects-title" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">
    <div class="projects-heading">
      <span class="projects-eyebrow">Sélection de projets</span>
      <h2 id="projects-title">Concevoir, structurer, livrer</h2>
      <p>
        Trois applications full-stack retravaillées pour mettre en valeur ma démarche,
        mes choix techniques et la qualité de leur mise en œuvre.
      </p>
    </div>

    <div class="project-grid">
      <article
        v-for="(project, index) in projects"
        :key="project.slug"
        class="project-card"
        :data-aos="'fade-up'"
        :data-aos-delay="100 + index * 100"
      >
        <button
          type="button"
          class="project-visual"
          :aria-label="`Découvrir le projet ${project.title}`"
          @click="openProject(project, $event)"
        >
          <img :src="project.images[0].src" :alt="project.images[0].alt" loading="lazy" />
          <span class="project-number" aria-hidden="true">{{ String(index + 1).padStart(2, '0') }}</span>
          <span class="visual-action">Voir le projet <span aria-hidden="true">↗</span></span>
        </button>

        <div class="project-content">
          <div class="project-meta">
            <span>{{ project.type }}</span>
            <span>{{ project.year }}</span>
          </div>
          <h3>{{ project.title }}</h3>
          <p>{{ project.summary }}</p>

          <ul class="project-stack" :aria-label="`Technologies de ${project.title}`">
            <li v-for="tech in project.technologies.slice(0, 5)" :key="tech">{{ tech }}</li>
            <li v-if="project.technologies.length > 5" class="stack-more">
              +{{ project.technologies.length - 5 }}
            </li>
          </ul>

          <div class="project-actions">
            <button type="button" class="project-details" @click="openProject(project, $event)">
              Explorer le projet <span aria-hidden="true">→</span>
            </button>
            <a
              :href="project.github"
              class="project-github"
              target="_blank"
              rel="noopener noreferrer"
              :aria-label="`Voir le code de ${project.title} sur GitHub`"
            >
              GitHub <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
      </article>
    </div>

    <p class="projects-note">
      Cette sélection évoluera avec mes prochains projets personnels et associatifs.
    </p>

    <Teleport to="body">
      <Transition name="project-dialog">
        <div
          v-if="activeProject"
          class="project-overlay"
          role="presentation"
          @mousedown.self="closeProject"
        >
          <div
            class="project-dialog"
            role="dialog"
            aria-modal="true"
            :aria-labelledby="`${activeProject.slug}-dialog-title`"
          >
            <button
              ref="closeButton"
              type="button"
              class="dialog-close"
              aria-label="Fermer la présentation du projet"
              @click="closeProject"
            >
              <span aria-hidden="true">×</span>
            </button>

            <div class="dialog-gallery">
              <div class="gallery-stage">
                <img
                  :src="currentImage.src"
                  :alt="currentImage.alt"
                  :class="{ 'is-mobile-shot': currentImage.mobile }"
                />
                <span class="gallery-count">
                  {{ activeImageIndex + 1 }} / {{ activeProject.images.length }}
                </span>
                <template v-if="activeProject.images.length > 1">
                  <button
                    type="button"
                    class="gallery-arrow gallery-arrow--previous"
                    aria-label="Capture précédente"
                    @click="previousImage"
                  >
                    ‹
                  </button>
                  <button
                    type="button"
                    class="gallery-arrow gallery-arrow--next"
                    aria-label="Capture suivante"
                    @click="nextImage"
                  >
                    ›
                  </button>
                </template>
              </div>

              <div class="gallery-thumbnails" role="group" aria-label="Captures du projet">
                <button
                  v-for="(image, index) in activeProject.images"
                  :key="image.src"
                  type="button"
                  :class="{ active: activeImageIndex === index }"
                  :aria-label="`Afficher la capture ${index + 1}`"
                  :aria-pressed="activeImageIndex === index"
                  @click="activeImageIndex = index"
                >
                  <img :src="image.src" alt="" loading="lazy" />
                </button>
              </div>
            </div>

            <div class="dialog-content">
              <div class="dialog-kicker">
                <span>{{ activeProject.type }}</span>
                <span>{{ activeProject.year }}</span>
              </div>
              <h3 :id="`${activeProject.slug}-dialog-title`">{{ activeProject.title }}</h3>
              <p class="dialog-lead">{{ activeProject.description }}</p>

              <div class="dialog-section">
                <span class="dialog-label">Points clés</span>
                <ul class="feature-list">
                  <li v-for="feature in activeProject.features" :key="feature">{{ feature }}</li>
                </ul>
              </div>

              <div class="dialog-section">
                <span class="dialog-label">Écosystème technique</span>
                <ul class="dialog-stack">
                  <li v-for="tech in activeProject.technologies" :key="tech">{{ tech }}</li>
                </ul>
              </div>

              <a
                :href="activeProject.github"
                class="dialog-github"
                target="_blank"
                rel="noopener noreferrer"
              >
                Consulter le dépôt GitHub <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>
        </div>
      </Transition>
    </Teleport>
  </section>
</template>

<script setup>
import { computed, nextTick, onMounted, onUnmounted, ref, watch } from 'vue';

const rawImage = (repository, filename) =>
  `https://raw.githubusercontent.com/Maxwell49000/${repository}/main/docs/screenshots/${filename}`;

const projects = [
  {
    slug: 'sillage',
    title: 'Sillage',
    type: 'Assistant documentaire & RAG',
    year: '2026',
    summary: 'Un assistant local qui transforme des documents en base de connaissances interrogeable.',
    description:
      'Sillage extrait, fragmente et vectorise des documents pour produire des réponses contextualisées avec une architecture RAG entièrement locale.',
    technologies: ['Vue 3', 'Java 21', 'Spring Boot', 'Spring AI', 'PostgreSQL', 'pgvector', 'Ollama', 'Docker'],
    features: [
      'Import et indexation de fichiers PDF, Word et texte',
      'Recherche sémantique avec PostgreSQL et pgvector',
      'Génération locale et confidentielle avec Ollama',
      'Conversations persistantes et sources contextualisées',
    ],
    github: 'https://github.com/Maxwell49000/Sillage',
    images: [
      { src: rawImage('Sillage', 'sillage-home-desktop.png'), alt: 'Accueil de l’application Sillage' },
      { src: rawImage('Sillage', 'sillage-sources-modal.png'), alt: 'Gestion des sources documentaires dans Sillage' },
      { src: rawImage('Sillage', 'sillage-conversation-desktop.png'), alt: 'Conversation contextualisée dans Sillage' },
      { src: rawImage('Sillage', 'sillage-home-mobile.png'), alt: 'Accueil mobile de Sillage', mobile: true },
    ],
  },
  {
    slug: 'learning-tracker',
    title: 'Learning Tracker',
    type: 'Plateforme e-learning',
    year: '2026',
    summary: 'Une plateforme complète pour organiser des cours et suivre précisément sa progression.',
    description:
      'Learning Tracker réunit catalogue pédagogique, suivi d’avancement et administration dans une application sécurisée pensée pour une utilisation fluide sur tous les écrans.',
    technologies: ['React 19', 'Redux Toolkit', 'Material UI', 'Java 21', 'Spring Boot', 'Spring Security', 'MySQL', 'Docker'],
    features: [
      'Authentification JWT et gestion des rôles utilisateur et administrateur',
      'Progression globale, par cours et par contenu',
      'Administration des formations, contenus et utilisateurs',
      'Environnement de démonstration reproductible avec Docker',
    ],
    github: 'https://github.com/Maxwell49000/Learning-tracker',
    images: [
      { src: rawImage('Learning-tracker', 'LearningTracker-accueil-desktop.png'), alt: 'Accueil de Learning Tracker' },
      { src: rawImage('Learning-tracker', '02-parcours-desktop.png'), alt: 'Catalogue des parcours de Learning Tracker' },
      { src: rawImage('Learning-tracker', '03-detail-cours-desktop.png'), alt: 'Détail d’un cours dans Learning Tracker' },
      { src: rawImage('Learning-tracker', '04-administration-desktop.png'), alt: 'Administration de Learning Tracker' },
    ],
  },
  {
    slug: 'konnekt',
    title: 'Konnekt',
    type: 'Réseau professionnel',
    year: '2026',
    summary: 'Un réseau social professionnel full-stack avec interactions et messagerie en temps réel.',
    description:
      'Konnekt propose profils, publications, connexions et conversations au sein d’une architecture full-stack associant données relationnelles et documentaires.',
    technologies: ['Vue 3', 'Quasar', 'Pinia', 'Java 17', 'Spring Boot', 'WebSocket', 'MySQL', 'MongoDB', 'Docker'],
    features: [
      'Profils enrichis avec expériences et compétences',
      'Fil d’actualité, commentaires et mentions J’aime',
      'Connexions, suggestions et recherche multicritère',
      'Messagerie persistante et notifications WebSocket',
    ],
    github: 'https://github.com/Maxwell49000/Konnekt',
    images: [
      { src: rawImage('Konnekt', '01-login.png'), alt: 'Connexion à la plateforme Konnekt' },
      { src: rawImage('Konnekt', '02-feed.png'), alt: 'Fil d’actualité de Konnekt' },
      { src: rawImage('Konnekt', '03-profile.png'), alt: 'Profil professionnel dans Konnekt' },
    ],
  },
];

const activeProject = ref(null);
const activeImageIndex = ref(0);
const closeButton = ref(null);
let lastTrigger = null;

const currentImage = computed(() => activeProject.value?.images[activeImageIndex.value] ?? {});

function openProject(project, event) {
  lastTrigger = event?.currentTarget ?? null;
  activeProject.value = project;
  activeImageIndex.value = 0;
  nextTick(() => closeButton.value?.focus());
}

function closeProject() {
  activeProject.value = null;
  activeImageIndex.value = 0;
  nextTick(() => lastTrigger?.focus());
}

function nextImage() {
  activeImageIndex.value = (activeImageIndex.value + 1) % activeProject.value.images.length;
}

function previousImage() {
  activeImageIndex.value =
    (activeImageIndex.value - 1 + activeProject.value.images.length) % activeProject.value.images.length;
}

function onKeyDown(event) {
  if (!activeProject.value) return;
  if (event.key === 'Escape') closeProject();
  if (event.key === 'ArrowRight') nextImage();
  if (event.key === 'ArrowLeft') previousImage();
}

watch(activeProject, (project) => {
  document.body.style.overflow = project ? 'hidden' : '';
});

onMounted(() => globalThis.addEventListener('keydown', onKeyDown));
onUnmounted(() => {
  globalThis.removeEventListener('keydown', onKeyDown);
  document.body.style.overflow = '';
});
</script>

<style scoped>
.projects {
  width: 90%;
  max-width: 1200px;
  margin: 4rem auto;
  padding: clamp(2rem, 5vw, 4rem) 5%;
  overflow: hidden;
  border: 1px solid rgba(0, 212, 255, 0.2);
  border-radius: 20px;
  background:
    radial-gradient(circle at 90% 8%, rgba(124, 58, 237, 0.12), transparent 27%),
    radial-gradient(circle at 5% 85%, rgba(0, 212, 255, 0.08), transparent 24%),
    linear-gradient(180deg, rgba(26, 26, 46, 0.66), rgba(20, 20, 38, 0.82));
  box-sizing: border-box;
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.22);
  font-family: 'Roboto', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
}

.projects-heading {
  max-width: 760px;
  margin: 0 auto 3rem;
  text-align: center;
}

.projects-eyebrow {
  color: #00d4ff;
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
}

.projects h2 {
  margin: 0.45rem 0 1rem;
  background: linear-gradient(135deg, #00d4ff, #7c3aed);
  background-clip: text;
  color: transparent;
  font-size: clamp(2rem, 5vw, 2.5rem);
  line-height: 1.2;
}

.projects-heading p {
  margin: 0;
  color: rgba(255, 255, 255, 0.78);
  font-size: 1.05rem;
  line-height: 1.75;
}

.project-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 315px), 1fr));
  gap: 1.25rem;
}

.project-card {
  position: relative;
  display: flex;
  min-width: 0;
  flex-direction: column;
  overflow: hidden;
  border: 1px solid rgba(0, 212, 255, 0.18);
  border-radius: 16px;
  background: rgba(7, 12, 29, 0.58);
  box-shadow: 0 10px 28px rgba(0, 0, 0, 0.22);
  transition: transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease;
}

.project-card:hover {
  transform: translateY(-6px);
  border-color: rgba(0, 212, 255, 0.48);
  box-shadow: 0 18px 38px rgba(0, 212, 255, 0.1);
}

.project-visual {
  position: relative;
  display: block;
  width: 100%;
  height: 220px;
  padding: 0;
  overflow: hidden;
  border: 0;
  border-bottom: 1px solid rgba(0, 212, 255, 0.14);
  border-radius: 0;
  background: #0b1020;
  cursor: pointer;
}

.project-visual::after {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, transparent 45%, rgba(5, 8, 22, 0.88));
  pointer-events: none;
}

.project-visual img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top center;
  transition: transform 0.5s ease, filter 0.5s ease;
}

.project-card:hover .project-visual img {
  transform: scale(1.035);
  filter: saturate(1.08);
}

.project-number {
  position: absolute;
  z-index: 1;
  top: 1rem;
  left: 1rem;
  color: rgba(255, 255, 255, 0.76);
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.16em;
}

.visual-action {
  position: absolute;
  z-index: 1;
  right: 1rem;
  bottom: 0.9rem;
  color: #fff;
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 0.04em;
  opacity: 0;
  transform: translateY(5px);
  transition: opacity 0.25s ease, transform 0.25s ease;
}

.project-card:hover .visual-action,
.project-visual:focus-visible .visual-action {
  opacity: 1;
  transform: translateY(0);
}

.project-content {
  display: flex;
  flex: 1;
  flex-direction: column;
  padding: 1.5rem;
}

.project-meta,
.dialog-kicker {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  color: #00d4ff;
  font-size: 0.69rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
}

.project-content h3 {
  margin: 0.7rem 0 0.75rem;
  color: #fff;
  font-size: 1.45rem;
  line-height: 1.2;
  text-align: left;
}

.project-content > p {
  min-height: 4.8rem;
  margin: 0 0 1.15rem;
  color: rgba(255, 255, 255, 0.68);
  font-size: 0.91rem;
  line-height: 1.65;
  text-align: left;
}

.project-stack,
.dialog-stack {
  display: flex;
  flex-wrap: wrap;
  gap: 0.45rem;
  margin: 0;
  padding: 0;
  list-style: none;
}

.project-stack {
  margin-bottom: 1.4rem;
}

.project-stack li,
.dialog-stack li {
  padding: 0.35rem 0.65rem;
  border: 1px solid rgba(0, 212, 255, 0.2);
  border-radius: 999px;
  color: rgba(255, 255, 255, 0.76);
  background: rgba(0, 212, 255, 0.07);
  font-size: 0.72rem;
}

.project-stack .stack-more {
  color: #00d4ff;
}

.project-actions {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  margin-top: auto;
  padding-top: 1.05rem;
  border-top: 1px solid rgba(255, 255, 255, 0.07);
}

.project-details,
.project-github {
  color: #fff;
  font-family: inherit;
  font-size: 0.82rem;
  font-weight: 700;
  text-decoration: none;
}

.project-details {
  padding: 0;
  border: 0;
  background: transparent;
  cursor: pointer;
}

.project-details span,
.project-github span,
.dialog-github span {
  color: #00d4ff;
  transition: transform 0.2s ease;
}

.project-details:hover span,
.project-github:hover span,
.dialog-github:hover span {
  display: inline-block;
  transform: translate(2px, -1px);
}

.project-github {
  color: rgba(255, 255, 255, 0.58);
}

.projects-note {
  margin: 2rem 0 0;
  color: rgba(255, 255, 255, 0.52);
  font-size: 0.82rem;
  text-align: center;
}

.project-overlay {
  position: fixed;
  z-index: 2000;
  inset: 0;
  display: grid;
  place-items: center;
  padding: clamp(0.75rem, 3vw, 2rem);
  overflow-y: auto;
  background: rgba(3, 6, 18, 0.84);
  backdrop-filter: blur(14px);
  box-sizing: border-box;
}

.project-dialog {
  position: relative;
  display: grid;
  grid-template-columns: minmax(0, 1.2fr) minmax(320px, 0.8fr);
  width: min(1120px, 100%);
  max-height: calc(100vh - 4rem);
  overflow: hidden;
  border: 1px solid rgba(0, 212, 255, 0.28);
  border-radius: 20px;
  background: #0d1023;
  box-shadow: 0 28px 90px rgba(0, 0, 0, 0.55), 0 0 50px rgba(0, 212, 255, 0.08);
  font-family: 'Roboto', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
}

.dialog-close {
  position: absolute;
  z-index: 4;
  top: 0.9rem;
  right: 0.9rem;
  display: grid;
  place-items: center;
  width: 42px;
  height: 42px;
  padding: 0;
  border: 1px solid rgba(255, 255, 255, 0.16);
  border-radius: 50%;
  color: #fff;
  background: rgba(8, 11, 28, 0.78);
  font-size: 1.65rem;
  line-height: 1;
  cursor: pointer;
  backdrop-filter: blur(8px);
}

.dialog-close:hover,
.dialog-close:focus-visible {
  border-color: #00d4ff;
  color: #00d4ff;
}

.dialog-gallery {
  display: flex;
  min-width: 0;
  flex-direction: column;
  padding: 1rem;
  background: #070a18;
}

.gallery-stage {
  position: relative;
  display: grid;
  min-height: 0;
  flex: 1;
  place-items: center;
  overflow: hidden;
  border: 1px solid rgba(0, 212, 255, 0.13);
  border-radius: 13px;
  background: #11152a;
}

.gallery-stage > img {
  width: 100%;
  height: 100%;
  max-height: 630px;
  object-fit: contain;
}

.gallery-stage > img.is-mobile-shot {
  width: auto;
  max-width: 100%;
}

.gallery-count {
  position: absolute;
  top: 0.8rem;
  left: 0.8rem;
  padding: 0.32rem 0.58rem;
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 999px;
  color: rgba(255, 255, 255, 0.78);
  background: rgba(5, 8, 22, 0.78);
  font-size: 0.72rem;
  backdrop-filter: blur(7px);
}

.gallery-arrow {
  position: absolute;
  top: 50%;
  display: grid;
  place-items: center;
  width: 40px;
  height: 48px;
  padding: 0;
  border: 1px solid rgba(255, 255, 255, 0.13);
  border-radius: 10px;
  color: #fff;
  background: rgba(5, 8, 22, 0.72);
  font-size: 2rem;
  cursor: pointer;
  transform: translateY(-50%);
  backdrop-filter: blur(8px);
}

.gallery-arrow:hover,
.gallery-arrow:focus-visible {
  border-color: #00d4ff;
  color: #00d4ff;
}

.gallery-arrow--previous { left: 0.8rem; }
.gallery-arrow--next { right: 0.8rem; }

.gallery-thumbnails {
  display: grid;
  grid-auto-columns: 82px;
  grid-auto-flow: column;
  gap: 0.6rem;
  margin-top: 0.7rem;
  overflow-x: auto;
  scrollbar-width: thin;
}

.gallery-thumbnails button {
  height: 54px;
  padding: 2px;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 8px;
  background: #11152a;
  cursor: pointer;
  opacity: 0.58;
}

.gallery-thumbnails button.active {
  border-color: #00d4ff;
  box-shadow: 0 0 14px rgba(0, 212, 255, 0.2);
  opacity: 1;
}

.gallery-thumbnails img {
  width: 100%;
  height: 100%;
  border-radius: 5px;
  object-fit: cover;
}

.dialog-content {
  padding: clamp(2rem, 4vw, 3.2rem);
  overflow-y: auto;
}

.dialog-kicker {
  padding-right: 3.5rem;
}

.dialog-content h3 {
  margin: 0.8rem 0 1rem;
  color: #fff;
  font-size: clamp(2rem, 4vw, 3rem);
  line-height: 1.05;
}

.dialog-lead {
  margin: 0;
  color: rgba(255, 255, 255, 0.72);
  font-size: 0.96rem;
  line-height: 1.72;
}

.dialog-section {
  margin-top: 1.8rem;
  padding-top: 1.4rem;
  border-top: 1px solid rgba(255, 255, 255, 0.09);
}

.dialog-label {
  display: block;
  margin-bottom: 0.9rem;
  color: #00d4ff;
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 0.13em;
  text-transform: uppercase;
}

.feature-list {
  display: grid;
  gap: 0.7rem;
  margin: 0;
  padding: 0;
  color: rgba(255, 255, 255, 0.72);
  font-size: 0.86rem;
  line-height: 1.5;
  list-style: none;
}

.feature-list li {
  position: relative;
  padding-left: 1.2rem;
}

.feature-list li::before {
  content: '';
  position: absolute;
  top: 0.58em;
  left: 0;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: #00d4ff;
  box-shadow: 0 0 8px rgba(0, 212, 255, 0.65);
}

.dialog-github {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  margin-top: 2rem;
  padding: 0.8rem 1rem;
  border: 1px solid rgba(0, 212, 255, 0.38);
  border-radius: 9px;
  color: #fff;
  background: rgba(0, 212, 255, 0.08);
  font-size: 0.84rem;
  font-weight: 700;
  text-decoration: none;
}

.dialog-github:hover {
  border-color: #00d4ff;
  background: rgba(0, 212, 255, 0.13);
}

.project-dialog-enter-active,
.project-dialog-leave-active {
  transition: opacity 0.25s ease;
}

.project-dialog-enter-active .project-dialog,
.project-dialog-leave-active .project-dialog {
  transition: transform 0.3s ease, opacity 0.25s ease;
}

.project-dialog-enter-from,
.project-dialog-leave-to {
  opacity: 0;
}

.project-dialog-enter-from .project-dialog,
.project-dialog-leave-to .project-dialog {
  opacity: 0;
  transform: translateY(18px) scale(0.985);
}

button:focus-visible,
a:focus-visible {
  outline: 2px solid #00d4ff;
  outline-offset: 3px;
}

@media (max-width: 900px) {
  .project-dialog {
    grid-template-columns: 1fr;
    max-height: none;
    margin: auto 0;
    overflow: visible;
  }

  .dialog-gallery {
    min-height: 460px;
  }

  .dialog-content {
    overflow: visible;
  }
}

@media (max-width: 600px) {
  .projects {
    padding: 2rem 4%;
  }

  .projects-heading {
    margin-bottom: 2rem;
  }

  .projects-heading p {
    font-size: 0.95rem;
  }

  .project-visual {
    height: 190px;
  }

  .project-content > p {
    min-height: 0;
  }

  .project-overlay {
    align-items: start;
    padding: 0;
  }

  .project-dialog {
    min-height: 100vh;
    border: 0;
    border-radius: 0;
  }

  .dialog-gallery {
    min-height: 360px;
    padding: 0;
  }

  .gallery-stage {
    border: 0;
    border-radius: 0;
  }

  .gallery-thumbnails {
    padding: 0 0.75rem 0.75rem;
  }

  .dialog-content {
    padding: 2rem 1.25rem 2.5rem;
  }

  .project-actions {
    align-items: flex-start;
    flex-direction: column;
  }
}

@media (prefers-reduced-motion: reduce) {
  .project-card,
  .project-visual img,
  .visual-action,
  .project-dialog-enter-active,
  .project-dialog-leave-active,
  .project-dialog-enter-active .project-dialog,
  .project-dialog-leave-active .project-dialog {
    transition: none;
  }
}
</style>
