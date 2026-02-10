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
  background-color: #f8f9fa;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  text-align: center;
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
  font-family: 'Roboto', sans-serif;
  overflow: hidden;
  box-sizing: border-box;
}

.about:hover {
  transform: translateY(-5px);
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.15);
}

.about h2 {
  font-size: 2.2rem;
  font-weight: bold;
  color: #343a40;
  margin-bottom: 1.5rem;
  word-wrap: break-word;
}

.about p {
  font-size: 1.2rem;
  line-height: 1.8;
  color: #495057;
  margin-bottom: 1.2rem;
  text-align: justify;
  word-wrap: break-word;
  overflow-wrap: break-word;
}

/* Ajustement pour petits écrans */
@media (max-width: 768px) {
  .about {
    width: 95%;
    padding: 2rem;
    overflow: hidden;
  }

  .about h2 {
    font-size: 1.8rem;
  }

  .about p {
    font-size: 1rem;
    word-wrap: break-word;
    overflow-wrap: break-word;
  }
}
</style>
