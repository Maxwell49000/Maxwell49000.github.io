<template>
  <section class="about" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">
    <h2>À propos de moi</h2>
    <p>Après 10 années passées dans le commerce, dans le cadre d'une reconversion professionnelle, je prépare actuellement un titre professionnel de développeur web et web mobile au CEFii.</p>
    <p>Je suis activement à la recherche d'une alternance en CDA sur la région angevine et alentours. Je suis mobile et véhiculé.</p>
    <p>Fort d'une expérience en tant que responsable adjoint de magasin, j'ai acquis des compétences clés en gestion de projet, travail en équipe, adaptabilité et rigueur.</p>
    <p>J'ai déjà travaillé sur plusieurs projets, notamment un site de gestion pour un festival intégrant un système de réservation optimisé.</p>
    <p>Si vous souhaitez en savoir plus ou collaborer avec moi, n'hésitez pas à me contacter.</p>
  </section>
</template>

<style scoped>
.about {
  width: 90%; /* Prend presque toute la largeur */
  max-width: 1200px; /* Évite qu'il soit trop large sur les grands écrans */
  margin: 4rem auto;
  padding: 3rem 5%;
  background-color: #f8f9fa;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  text-align: center;
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
  font-family: 'Roboto', sans-serif;
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
}

.about p {
  font-size: 1.2rem;
  line-height: 1.8;
  color: #495057;
  margin-bottom: 1.2rem;
  text-align: justify;
}

/* Ajustement pour petits écrans */
@media (max-width: 768px) {
  .about {
    width: 95%;
    padding: 2rem;
  }

  .about h2 {
    font-size: 1.8rem;
  }

  .about p {
    font-size: 1rem;
  }
}
</style>
