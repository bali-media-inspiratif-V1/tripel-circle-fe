<script setup lang="ts">
import logoImg from "~/assets/images/logo-tripcircle.png";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "Highlight", to: "/#highlights" },
  { label: "Itinerary", to: "/#itinerary" },
  { label: "Harga Paket", to: "/#pricing" },
  { label: "Fasilitas", to: "/#includes" },
];
</script>

<template>
  <footer
    class="bg-[#082f41] text-[#fff9f0] pt-12 pb-8 border-t border-white/10 font-sans"
  >
    <div
      class="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 pb-10 border-b border-white/10"
    >
      <!-- Kolom 1: Brand Logo & Tagline -->
      <div class="flex flex-col items-start gap-3">
        <NuxtLink to="/" class="flex items-center gap-3 group">
          <!-- Wadah Rounded Putih untuk Logo -->
          <div
            class="flex items-center justify-center rounded-2xl bg-white p-2.5 shadow-md border border-white/20 transition-transform duration-200 group-hover:scale-105"
          >
            <img
              :src="logoImg"
              alt="TRIP CIRCLE Logo"
              class="h-7 sm:h-15 w-auto object-contain"
            />
          </div>

          <!-- Teks Brand Sejajar -->
          <span class="text-xl font-black tracking-widest text-white">
            TRIPLE CIRCLE
          </span>
        </NuxtLink>

        <p class="text-xs text-white/70 italic font-medium mt-1">
          Connecting Journeys, Creating Experiences
        </p>

        <p class="text-xs text-white/60 leading-relaxed max-w-sm mt-2">
          Penyedia paket wisata terpercaya dengan pelayanan profesional dan
          destinasi terbaik pilihan untuk perjalanan tak terlupakan Anda.
        </p>
      </div>

      <!-- Kolom 2: Navigasi Cepat -->
      <div>
        <h4
          class="text-xs font-bold uppercase tracking-widest text-[#ffc145] mb-4"
        >
          Navigasi Halaman
        </h4>
        <ul class="space-y-2.5 text-xs">
          <li v-for="link in navLinks" :key="link.label">
            <NuxtLink
              :to="link.to"
              class="text-white/80 hover:text-[#ff643f] transition-colors"
            >
              {{ link.label }}
            </NuxtLink>
          </li>
        </ul>
      </div>

      <!-- Kolom 3: Kontak & Informasi Paket -->
      <div>
        <h4
          class="text-xs font-bold uppercase tracking-widest text-[#ffc145] mb-4"
        >
          Hubungi Kami
        </h4>
        <p class="text-xs text-white/80 leading-relaxed mb-4">
          Siap merencanakan liburan ke Da Lat, Vietnam? Hubungi tim kami untuk
          konsultasi dan konfirmasi kuota.
        </p>

        <a
          href="https://wa.me/6281234567890?text=Halo%20TRIP%20CIRCLE,%20saya%20tertarik%20dengan%20Paket%20Da%20Lat%204H3M"
          target="_blank"
          class="inline-flex items-center gap-2 bg-[#ff643f] hover:bg-[#e05330] text-white text-xs font-bold px-5 py-2.5 rounded-full shadow-lg transition-transform active:scale-95"
        >
          <span>💬</span> Chat via WhatsApp
        </a>
      </div>
    </div>

    <!-- Bottom Bar: Copyright -->
    <div
      class="max-w-7xl mx-auto px-6 pt-6 flex flex-col sm:flex-row items-center justify-between text-[11px] text-white/50 gap-3"
    >
      <p>© 2026 TRIP CIRCLE. All rights reserved.</p>
      <p class="italic">Da Lat 4D3N Travel Package</p>
    </div>
  </footer>
</template>
