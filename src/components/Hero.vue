<template>
  <section class="hero">
    <!-- Animated background -->
    <div class="hero-background">
      <div class="gradient-blur gradient-1"></div>
      <div class="gradient-blur gradient-2"></div>
      <div class="gradient-blur gradient-3"></div>
    </div>

    <!-- Content -->
    <div class="hero-content">
      <div class="hero-text">
        <h1 class="hero-title">
          <span class="greeting">Salut, je suis</span>
          <span class="name-wrapper">
            <span class="name animated-text">Axel Paillard</span>
          </span>
        </h1>

        <p class="hero-subtitle">
          <span class="typing-effect">Développeur Web & Mobile</span>
          <span class="cursor"></span>
        </p>

        <p class="hero-description">
          Reconversion en cours. Passionné par l'apprentissage et les défis.
        </p>

        <div class="hero-cta">
          <a href="#projects" class="btn btn-primary">
            Voir mes projets
            <span class="btn-icon">→</span>
          </a>
          <a href="#contact" class="btn btn-secondary">
            Me contacter
          </a>
        </div>
      </div>

      <!-- Scroll indicator -->
      <div class="scroll-indicator">
        <div class="scroll-wheel"></div>
        <p>Scroll pour explorer</p>
      </div>
    </div>

    <!-- Animated elements -->
    <div class="floating-elements">
      <div class="float-box box-1">Vue 3</div>
      <div class="float-box box-2">Spring Boot</div>
      <div class="float-box box-3">PostgreSQL</div>
      <div class="float-box box-4">Docker</div>
      <div class="float-box box-5">Node.js</div>
      <div class="float-box box-6">Git</div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const typedText = ref('');
const fullText = 'Développeur Web & Mobile';
const typingSpeed = 80;

onMounted(() => {
  // Typing effect
  let index = 0;
  const typeInterval = setInterval(() => {
    if (index < fullText.length) {
      typedText.value += fullText[index];
      index++;
    } else {
      clearInterval(typeInterval);
    }
  }, typingSpeed);

  let isModalOpen = false;
  let lastTime = 0;

  // Parallax effect with throttle
  const handleMouseMove = (e) => {
    if (isModalOpen) return;
    
    const now = Date.now();
    if (now - lastTime < 16) return;
    lastTime = now;
    
    const elements = document.querySelectorAll('.float-box');
    elements.forEach((el) => {
      const x = (globalThis.innerWidth - e.clientX * 0.5) / 100;
      const y = (globalThis.innerHeight - e.clientY * 0.5) / 100;
      el.style.transform = `translateX(${x}px) translateY(${y}px)`;
    });
  };

  // Observer pour modal-open class
  const observer = new MutationObserver(() => {
    const hasModalOpen = document.body.classList.contains('modal-open');
    
    if (hasModalOpen && !isModalOpen) {
      // Modal vient de s'ouvrir - désactiver mousemove
      isModalOpen = true;
      globalThis.removeEventListener('mousemove', handleMouseMove);
    } else if (!hasModalOpen && isModalOpen) {
      // Modal vient de se fermer - réactiver mousemove
      isModalOpen = false;
      globalThis.addEventListener('mousemove', handleMouseMove, { passive: true });
    }
  });

  observer.observe(document.body, {
    attributes: true,
    attributeFilter: ['class']
  });

  globalThis.addEventListener('mousemove', handleMouseMove, { passive: true });

  return () => {
    clearInterval(typeInterval);
    observer.disconnect();
    globalThis.removeEventListener('mousemove', handleMouseMove);
  };
});
</script>

<style scoped>
.hero {
  position: relative;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  background: linear-gradient(135deg, #0f0f1e 0%, #1a1a2e 50%, #16213e 100%);
  padding: 2rem;
  font-family: 'Roboto', sans-serif;
}

/* Animated background */
.hero-background {
  position: absolute;
  inset: 0;
  z-index: 0;
  overflow: hidden;
}

.gradient-blur {
  position: absolute;
  width: 600px;
  height: 600px;
  border-radius: 50%;
  filter: blur(80px);
  opacity: 0.4;
  animation: float 15s ease-in-out infinite;
}

.gradient-1 {
  background: radial-gradient(circle, #00d4ff 0%, transparent 70%);
  top: -20%;
  left: -10%;
  animation-delay: 0s;
}

.gradient-2 {
  background: radial-gradient(circle, #7c3aed 0%, transparent 70%);
  bottom: -20%;
  right: -10%;
  animation-delay: 5s;
}

.gradient-3 {
  background: radial-gradient(circle, #00d4ff 0%, transparent 70%);
  top: 50%;
  right: -5%;
  animation-delay: 10s;
}

@keyframes float {
  0%, 100% {
    transform: translate(0, 0);
  }
  50% {
    transform: translate(30px, -30px);
  }
}

/* Content */
.hero-content {
  position: relative;
  z-index: 10;
  text-align: center;
  max-width: 900px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
}

.hero-text {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.hero-title {
  font-size: 4rem;
  font-weight: 900;
  line-height: 1.2;
  margin: 0;
  background: linear-gradient(135deg, #00d4ff 0%, #7c3aed 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  animation: slideUp 0.8s ease-out;
}

.greeting {
  display: block;
  font-size: 1.2rem;
  color: rgba(255, 255, 255, 0.95);
  text-shadow: 0 2px 10px rgba(0, 212, 255, 0.3);
  margin-bottom: 0.5rem;
  animation: fadeIn 0.8s ease-out;
  font-weight: 500;
}

.name-wrapper {
  display: inline-block;
  position: relative;
}

.name {
  display: inline-block;
  background: linear-gradient(135deg, #00ffff 0%, #00d4ff 50%, #7c3aed 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  font-weight: 900;
  filter: drop-shadow(0 0 15px rgba(0, 212, 255, 0.4));
}

@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.hero-subtitle {
  font-size: 1.8rem;
  color: #fff;
  margin: 0;
  min-height: 2.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  font-weight: 500;
  animation: slideUp 0.8s ease-out 0.1s both;
}

.typing-effect {
  color: #00d4ff;
  font-weight: 600;
  font-family: 'Courier New', monospace;
}

.cursor {
  display: inline-block;
  width: 2px;
  height: 1.5em;
  background-color: #7c3aed;
  animation: blink 0.7s infinite;
}

@keyframes blink {
  0%, 49% {
    opacity: 1;
  }
  50%, 100% {
    opacity: 0;
  }
}

.hero-description {
  font-size: 1.2rem;
  color: rgba(255, 255, 255, 0.8);
  max-width: 600px;
  line-height: 1.6;
  margin: 1rem 0 0 0;
  animation: slideUp 0.8s ease-out 0.2s both;
}

/* CTA Buttons */
.hero-cta {
  display: flex;
  gap: 1.5rem;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 2rem;
  margin-bottom: 8rem;
  animation: slideUp 0.8s ease-out 0.3s both;
}

.btn {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem 2rem;
  border-radius: 50px;
  border: none;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  text-decoration: none;
  transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
  position: relative;
  overflow: hidden;
}

.btn::before {
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

.btn:hover::before {
  left: 100%;
}

.btn-primary {
  background: linear-gradient(135deg, #00d4ff 0%, #7c3aed 100%);
  color: white;
  box-shadow: 0 0 30px rgba(0, 212, 255, 0.3);
}

.btn-primary:hover {
  transform: translateY(-3px);
  box-shadow: 0 0 50px rgba(0, 212, 255, 0.5), 0 10px 25px rgba(0, 0, 0, 0.2);
}

.btn-primary:active {
  transform: translateY(-1px);
}

.btn-icon {
  transition: transform 0.3s ease;
}

.btn-primary:hover .btn-icon {
  transform: translateX(5px);
}

.btn-secondary {
  background: transparent;
  color: #00d4ff;
  border: 2px solid #00d4ff;
}

.btn-secondary:hover {
  background: #00d4ff;
  color: #0f0f1e;
  box-shadow: 0 0 30px rgba(0, 212, 255, 0.4);
  transform: translateY(-3px);
}

/* Scroll indicator */
.scroll-indicator {
  position: absolute;
  bottom: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  color: rgba(255, 255, 255, 0.6);
  animation: fadeIn 1s ease-out 0.5s both;
}

.scroll-wheel {
  width: 24px;
  height: 40px;
  border: 2px solid rgba(0, 212, 255, 0.5);
  border-radius: 12px;
  position: relative;
  display: flex;
  justify-content: center;
  padding: 5px 0;
}

.scroll-wheel::after {
  content: '';
  width: 2px;
  height: 8px;
  background-color: #00d4ff;
  border-radius: 1px;
  animation: scroll-down 1.5s infinite;
}

@keyframes scroll-down {
  0% {
    opacity: 1;
    transform: translateY(0);
  }
  100% {
    opacity: 0;
    transform: translateY(12px);
  }
}

.scroll-indicator p {
  font-size: 0.85rem;
  margin: 0;
}

/* Floating elements */
.floating-elements {
  position: absolute;
  inset: 0;
  pointer-events: none;
  z-index: 5;
}

.float-box {
  position: absolute;
  padding: 0.8rem 1.5rem;
  background: rgba(0, 212, 255, 0.1);
  border: 2px solid rgba(0, 212, 255, 0.3);
  border-radius: 12px;
  color: #00d4ff;
  font-weight: 600;
  font-size: 0.9rem;
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
}

.box-1 {
  top: 15%;
  left: 10%;
  animation: float-animation 6s ease-in-out infinite;
}

.box-2 {
  top: 60%;
  right: 10%;
  animation: float-animation 8s ease-in-out infinite 2s;
}

.box-3 {
  bottom: 20%;
  left: 15%;
  animation: float-animation 7s ease-in-out infinite 4s;
}

.box-4 {
  top: 30%;
  right: 5%;
  animation: float-animation 9s ease-in-out infinite 1s;
}

.box-5 {
  bottom: 30%;
  right: 15%;
  animation: float-animation 7.5s ease-in-out infinite 3s;
}

@keyframes float-animation {
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-20px);
  }
}

/* Responsive */
@media (max-width: 768px) {
  .hero {
    min-height: 80vh;
    padding: 1.5rem;
  }

  .hero-title {
    font-size: 2.5rem;
  }

  .hero-subtitle {
    font-size: 1.3rem;
    min-height: 2rem;
  }

  .hero-description {
    font-size: 1rem;
  }

  .hero-cta {
    gap: 1rem;
  }

  .btn {
    padding: 0.85rem 1.5rem;
    font-size: 0.95rem;
  }

  .float-box {
    display: none;
  }

  .scroll-indicator {
    display: none;
  }
}

@media (max-width: 480px) {
  .hero-title {
    font-size: 2rem;
  }

  .greeting {
    font-size: 1rem;
  }

  .hero-subtitle {
    font-size: 1.1rem;
  }

  .hero-description {
    font-size: 0.95rem;
  }

  .hero-cta {
    flex-direction: column;
    gap: 1rem;
  }

  .btn {
    width: 100%;
    justify-content: center;
  }
}
</style>
