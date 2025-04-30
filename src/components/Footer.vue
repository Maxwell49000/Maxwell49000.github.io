<template>
  <footer>
    <div class="footer-container">
      <div class="footer-info">
        <h3>Axel Paillard</h3>
        <p>Développeur web passionné, toujours à la recherche de nouveaux défis et opportunités !</p>
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
          <a href="https://www.linkedin.com/in/axel-paillard-74922b253" target="_blank"><i
              class="fab fa-linkedin"></i></a>
          <a href="https://github.com/Maxwell49000" target="_blank"><i class="fab fa-github"></i></a>
        </div>
      </div>
    </div>

    <div class="footer-bottom">
      <p>&copy; 2025 Axel Paillard - Tous droits réservés</p>
    </div>
  </footer>
</template>

<style scoped>
footer {
  background-color: #333;
  color: #fff;
  padding: 2rem 0;
  font-family: 'Roboto', sans-serif;
}

.footer-container {
  display: flex;
  justify-content: space-between;
  padding: 0 20px;
  flex-wrap: wrap;
}

.footer-info {
  flex: 1;
  max-width: 300px;
}

.footer-info h3 {
  font-size: 1.6rem;
  color: #007bff;
  margin-bottom: 1rem;
}

.footer-info p {
  font-size: 1rem;
  color: white;
}

.footer-links {
  flex: 1;
  max-width: 200px;
}

.footer-links h4 {
  font-size: 1.2rem;
  color: #fff;
  margin-bottom: 1rem;
}

.footer-links ul {
  list-style: none;
  padding: 0;
}

.footer-links ul li {
  margin-bottom: 0.5rem;
}

.footer-links a {
  color: white;
  text-decoration: none;
  font-size: 1rem;
  transition: color 0.3s;
}

.footer-links a:hover {
  color: #007bff;
}

.footer-socials {
  flex: 1;
  max-width: 250px;
}

.footer-socials h4 {
  font-size: 1.2rem;
  color: #fff;
  margin-bottom: 1rem;
}

.social-icons {
  display: flex;
  gap: 15px;
}

.social-icons a {
  color: white;
  font-size: 1.5rem;
  transition: color 0.3s;
}

.social-icons a:hover {
  color: #007bff;
  }

.footer-bottom {
  text-align: center;
  margin-top: 2rem;
  color: white;
}

.footer-bottom p {
  font-size: 0.9rem;
}
</style>