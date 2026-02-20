<template>
  <section class="about" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">
    <h2>À propos de moi</h2>

    <p>Après dix années passées dans le commerce, j’ai entrepris une reconversion professionnelle qui m’a permis d’obtenir le titre professionnel de Développeur Web et Web Mobile.</p>

    <p>Je poursuis aujourd’hui mon parcours au CEFii, où je prépare le titre de Concepteur Développeur d’Applications (CDA) tout en travaillant en alternance chez INETUM.</p>

    <p>Cette expérience en entreprise me permet de monter en compétences sur des projets concrets et d’évoluer dans un environnement technique exigeant et stimulant.</p>

    <p>Mon expérience précédente en tant que responsable adjoint de magasin m’a apporté de solides compétences en gestion de projet, organisation, communication et travail d’équipe, que j’applique au quotidien dans mes missions de développement.</p>
    
    <p>Motivé, curieux et investi, je continue de développer mes compétences afin de concevoir des solutions performantes et adaptées aux besoins des utilisateurs.</p>
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
}
</style>
