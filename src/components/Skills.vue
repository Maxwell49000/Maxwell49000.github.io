<template>
    <section class="skills" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">
      <h2>Mes Compétences</h2>

      <h3>Langages et technologies</h3>
      <p>Mon socle technique principal :</p>  
        <!-- Section Technologies -->
      <div class="skills-grid">
        <div v-for="(skill, index) in technologies" :key="index" class="skill-item" :data-aos="'fade-up'" :data-aos-delay="100 + index * 100">
          <img :src="skill.logo" :alt="skill.name" :title="skill.name" class="skill-logo" />
          <p class="skill-name">{{ skill.name }}</p>
        </div>
      </div>
  
      <!-- Section Frameworks et Librairies -->
      <h3>Frameworks et bibliothèques</h3>
      <p>Pour développer efficacement, je m'appuie sur :</p>
      <div class="skills-grid">
        <div v-for="(skill, index) in frameworks" :key="index" class="skill-item" :data-aos="'fade-up'" :data-aos-delay="100 + index * 100">
          <img :src="skill.logo" :alt="skill.name" :title="skill.name" class="skill-logo" />
          <p class="skill-name">{{ skill.name }}</p>
        </div>
      </div>
  
      <!-- Section Outils -->
      <h3>Outils et environnements</h3>
      <p>Mon environnement de développement comprend  :</p>
      <div class="skills-grid">
        <div v-for="(skill, index) in tools" :key="index" class="skill-item" :data-aos="'fade-up'" :data-aos-delay="100 + index * 100">
          <img :src="skill.logo" :alt="skill.name" :title="skill.name" class="skill-logo" />
          <p class="skill-name">{{ skill.name }}</p>
        </div>
      </div>

      <!-- Section Productivité, gestion de projet & design -->
       <h3>Productivité, gestion de projet & design</h3>
      <p>Ma boîte à outils pour l'organisation et la conception :</p>
      <div class="skills-grid">
        <div v-for="(skill, index) in productivity" :key="index" class="skill-item" :data-aos="'fade-up'" :data-aos-delay="100 + index * 100">
          <img :src="skill.logo" :alt="skill.name" :title="skill.name" class="skill-logo" />
          <p class="skill-name">{{ skill.name }}</p>
        </div>
      </div>
    </section>
  </template>
  
  <script setup>
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
  
  
  // Technologies
  const technologies = [
    { name: 'HTML5', logo: htmlLogo },
    { name: 'CSS3', logo: cssLogo },
    { name: 'JavaScript', logo: jsLogo },
    { name: 'TypeScript', logo: typescriptLogo },
    { name: 'PHP', logo: phpLogo },
    { name: 'MySQL', logo: mysqlLogo },
    { name: 'SQLite', logo: sqliteLogo },
    
  ];
  
  // Frameworks & Bibliothèques
  const frameworks = [
    { name: 'Bootstrap', logo: bootstrapLogo },
    { name: 'Vue.js', logo: vueLogo },
    { name: 'Node.js', logo: nodeLogo },
    { name: 'Quasar', logo: quasarLogo },
    { name: 'Electron', logo: electronLogo },
    { name: 'React', logo: reactLogo },
    { name: 'Sequelize', logo: sequelizeLogo },
  ];
  
  // Outils & Environnements
  const tools = [
  { name: 'Visual Studio Code', logo: vscodeLogo },
  { name: 'Android Studio', logo: androidStudioLogo },
  { name: 'WAMP', logo: wampLogo },
  { name: 'WSL', logo: wslLogo },
  { name: 'Docker', logo: dockerLogo },  
  { name: 'GitHub', logo: gitHubLogo },
  { name: 'GitLab', logo: gitLabLogo },
  { name: 'npm', logo: npmLogo },
  { name: 'FileZilla', logo: filezillaLogo },
  { name: 'Postman', logo: postmanLogo },
];

const productivity = [
  { name: 'Trello', logo: trelloLogo },
  { name: 'Slack', logo: slackLogo },
  { name: 'Figma', logo: figmaLogo },
 
];
  </script>
  
  <style scoped>
  .skills {
    width: 90%;
    max-width: 1200px;
    margin: 4rem auto;
    padding: 3rem 5%;
    background-color: #f8f9fa;
    border-radius: 8px;
    text-align: center;
    font-family: 'Roboto', sans-serif;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    box-sizing: border-box;
  }
  
  .skills h2 {
    font-size: 2rem;
    margin-bottom: 1rem;
  }
  
  .skills p {
    font-size: 1.1rem;
    margin-bottom: 2rem;
  }
  
  .skills-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
    gap: 1.5rem;
    justify-items: center;
  }
  
  .skill-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 1rem;
    transition: transform 0.3s ease, filter 0.3s ease;
  }
  
  .skill-logo {
    width: 60px;
    height: 60px;
    object-fit: contain;
    filter: grayscale(100%) brightness(0.8);
    transition: filter 0.3s ease, transform 0.3s ease;
  }
  
  .skill-item:hover .skill-logo {
    filter: grayscale(0%) brightness(1);
    transform: scale(1.1);
  }
  
  .skill-name {
    margin-top: 0.5rem;
    font-size: 0.9rem;
    color: #343a40;
    transition: color 0.3s ease, transform 0.3s ease;
  }

  .skill-item:hover .skill-name {
  color: #007bff;
  transform: scale(1.1);
}
  
  .dark-mode .skills {
    background-color: #1e1e1e;
    color: white;
  }
  
  .dark-mode .skill-logo {
    filter: invert(1);
  }
  
  .dark-mode .skill-name {
    color: white;
  }
  </style>
  