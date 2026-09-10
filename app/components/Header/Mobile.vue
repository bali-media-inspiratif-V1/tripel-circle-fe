<script setup lang="ts">
import { ref } from 'vue';

interface NavItem {
  label: string;
  to: string;
  badge?: string;
}

defineProps<{
  navMenu: NavItem[];
}>();

const isMenuOpen = ref(false);
</script>

<template>
  <div class="md:hidden">
    <div class="flex items-center justify-between px-5 py-4">
      <NuxtLink to="/" class="text-lg font-black tracking-widest text-[#2c221e]">
        TRIP CIRCLE
      </NuxtLink>
      
      <button 
        @click="isMenuOpen = !isMenuOpen" 
        class="text-[#2c221e] p-2 focus:outline-none"
        aria-label="Toggle Menu"
      >
        <svg v-if="!isMenuOpen" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
        <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>

    <nav v-show="isMenuOpen" class="px-5 pb-6 pt-2 bg-[#fff9f1] border-t border-[#e7dccd] flex flex-col gap-4">
      <NuxtLink
        v-for="item in navMenu"
        :key="item.label"
        :to="item.to"
        @click="isMenuOpen = false"
        class="text-base font-semibold text-[#5a4d44] hover:text-[#2c221e]"
      >
        {{ item.label }}
      </NuxtLink>
      
      <a
        href="https://wa.me/6281234567890?text=Halo%20TRIP%20CIRCLE,%20saya%20tertarik%20dengan%20Paket%20Da%20Lat"
        target="_blank"
        class="mt-2 bg-[#2c221e] text-[#fff9f1] text-center text-sm font-bold px-4 py-3 rounded-xl block"
      >
        Contact Us
      </a>
    </nav>
  </div>
</template>