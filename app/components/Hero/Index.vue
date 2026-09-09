<script setup lang="ts">
import type { TourPackage } from '~/composables/useTours'
import DesktopHero from './Desktop.vue'
import MobileHero from './Mobile.vue'

// Import gambar background 
import heroBg from '~/assets/images/bg-hero-travel.jpg'

defineProps<{
  tourPackage: TourPackage
}>()

// Data Stats riil dari proposal Da Lat (bukan angka fiktif Bali)
const stats = [
  { value: "4D3N", label: "Durasi Trip" },
  { value: "8–10", label: "Kuota Peserta" },
  { value: "Tiket Masuk", label: "Objek Wisata" },
]
</script>

<template>
  <section
    class="relative isolate overflow-hidden bg-cover bg-center text-white bg-[#082f41]"
    :style="{ backgroundImage: `url(${heroBg})` }"
  >
    <!-- Overlay Transparan  -->
    <div class="absolute inset-0 -z-10 bg-[#082f41]/75 backdrop-blur-[1px]" />

    <!-- Desktop View (Layar >= 1024px) -->
    <DesktopHero :tour-package="tourPackage" :stats="stats" />

    <!-- Mobile View (Layar < 1024px) -->
    <MobileHero :tour-package="tourPackage" :stats="stats" />
  </section>
</template>