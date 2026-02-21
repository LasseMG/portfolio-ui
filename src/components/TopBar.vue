<script setup lang="ts">
import { useRouter } from 'vue-router'
import { ref } from 'vue'
import Button from 'primevue/button'
import OverlayPanel from 'primevue/overlaypanel'

const router = useRouter()
const contactMenu = ref()

const navigateHome = () => {
  router.push('/')
}

const toggleContactMenu = (event: Event) => {
  contactMenu.value.toggle(event)
}

const contactInfo = {
  name: 'Lasse Gelsbjerg',
  email: 'lasse.gelsbjerg@gmail.com',
  linkedin: 'https://www.linkedin.com/in/lasse-gelsbjerg/',
  instagram: 'https://www.instagram.com/lassemg_/'
}
</script>

<template>
  <header class="topbar">
    <div class="topbar-content">
      <h1 class="logo gradient-text" @click="navigateHome">Lasse Gelsbjerg</h1>
      <nav class="nav">
        <Button
          label="Kontakt"
          link
          class="nav-button"
          @click="toggleContactMenu"
        />
        <OverlayPanel ref="contactMenu" class="contact-dropdown">
          <div class="contact-content">
            <h3 class="contact-name">{{ contactInfo.name }}</h3>
            <a :href="`mailto:${contactInfo.email}`" class="contact-item email-item">
              <span class="contact-label">Email</span>
              <span class="contact-value">{{ contactInfo.email }}</span>
            </a>
            <div class="social-links">
              <a :href="contactInfo.linkedin" target="_blank" rel="noopener noreferrer" class="social-link" title="LinkedIn">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              <a :href="contactInfo.instagram" target="_blank" rel="noopener noreferrer" class="social-link" title="Instagram">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
            </div>
          </div>
        </OverlayPanel>
      </nav>
    </div>
  </header>
</template>

<style scoped>
.topbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: rgba(10, 10, 15, 0.8);
  backdrop-filter: blur(20px);
  border-bottom: 1px solid var(--border-color);
}

.topbar-content {
  max-width: 1400px;
  margin: 0 auto;
  padding: 1.5rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  font-size: 1.5rem;
  font-weight: 600;
  cursor: pointer;
  transition: opacity 0.3s ease;
  margin: 0;
}

.logo:hover {
  opacity: 0.8;
}

.nav {
  display: flex;
  gap: 1rem;
  align-items: center;
}

.nav-button {
  color: var(--text-secondary) !important;
  font-weight: 500 !important;
  transition: all 0.3s ease !important;
}

.nav-button:hover {
  color: var(--text-primary) !important;
}

@media (max-width: 768px) {
  .topbar-content {
    padding: 1rem 1.5rem;
  }

  .logo {
    font-size: 1.25rem;
  }
}
</style>

<style>
.contact-dropdown {
  background: rgba(20, 20, 25, 0.95) !important;
  backdrop-filter: blur(20px) !important;
  border: 1px solid rgba(255, 255, 255, 0.1) !important;
  border-radius: 12px !important;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4) !important;
  min-width: 280px !important;
}

.contact-content {
  padding: 0.5rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.contact-name {
  margin: 0;
  font-size: 1.25rem;
  font-weight: 600;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  padding-bottom: 0.75rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.contact-item {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  padding: 0.75rem;
  background: rgba(255, 255, 255, 0.03);
  border-radius: 8px;
  text-decoration: none;
  transition: all 0.3s ease;
}

.contact-item:hover {
  background: rgba(255, 255, 255, 0.08);
  transform: translateY(-2px);
}

.contact-label {
  font-size: 0.75rem;
  color: var(--text-secondary);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  font-weight: 500;
}

.contact-value {
  font-size: 0.95rem;
  color: var(--text-primary);
  font-weight: 500;
}

.social-links {
  display: flex;
  gap: 1rem;
  justify-content: center;
  padding-top: 0.5rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}

.social-link {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.03);
  color: var(--text-secondary);
  transition: all 0.3s ease;
  text-decoration: none;
}

.social-link:hover {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  transform: translateY(-3px);
  box-shadow: 0 4px 12px rgba(102, 126, 234, 0.4);
}

.social-link svg {
  width: 24px;
  height: 24px;
}
</style>
