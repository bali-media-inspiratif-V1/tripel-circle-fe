<template>
  <footer class="text-amber-100/80 bg-[#2c221e] pt-12 pb-6 border-t border-[#42342e]">
    <div class="max-w-7xl mx-auto px-6">
      
      <!-- Upper Section: 4 Grid Columns -->
      <div class="grid grid-cols-1 md:grid-cols-12 gap-8 pb-10 border-b border-[#42342e]">

        <!-- Col 1: Brand & Currency -->
        <div class="md:col-span-4 space-y-3">
          <div class="flex items-center gap-3">
            <div class="w-16 h-16 bg-white rounded-xl flex items-center justify-center p-1.5 shadow border border-amber-500/10 shrink-0">
              <img 
                src="/logo.png" 
                alt="Trip Circle Logo" 
                class="max-w-full max-h-full object-contain" 
              />
            </div>
            <span class="text-xl font-bold tracking-widest text-white">TRIP CIRCLE</span>
          </div>

          <p class="text-xs text-amber-100/60 leading-relaxed pr-4">
            Connecting Journeys, Creating Experiences. Menikmati pesona sejuk Da Lat, Vietnam.
          </p>
          
          <div class="pt-1">
            <select class="bg-[#3b2e28] text-amber-100 text-xs px-3 py-1.5 rounded border border-[#524139] focus:outline-none cursor-pointer">
              <option value="id">🇲🇨 IDR</option>
              <option value="en">🇬🇧 USD</option>
            </select>
          </div>
        </div>

        <!-- Col 2: Useful Links (Sudah Diperbaiki agar Tidak Duplikat) -->
        <div class="md:col-span-2">
          <h4 class="text-white font-semibold text-sm mb-4">ABOUT US</h4>
          <ul class="space-y-2.5 text-xs">
            <li><a href="#about" class="hover:text-amber-400 transition">Our Story</a></li>
            <li><a href="#help" class="hover:text-amber-400 transition">Help Center</a></li>
            <li><a href="#how-to-book" class="hover:text-amber-400 transition">How to Book</a></li>
            <li><a href="#partner" class="hover:text-amber-400 transition">Be Our Partner</a></li>
          </ul>
        </div>

        <!-- Col 3: Contact & Address -->
        <div class="md:col-span-3">
          <h4 class="text-white font-semibold text-sm mb-4">CONTACT</h4>
          <ul class="space-y-2.5 text-xs mb-4">
            <li class="flex items-start gap-2">
              <span class="text-amber-100/50 shrink-0">A:</span>
              <span class="text-amber-100/80 leading-relaxed">
               Da Lat, Vietnam
              </span>
            </li>
            <li class="flex items-center gap-2">
              <span class="text-amber-100/50">T:</span>
              <a href="tel:+6281234567890" class="hover:text-amber-400 transition">+62 812-3456-7890</a>
            </li>
            <li class="flex items-center gap-2">
              <span class="text-amber-100/50">E:</span>
              <a href="mailto:info@tripcircle.com" class="hover:text-amber-400 transition">info@tripcircle.com</a>
            </li>
          </ul>

          <!-- Social Icons -->
          <div class="flex items-center gap-3">
            <a href="#" class="text-amber-100/70 hover:text-amber-400 transition">
              <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
            </a>
            <a href="#" class="text-amber-100/70 hover:text-amber-400 transition">
              <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
            </a>
            <a href="#" class="text-amber-100/70 hover:text-amber-400 transition">
              <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
            </a>
          </div>
        </div>

        <div class="md:col-span-3 space-y-3">
          <h4 class="text-white font-semibold text-sm mb-4">PAY SAFELY WITH US</h4>
          <p class="text-xs text-amber-100/60 leading-relaxed">
            Your payment is encrypted and securely processed with standard SSL protocols.
          </p>

          <!-- Badges (Penyesuaian Teks VISA agar tidak terpotong) -->
          <div class="flex flex-wrap items-center gap-2 pt-1">
            <div class="bg-[#3b2e28] px-2.5 py-1 rounded border border-[#524139] text-[10px] font-bold tracking-wider text-amber-100 h-6 flex items-center">
              VISA
            </div>
            <div class="bg-[#3b2e28] px-2 py-1 rounded border border-[#524139] flex items-center justify-center h-6">
              <svg class="h-3 w-auto" viewBox="0 0 32 20" fill="none">
                <circle cx="11" cy="10" r="8" fill="#EB001B"/>
                <circle cx="21" cy="10" r="8" fill="#F79E1B" fill-opacity="0.9"/>
              </svg>
            </div>
            <div class="bg-[#3b2e28] px-2 py-1 rounded border border-[#524139] text-[10px] font-semibold text-amber-100 h-6 flex items-center">
              Bank Transfer
            </div>
            <div class="bg-[#3b2e28] px-2 py-1 rounded border border-[#524139] text-[10px] font-semibold text-amber-100 h-6 flex items-center">
              QRIS
            </div>
          </div>
        </div>

      </div>

      <!-- Bottom Bar -->
      <div class="pt-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-amber-100/50">
        <p>© {{ currentYear }} TRIP CIRCLE. All Rights Reserved.</p>
        <div class="flex items-center gap-6">
          <a href="#terms" class="hover:text-amber-400 transition">Terms of Service</a>
          <a href="#privacy" class="hover:text-amber-400 transition">Privacy Policy</a>
          <a href="#sitemap" class="hover:text-amber-400 transition">Sitemap</a>
        </div>
      </div>

    </div>
  </footer>
</template>

<script setup>
import { computed } from 'vue';
const currentYear = computed(() => new Date().getFullYear());
</script>