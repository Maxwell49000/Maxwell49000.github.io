<template>
  <header>
    <div class="header-container">
      <div class="logo">
        <h1>Axel Paillard</h1>
        <div class="logo-underline"></div>
      </div>

      <!-- Hamburger menu toggle -->
      <button class="menu-toggle" @click="menuOpen = !menuOpen" :class="{ active: menuOpen }">
        <span></span>
        <span></span>
        <span></span>
      </button>

      <nav :class="{ active: menuOpen }">
        <ul>
          <li><a href="#about" @click="menuOpen = false">À propos</a></li>
          <li><a href="#skills" @click="menuOpen = false">Compétences</a></li>
          <li><a href="#projects" @click="menuOpen = false">Projets</a></li>
          <li><a href="#contact" @click="menuOpen = false">Contact</a></li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue';

const menuOpen = ref(false);
</script>

<style scoped>
header {
  padding: 1rem 2rem;
  font-family: 'Roboto', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  color: #fff;
  box-shadow: 0 4px 20px rgba(0, 212, 255, 0.1);
  border-bottom: 1px solid rgba(0, 212, 255, 0.2);
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
}

.header-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 1rem;
  box-sizing: border-box;
}

/* LOGO */
.logo {
  position: relative;
  display: flex;
  align-items: center;
  overflow: hidden;
}

.logo h1 {
  font-size: 1.8rem;
  background: linear-gradient(135deg, #00d4ff 0%, #7c3aed 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin: 0;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.3s ease;
}

.logo h1:hover {
  text-shadow: 0 0 20px rgba(0, 212, 255, 0.3);
  transform: scale(1.05);
}

.logo-underline {
  position: absolute;
  bottom: -8px;
  left: 0;
  height: 2px;
  width: 0;
  background: linear-gradient(90deg, #00d4ff, #7c3aed);
  transition: width 0.3s ease;
}

.logo:hover .logo-underline {
  width: 100%;
}

/* NAVIGATION */
nav {
  display: flex;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
}

nav ul {
  display: flex;
  list-style: none;
  gap: 2rem;
  margin: 0;
  padding: 0;
  flex-wrap: wrap;
  justify-content: center;
}

nav ul li a {
  color: rgba(255, 255, 255, 0.9);
  font-size: 1rem;
  text-decoration: none;
  transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
  position: relative;
  font-weight: 500;
  letter-spacing: 0.5px;
}

nav ul li a::after {
  content: '';
  position: absolute;
  bottom: -4px;
  left: 0;
  width: 0;
  height: 2px;
  background: linear-gradient(90deg, #00d4ff, #7c3aed);
  transition: width 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
}

nav ul li a:hover {
  color: #00d4ff;
  text-shadow: 0 0 15px rgba(0, 212, 255, 0.5);
}

nav ul li a:hover::after {
  width: 100%;
}

/* HAMBURGER MENU */
.menu-toggle {
  display: none;
  flex-direction: column;
  background: none;
  border: none;
  cursor: pointer;
  gap: 5px;
  padding: 0;
  margin-right: 1rem;
}

.menu-toggle span {
  display: block;
  width: 25px;
  height: 2.5px;
  background: linear-gradient(90deg, #00d4ff, #7c3aed);
  border-radius: 2px;
  transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.menu-toggle.active span:nth-child(1) {
  transform: rotate(45deg) translate(10px, 10px);
}

.menu-toggle.active span:nth-child(2) {
  opacity: 0;
}

.menu-toggle.active span:nth-child(3) {
  transform: rotate(-45deg) translate(7px, -7px);
}

/* RESPONSIVE */
@media (max-width: 768px) {
  .logo h1 {
    font-size: 1.5rem;
  }

  nav {
    position: fixed;
    top: 70px;
    left: 0;
    right: 0;
    background: linear-gradient(180deg, rgba(15, 15, 30, 0.98) 0%, rgba(26, 26, 46, 0.95) 100%);
    backdrop-filter: blur(15px);
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
    transform: none;
  }

  nav.active {
    max-height: 500px;
    border-bottom: 2px solid rgba(0, 212, 255, 0.3);
    box-shadow: 0 8px 32px rgba(0, 212, 255, 0.15);
  }

  nav ul {
    flex-direction: column;
    gap: 0;
    padding: 1rem 0;
    text-align: left;
  }

  nav ul li {
    border-bottom: 1px solid rgba(0, 212, 255, 0.15);
  }

  nav ul li:last-child {
    border-bottom: none;
  }

  nav ul li a {
    display: block;
    padding: 1rem 1.5rem;
    font-size: 1.1rem;
    font-weight: 600;
    color: rgba(255, 255, 255, 0.85);
    transition: all 0.3s ease;
    position: relative;
  }

  nav ul li a::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 4px;
    background: linear-gradient(180deg, #00d4ff, #7c3aed);
    transform: scaleY(0);
    transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
  }

  nav ul li a:hover::before {
    transform: scaleY(1);
  }

  nav ul li a::after {
    display: none;
  }

  nav ul li a:hover {
    padding-left: 1.8rem;
    color: #0f0f1e;
    background: rgba(0, 212, 255, 0.4);
    font-weight: 700;
  }

  .menu-toggle {
    display: flex;
  }

  .header-container {
    padding: 0 1rem;
  }
}

@media (max-width: 480px) {
  header {
    padding: 0.75rem 1rem;
  }

  .logo h1 {
    font-size: 1.3rem;
  }
}
</style>
