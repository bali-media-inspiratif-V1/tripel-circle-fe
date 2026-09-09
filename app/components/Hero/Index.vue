<script setup lang="ts">
import type { TourPackage } from '~/composables/useTours'
import DesktopHero from './Desktop.vue'
import MobileHero from './Mobile.vue'

defineProps<{
  tourPackage: TourPackage
}>()

const stats = [
  { value: "4D3N", label: "Durasi Trip" },
  { value: "8–10", label: "Min. Kuota" },
  { value: "100%", label: "Tiket Wisata" },
]
</script>

<template>
  <section class="relative isolate overflow-hidden bg-gradient-to-b from-[#1b1513] via-[#241c19] to-[#2c221e] text-white">
    <!-- Desktop View (Layar >= 1024px) -->
    <DesktopHero :tour-package="tourPackage" :stats="stats" />

    <!-- Mobile View (Layar < 1024px) -->
    <MobileHero :tour-package="tourPackage" :stats="stats" />
  </section>
</template>