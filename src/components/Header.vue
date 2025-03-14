<template>
  <header>
    <div class="header-container">
      <div class="logo">
        <h1>Axel Paillard</h1>
      </div>

      <nav>
        <ul>
          <li><a href="#about">À propos</a></li>
          <li><a href="#projects">Projets</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      <!-- Bouton pour changer de mode -->
      <button @click="toggleDarkMode" class="dark-mode-toggle">
        <span v-if="!isDarkMode">🌙</span>
        <span v-if="isDarkMode">🌞</span>
      </button>
    </div>
  </header>
</template>

<script setup>
import { defineEmits, defineProps } from 'vue';

// On reçoit la prop pour savoir si le mode sombre est activé
const emit = defineEmits(['toggle-dark-mode']);
const props = defineProps({
  isDarkMode: Boolean,  // On reçoit l'état du mode sombre depuis le parent
});

// Fonction pour changer le mode sombre
const toggleDarkMode = () => {
  emit('toggle-dark-mode');
};
</script>



<style scoped>
header {
  background-color: #333; /* Gris foncé pour la cohérence */
  padding: 1rem 2rem;
  font-family: 'Roboto', sans-serif;
  color: #fff;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.header-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
}

.logo h1 {
  font-size: 2rem;
  color: #007bff; /* Bleu discret */
  margin: 0;
}

nav ul {
  display: flex;
  list-style: none;
  gap: 1.5rem;
  margin: 0;
}

nav ul li a {
  color: #bbb; /* Couleur neutre */
  font-size: 1rem;
  text-decoration: none;
  transition: color 0.3s, border-bottom 0.3s;
  padding-bottom: 3px;
}

nav ul li a:hover {
  color: #007bff; /* Transition douce vers le bleu */
  border-bottom: 2px solid #007bff; /* Légère ligne sous le lien pour plus de clarté */
}


/* Styles par défaut pour le mode clair */
body {
  background-color: #fff;
  color: #333;
}

header {
  background-color: #f7f9fc;
}

footer {
  background-color: #222;
  color: #fff;
}

footer a {
  color: #bbb;
}

footer a:hover {
  color: #00aaff;
}
/* Styles du bouton de changement de mode sombre */
.dark-mode-toggle {
  background: none;
  border: none;
  color: #fff;
  font-size: 1.5rem;
  cursor: pointer;
}

</style>


