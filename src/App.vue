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
  font-family: 'Roboto', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
}

/* === COLOR SCHEME === */
:root {
  --primary: #00d4ff;
  --primary-dark: #0099cc;
  --secondary: #7c3aed;
  --accent: #ff006e;
  --bg-dark: #0f0f1e;
  --bg-lighter: #1a1a2e;
  --bg-card: #252525;
  --text-primary: #ffffff;
  --text-secondary: rgba(255, 255, 255, 0.8);
  --text-muted: rgba(255, 255, 255, 0.5);
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

.dark-mode .logo h1 {
  background: linear-gradient(135deg, #00d4ff 0%, #7c3aed 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.dark-mode nav ul li a {
  color: var(--text-secondary);
  transition: all 0.3s ease;
}

.dark-mode nav ul li a:hover {
  color: var(--primary);
  text-shadow: 0 0 10px rgba(0, 212, 255, 0.5);
}

/* === SECTIONS STYLING === */
.dark-mode section {
  background: linear-gradient(180deg, rgba(26, 26, 46, 0.5) 0%, rgba(37, 37, 55, 0.3) 100%);
  border: 1px solid var(--border);
  border-radius: 12px;
  transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.dark-mode section:hover {
  border-color: rgba(0, 212, 255, 0.4);
  box-shadow: 0 10px 40px rgba(0, 212, 255, 0.15);
  transform: translateY(-2px);
}

.dark-mode section h2 {
  background: linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.dark-mode section p {
  color: var(--text-secondary);
}

/* === PROJECT CARDS === */
.dark-mode .project-card {
  background: linear-gradient(135deg, rgba(37, 37, 55, 0.8) 0%, rgba(26, 26, 46, 0.5) 100%);
  border: 1px solid var(--border);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.3);
  transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.dark-mode .project-card:hover {
  border-color: rgba(0, 212, 255, 0.6);
  box-shadow: 0 16px 48px rgba(0, 212, 255, 0.2);
  transform: translateY(-8px);
}

.dark-mode .project-card h3 {
  color: var(--primary);
}

.dark-mode .project-card p {
  color: var(--text-secondary);
}

.dark-mode .stack span {
  background: rgba(0, 212, 255, 0.15);
  border: 1px solid rgba(0, 212, 255, 0.3);
  color: var(--primary);
  transition: all 0.3s ease;
}

.dark-mode .stack span:hover {
  background: rgba(0, 212, 255, 0.3);
  box-shadow: 0 0 15px rgba(0, 212, 255, 0.2);
}

/* === CONTACT SECTION === */
.dark-mode .contact {
  background: linear-gradient(180deg, rgba(26, 26, 46, 0.5) 0%, rgba(37, 37, 55, 0.3) 100%);
}

.dark-mode .detail-item {
  background: rgba(0, 212, 255, 0.05);
  border: 1px solid rgba(0, 212, 255, 0.2);
  transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.dark-mode .detail-item:hover {
  background: rgba(0, 212, 255, 0.1);
  border-color: rgba(0, 212, 255, 0.5);
  box-shadow: 0 8px 24px rgba(0, 212, 255, 0.15);
}

.dark-mode .detail-item i {
  color: var(--primary);
}

.dark-mode .detail-item a {
  color: var(--text-secondary);
}

.dark-mode .detail-item:hover a {
  color: var(--primary);
}

/* === SKILLS SECTION === */
.dark-mode .skill-item {
  background: rgba(0, 212, 255, 0.08);
  border: 1px solid rgba(0, 212, 255, 0.2);
  transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
  border-radius: 12px;
}

.dark-mode .skill-item:hover {
  background: rgba(0, 212, 255, 0.15);
  border-color: rgba(0, 212, 255, 0.5);
  box-shadow: 0 8px 24px rgba(0, 212, 255, 0.2);
  transform: translateY(-6px);
}

/* === GENERAL LINKS === */
.dark-mode a {
  color: var(--primary);
  transition: all 0.3s ease;
}

.dark-mode a:hover {
  color: var(--secondary);
  text-shadow: 0 0 10px rgba(0, 212, 255, 0.5);
}

/* === RESPONSIVE === */
@media (max-width: 768px) {
  .dark-mode section {
    margin-left: auto;
    margin-right: auto;
    width: 95%;
  }
}
</style>
