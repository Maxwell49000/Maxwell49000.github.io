<template>
  <section class="about" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">
    <div class="about-heading">
      <span class="about-eyebrow">Mon parcours</span>
      <h2>À propos de moi</h2>
    </div>

    <div class="about-layout">
      <div class="about-story">
        <p class="about-intro">
          Après un premier parcours dans le commerce, j’ai choisi de faire du
          <strong>développement informatique</strong> mon métier.
        </p>
        <p>
          Titulaire des titres professionnels <strong>Développeur Web et Web Mobile</strong>
          et <strong>Concepteur Développeur d’Applications (CDA)</strong>, ce dernier obtenu
          en alternance au CEFii à Angers, je participe aujourd’hui au développement et à
          l’évolution d’applications professionnelles.
        </p>
        <p>
          J’interviens de la compréhension du besoin à sa mise en œuvre technique, avec une
          attention particulière portée à la qualité, à la lisibilité et à la maintenabilité du code.
        </p>
      </div>

      <div class="approach" aria-label="Mon approche du développement">
        <article>
          <span class="approach-index">01</span>
          <div>
            <h3>Concevoir</h3>
            <p>Comprendre le besoin et le traduire en solution cohérente.</p>
          </div>
        </article>
        <article>
          <span class="approach-index">02</span>
          <div>
            <h3>Développer</h3>
            <p>Java et Spring Boot côté backend, Vue.js et TypeScript côté frontend.</p>
          </div>
        </article>
        <article>
          <span class="approach-index">03</span>
          <div>
            <h3>Maintenir</h3>
            <p>Construire un code lisible, testable et capable d’évoluer.</p>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped>
.about {
  position: relative;
  width: 90%;
  max-width: 1200px;
  margin: 4rem auto;
  padding: clamp(2rem, 5vw, 4rem) 5%;
  overflow: hidden;
  border: 1px solid rgba(0, 212, 255, 0.2);
  border-radius: 20px;
  background:
    radial-gradient(circle at 92% 15%, rgba(124, 58, 237, 0.1), transparent 28%),
    linear-gradient(180deg, rgba(26, 26, 46, 0.66), rgba(20, 20, 38, 0.82));
  box-sizing: border-box;
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.22);
  font-family: 'Roboto', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
}

.about-heading {
  margin-bottom: 2.5rem;
  text-align: center;
}

.about-eyebrow {
  color: #00d4ff;
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
}

.about h2 {
  margin: 0.45rem 0 0;
  background: linear-gradient(135deg, #00d4ff, #7c3aed);
  background-clip: text;
  color: transparent;
  font-size: clamp(2rem, 5vw, 2.5rem);
  line-height: 1.2;
}

.about-layout {
  display: grid;
  grid-template-columns: minmax(0, 1.08fr) minmax(320px, 0.92fr);
  gap: clamp(2rem, 5vw, 4rem);
  align-items: start;
}

.about-story {
  padding-top: 0.35rem;
}

.about-story p {
  margin: 0 0 1.25rem;
  color: rgba(255, 255, 255, 0.72);
  font-size: 1rem;
  line-height: 1.8;
}

.about-story .about-intro {
  color: rgba(255, 255, 255, 0.92);
  font-size: 1.2rem;
  font-weight: 500;
}

.about strong {
  color: #00d4ff;
}

.approach {
  display: grid;
  gap: 0.75rem;
}

.approach article {
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 1rem;
  padding: 1.15rem;
  border: 1px solid rgba(0, 212, 255, 0.15);
  border-radius: 13px;
  background: rgba(7, 12, 29, 0.45);
  transition: border-color 0.25s ease, transform 0.25s ease, background 0.25s ease;
}

.approach article:hover {
  transform: translateX(4px);
  border-color: rgba(0, 212, 255, 0.42);
  background: rgba(0, 212, 255, 0.07);
}

.approach-index {
  padding-top: 0.2rem;
  color: #00d4ff;
  font-size: 0.68rem;
  font-weight: 700;
  letter-spacing: 0.12em;
}

.approach h3 {
  margin: 0 0 0.35rem;
  color: #fff;
  font-size: 1rem;
}

.approach p {
  margin: 0;
  color: rgba(255, 255, 255, 0.58);
  font-size: 0.84rem;
  line-height: 1.55;
}

@media (max-width: 850px) {
  .about-layout {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 600px) {
  .about {
    width: 95%;
    padding: 2rem 5%;
    margin: 2.5rem auto;
  }

  .about-heading {
    margin-bottom: 1.75rem;
  }

  .about-story .about-intro {
    font-size: 1.08rem;
  }

  .about-story p {
    font-size: 0.94rem;
  }
}
</style>
