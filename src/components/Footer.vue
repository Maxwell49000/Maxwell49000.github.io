<template>
  <footer>
    <div class="footer-container">
      <div class="footer-info">
        <h3>Axel Paillard</h3>
        <p>Développeur full-stack, attentif à la qualité et à la maintenabilité du code.</p>
      </div>

      <div class="footer-links">
        <h4>Liens utiles</h4>
        <ul>
          <li><a href="#about">À propos</a></li>
          <li><a href="#projects">Projets</a></li>
          <li><a href="#contact">Contact</a></li>
          <li><a href="https://github.com/Maxwell49000" target="_blank">GitHub</a></li>
        </ul>
      </div>

      <div class="footer-socials">
        <h4>Suivez-moi</h4>
        <div class="social-icons">
          <a href="https://www.linkedin.com/in/axel-paillard-74922b253" target="_blank">
            <i class="fab fa-linkedin"></i>
          </a>
          <a href="https://github.com/Maxwell49000" target="_blank">
            <i class="fab fa-github"></i>
          </a>
        </div>
      </div>
    </div>

    <div class="footer-bottom">
      <p>&copy; {{ currentYear }} Axel Paillard - Tous droits réservés</p>
    </div>
  </footer>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const currentYear = ref(new Date().getFullYear());

onMounted(() => {
  currentYear.value = new Date().getFullYear();
});
</script>

<style scoped>
/* -------- Mode sombre par défaut -------- */
footer {
  background: linear-gradient(135deg, rgba(15, 15, 30, 0.95) 0%, rgba(26, 26, 46, 0.95) 100%);
  color: #fff;
  padding: 2rem 0;
  font-family: var(--font-sans);
  border-top: 1px solid rgba(0, 212, 255, 0.2);
}

.footer-container {
  display: flex;
  justify-content: space-between;
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0;
  flex-wrap: wrap;
}

.footer-info {
  flex: 1;
  max-width: 300px;
}

.footer-info h3 {
  font-size: 1.45rem;
  background: linear-gradient(135deg, #00d4ff 0%, #7c3aed 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 1rem;
  font-weight: 700;
}

.footer-info p {
  font-size: 0.92rem;
  line-height: 1.65;
  color: var(--text-secondary);
}

.footer-links {
  flex: 1;
  max-width: 200px;
}

.footer-links h4 {
  font-size: 1rem;
  color: #00d4ff;
  margin-bottom: 1rem;
  font-weight: 600;
}

.footer-links ul {
  list-style: none;
  padding: 0;
}

.footer-links ul li {
  margin-bottom: 0.5rem;
}

.footer-links a {
  color: var(--text-secondary);
  text-decoration: none;
  font-size: 0.92rem;
  transition: all 0.3s ease;
}

.footer-links a:hover {
  color: #00d4ff;
  text-shadow: 0 0 10px rgba(0, 212, 255, 0.3);
}

.footer-socials {
  flex: 1;
  max-width: 250px;
}

.footer-socials h4 {
  font-size: 1rem;
  color: #00d4ff;
  margin-bottom: 1rem;
  font-weight: 600;
}

.social-icons {
  display: flex;
  gap: 15px;
}

.social-icons a {
  color: var(--text-secondary);
  font-size: 1.5rem;
  transition: all 0.3s ease;
}

.social-icons a:hover {
  color: #00d4ff;
  transform: scale(1.2);
}

.footer-bottom {
  text-align: center;
  margin-top: 2rem;
}

.footer-bottom p {
  font-size: 0.9rem;
  color: var(--text-muted);
}

/* -------- Responsive -------- */
@media (max-width: 768px) {
  .footer-container {
    flex-direction: column;
    align-items: center;
    gap: 1.5rem;
  }
  
  .footer-info, 
  .footer-links, 
  .footer-socials {
    max-width: 100%;
    text-align: center;
  }
}
</style>
