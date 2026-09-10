<script setup lang="ts">
import logoImg from "~/assets/images/logo-tripcircle.png";

interface NavItem {
  label: string;
  to: string;
  badge?: string;
}

defineProps<{
  navMenu: NavItem[];
}>();
</script>

<template>
  <div class="hidden md:flex items-center justify-between max-w-7xl mx-auto px-6 py-4">
    <!-- Brand Logo + Text Sejajar -->
    <NuxtLink to="/" class="flex items-center gap-3 group">
      <img 
        :src="logoImg" 
        alt="TRIP CIRCLE Logo" 
        class="h-15 md:h-20 lg:h-21 w-auto object-contain transition-transform duration-200 group-hover:scale-130"
      />
      <span class="text-xl lg:text-3xl font-black tracking-widest text-[#082f41]">
        TRIP CIRCLE
      </span>
    </NuxtLink>

    <nav class="flex items-center gap-7">
      <NuxtLink
        v-for="item in navMenu"
        :key="item.label"
        :to="item.to"
        class="text-sm font-semibold text-[#53666f] hover:text-[#082f41] transition-colors relative flex items-center gap-1.5"
      >
        {{ item.label }}
      </NuxtLink>
    </nav>

    <a
      href="https://wa.me/6281234567890?text=Halo%20TRIP%20CIRCLE,%20saya%20tertarik%20dengan%20Paket%20Da%20Lat"
      target="_blank"
      class="bg-[#082f41] text-[#fff9f0] hover:bg-[#062432] text-xs font-bold px-5 py-2.5 rounded-full transition-all"
    >
      Contact Us
    </a>
  </div>
</template>