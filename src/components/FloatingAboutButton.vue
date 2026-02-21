<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()

const navigateToAbout = () => {
  router.push('/om-mig')
}
</script>

<template>
  <button class="floating-about-button" @click="navigateToAbout">
    <span class="button-text">Hvem er jeg?</span>
    <i class="pi pi-user"></i>
  </button>
</template>

<style scoped>
.floating-about-button {
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  z-index: 999;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1rem 1.5rem;
  background: rgba(20, 20, 25, 0.9);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 50px;
  color: var(--text-primary);
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.4);
}

.floating-about-button:hover {
  background: rgba(30, 30, 40, 0.95);
  border-color: var(--accent-primary);
  transform: translateY(-4px);
  box-shadow: 0 8px 32px rgba(0, 212, 255, 0.2);
}

.floating-about-button:active {
  transform: translateY(-2px);
}

.button-text {
  background: linear-gradient(135deg, var(--accent-primary) 0%, var(--accent-secondary) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.floating-about-button i {
  color: var(--accent-primary);
  font-size: 1.1rem;
  transition: transform 0.3s ease;
}

.floating-about-button:hover i {
  transform: scale(1.1);
}

@media (max-width: 768px) {
  .floating-about-button {
    bottom: 1.5rem;
    right: 1.5rem;
    padding: 0.875rem 1.25rem;
    font-size: 0.9rem;
  }
}
</style>
