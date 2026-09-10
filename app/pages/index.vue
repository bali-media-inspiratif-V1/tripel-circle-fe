<script setup lang="ts">
import { useTours } from '~/composables/useTours'

definePageMeta({
  layout: 'main'
})

const { tourPackage } = useTours()
</script>

<template>
  <main class="min-h-screen bg-[#fff9f0] text-[#082f41] font-sans">
    <!-- 1. Hero Section -->
    <Hero :tour-package="tourPackage" />

    <!-- 2. Value Proposition Faktual -->
    <section class="py-8 bg-white border-b border-[#e7dccd]">
      <div class="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
        <div class="p-3">
          <div class="text-2xl mb-1"></div>
          <h4 class="text-xs font-bold text-[#082f41] uppercase tracking-wider">Udara Pegunungan</h4>
          <p class="text-xs text-[#53666f] mt-0.5">Dataran tinggi sejuk Da Lat</p>
        </div>
        <div class="p-3">
          <div class="text-2xl mb-1"></div>
          <h4 class="text-xs font-bold text-[#082f41] uppercase tracking-wider">Destinasi Unik</h4>
          <p class="text-xs text-[#53666f] mt-0.5">Mongoland & Crazy House</p>
        </div>
        <div class="p-3">
          <div class="text-2xl mb-1"></div>
          <h4 class="text-xs font-bold text-[#082f41] uppercase tracking-wider">Kuliner Lokal</h4>
          <p class="text-xs text-[#53666f] mt-0.5">Night Market & Outdoor BBQ</p>
        </div>
        <div class="p-3">
          <div class="text-2xl mb-1"></div>
          <h4 class="text-xs font-bold text-[#082f41] uppercase tracking-wider">Guide Profesional</h4>
          <p class="text-xs text-[#53666f] mt-0.5">Pemandu Berbahasa Inggris</p>
        </div>
      </div>
    </section>

    <!-- 3. Highlight Destinasi -->
    <section id="highlights" class="py-16 px-6 max-w-6xl mx-auto scroll-mt-20">
      <div class="max-w-xl mx-auto text-center mb-10">
        <p class="text-xs font-bold uppercase tracking-widest text-[#ff643f]">Package Highlights</p>
        <h2 class="mt-1.5 font-serif text-2xl sm:text-3xl font-bold text-[#082f41]">
          Destinasi Pilihan Da Lat
        </h2>
        <p class="mt-2 text-xs sm:text-sm text-[#53666f]">
          Seluruh tiket masuk objek wisata di bawah ini telah tercakup dalam program perjalanan.
        </p>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        <div 
          v-for="(hl, index) in tourPackage.highlights" 
          :key="index"
          class="bg-white rounded-2xl p-6 border border-[#e7dccd] shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow"
        >
          <div>
            <span class="inline-block w-8 h-8 rounded-xl bg-[#fff9f0] border border-[#e7dccd] text-center leading-8 text-xs font-bold text-[#082f41] mb-3">
              0{{ index + 1 }}
            </span>
            <p class="text-sm font-bold text-[#082f41] leading-snug">{{ hl }}</p>
          </div>
          <p class="mt-4 pt-3 border-t border-gray-100 text-[11px] font-semibold text-emerald-600">
            ✓ Tiket Masuk Termasuk
          </p>
        </div>
      </div>
    </section>

    <!-- 4. Itinerary Component -->
    <Itinerary :itinerary="tourPackage.itinerary" />

    <!-- 5. Hotel & Harga dengan Visual Card Gambar -->
    <section id="pricing" class="py-16 px-6 max-w-5xl mx-auto scroll-mt-20">
      <div class="max-w-xl mx-auto text-center mb-8">
        <p class="text-xs font-bold uppercase tracking-widest text-[#ff643f]">Pricing Options</p>
        <h2 class="mt-1.5 font-serif text-2xl sm:text-3xl font-bold text-[#082f41]">
          Pilihan Kategori Hotel
        </h2>
        <p class="mt-2 text-xs sm:text-sm text-[#53666f]">
          {{ tourPackage.paxNote }}
        </p>
      </div>

    

      <!-- Card Grid Hotel Berfoto -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-4">
        <div 
          v-for="p in tourPackage.prices" 
          :key="p.stars"
          class="group bg-white rounded-3xl overflow-hidden border border-[#e7dccd] shadow-sm hover:shadow-xl hover:border-[#082f41]/30 transition-all duration-300 flex flex-col justify-between"
        >
          <div>
            <!-- Gambar Hotel & Floating Badges -->
            <div class="relative h-52 w-full overflow-hidden bg-gray-100">
              <img 
                :src="p.image || 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80'" 
                :alt="p.hotelName"
                class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

              <!-- Badge Bintang Atas -->
              <div class="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-3 py-1 rounded-full text-[11px] font-bold text-[#082f41] shadow-md flex items-center gap-1.5">
                <span class="flex text-amber-400">
                  <span v-for="s in p.stars" :key="s">★</span>
                </span>
                <span>Hotel Bintang {{ p.stars }}</span>
              </div>

              <!-- Label Bawah Foto -->
              <div class="absolute bottom-3 left-4 right-4 text-white">
                <span class="text-[10px] uppercase font-bold tracking-wider text-amber-200 block mb-0.5">Akomodasi Terverifikasi</span>
                <p class="text-lg font-bold drop-shadow leading-snug">{{ p.hotelName }}</p>
              </div>
            </div>

            <!-- Konten Tarif & Keterangan -->
            <div class="p-6">
              <p class="text-xs text-[#53666f] leading-relaxed mb-5">
                Akomodasi selama 3 malam di hotel pilihan atau hotel setara dengan kenyamanan maksimal selama program wisata Da Lat.
              </p>

              <!-- Box Rincian Harga -->
              <div class="bg-[#fff9f0] p-4 rounded-2xl border border-[#e7dccd] mb-2">
                <span class="text-[10px] text-[#53666f] uppercase font-bold block">Estimasi Harga per Orang:</span>
                <div class="flex items-baseline gap-1 mt-1">
                  <span class="text-xs font-bold text-[#53666f]">Rp</span>
                  <span class="text-3xl font-bold text-[#082f41] tracking-tight">{{ p.price.toLocaleString('id-ID') }}</span>
                  <span class="text-xs text-[#53666f]">/ pax</span>
                </div>
                <span class="text-[10px] text-[#53666f] block mt-1.5">
                  *Tarif bersih berdasarkan {{ tourPackage.paxNote }}
                </span>
              </div>
            </div>
          </div>

          <!-- Tombol CTA -->
          <div class="px-6 pb-6 pt-0">
            <a 
              :href="`https://wa.me/6281234567890?text=Halo%20TRIP%20CIRCLE,%20saya%20ingin%20konfirmasi%20harga%20dan%20reservasi%20Paket%20Da%20Lat%204H3M%20(Hotel%20Bintang%20${p.stars})`" 
              target="_blank"
              class="w-full inline-flex items-center justify-center bg-[#082f41] hover:bg-[#062432] text-white text-xs font-bold py-3.5 rounded-2xl shadow-md transition-all active:scale-95"
            >
              Konfirmasi Harga & Reservasi
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- 6. Fasilitas & Ketentuan Anak (Tanpa Grid Timpang) -->
    <section id="includes" class="py-12 px-6 max-w-5xl mx-auto pb-24 scroll-mt-20">
      <div class="bg-white rounded-3xl p-8 border border-[#e7dccd] shadow-sm mb-8">
        <h3 class="font-serif text-xl font-bold text-center text-[#082f41] mb-8">Fasilitas & Layanan Paket</h3>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <!-- Includes -->
          <div class="bg-emerald-50/60 p-6 rounded-2xl border border-emerald-100">
            <h4 class="text-xs font-bold uppercase tracking-wider text-emerald-950 mb-4 flex items-center gap-2">
              <span class="w-5 h-5 rounded-full bg-emerald-600 text-white flex items-center justify-center text-xs">✓</span>
              Harga Paket Sudah Termasuk:
            </h4>
            <ul class="space-y-2.5 text-xs text-emerald-950">
              <li v-for="(inc, i) in tourPackage.includes" :key="i" class="flex items-start gap-2 leading-relaxed">
                <span class="text-emerald-600 font-bold">•</span>
                <span>{{ inc }}</span>
              </li>
            </ul>
          </div>

          <!-- Excludes -->
          <div class="bg-rose-50/60 p-6 rounded-2xl border border-rose-100">
            <h4 class="text-xs font-bold uppercase tracking-wider text-rose-950 mb-4 flex items-center gap-2">
              <span class="w-5 h-5 rounded-full bg-rose-600 text-white flex items-center justify-center text-xs">✕</span>
              Harga Paket Belum Termasuk:
            </h4>
            <ul class="space-y-2.5 text-xs text-rose-950">
              <li v-for="(exc, i) in tourPackage.excludes" :key="i" class="flex items-start gap-2 leading-relaxed">
                <span class="text-rose-500 font-bold">•</span>
                <span>{{ exc }}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Child Policy List View: 5 Poin Proporsional -->
      <div class="bg-white rounded-3xl p-6 sm:p-8 border border-[#e7dccd] shadow-sm">
        <h4 class="font-bold text-xs uppercase tracking-wider text-[#082f41] mb-4 flex items-center gap-2">
          <span>👶</span> Kebijakan Anak (Child Policy)
        </h4>
        
        <div class="divide-y divide-[#e7dccd]/70 border border-[#e7dccd] rounded-2xl overflow-hidden text-xs">
          <div 
            v-for="(policy, idx) in tourPackage.childPolicy" 
            :key="idx" 
            class="p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2 bg-[#fff9f0]/40 hover:bg-[#fff9f0] transition-colors"
          >
            <div>
              <p class="font-bold text-[#082f41]">{{ policy.category }}</p>
              <p class="text-[11px] text-[#53666f] mt-0.5">{{ policy.condition }}</p>
            </div>
            <span class="font-bold text-xs px-3 py-1 rounded-md bg-white border border-[#e7dccd] text-[#082f41] self-start sm:self-auto">
              {{ policy.rate }}
            </span>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>