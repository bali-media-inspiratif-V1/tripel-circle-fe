<template>
  <div class="min-h-screen bg-[#faf8f5] text-[#2c221e] font-sans selection:bg-[#e7dccd]">
    
    <!-- 1. HERO SECTION WITH FLOATING QUICK BAR -->
    <section class="relative min-h-[85vh] flex items-center justify-center bg-gray-900 text-white overflow-hidden pb-16">
      <!-- Background Image Overlay (Placeholder Visual Da Lat) -->
      <div class="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1920&q=80" 
          alt="Da Lat Vietnam Highlands" 
          class="w-full h-full object-cover object-center scale-105 filter brightness-[0.65] contrast-[1.05]"
        />
        <div class="absolute inset-0 bg-gradient-to-t from-[#faf8f5] via-black/30 to-black/60"></div>
      </div>

      <div class="relative z-10 max-w-6xl mx-auto px-6 pt-20 text-center">
        <!-- Tagline Badge -->
        <div class="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-bold px-4 py-2 rounded-full uppercase tracking-widest mb-6 shadow-2xl">
          <span class="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
          TRIP CIRCLE — Connecting Journeys, Creating Experiences
        </div>

        <h1 class="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight mb-6 leading-tight drop-shadow-md">
          Pesona Dataran Tinggi <br class="hidden sm:block" />
          <span class="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-orange-100 to-white">
            Da Lat, Vietnam
          </span>
        </h1>

        <p class="text-base sm:text-xl text-gray-200 max-w-2xl mx-auto mb-10 font-normal leading-relaxed drop-shadow">
          {{ tourPackage.subtitle }}
        </p>

        <!-- Floating Quick Info / Booking Bar -->
        <div class="max-w-4xl mx-auto bg-white/95 backdrop-blur-md rounded-3xl p-6 sm:p-8 shadow-2xl text-left border border-white/40 text-[#2c221e]">
          <div class="grid grid-cols-2 md:grid-cols-4 gap-6 divide-x-0 md:divide-x divide-gray-100">
            <div class="px-2">
              <span class="text-[11px] font-bold text-gray-400 uppercase tracking-wider block mb-1">Durasi Paket</span>
              <span class="text-base font-extrabold text-[#2c221e] flex items-center gap-2">
                ⏱️ {{ tourPackage.duration }}
              </span>
            </div>

            <div class="px-2 md:pl-6">
              <span class="text-[11px] font-bold text-gray-400 uppercase tracking-wider block mb-1">Min. Peserta</span>
              <span class="text-base font-extrabold text-[#2c221e] flex items-center gap-2">
                👥 {{ tourPackage.minPax }}
              </span>
            </div>

            <div class="px-2 md:pl-6">
              <span class="text-[11px] font-bold text-gray-400 uppercase tracking-wider block mb-1">Mulai Dari</span>
              <span class="text-base font-black text-emerald-600 block">
                Rp {{ tourPackage.prices[0].price.toLocaleString('id-ID') }}
              </span>
            </div>

            <div class="px-2 md:pl-6 flex items-center justify-end">
              <a 
                href="#pricing" 
                class="w-full bg-[#2c221e] hover:bg-[#43352f] text-white text-xs font-bold py-3.5 px-6 rounded-2xl text-center shadow-lg transition-all duration-200 active:scale-95"
              >
                Lihat Harga
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 2. VALUE PROPOSITION / HIGHLIGHT FITUR -->
    <section class="py-10 bg-white border-b border-[#e7dccd]/50">
      <div class="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
        <div class="p-4">
          <div class="text-2xl mb-2">🌿</div>
          <h4 class="text-xs font-extrabold text-[#2c221e] uppercase tracking-wider mb-1">Udara Sejuk Pegunungan</h4>
          <p class="text-xs text-gray-500">Destinasi dataran tinggi paling menyegarkan</p>
        </div>
        <div class="p-4">
          <div class="text-2xl mb-2">📸</div>
          <h4 class="text-xs font-extrabold text-[#2c221e] uppercase tracking-wider mb-1">Spot Foto Unik</h4>
          <p class="text-xs text-gray-500">Mongoland, Fresh Garden, & Crazy House</p>
        </div>
        <div class="p-4">
          <div class="text-2xl mb-2">🍲</div>
          <h4 class="text-xs font-extrabold text-[#2c221e] uppercase tracking-wider mb-1">Kuliner Lokal Otentik</h4>
          <p class="text-xs text-gray-500">Da Lat Night Market & Outdoor BBQ Dinner</p>
        </div>
        <div class="p-4">
          <div class="text-2xl mb-2">👨‍✈️</div>
          <h4 class="text-xs font-extrabold text-[#2c221e] uppercase tracking-wider mb-1">Pemandu Profesional</h4>
          <p class="text-xs text-gray-500">Tour guide ramah & berbahasa Inggris</p>
        </div>
      </div>
    </section>

    <!-- 3. HIGHLIGHT DESTINASI UTAMA -->
    <section id="highlights" class="py-16 px-6 max-w-6xl mx-auto">
      <div class="text-center max-w-xl mx-auto mb-12">
        <span class="text-xs font-bold uppercase tracking-widest text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-100">
          Featured Destinations
        </span>
        <h2 class="text-3xl sm:text-4xl font-black mt-3 text-[#2c221e]">Highlight Destinasi</h2>
        <p class="text-sm text-gray-600 mt-2">Objek wisata unggulan yang dirancang untuk program perjalanan 4 hari ini.</p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div 
          v-for="(hl, index) in tourPackage.highlights" 
          :key="index" 
          class="bg-white rounded-3xl p-6 border border-[#e7dccd] shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
        >
          <div>
            <div class="w-10 h-10 rounded-2xl bg-[#fff9f1] border border-[#e7dccd] text-[#2c221e] font-black flex items-center justify-center text-sm mb-4">
              0{{ index + 1 }}
            </div>
            <h3 class="text-base font-bold text-[#2c221e] leading-snug mb-2">{{ hl }}</h3>
          </div>
          <div class="pt-4 mt-4 border-t border-gray-100 flex items-center justify-between text-xs text-emerald-600 font-semibold">
            <span>✓ Tiket Masuk Termasuk</span>
          </div>
        </div>
      </div>
    </section>

    <!-- 4. ITINERARY SECTION (KOMPONEN MODULAR) -->
    <Itinerary :itinerary="tourPackage.itinerary" />

    <!-- 5. PILIHAN HOTEL & HARGA -->
    <section id="pricing" class="py-20 px-6 max-w-5xl mx-auto">
      <div class="text-center max-w-xl mx-auto mb-12">
        <span class="text-xs font-bold uppercase tracking-widest text-blue-700 bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
          Pricing Options
        </span>
        <h2 class="text-3xl sm:text-4xl font-black mt-3 text-[#2c221e]">Pilihan Kategori Hotel</h2>
        <p class="text-sm text-gray-600 mt-2">
          Pilihan kategori akomodasi. Termasuk seluruh tiket masuk destinasi dan transportasi tour.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div 
          v-for="p in tourPackage.prices" 
          :key="p.stars" 
          class="relative bg-white rounded-3xl p-8 sm:p-10 border border-[#e7dccd] shadow-xl flex flex-col justify-between hover:border-[#2c221e] transition-all duration-300"
        >
          <div>
            <div class="flex items-center justify-between mb-4">
              <span class="text-xs font-extrabold uppercase tracking-wider text-[#2c221e] bg-[#fff9f1] px-3 py-1.5 rounded-lg border border-[#e7dccd]">
                Hotel Bintang {{ p.stars }}
              </span>
              <div class="flex text-amber-400 text-sm">
                <span v-for="s in p.stars" :key="s">★</span>
              </div>
            </div>

            <h3 class="text-2xl font-black text-[#2c221e] mb-1">{{ p.hotelName }}</h3>
            <p class="text-xs text-gray-500 mb-6">Akomodasi berstandar internasional dengan kenyamanan maksimal.</p>

            <div class="bg-[#fff9f1] p-5 rounded-2xl border border-[#e7dccd]/60 mb-8">
              <span class="text-xs text-gray-500 block mb-1">Harga per Orang:</span>
              <div class="flex items-baseline gap-1">
                <span class="text-sm font-bold text-gray-600">Rp</span>
                <span class="text-4xl font-black text-[#2c221e] tracking-tight">
                  {{ p.price.toLocaleString('id-ID') }}
                </span>
                <span class="text-xs text-gray-500">/ pax</span>
              </div>
              <span class="text-[10px] text-gray-400 block mt-2">
                *Harga final dikonfirmasi saat reservasi kuota {{ tourPackage.minPax }}
              </span>
            </div>
          </div>

          <a 
            :href="`https://wa.me/6281234567890?text=Halo%20TRIP%20CIRCLE,%20saya%20tertarik%20dengan%20Paket%20Da%20Lat%204H3M%20(Hotel%20Bintang%20${p.stars})`" 
            target="_blank" 
            class="w-full text-center bg-[#2c221e] text-white font-bold py-4 rounded-2xl hover:bg-[#43352f] shadow-lg transition-all duration-200 text-sm block"
          >
            Pesan Via WhatsApp
          </a>
        </div>
      </div>
    </section>

    <!-- 6. FASILITAS (INCLUDES / EXCLUDES) & KEBIJAKAN ANAK -->
    <section id="includes" class="py-12 px-6 max-w-5xl mx-auto pb-24">
      <div class="bg-white rounded-3xl p-8 sm:p-10 border border-[#e7dccd] shadow-lg mb-8">
        <h3 class="text-xl font-black text-[#2c221e] mb-8 text-center">Fasilitas & Layanan Paket</h3>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <!-- Includes -->
          <div class="bg-emerald-50/50 p-6 rounded-2xl border border-emerald-100">
            <h4 class="font-extrabold text-sm text-emerald-900 uppercase tracking-wider mb-4 flex items-center gap-2">
              <span class="w-5 h-5 rounded-full bg-emerald-600 text-white flex items-center justify-center text-xs">✓</span>
              Harga Paket Sudah Termasuk:
            </h4>
            <ul class="space-y-2.5">
              <li v-for="(inc, i) in tourPackage.includes" :key="i" class="text-xs text-emerald-950 flex items-start gap-2">
                <span class="text-emerald-600 font-bold">•</span>
                <span>{{ inc }}</span>
              </li>
            </ul>
          </div>

          <!-- Exclusions -->
          <div class="bg-rose-50/50 p-6 rounded-2xl border border-rose-100">
            <h4 class="font-extrabold text-sm text-rose-900 uppercase tracking-wider mb-4 flex items-center gap-2">
              <span class="w-5 h-5 rounded-full bg-rose-600 text-white flex items-center justify-center text-xs">✕</span>
              Harga Paket Belum Termasuk:
            </h4>
            <ul class="space-y-2.5">
              <li v-for="(exc, i) in tourPackage.excludes" :key="i" class="text-xs text-rose-950 flex items-start gap-2">
                <span class="text-rose-500 font-bold">•</span>
                <span>{{ exc }}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Child Policy Card -->
      <div class="bg-white rounded-3xl p-6 sm:p-8 border border-[#e7dccd] shadow-sm">
        <h4 class="font-bold text-sm text-[#2c221e] uppercase tracking-wider mb-4 flex items-center gap-2">
          <span>👶</span> Ketentuan Tarif Anak (Child Policy)
        </h4>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 text-xs">
          <div class="p-4 rounded-xl bg-[#faf8f5] border border-[#e7dccd]/60">
            <div class="font-bold text-[#2c221e] mb-1">Bayi (&lt; 2 Tahun)</div>
            <div class="text-emerald-700 font-bold">Gratis (Free)</div>
          </div>
          <div class="p-4 rounded-xl bg-[#faf8f5] border border-[#e7dccd]/60">
            <div class="font-bold text-[#2c221e] mb-1">Anak 2–6 Tahun</div>
            <div class="text-gray-600">50% dari harga dewasa (sharing bed)</div>
          </div>
          <div class="p-4 rounded-xl bg-[#faf8f5] border border-[#e7dccd]/60">
            <div class="font-bold text-[#2c221e] mb-1">Anak &gt; 6 s/d &lt; 10 Tahun</div>
            <div class="text-gray-600">75% dari harga dewasa (sharing bed)</div>
          </div>
          <div class="p-4 rounded-xl bg-[#faf8f5] border border-[#e7dccd]/60">
            <div class="font-bold text-[#2c221e] mb-1">Anak &gt; 10 Thn / Extra Bed</div>
            <div class="text-gray-600">100% dari harga dewasa</div>
          </div>
        </div>
      </div>
    </section>

    <!-- 7. CLOSING CALL TO ACTION BANNER -->
    <section class="bg-[#2c221e] text-white py-20 px-6 text-center">
      <div class="max-w-3xl mx-auto">
        <span class="text-xs font-bold uppercase tracking-widest text-amber-200 block mb-3">
          Siap Berangkat ke Vietnam?
        </span>
        <h2 class="text-3xl sm:text-5xl font-black mb-6 tracking-tight">
          Wujudkan Liburan Impian Bersama TRIP CIRCLE
        </h2>
        <p class="text-gray-300 text-sm sm:text-base leading-relaxed mb-8 max-w-xl mx-auto">
          Biarkan kami mengatur akomodasi, transportasi, dan tiket atraksi Anda. Fokus nikmati sejuknya alam Da Lat bersama keluarga atau kerabat tercinta.
        </p>
        <a 
          href="https://wa.me/6281234567890?text=Halo%20TRIP%20CIRCLE,%20saya%20ingin%20konsultasi%20perjalanan%20ke%20Da%20Lat" 
          target="_blank" 
          class="inline-block bg-[#fff9f1] text-[#2c221e] hover:bg-amber-100 font-extrabold px-10 py-4 rounded-full text-sm shadow-xl transition-all active:scale-95"
        >
          Konsultasi Perjalanan Sekarang
        </a>
      </div>
    </section>

  </div>
</template>

<script setup>
import { useTours } from '~/composables/useTours'

definePageMeta({
  layout: 'main'
})

const { tourPackage } = useTours()
</script>