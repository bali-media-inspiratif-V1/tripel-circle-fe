<script setup lang="ts">
import DesktopHeader from "./Desktop.vue";
import MobileHeader from "./Mobile.vue";

const navMenu = [
  { label: "Home", to: "/" },
  { label: "Highlight", to: "/#highlights" },
  { label: "Itinerary", to: "/#itinerary" },
  { label: "Harga Paket", to: "/#pricing" },
  { label: "Fasilitas", to: "/#includes" },
];
</script>

<template>
  <header class="sticky top-0 z-50 w-full border-b border-[#e7dccd] bg-[#fff9f1]/95 backdrop-blur-sm">
    <DesktopHeader :nav-menu="navMenu" />
    <MobileHeader :nav-menu="navMenu" />
  </header>
</template>