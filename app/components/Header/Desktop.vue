<script setup lang="ts">
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
    <!-- Logo Brand -->
    <NuxtLink to="/" class="text-xl font-black tracking-widest text-[#2c221e]">
      TRIP CIRCLE
    </NuxtLink>

    <!-- Navigasi Menu -->
    <nav class="flex items-center gap-7">
      <NuxtLink
        v-for="item in navMenu"
        :key="item.label"
        :to="item.to"
        class="text-sm font-semibold text-[#5a4d44] hover:text-[#2c221e] transition-colors relative flex items-center gap-1.5"
      >
        {{ item.label }}
        <span
          v-if="item.badge"
          class="text-[10px] bg-[#e7dccd] text-[#2c221e] font-bold px-1.5 py-0.5 rounded-sm uppercase tracking-wider"
        >
          {{ item.badge }}
        </span>
      </NuxtLink>
    </nav>

    <!-- Call to Action Button -->
    <a
      href="https://wa.me/6281234567890?text=Halo%20TRIP%20CIRCLE,%20saya%20tertarik%20dengan%20Paket%20Wisata%20Da%20Lat"
      target="_blank"
      class="bg-[#2c221e] text-[#fff9f1] hover:bg-[#43352f] text-xs font-bold px-5 py-2.5 rounded-full transition-all"
    >
      Contact Us
    </a>
  </div>
</template>