<template>
  <section class="about" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">
    <h2>À propos de moi</h2>
    <p class="about-intro">Après plus de 10 ans d’expérience dans le commerce, j’ai choisi de me réorienter vers une passion qui m’accompagne depuis longtemps : le développement informatique.</p>
    <p>Après l’obtention du titre professionnel <strong>Développeur Web et Web Mobile</strong>, j’ai poursuivi mon parcours avec le titre professionnel <strong>Concepteur Développeur d’Applications (CDA)</strong>, obtenu à l’issue de ma formation en alternance au CEFii à Angers.</p>
    <p>Aujourd’hui, j’exerce en tant que <strong>développeur web</strong> et je participe au développement ainsi qu’à l’évolution d’applications au sein de projets professionnels.</p>
    <p>Je travaille principalement avec <strong>Java et Spring Boot</strong> côté backend, ainsi qu’avec <strong>Vue.js et TypeScript</strong> côté frontend. J’interviens dans des environnements applicatifs complets, de la compréhension du besoin à sa mise en œuvre technique.</p>
    <p>Curieux et toujours désireux de progresser, je continue à approfondir mes compétences avec une attention particulière portée à la qualité, à la lisibilité et à la maintenabilité du code.</p>
  </section>
</template>

<style scoped>
.about {
  width: 90%;
  max-width: 1200px;
  margin: 4rem auto;
  padding: 3rem 5%;
  background: linear-gradient(180deg, rgba(26, 26, 46, 0.5) 0%, rgba(37, 37, 55, 0.3) 100%);
  border: 1px solid rgba(0, 212, 255, 0.2);
  border-radius: 16px;
  box-shadow: 0 8px 32px rgba(0, 212, 255, 0.1);
  text-align: center;
  transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
  font-family: 'Roboto', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  overflow: hidden;
  box-sizing: border-box;
  position: relative;
}

.about::before {
  content: '';
  position: absolute;
  top: -50%;
  right: -10%;
  width: 300px;
  height: 300px;
  background: radial-gradient(circle, rgba(0, 212, 255, 0.1) 0%, transparent 70%);
  border-radius: 50%;
  pointer-events: none;
}

.about:hover {
  border-color: rgba(0, 212, 255, 0.4);
  box-shadow: 0 12px 48px rgba(0, 212, 255, 0.15);
  transform: translateY(-4px);
}

.about h2 {
  font-size: 2.5rem;
  font-weight: 700;
  background: linear-gradient(135deg, #00d4ff 0%, #7c3aed 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 2rem;
  word-wrap: break-word;
  position: relative;
  z-index: 1;
}

.about p {
  font-size: 1.1rem;
  line-height: 1.8;
  color: rgba(255, 255, 255, 0.85);
  margin-bottom: 1.5rem;
  text-align: left;
  word-wrap: break-word;
  overflow-wrap: break-word;
  position: relative;
  z-index: 1;
  transition: all 0.3s ease;
}

.about p:hover {
  color: rgba(255, 255, 255, 1);
  text-shadow: 0 0 10px rgba(0, 212, 255, 0.2);
}

.about-intro {
  font-size: 1.3rem;
  font-weight: 500;
}

.about strong {
  color: #00d4ff;
}

/* Ajustement pour petits écrans */
@media (max-width: 768px) {
  .about {
    width: 95%;
    padding: 2.5rem 4%;
    margin: 3rem auto;
  }

  .about h2 {
    font-size: 2rem;
    margin-bottom: 1.5rem;
  }

  .about p {
    font-size: 1rem;
    word-wrap: break-word;
    text-align: center;
  }
}

@media (max-width: 480px) {
  .about {
    padding: 1.5rem 3%;
    margin: 2rem auto;
  }

  .about h2 {
    font-size: 1.5rem;
  }

  .about p {
    font-size: 0.95rem;
    margin-bottom: 1rem;
  }

  .about-intro {
    font-size: 1.08rem;
  }
}
</style>
