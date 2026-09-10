<script setup lang="ts">
import { ref } from 'vue'
import logoImg from "~/assets/images/logo-tripcircle.png";

interface NavItem {
  label: string
  to: string
  badge?: string
}

defineProps<{
  navMenu: NavItem[]
}>()

const isMenuOpen = ref(false)
</script>

<template>
  <div class="md:hidden">
    <!-- Baris Utama Header Mobile -->
    <div class="flex items-center justify-between px-5 py-3.5 bg-[#fff9f0]/95 backdrop-blur-sm">
      <!-- Brand: Logo Gambar + Teks Berdampingan -->
      <NuxtLink to="/" class="flex items-center gap-2.5 min-w-0">
        <img 
          :src="logoImg" 
          alt="TRIPLE CIRCLE Logo" 
          class="h-7 w-auto object-contain shrink-0"
        />
        <span class="text-base font-black tracking-widest text-[#082f41] truncate">
          TRIPLE CIRCLE
        </span>
      </NuxtLink>
      
      <!-- Tombol Hamburger Menu -->
      <button 
        @click="isMenuOpen = !isMenuOpen" 
        class="text-[#082f41] p-2 -mr-2 rounded-lg hover:bg-black/5 focus:outline-none transition-colors"
        aria-label="Buka Menu Navigasi"
      >
        <svg v-if="!isMenuOpen" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
        <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>

    <!-- Dropdown Menu Mobile Saat Dibuka -->
    <nav 
      v-show="isMenuOpen" 
      class="px-5 pb-6 pt-3 bg-[#fff9f0] border-t border-[#e7dccd] flex flex-col gap-4 shadow-lg transition-all"
    >
      <NuxtLink
        v-for="item in navMenu"
        :key="item.label"
        :to="item.to"
        @click="isMenuOpen = false"
        class="text-sm font-semibold text-[#53666f] hover:text-[#082f41] py-1 transition-colors"
      >
        {{ item.label }}
      </NuxtLink>
      
      <a
        href="https://wa.me/6281234567890?text=Halo%20TRIP%20CIRCLE,%20saya%20tertarik%20dengan%20Paket%20Da%20Lat"
        target="_blank"
        class="mt-2 bg-[#082f41] text-[#fff9f0] text-center text-xs font-bold px-4 py-3 rounded-xl block shadow-sm active:scale-95 transition-transform"
      >
        Contact Us
      </a>
    </nav>
  </div>
</template>