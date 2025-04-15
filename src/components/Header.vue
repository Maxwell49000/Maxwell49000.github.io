<template>
  <header>
    <div class="header-container">
      <div class="logo">
        <h1>Axel Paillard</h1>
      </div>

      <nav>
        <ul>
          <li><a href="#about">À propos</a></li>
          <li><a href="#skills">Compétences</a></li>
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

const emit = defineEmits(['toggle-dark-mode']);
const props = defineProps({
  isDarkMode: Boolean,
});

const toggleDarkMode = () => {
  emit('toggle-dark-mode');
};
</script>

<style scoped>
header {
  background-color: #333;
  padding: 1rem 2rem;
  font-family: 'Roboto', sans-serif;
  color: #fff;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.header-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 100%;
  padding: 0 1rem;
  box-sizing: border-box;
  flex-wrap: wrap;
  overflow: hidden;
}

.logo h1 {
  font-size: 2rem;
  color: #007bff;
  margin: 0;
}

nav ul {
  display: flex;
  list-style: none;
  gap: 1.5rem;
  margin: 0;
  padding: 0;
  flex-wrap: wrap;
  justify-content: center;
  overflow: hidden;
}

nav ul li a {
  color: #bbb;
  font-size: 1rem;
  text-decoration: none;
  transition: color 0.3s, border-bottom 0.3s;
  padding-bottom: 3px;
}

nav ul li a:hover {
  color: #007bff;
  border-bottom: 2px solid #007bff;
}

@media screen and (max-width: 768px) {
  .header-container {
    flex-direction: column;
    align-items: center;
  }

  nav ul {
    flex-direction: column;
    text-align: center;
  }

  .dark-mode-toggle {
    margin-top: 10px;
  }
}

.dark-mode-toggle {
  background: none;
  border: none;
  color: #fff;
  font-size: 1.5rem;
  cursor: pointer;
}
</style>
