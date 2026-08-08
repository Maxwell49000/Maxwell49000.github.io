<template>
  <section class="skills" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">
    <div class="skills-heading">
      <span class="skills-eyebrow">Écosystème technique</span>
      <h2>Mes compétences</h2>
      <p class="skills-intro">
        Une stack full-stack complétée par des outils d’architecture, de livraison et de collaboration.
      </p>
    </div>

    <div class="featured-skills">
      <div class="section-heading">
        <div>
          <span class="section-kicker">Au quotidien</span>
          <h3>Ma stack principale</h3>
        </div>
        <p>Les technologies qui structurent aujourd’hui mon environnement de développement.</p>
      </div>

      <div class="featured-grid">
        <article
          v-for="skill in featuredSkills"
          :key="skill.name"
          class="featured-card"
        >
          <div class="featured-icon icon-frame" aria-hidden="true">
            <svg v-if="skill.icon" class="skill-svg" viewBox="0 0 24 24">
              <path :d="skill.icon.path" />
            </svg>
            <span v-else-if="skill.monogram" class="skill-monogram teams-monogram">
              {{ skill.monogram }}
            </span>
            <span
              v-else
              class="skill-mask"
              :style="{ '--skill-icon': `url(${skill.logo})` }"
            ></span>
          </div>
          <strong>{{ skill.name }}</strong>
          <span>{{ skill.usage }}</span>
        </article>
      </div>
    </div>

    <div class="skills-explorer">
      <div class="section-heading explorer-heading">
        <div>
          <span class="section-kicker">Écosystème complémentaire</span>
          <h3>Explorer par domaine</h3>
        </div>
        <p>Sélectionnez une catégorie pour parcourir les technologies et outils associés.</p>
      </div>

      <div class="skill-filters" role="group" aria-label="Filtrer les compétences par domaine">
        <button
          v-for="category in categories"
          :key="category.id"
          type="button"
          class="filter-button"
          :class="{ active: activeCategory === category.id }"
          :aria-pressed="activeCategory === category.id"
          @click="activeCategory = category.id"
        >
          {{ category.label }}
          <span>{{ skillCount(category.id) }}</span>
        </button>
      </div>

      <TransitionGroup name="skills-list" tag="div" class="skills-grid">
        <article
          v-for="skill in filteredSkills"
          :key="skill.name"
          class="skill-item"
        >
          <div class="skill-icon icon-frame" aria-hidden="true">
            <svg v-if="skill.icon" class="skill-svg" viewBox="0 0 24 24">
              <path :d="skill.icon.path" />
            </svg>
            <span v-else-if="skill.monogram" class="skill-monogram teams-monogram">
              {{ skill.monogram }}
            </span>
            <span
              v-else
              class="skill-mask"
              :style="{ '--skill-icon': `url(${skill.logo})` }"
            ></span>
          </div>
          <strong class="skill-name">{{ skill.name }}</strong>
          <span class="skill-usage">{{ skill.usage }}</span>
        </article>
      </TransitionGroup>
    </div>
  </section>
</template>

<script setup>
import { computed, ref } from 'vue';
import {
  siApachekafka,
  siBruno,
  siCamunda,
  siJira,
  siKubernetes,
  siTailwindcss,
} from 'simple-icons';

import phpLogo from '@/assets/logos/php.svg';
import htmlLogo from '@/assets/logos/html5.svg';
import cssLogo from '@/assets/logos/css3.svg';
import jsLogo from '@/assets/logos/javascript.svg';
import mysqlLogo from '@/assets/logos/mysql.svg';
import sqliteLogo from '@/assets/logos/sqlite.svg';
import vueLogo from '@/assets/logos/vue.svg';
import nodeLogo from '@/assets/logos/nodejs.svg';
import quasarLogo from '@/assets/logos/quasar.svg';
import electronLogo from '@/assets/logos/electron.svg';
import reactLogo from '@/assets/logos/react.svg';
import bootstrapLogo from '@/assets/logos/bootstrap.svg';
import typescriptLogo from '@/assets/logos/typescript.svg';
import gitLabLogo from '@/assets/logos/gitlab.svg';
import sequelizeLogo from '@/assets/logos/sequelize.svg';
import vscodeLogo from '@/assets/logos/vscode.svg';
import dockerLogo from '@/assets/logos/docker.svg';
import androidStudioLogo from '@/assets/logos/androidstudio.svg';
import postmanLogo from '@/assets/logos/postman.svg';
import filezillaLogo from '@/assets/logos/filezilla.svg';
import wslLogo from '@/assets/logos/wsl.svg';
import wampLogo from '@/assets/logos/wamp.svg';
import trelloLogo from '@/assets/logos/trello.svg';
import slackLogo from '@/assets/logos/slack.svg';
import gitHubLogo from '@/assets/logos/github.svg';
import npmLogo from '@/assets/logos/npm.svg';
import figmaLogo from '@/assets/logos/figma.svg';
import javaLogo from '@/assets/logos/java.svg';
import springbootLogo from '@/assets/logos/springboot.png';
import vuetifyLogo from '@/assets/logos/vuetify.svg';
import mongoDBLogo from '@/assets/logos/mongodb-svgrepo-com.svg';
import swaggerLogo from '@/assets/logos/swagger.svg';
import materialUiLogo from '@/assets/logos/material-ui.svg';
import jenkinsLogo from '@/assets/logos/jenkins.svg';

const categories = [
  { id: 'all', label: 'Toutes' },
  { id: 'frontend', label: 'Frontend' },
  { id: 'backend', label: 'Backend' },
  { id: 'data', label: 'Données' },
  { id: 'devops', label: 'DevOps' },
  { id: 'tools', label: 'Outils' },
  { id: 'collaboration', label: 'Collaboration' },
];

const skills = [
  { name: 'HTML5', logo: htmlLogo, usage: 'Structure web', categories: ['frontend'] },
  { name: 'CSS3', logo: cssLogo, usage: 'Interfaces', categories: ['frontend'] },
  { name: 'JavaScript', logo: jsLogo, usage: 'Web interactif', categories: ['frontend'] },
  { name: 'TypeScript', logo: typescriptLogo, usage: 'Frontend typé', categories: ['frontend'] },
  { name: 'Vue.js', logo: vueLogo, usage: 'Interfaces', categories: ['frontend'] },
  { name: 'React', logo: reactLogo, usage: 'Interfaces', categories: ['frontend'] },
  { name: 'Bootstrap', logo: bootstrapLogo, usage: 'UI responsive', categories: ['frontend'] },
  { name: 'Tailwind CSS', icon: siTailwindcss, usage: 'Design system', categories: ['frontend'] },
  { name: 'Quasar', logo: quasarLogo, usage: 'Applications Vue', categories: ['frontend'] },
  { name: 'Vuetify', logo: vuetifyLogo, usage: 'Composants Vue', categories: ['frontend'] },
  { name: 'Material UI', logo: materialUiLogo, usage: 'Composants React', categories: ['frontend'] },
  { name: 'Electron', logo: electronLogo, usage: 'Applications desktop', categories: ['frontend', 'backend'] },

  { name: 'Java', logo: javaLogo, usage: 'Backend', categories: ['backend'] },
  { name: 'Spring Boot', logo: springbootLogo, usage: 'API & services', categories: ['backend'] },
  { name: 'Node.js', logo: nodeLogo, usage: 'Runtime JavaScript', categories: ['backend'] },
  { name: 'PHP', logo: phpLogo, usage: 'Applications web', categories: ['backend'] },
  { name: 'Sequelize', logo: sequelizeLogo, usage: 'ORM Node.js', categories: ['backend', 'data'] },
  { name: 'Camunda', icon: siCamunda, usage: 'Processus métier', categories: ['backend'] },
  { name: 'Apache Kafka', icon: siApachekafka, usage: 'Événementiel', categories: ['backend', 'devops'] },

  { name: 'MySQL', logo: mysqlLogo, usage: 'Base relationnelle', categories: ['data'] },
  { name: 'SQLite', logo: sqliteLogo, usage: 'Base embarquée', categories: ['data'] },
  { name: 'MongoDB', logo: mongoDBLogo, usage: 'Base documentaire', categories: ['data'] },

  { name: 'Docker', logo: dockerLogo, usage: 'Conteneurs', categories: ['devops'] },
  { name: 'Kubernetes', icon: siKubernetes, usage: 'Orchestration', categories: ['devops'] },
  { name: 'Jenkins', logo: jenkinsLogo, usage: 'CI/CD', categories: ['devops'] },
  { name: 'GitHub', logo: gitHubLogo, usage: 'Versioning', categories: ['devops', 'tools'] },
  { name: 'GitLab', logo: gitLabLogo, usage: 'Versioning & CI', categories: ['devops', 'tools'] },
  { name: 'WSL', logo: wslLogo, usage: 'Environnement Linux', categories: ['devops', 'tools'] },
  { name: 'npm', logo: npmLogo, usage: 'Dépendances', categories: ['devops', 'tools'] },

  { name: 'Visual Studio Code', logo: vscodeLogo, usage: 'Éditeur', categories: ['tools'] },
  { name: 'Android Studio', logo: androidStudioLogo, usage: 'Développement mobile', categories: ['tools'] },
  { name: 'WAMP', logo: wampLogo, usage: 'Environnement local', categories: ['tools'] },
  { name: 'FileZilla', logo: filezillaLogo, usage: 'Transfert de fichiers', categories: ['tools'] },
  { name: 'Postman', logo: postmanLogo, usage: 'Tests API', categories: ['tools'] },
  { name: 'Bruno', icon: siBruno, usage: 'Client API', categories: ['tools'] },
  { name: 'Swagger', logo: swaggerLogo, usage: 'Documentation API', categories: ['tools'] },

  { name: 'Jira', icon: siJira, usage: 'Suivi de projet', categories: ['collaboration'] },
  { name: 'Microsoft Teams', monogram: 'T', usage: 'Communication', categories: ['collaboration'] },
  { name: 'Trello', logo: trelloLogo, usage: 'Organisation', categories: ['collaboration'] },
  { name: 'Slack', logo: slackLogo, usage: 'Communication', categories: ['collaboration'] },
  { name: 'Figma', logo: figmaLogo, usage: 'Conception UI', categories: ['collaboration'] },
];

const featuredNames = [
  'Java',
  'Spring Boot',
  'Vue.js',
  'TypeScript',
  'Camunda',
  'Apache Kafka',
  'Docker',
  'Kubernetes',
];

const featuredSkills = featuredNames.map((name) => skills.find((skill) => skill.name === name));
const activeCategory = ref('frontend');

const filteredSkills = computed(() => {
  if (activeCategory.value === 'all') return skills;
  return skills.filter((skill) => skill.categories.includes(activeCategory.value));
});

const skillCount = (categoryId) => {
  if (categoryId === 'all') return skills.length;
  return skills.filter((skill) => skill.categories.includes(categoryId)).length;
};
</script>

<style scoped>
.skills {
  width: 90%;
  max-width: 1200px;
  margin: 4rem auto;
  padding: clamp(2rem, 5vw, 4rem) 5%;
  background:
    radial-gradient(circle at 8% 12%, rgba(0, 212, 255, 0.09), transparent 28%),
    radial-gradient(circle at 92% 88%, rgba(124, 58, 237, 0.1), transparent 30%),
    linear-gradient(180deg, rgba(26, 26, 46, 0.66), rgba(20, 20, 38, 0.82));
  border: 1px solid rgba(0, 212, 255, 0.2);
  border-radius: 20px;
  font-family: 'Roboto', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.22);
  box-sizing: border-box;
  overflow: hidden;
}

.skills-heading {
  max-width: 720px;
  margin: 0 auto 3rem;
  text-align: center;
}

.skills-eyebrow,
.section-kicker {
  color: #00d4ff;
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
}

.skills h2 {
  margin: 0.45rem 0 1rem;
  font-size: 2.5rem;
  font-weight: 700;
  line-height: 1.2;
  letter-spacing: normal;
  background: linear-gradient(135deg, #00d4ff 0%, #7c3aed 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.skills .skills-intro {
  margin: 0;
  color: rgba(255, 255, 255, 0.85);
  font-size: 1.1rem;
  line-height: 1.8;
}

.featured-skills,
.skills-explorer {
  position: relative;
  padding: clamp(1.25rem, 3vw, 2rem);
  border: 1px solid rgba(0, 212, 255, 0.14);
  border-radius: 16px;
  background: rgba(7, 12, 29, 0.42);
  backdrop-filter: blur(10px);
}

.skills-explorer {
  margin-top: 1.5rem;
}

.section-heading {
  display: flex;
  align-items: end;
  justify-content: space-between;
  gap: 2rem;
  margin-bottom: 1.5rem;
}

.section-heading h3 {
  margin: 0.3rem 0 0;
  color: #fff;
  font-size: clamp(1.35rem, 3vw, 1.75rem);
}

.section-heading p {
  max-width: 470px;
  margin: 0;
  color: rgba(255, 255, 255, 0.58);
  font-size: 0.9rem;
  line-height: 1.55;
  text-align: right;
}

.featured-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 1rem;
}

.featured-card,
.skill-item {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-width: 0;
  border: 1px solid rgba(0, 212, 255, 0.18);
  background: linear-gradient(145deg, rgba(0, 212, 255, 0.08), rgba(124, 58, 237, 0.045));
  transition: transform 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease, background 0.25s ease;
}

.featured-card {
  min-height: 154px;
  padding: 1.15rem 0.8rem;
  border-radius: 14px;
}

.featured-card::after,
.skill-item::after {
  content: '';
  position: absolute;
  inset: auto 16% 0;
  height: 1px;
  background: linear-gradient(90deg, transparent, #00d4ff, transparent);
  opacity: 0;
  transition: opacity 0.25s ease;
}

.featured-card:hover,
.skill-item:hover {
  transform: translateY(-4px);
  border-color: rgba(0, 212, 255, 0.52);
  background: linear-gradient(145deg, rgba(0, 212, 255, 0.14), rgba(124, 58, 237, 0.08));
  box-shadow: 0 12px 28px rgba(0, 212, 255, 0.11);
}

.featured-card:hover::after,
.skill-item:hover::after {
  opacity: 1;
}

.icon-frame {
  display: grid;
  place-items: center;
  width: 58px;
  height: 58px;
  margin-bottom: 0.8rem;
  border: 1px solid rgba(0, 212, 255, 0.18);
  border-radius: 15px;
  color: #00d4ff;
  background: rgba(0, 212, 255, 0.07);
  box-shadow: inset 0 0 18px rgba(0, 212, 255, 0.06);
  transition: border-color 0.25s ease, box-shadow 0.25s ease;
}

.featured-card:hover .icon-frame,
.skill-item:hover .icon-frame {
  border-color: rgba(124, 58, 237, 0.48);
  box-shadow: 0 0 22px rgba(0, 212, 255, 0.18), inset 0 0 18px rgba(124, 58, 237, 0.1);
}

.skill-svg,
.skill-mask {
  width: 34px;
  height: 34px;
}

.skill-svg {
  fill: currentColor;
  filter: drop-shadow(0 0 8px rgba(0, 212, 255, 0.35));
}

.skill-mask {
  display: block;
  background: currentColor;
  -webkit-mask-image: var(--skill-icon);
  mask-image: var(--skill-icon);
  -webkit-mask-repeat: no-repeat;
  mask-repeat: no-repeat;
  -webkit-mask-position: center;
  mask-position: center;
  -webkit-mask-size: contain;
  mask-size: contain;
  filter: drop-shadow(0 0 8px rgba(0, 212, 255, 0.35));
}

.skill-monogram {
  display: grid;
  place-items: center;
  width: 34px;
  height: 34px;
  border-radius: 8px;
  color: #111325;
  background: currentColor;
  font-size: 1.15rem;
  font-weight: 900;
  line-height: 1;
  box-shadow: 9px -7px 0 -5px #00d4ff, 12px 7px 0 -7px #7c3aed;
}

.featured-card strong,
.skill-name {
  color: #fff;
  font-size: 0.95rem;
  font-weight: 700;
  text-align: center;
}

.featured-card > span:last-child,
.skill-usage {
  margin-top: 0.35rem;
  color: rgba(255, 255, 255, 0.52);
  font-size: 0.76rem;
  line-height: 1.35;
  text-align: center;
}

.skill-filters {
  display: flex;
  flex-wrap: wrap;
  gap: 0.65rem;
  margin-bottom: 1.5rem;
}

.filter-button {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  min-height: 40px;
  padding: 0.55rem 0.85rem;
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 999px;
  color: rgba(255, 255, 255, 0.7);
  background: rgba(255, 255, 255, 0.035);
  font: inherit;
  font-size: 0.82rem;
  font-weight: 600;
  cursor: pointer;
  transition: color 0.2s ease, border-color 0.2s ease, background 0.2s ease, transform 0.2s ease;
}

.filter-button span {
  display: grid;
  place-items: center;
  min-width: 22px;
  height: 22px;
  padding: 0 0.25rem;
  border-radius: 999px;
  color: rgba(255, 255, 255, 0.62);
  background: rgba(255, 255, 255, 0.08);
  font-size: 0.7rem;
}

.filter-button:hover,
.filter-button.active {
  color: #fff;
  border-color: rgba(0, 212, 255, 0.48);
  background: rgba(0, 212, 255, 0.11);
  transform: translateY(-1px);
}

.filter-button.active span {
  color: #101325;
  background: #00d4ff;
}

.filter-button:focus-visible {
  outline: 3px solid rgba(0, 212, 255, 0.38);
  outline-offset: 3px;
}

.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(135px, 1fr));
  gap: 0.85rem;
}

.skill-item {
  min-height: 132px;
  padding: 1rem 0.65rem;
  border-radius: 12px;
}

.skill-item .icon-frame {
  width: 52px;
  height: 52px;
  margin-bottom: 0.7rem;
  border-radius: 13px;
}

.skill-item .skill-svg,
.skill-item .skill-mask {
  width: 30px;
  height: 30px;
}

.skills-list-enter-active,
.skills-list-leave-active {
  transition: opacity 0.2s ease, transform 0.2s ease;
}

.skills-list-enter-from,
.skills-list-leave-to {
  opacity: 0;
  transform: translateY(8px);
}

@media (max-width: 900px) {
  .featured-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .section-heading {
    align-items: start;
    flex-direction: column;
    gap: 0.65rem;
  }

  .section-heading p {
    text-align: left;
  }
}

@media (max-width: 768px) {
  .skills {
    width: 95%;
    margin: 3rem auto;
    padding: 2.25rem 4%;
  }

  .skills-heading {
    margin-bottom: 2rem;
  }

  .skills h2 {
    font-size: 2rem;
  }

  .skills .skills-intro {
    font-size: 1rem;
  }

  .skill-filters {
    flex-wrap: nowrap;
    margin-right: -1.25rem;
    padding-right: 1.25rem;
    overflow-x: auto;
    scrollbar-width: thin;
  }

  .filter-button {
    flex: 0 0 auto;
  }
}

@media (max-width: 480px) {
  .skills {
    margin: 2rem auto;
    padding: 1.5rem 3%;
    border-radius: 16px;
  }

  .skills h2 {
    font-size: 1.5rem;
  }

  .featured-skills,
  .skills-explorer {
    padding: 1rem;
  }

  .featured-grid {
    gap: 0.7rem;
  }

  .featured-card {
    min-height: 140px;
    padding: 0.9rem 0.5rem;
  }

  .skills-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 0.7rem;
  }
}

@media (prefers-reduced-motion: reduce) {
  .featured-card,
  .skill-item,
  .filter-button,
  .skills-list-enter-active,
  .skills-list-leave-active {
    transition: none;
  }
}
</style>
