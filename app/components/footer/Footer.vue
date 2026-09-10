<template>
  <footer class="relative text-white pt-12 pb-8 overflow-hidden bg-[#2c221e]">
    <div class="absolute top-0 left-0 right-0 h-1 bg-amber-500"></div>

    <div class="max-w-7xl mx-auto px-6 relative z-10 pt-4">
      
      <!-- Upper Section -->
      <div class="grid grid-cols-1 md:grid-cols-12 gap-8 pb-10 border-b border-[#42342e]">
        
        <!-- Col 1: Brand & Socials -->
        <div class="md:col-span-4 space-y-4">
          <div class="flex items-center gap-2">
            <div class="w-10 h-10 rounded-full bg-amber-500 flex items-center justify-center text-[#2c221e] font-black text-lg shadow-lg">
              TC
            </div>
            <span class="text-2xl font-black tracking-widest text-white">TRIP CIRCLE</span>
          </div>
          <p class="text-xs text-amber-100/70 leading-relaxed max-w-sm">
            Connecting Journeys, Creating Experiences. Menikmati pesona pegunungan sejuk dan destinasi unik Da Lat, Vietnam.
          </p>

          <!-- Language & Social Icons Minimalis -->
          <div class="flex flex-wrap items-center gap-4 pt-2">
            <select class="bg-[#3b2e28] text-amber-100 text-xs px-3 py-1.5 rounded border border-[#524139] focus:outline-none cursor-pointer">
              <option value="id">🇲🇨 IDR</option>
              <option value="en">🇬🇧 USD</option>
            </select>

            <!-- Social Icons Transparent Style -->
            <div class="flex items-center gap-2">
              <a href="#" class="w-7 h-7 rounded-full bg-[#3b2e28] hover:bg-amber-500 text-amber-100 hover:text-[#2c221e] flex items-center justify-center transition border border-[#524139]">
                <svg class="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
              <a href="#" class="w-7 h-7 rounded-full bg-[#3b2e28] hover:bg-amber-500 text-amber-100 hover:text-[#2c221e] flex items-center justify-center transition border border-[#524139]">
                <svg class="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </a>
              <a href="#" class="w-7 h-7 rounded-full bg-[#3b2e28] hover:bg-amber-500 text-amber-100 hover:text-[#2c221e] flex items-center justify-center transition border border-[#524139]">
                <svg class="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
              </a>
            </div>
          </div>
        </div>

        <!-- Col 2: Navigation -->
        <div class="md:col-span-2">
          <h4 class="text-amber-400 font-bold text-sm tracking-wider uppercase mb-4">Navigation</h4>
          <ul class="space-y-2 text-xs text-amber-100/80">
            <li><a href="#" class="hover:text-amber-400 transition">Home</a></li>
            <li><a href="#about" class="hover:text-amber-400 transition">About Us</a></li>
            <li><a href="#packages" class="hover:text-amber-400 transition">Travel Packages</a></li>
            <li><a href="#gallery" class="hover:text-amber-400 transition">Destinations</a></li>
          </ul>
        </div>

        <!-- Col 3: Quick Link -->
        <div class="md:col-span-2">
          <h4 class="text-amber-400 font-bold text-sm tracking-wider uppercase mb-4">Quick Link</h4>
          <ul class="space-y-2 text-xs text-amber-100/80">
            <li><a href="#paket-4d3n" class="hover:text-amber-400 transition">Da Lat 4D3N</a></li>
            <li><a href="#paket-5d4n" class="hover:text-amber-400 transition">Da Lat 5D4N</a></li>
            <li><a href="#terms" class="hover:text-amber-400 transition">Terms & Exclusions</a></li>
            <li><a href="#pricing" class="hover:text-amber-400 transition">Pricing Note</a></li>
          </ul>
        </div>

        <!-- Col 4: Newsletter -->
        <div class="md:col-span-4 space-y-3">
          <h4 class="text-amber-400 font-bold text-sm tracking-wider uppercase mb-2">Newsletter</h4>
          <p class="text-xs text-amber-100/70">Dapatkan update promo dan info destinasi terbaru langsung di email Anda.</p>
          
          <form @submit.prevent class="flex gap-2">
            <input 
              type="email" 
              placeholder="Masukkan email Anda..." 
              class="bg-[#3b2e28] text-amber-100 text-xs px-3 py-2 rounded border border-[#524139] focus:outline-none w-full placeholder:text-amber-100/40"
            />
            <button class="bg-amber-500 hover:bg-amber-400 text-[#2c221e] font-bold text-xs px-4 py-2 rounded transition shrink-0">
              Subscribe
            </button>
          </form>
        </div>

      </div>

      <!-- Contact Bar -->
<div class="py-5 border-b border-[#42342e]">
  <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs text-amber-100/90">
    
    <!-- Phone / WhatsApp -->
    <a href="tel:+6281234567890" class="flex items-center justify-start sm:justify-start gap-2.5 p-2 rounded-lg hover:bg-[#3b2e28] transition border border-transparent hover:border-[#524139] group">
      <div class="w-8 h-8 rounded-full bg-[#3b2e28] group-hover:bg-amber-500 text-amber-400 group-hover:text-[#2c221e] flex items-center justify-center transition border border-[#524139] shrink-0">
        <svg class="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
          <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
        </svg>
      </div>
      <div class="flex flex-col">
        <span class="text-[10px] text-amber-100/50 uppercase tracking-wider font-semibold">Telepon / WA</span>
        <span class="font-medium group-hover:text-amber-400 transition">+62 812-3456-7890</span>
      </div>
    </a>

    <!-- Email -->
    <a href="mailto:info@tripcircle.com" class="flex items-center justify-start sm:justify-center gap-2.5 p-2 rounded-lg hover:bg-[#3b2e28] transition border border-transparent hover:border-[#524139] group">
      <div class="w-8 h-8 rounded-full bg-[#3b2e28] group-hover:bg-amber-500 text-amber-400 group-hover:text-[#2c221e] flex items-center justify-center transition border border-[#524139] shrink-0">
        <svg class="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
          <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
        </svg>
      </div>
      <div class="flex flex-col">
        <span class="text-[10px] text-amber-100/50 uppercase tracking-wider font-semibold">Email</span>
        <span class="font-medium group-hover:text-amber-400 transition">info@tripcircle.com</span>
      </div>
    </a>

    <!-- Location -->
    <div class="flex items-center justify-start sm:justify-end gap-2.5 p-2 rounded-lg group">
      <div class="w-8 h-8 rounded-full bg-[#3b2e28] text-amber-400 flex items-center justify-center border border-[#524139] shrink-0">
        <svg class="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
          <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
        </svg>
      </div>
      <div class="flex flex-col">
        <span class="text-[10px] text-amber-100/50 uppercase tracking-wider font-semibold">Lokasi Kantor</span>
        <span class="font-medium truncate max-w-[200px]" title="Lien Khuong, Da Lat, Lam Dong, Vietnam">Da Lat, Lam Dong, Vietnam</span>
      </div>
    </div>

  </div>
</div>

      <!-- Payment Section -->
      <div class="py-5 border-b border-[#42342e] flex flex-col lg:flex-row justify-between items-center gap-4">
        <div class="flex flex-wrap items-center justify-center md:justify-start gap-3 text-xs text-amber-100/70">
          <span class="font-medium">Metode Pembayaran:</span>
          <div class="flex items-center gap-2">
            
            <!-- VISA -->
            <div class="bg-[#3b2e28] px-2.5 py-1 rounded border border-[#524139] flex items-center justify-center h-7 shadow-sm">
              <svg class="h-3 w-auto fill-amber-100" viewBox="0 0 36 12">
                <path d="M13.882 0.352051L9.125 11.648H6.082L3.69 2.50805C3.542 1.93205 3.398 1.72405 2.964 1.48805C2.261 1.10805 1.056 0.748047 0L0.512047H0.282047V0.352051H4.87305C5.50805 0.352051 6.02805 0.780051 6.16605 1.48805L7.33805 7.82805L10.841 0.352051H13.882ZM25.688 8.16005C25.702 5.04805 21.396 4.88005 21.424 3.48805C21.432 3.06405 21.848 2.60805 22.756 2.49205C23.208 2.43205 24.472 2.38005 25.882 3.02805L26.438 0.448047C25.682 0.176047 24.708 0 23.504 0C18.89 0 15.65 2.45605 15.626 5.95205C15.602 8.54805 17.946 9.99205 19.71 10.856C21.524 11.744 22.132 12.308 22.124 13.096C22.108 14.304 20.672 14.832 19.346 14.856C18.002 14.88 17.208 14.496 16.598 14.22L16.026 16.896C16.822 17.26 18.298 17.576 19.822 17.604C24.702 17.604 27.872 15.192 27.898 11.452M36 11.648H33.326L31.258 1.83205C31.134 1.34405 30.768 1.05605 30.334 1.05605H26.312L26.216 1.36805C27.242 1.62405 28.326 2.00805 28.988 2.42805L31.628 11.648H36ZM18.878 0.352051L15.284 11.648H12.336L15.93 0.352051H18.878Z"/>
              </svg>
            </div>

            <!-- MASTERCARD -->
            <div class="bg-[#3b2e28] px-2.5 py-1 rounded border border-[#524139] flex items-center justify-center h-7 shadow-sm">
              <svg class="h-3.5 w-auto" viewBox="0 0 32 20" fill="none">
                <circle cx="11" cy="10" r="8" fill="#EB001B"/>
                <circle cx="21" cy="10" r="8" fill="#F79E1B" fill-opacity="0.9"/>
              </svg>
            </div>

            <!-- BANK TRANSFER -->
            <div class="bg-[#3b2e28] px-2.5 py-1 rounded border border-[#524139] flex items-center gap-1.5 text-[11px] font-semibold text-amber-100 h-7 shadow-sm">
              <svg class="w-3.5 h-3.5 text-amber-400 fill-current" viewBox="0 0 24 24">
                <path d="M2 10h20v2H2zm2-7h16l2 4H2zm1 16h3v-6H5zm5 0h3v-6h-3zm5 0h3v-6h-3zm5 0h3v-6h-3zm-18 2h20v2H2z"/>
              </svg>
              <span>Bank Transfer</span>
            </div>

            <!-- QRIS -->
            <div class="bg-[#3b2e28] px-2.5 py-1 rounded border border-[#524139] flex items-center gap-1.5 text-[11px] font-semibold text-amber-100 h-7 shadow-sm">
              <svg class="w-3.5 h-3.5 text-amber-400 fill-current" viewBox="0 0 24 24">
                <path d="M2 2h8v8H2V2zm2 2v4h4V4H4zm-2 10h8v8H2v-8zm2 2v4h4v-4H4zm10-14h8v8h-8V2zm2 2v4h4V4h-4zm-2 10h2v2h-2v-2zm4 0h2v2h-2v-2zm2 2h2v2h-2v-2zm-4 2h2v2h-2v-2zm4 0h2v2h-2v-2zm-2 2h2v2h-2v-2zm-6-2h2v4h-2v-4z"/>
              </svg>
              <span>QRIS</span>
            </div>

          </div>
        </div>

        <div class="flex items-center gap-3 text-amber-100/60 text-[11px]">
          <span class="flex items-center gap-1">
            <svg class="w-3.5 h-3.5 text-emerald-400" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/></svg>
            100% Secure Booking
          </span>
          <span>•</span>
          <span>Verified Travel Partner</span>
        </div>
      </div>

      <!-- Copyright -->
      <div class="pt-4 text-center text-xs text-amber-100/50">
        <p>© {{ currentYear }} TRIP CIRCLE. All Rights Reserved.</p>
      </div>

    </div>
  </footer>
</template>

<script setup>
import { computed } from 'vue';
const currentYear = computed(() => new Date().getFullYear());
</script>