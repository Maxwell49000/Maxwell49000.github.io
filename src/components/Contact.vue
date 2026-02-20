<template>
  <section class="contact" data-aos="fade-up" data-aos-duration="1000">
    <h2>Contactez-moi</h2>
    <p>Vous souhaitez échanger ? Contactez-moi par e-mail, téléphone ou via mes réseaux.</p>

    <div class="contact-details">
      <div 
        class="detail-item" 
        v-for="contact in contacts" 
        :key="contact.text"
        data-aos="fade-up"
        :data-aos-delay="contact.delay"
      >
        <div class="icon-container">
          <i :class="contact.icon"></i>
        </div>
        <a :href="contact.link" target="_blank" rel="noopener noreferrer">{{ contact.text }}</a>
      </div>
    </div>

    <a :href="cvPath" download class="cv-button" data-aos="fade-up" data-aos-delay="600">
      <i class="fas fa-download"></i> Télécharger mon CV
    </a>
  </section>
</template>

<script setup>
import { ref } from 'vue';

// Définition des contacts
const contacts = ref([
  { icon: "fas fa-envelope", link: "mailto:axel.paillard.12@gmail.com", text: "axel.paillard.12@gmail.com", delay: 200 },
  { icon: "fas fa-phone-alt", link: "tel:+33782675057", text: "07 82 67 50 57", delay: 300 },
  { icon: "fab fa-linkedin", link: "https://www.linkedin.com/in/axel-paillard-74922b253/", text: "LinkedIn", delay: 400 },
  { icon: "fab fa-github", link: "https://github.com/Maxwell49000", text: "GitHub", delay: 500 }
]);

// Définition du chemin du CV
const cvPath = ref("/Cv.pdf");
</script>

<style scoped>
.contact {
  width: 90%;
  max-width: 1200px;
  margin: 4rem auto;
  padding: 3rem 5%;
  background: linear-gradient(180deg, rgba(26, 26, 46, 0.5) 0%, rgba(37, 37, 55, 0.3) 100%);
  border: 1px solid rgba(0, 212, 255, 0.2);
  border-radius: 16px;
  box-shadow: 0 8px 32px rgba(0, 212, 255, 0.1);
  text-align: center;
  transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
  box-sizing: border-box;
  font-family: 'Roboto', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
}

.contact:hover {
  border-color: rgba(0, 212, 255, 0.4);
  box-shadow: 0 12px 48px rgba(0, 212, 255, 0.15);
  transform: translateY(-4px);
}

.contact h2 {
  font-size: 2.5rem;
  font-weight: 700;
  background: linear-gradient(135deg, #00d4ff 0%, #7c3aed 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 1.5rem;
  position: relative;
  display: inline-block;
}

.contact p {
  font-size: 1.1rem;
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 2rem;
  font-weight: 400;
}

.contact-details {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1.5rem;
  margin: 2.5rem 0;
}

.detail-item {
  display: flex;
  align-items: center;
  gap: 1rem;
  font-size: 1rem;
  padding: 1rem 1.5rem;
  border-radius: 12px;
  transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
  background: rgba(0, 212, 255, 0.08);
  border: 1px solid rgba(0, 212, 255, 0.2);
  position: relative;
  overflow: hidden;
}

.detail-item::before {
  content: '';
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: radial-gradient(circle, rgba(0, 212, 255, 0.15) 0%, transparent 70%);
  transition: all 0.6s ease;
  opacity: 0;
}

.detail-item:hover::before {
  opacity: 1;
  top: 0;
  left: 0;
}

.detail-item:hover {
  transform: translateY(-8px);
  box-shadow: 0 12px 32px rgba(0, 212, 255, 0.15);
  background: rgba(0, 212, 255, 0.15);
  border-color: rgba(0, 212, 255, 0.5);
}

.icon-container {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: rgba(0, 212, 255, 0.15);
  border: 2px solid rgba(0, 212, 255, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
  position: relative;
  z-index: 1;
}

.detail-item:hover .icon-container {
  background: linear-gradient(135deg, #00d4ff 0%, #7c3aed 100%);
  border-color: rgba(0, 212, 255, 0.8);
  box-shadow: 0 0 20px rgba(0, 212, 255, 0.4);
  transform: scale(1.15);
}

.detail-item i {
  font-size: 1.4rem;
  color: #00d4ff;
  transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
  position: relative;
  z-index: 1;
}

.detail-item:hover i {
  color: white;
  transform: scale(1.2);
}

.detail-item a {
  text-decoration: none;
  color: rgba(255, 255, 255, 0.8);
  transition: all 0.3s ease;
  font-weight: 500;
  position: relative;
  z-index: 1;
}

.detail-item:hover a {
  color: #00d4ff;
}

.cv-button {
  margin-top: 2.5rem;
  display: inline-flex;
  align-items: center;
  gap: 0.8rem;
  background: linear-gradient(135deg, #00d4ff 0%, #7c3aed 100%);
  color: white;
  text-decoration: none;
  padding: 1rem 2rem;
  border: none;
  border-radius: 50px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
  position: relative;
  overflow: hidden;
  box-shadow: 0 8px 25px rgba(0, 212, 255, 0.2);
  letter-spacing: 0.5px;
}

.cv-button::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.2);
  transition: left 0.5s ease;
  z-index: -1;
}

.cv-button i {
  transition: transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.cv-button:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 40px rgba(0, 212, 255, 0.3);
}

.cv-button:hover::before {
  left: 100%;
}

.cv-button:hover i {
  transform: translateY(-3px) scale(1.2);
}

.cv-button:active {
  transform: translateY(-1px);
}

/* Responsive */
@media (max-width: 768px) {
  .contact {
    width: 95%;
    padding: 2.5rem 4%;
    margin: 3rem auto;
  }

  .contact h2 {
    font-size: 2rem;
  }

  .contact p {
    font-size: 1rem;
  }

  .contact-details {
    flex-direction: column;
    align-items: center;
  }

  .detail-item {
    width: 85%;
    justify-content: flex-start;
    font-size: 0.95rem;
  }
  
  .cv-button {
    font-size: 1rem;
    padding: 0.85rem 1.5rem;
  }
}

@media (max-width: 480px) {
  .contact {
    padding: 1.5rem 3%;
    margin: 2rem auto;
  }

  .contact h2 {
    font-size: 1.5rem;
  }

  .contact p {
    font-size: 0.95rem;
  }

  .contact-details {
    gap: 1rem;
  }

  .detail-item {
    width: 100%;
    padding: 0.85rem 1rem;
    font-size: 0.9rem;
  }

  .icon-container {
    width: 44px;
    height: 44px;
  }

  .detail-item i {
    font-size: 1.2rem;
  }
  
  .cv-button {
    font-size: 0.95rem;
    padding: 0.75rem 1.25rem;
    gap: 0.6rem;
    width: 100%;
    justify-content: center;
  }
}
</style>
