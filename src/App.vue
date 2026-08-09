<template>
  <div>
    <Header />
    <Hero />
    <About id="about" />
    <Skills id="skills" />
    <Projects id="projects" />
    <Contact id="contact" />
    <Footer />
  </div>
</template>


<script setup>
import { onMounted } from 'vue';
import Header from './components/Header.vue';
import Hero from './components/Hero.vue';
import About from './components/About.vue';
import Skills from './components/Skills.vue';
import Projects from './components/Projects.vue';
import Contact from './components/Contact.vue';
import Footer from './components/Footer.vue';

// Appliquer le mode sombre par défaut
onMounted(() => {
  document.body.classList.add('dark-mode');
});
</script>

<style>
/* === RESET & GLOBAL STYLES === */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  background-color: #0f0f1e;
  color: #fff;
  overflow-x: hidden;
  font-family: var(--font-sans);
  font-size: var(--font-size-body);
  line-height: 1.6;
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
}

/* === COLOR SCHEME === */
:root {
  --font-sans: 'Roboto', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  --font-size-display: clamp(2.4rem, 6vw, 4rem);
  --font-size-section-title: clamp(2rem, 5vw, 2.5rem);
  --font-size-section-intro: 1.05rem;
  --font-size-body: 1rem;
  --font-size-small: 0.84rem;
  --font-size-eyebrow: 0.75rem;
  --primary: #00d4ff;
  --primary-dark: #0099cc;
  --secondary: #7c3aed;
  --accent: #ff006e;
  --bg-dark: #0f0f1e;
  --bg-lighter: #1a1a2e;
  --bg-card: #252525;
  --text-primary: #ffffff;
  --text-strong: rgba(255, 255, 255, 0.96);
  --text-secondary: rgba(255, 255, 255, 0.86);
  --text-muted: rgba(255, 255, 255, 0.74);
  --text-subtle: rgba(255, 255, 255, 0.64);
  --border: rgba(0, 212, 255, 0.2);
  --shadow: 0 8px 32px rgba(0, 212, 255, 0.1);
}

/* === HEADER STICKY === */
header {
  position: sticky;
  top: 0;
  z-index: 999;
  background: rgba(15, 15, 30, 0.8);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid var(--border);
  transition: all 0.3s ease;
}

header:hover {
  box-shadow: var(--shadow);
}

/* === SECTIONS === */
section {
  scroll-margin-top: 80px;
}

/* === ANIMATIONS === */
@keyframes slideInFromLeft {
  from {
    opacity: 0;
    transform: translateX(-40px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes slideInFromRight {
  from {
    opacity: 0;
    transform: translateX(40px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(40px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes pulse {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
}

/* === MODAL STATE === */
body.modal-open {
  overflow: hidden !important;
}

/* Geler complètement le hero et ses enfants quand modal ouvert */
body.modal-open .hero,
body.modal-open .floating-elements {
  visibility: hidden !important;
  pointer-events: none !important;
  position: fixed !important;
}

body.modal-open .float-box {
  will-change: auto !important;
  animation: none !important;
  transform: none !important;
}

/* Empêcher TOUT repaint pendant le modal */
body.modal-open * {
  animation-play-state: paused !important;
  will-change: auto !important;
}

/* === DARK MODE OVERRIDES === */
.dark-mode {
  background-color: var(--bg-dark);
  color: var(--text-primary);
}

.dark-mode header {
  background: rgba(26, 26, 46, 0.85);
  color: var(--text-primary);
}
</style>
