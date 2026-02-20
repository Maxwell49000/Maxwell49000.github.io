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
  import javaLogo from '@/assets/logos/java.svg';
  import springbootLogo from '@/assets/logos/springboot.png';
  import vuetifyLogo from '@/assets/logos/vuetify.svg';
  import mongoDBLogo from '@/assets/logos/mongodb-svgrepo-com.svg';
  import swaggerLogo from '@/assets/logos/swagger.svg';
  import materialUiLogo from '@/assets/logos/material-ui.svg';
  import jenkinsLogo from '@/assets/logos/jenkins.svg';
  
  // Technologies
  const technologies = [
    { name: 'HTML5', logo: htmlLogo },
    { name: 'CSS3', logo: cssLogo },
    { name: 'JavaScript', logo: jsLogo },
    { name: 'TypeScript', logo: typescriptLogo },
    { name: 'PHP', logo: phpLogo },
    { name: 'MySQL', logo: mysqlLogo },
    { name: 'SQLite', logo: sqliteLogo },
    { name: 'Java', logo: javaLogo },
    { name: 'MongoDB', logo: mongoDBLogo },
  ];
  
  // Frameworks & Bibliothèques
  const frameworks = [
    { name: 'Bootstrap', logo: bootstrapLogo },
    { name: 'Vue.js', logo: vueLogo },
    { name: 'Node.js', logo: nodeLogo },
    { name: 'Quasar', logo: quasarLogo },
    { name: 'Vuetify', logo: vuetifyLogo },
    { name: 'Electron', logo: electronLogo },
    { name: 'React', logo: reactLogo },
    { name: 'Sequelize', logo: sequelizeLogo },
    { name: 'Spring Boot', logo: springbootLogo },
    { name: 'Material UI', logo: materialUiLogo },
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
  { name: 'Swagger', logo: swaggerLogo },
  { name: 'Jenkins', logo: jenkinsLogo },
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
    background: linear-gradient(180deg, rgba(26, 26, 46, 0.5) 0%, rgba(37, 37, 55, 0.3) 100%);
    border: 1px solid rgba(0, 212, 255, 0.2);
    border-radius: 16px;
    text-align: center;
    font-family: 'Roboto', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
    box-shadow: 0 8px 32px rgba(0, 212, 255, 0.1);
    box-sizing: border-box;
    transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
  }
  
  .skills:hover {
    border-color: rgba(0, 212, 255, 0.4);
    box-shadow: 0 12px 48px rgba(0, 212, 255, 0.15);
    transform: translateY(-2px);
  }
  
  .skills h2 {
    font-size: 2.5rem;
    margin-bottom: 1.5rem;
    background: linear-gradient(135deg, #00d4ff 0%, #7c3aed 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    font-weight: 700;
  }
  
  .skills p {
    font-size: 1.1rem;
    margin-bottom: 2rem;
    color: rgba(255, 255, 255, 0.8);
  }
  
  .skills-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
    gap: 2rem;
    justify-items: center;
    margin-bottom: 3rem;
  }
  
  .skill-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1.5rem;
    border-radius: 12px;
    background: rgba(0, 212, 255, 0.08);
    border: 1px solid rgba(0, 212, 255, 0.2);
    transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }

  .skill-item::before {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: radial-gradient(circle, rgba(0, 212, 255, 0.15) 0%, transparent 70%);
    transition: all 0.6s ease;
    opacity: 0;
  }

  .skill-item:hover::before {
    opacity: 1;
    top: 0;
    left: 0;
  }
  
  .skill-logo {
    width: 70px;
    height: 70px;
    object-fit: contain;
    filter: drop-shadow(0 0 8px rgba(0, 212, 255, 0.2));
    transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
    position: relative;
    z-index: 1;
  }
  
  .skill-item:hover .skill-logo {
    filter: drop-shadow(0 0 20px rgba(0, 212, 255, 0.6));
    transform: scale(1.2) rotateY(10deg);
  }
  
  .skill-name {
    margin-top: 1rem;
    font-size: 0.95rem;
    color: #00d4ff;
    transition: all 0.3s ease;
    font-weight: 600;
    position: relative;
    z-index: 1;
  }

  .skill-item:hover .skill-name {
    color: #7c3aed;
    text-shadow: 0 0 10px rgba(0, 212, 255, 0.4);
  }

  .skill-item:hover {
    background: rgba(0, 212, 255, 0.15);
    border-color: rgba(0, 212, 255, 0.5);
    box-shadow: 0 8px 24px rgba(0, 212, 255, 0.15);
    transform: translateY(-8px);
  }

  .skills h3 {
    font-size: 1.6rem;
    color: rgba(255, 255, 255, 0.95);
    margin-top: 2.5rem;
    margin-bottom: 0.5rem;
    font-weight: 600;
  }

  .skills h3:first-of-type {
    margin-top: 0;
  }
  
  @media (max-width: 768px) {
    .skills {
      width: 95%;
      padding: 2.5rem 4%;
      margin: 3rem auto;
    }

    .skills h2 {
      font-size: 2rem;
    }

    .skills-grid {
      grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
      gap: 1.5rem;
      margin-bottom: 2rem;
    }

    .skill-logo {
      width: 60px;
      height: 60px;
    }

    .skill-name {
      font-size: 0.85rem;
    }
  }

  @media (max-width: 480px) {
    .skills {
      padding: 1.5rem 3%;
      margin: 2rem auto;
    }

    .skills h2 {
      font-size: 1.5rem;
    }

    .skills h3 {
      font-size: 1.3rem;
    }

    .skills-grid {
      grid-template-columns: repeat(auto-fit, minmax(90px, 1fr));
      gap: 1rem;
    }

    .skill-item {
      padding: 1rem;
    }

    .skill-logo {
      width: 50px;
      height: 50px;
    }

    .skill-name {
      font-size: 0.8rem;
      margin-top: 0.8rem;
    }
  }
  </style>
  