<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { useRouter } from 'vue-router'
import Button from 'primevue/button'

const router = useRouter()
const selectedImage = ref<string | null>(null)

const goBack = () => {
  router.push('/')
}

const images = [
  '/images/IMG_0259.jpeg',
  '/images/IMG_0440.jpeg',
  '/images/6d6af19c-7772-47f7-af4f-cd84de5c87d8.jpg',
  '/images/8f0d45f0-9d5a-4bbd-b61c-cea791bb028e.jpg'
]

const openImage = (src: string) => {
  selectedImage.value = src
}

const closeOverlay = () => {
  selectedImage.value = null
}

// escape to close image overlay 
const handleKeydown = (e: KeyboardEvent) => {
  if (e.key === 'Escape') {
    closeOverlay()
  }
}

// listeners 
onMounted(() => {
  window.addEventListener('keydown', handleKeydown)
})

onUnmounted(() => {
  window.removeEventListener('keydown', handleKeydown)
})
</script>

<template>
  <div class="about-view">
    <div class="back-header">
      <Button
        icon="pi pi-arrow-left"
        label="Tilbage"
        text
        class="back-button"
        @click="goBack"
      />
    </div>

    <div class="content-area">
      <div class="text-section">
        <h1 class="about-title gradient-text">Hvem er jeg?</h1>
        <div class="intro-text">
          <p>Jeg er datamatikerstuderende med en stor interesse for softwareudvikling og for at bygge løsninger fra bunden. Jeg motiveres af at forstå, hvordan ting hænger sammen, og jeg er nysgerrig på hele processen; fra idé til færdigt produkt.</p>
          <p>Jeg har en særlig interesse for at arbejde med SAP BTP og udforske mulighederne i cloud-baserede løsninger. Som studerende er jeg optaget af at lære, udvikle mig og blive dygtigere gennem praksis og samarbejde.</p>
          <p>I min fritid holder jeg af at være aktiv med bl.a. klatring, og at skrue på mine hobbyprojekter.</p>
        </div>
      </div>

      <div class="image-grid">
        <div
          v-for="(image, index) in images"
          :key="index"
          class="grid-item"
          @click="openImage(image)"
        >
          <img :src="image" :alt="`Billede ${index + 1}`" />
        </div>
      </div>
    </div>

    <Transition name="overlay">
      <div v-if="selectedImage" class="image-overlay" @click="closeOverlay">
        <div class="overlay-content" @click.stop>
          <img :src="selectedImage" alt="Forstørret billede" />
          <button class="close-button" @click="closeOverlay">
            <i class="pi pi-times"></i>
          </button>
        </div>
      </div>
    </Transition>
  </div>
</template>

<style scoped>
.about-view {
  min-height: 100vh;
  position: relative;
  overflow-x: hidden;
}

.back-header {
  position: fixed;
  top: 100px;
  left: 2rem;
  z-index: 100;
}

.back-button {
  color: var(--text-secondary) !important;
  font-weight: 500 !important;
  transition: all 0.3s ease !important;
  background: rgba(10, 10, 15, 0.8) !important;
  backdrop-filter: blur(10px);
  border-radius: 8px !important;
  padding: 0.5rem 1rem !important;
}

.back-button:hover {
  color: var(--text-primary) !important;
  transform: translateX(-4px);
}

.content-area {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
}

.text-section {
  max-width: 550px;
  text-align: center;
  margin-bottom: 3rem;
}

.about-title {
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  line-height: 1.2;
}

.intro-text {
  font-size: 1.15rem;
  color: var(--text-secondary);
  line-height: 1.9;
}

.intro-text p {
  margin-bottom: 1.25rem;
}

.intro-text p:last-child {
  margin-bottom: 0;
}

.image-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
  max-width: 700px;
  width: 100%;
}

.grid-item {
  cursor: pointer;
  border-radius: 12px;
  overflow: hidden;
  aspect-ratio: 4/3;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.grid-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 12px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4);
  border: 2px solid rgba(255, 255, 255, 0.1);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.grid-item:hover {
  transform: translateY(-8px);
}

.grid-item:hover img {
  border-color: var(--accent-primary);
  box-shadow: 0 16px 48px rgba(0, 212, 255, 0.2);
}

.image-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.9);
  backdrop-filter: blur(10px);
  z-index: 2000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  cursor: pointer;
}

.overlay-content {
  position: relative;
  max-width: 90vw;
  max-height: 90vh;
  cursor: default;
}

.overlay-content img {
  max-width: 100%;
  max-height: 85vh;
  border-radius: 12px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
}

.close-button {
  position: absolute;
  top: -1rem;
  right: -1rem;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: var(--text-primary);
  font-size: 1.25rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
}

.close-button:hover {
  background: rgba(255, 255, 255, 0.2);
  transform: scale(1.1);
}

.overlay-enter-active,
.overlay-leave-active {
  transition: opacity 0.3s ease;
}

.overlay-enter-active .overlay-content,
.overlay-leave-active .overlay-content {
  transition: transform 0.3s ease, opacity 0.3s ease;
}

.overlay-enter-from,
.overlay-leave-to {
  opacity: 0;
}

.overlay-enter-from .overlay-content,
.overlay-leave-to .overlay-content {
  transform: scale(0.9);
  opacity: 0;
}

@media (max-width: 768px) {
  .back-header {
    top: 90px;
    left: 1rem;
  }

  .content-area {
    padding: 1rem;
  }

  .text-section {
    margin-bottom: 2rem;
  }

  .about-title {
    font-size: 2rem;
  }

  .intro-text {
    font-size: 1rem;
  }

  .image-grid {
    grid-template-columns: 1fr;
    gap: 1rem;
    max-width: 400px;
  }

  .close-button {
    top: -0.5rem;
    right: -0.5rem;
    width: 40px;
    height: 40px;
  }
}
</style>
