<template>
  <section class="contact" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">
    <h2>Contactez-moi</h2>
    <p>Vous souhaitez échanger ? Contactez-moi par e-mail, téléphone ou via mes réseaux.</p>

    <div class="contact-details">
      <div 
        class="detail-item" 
        v-for="(contact, index) in contacts" 
        :key="index" 
        data-aos="fade-up"
        :data-aos-delay="200 + (index * 100)"
      >
        <div class="icon-container">
          <i :class="contact.icon"></i>
        </div>
        <a :href="contact.link" target="_blank">{{ contact.text }}</a>
      </div>
    </div>

    <a href="/Cv.pdf" download class="cv-button" data-aos="fade-up" data-aos-delay="600">
      <i class="fas fa-download"></i> Télécharger mon CV
    </a>
  </section>
</template>

<script setup>
const contacts = [
  { icon: "fas fa-envelope", link: "mailto:axel.paillard.12@gmail.com", text: "axel.paillard.12@gmail.com" },
  { icon: "fas fa-phone-alt", link: "tel:+33782675057", text: "07 82 67 50 57" },
  { icon: "fab fa-linkedin", link: "https://www.linkedin.com/in/axel-paillard-74922b253/", text: "LinkedIn" },
  { icon: "fab fa-github", link: "https://github.com/Maxwell49000", text: "GitHub" }
];
</script>

<style scoped>
.contact {
  width: 90%;
  max-width: 1200px;
  margin: 4rem auto;
  padding: 3rem 5%;
  background-color: #f8f9fa;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.contact:hover {
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
}

.contact h2 {
  font-size: 2.2rem;
  font-weight: bold;
  color: #343a40;
  margin-bottom: 1.5rem;
  position: relative;
  display: inline-block;
}

.contact h2::after {
  content: '';
  position: absolute;
  bottom: -10px;
  left: 50%;
  transform: translateX(-50%);
  width: 0;
  height: 3px;
  background-color: #007bff;
  transition: width 0.5s ease;
}

.contact:hover h2::after {
  width: 80%;
}

.contact p {
  font-size: 1.2rem;
  color: #495057;
  margin-bottom: 2rem;
}

.contact-details {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1.5rem;
  margin: 2rem 0;
}

.detail-item {
  display: flex;
  align-items: center;
  gap: 1rem;
  font-size: 1.1rem;
  padding: 0.75rem 1.25rem;
  border-radius: 8px;
  transition: all 0.3s ease;
  background-color: rgba(255, 255, 255, 0.7);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
}

.detail-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  background-color: white;
}

.icon-container {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: rgba(0, 123, 255, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
}

.detail-item:hover .icon-container {
  background-color: #007bff;
}

.detail-item i {
  font-size: 1.3rem;
  color: #007bff;
  transition: all 0.3s ease;
}

.detail-item:hover i {
  color: white;
  transform: scale(1.2);
}

.detail-item a {
  text-decoration: none;
  color: #495057;
  transition: color 0.3s;
  font-weight: 500;
}

.detail-item:hover a {
  color: #007bff;
}

/* Style du bouton de téléchargement */
.cv-button {
  margin-top: 2rem;
  display: inline-flex;
  align-items: center;
  background-color: #007bff;
  color: white;
  text-decoration: none;
  padding: 12px 24px;
  border-radius: 30px;
  font-size: 1.2rem;
  font-weight: 600;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  z-index: 1;
  box-shadow: 0 4px 12px rgba(0, 123, 255, 0.3);
}

.cv-button::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
  transition: left 0.7s ease;
  z-index: -1;
}

.cv-button i {
  margin-right: 10px;
  transition: transform 0.3s ease;
}

.cv-button:hover {
  background-color: #0056b3;
  transform: translateY(-3px);
  box-shadow: 0 6px 15px rgba(0, 86, 179, 0.4);
}

.cv-button:hover::before {
  left: 100%;
}

.cv-button:hover i {
  transform: translateY(-3px);
}

.cv-button:active {
  transform: translateY(1px);
  box-shadow: 0 2px 8px rgba(0, 86, 179, 0.4);
}

/* Responsive */
@media (max-width: 768px) {
  .contact {
    width: 95%;
    padding: 2rem;
  }

  .contact h2 {
    font-size: 1.8rem;
  }

  .contact p {
    font-size: 1rem;
  }

  .contact-details {
    flex-direction: column;
    align-items: center;
  }

  .detail-item {
    width: 80%;
    justify-content: flex-start;
    font-size: 1rem;
  }
  
  .cv-button {
    font-size: 1.1rem;
    padding: 10px 20px;
  }
}
</style>