<script setup lang="ts">
import { useTours } from "~/composables/useTours";
import { Mountain, Camera, Utensils, Languages } from "@lucide/vue";

definePageMeta({
  layout: "main",
});

const { tourPackage } = useTours();

const imagesDestination = [
  "https://images.unsplash.com/photo-1528127269322-539801943592",
  "https://images.unsplash.com/photo-1559592413-7cec4d0cae2b",
  "https://images.unsplash.com/photo-1528181304800-259b08848526",
  "https://images.unsplash.com/photo-1557750255-c76072a7aad1",
  "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a",
  "https://images.unsplash.com/photo-1533669955142-6a73332af4db",
];
</script>

<template>
  <main class="min-h-screen bg-[#fff9f0] text-[#082f41] font-sans">
    <!-- 1. Hero Section -->
    <Hero :tour-package="tourPackage" />

    <!-- 2. Value Proposition Faktual -->
    <section class="border-y border-[#e7dccd] bg-[#fffdf9] py-10">
      <div class="mx-auto max-w-6xl px-6">
        <div class="grid grid-cols-2 gap-4 md:grid-cols-4">
          <div
            class="group flex flex-col items-center justify-center text-center rounded-2xl border border-[#eee5d9] bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
          >
            <div
              class="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-[#eaf7f4] text-[#0f766e]"
            >
              <Mountain class="h-5 w-5" />
            </div>

            <h4 class="text-sm font-semibold text-[#082f41]">
              Udara Pegunungan
            </h4>

            <p class="mt-1 text-xs leading-5 text-[#6b7b83]">
              Nikmati suasana sejuk dataran tinggi Da Lat.
            </p>
          </div>

          <div
            class="group flex flex-col items-center justify-center text-center rounded-2xl border border-[#eee5d9] bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
          >
            <div
              class="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-[#eaf7f4] text-[#0f766e]"
            >
              <Camera class="h-5 w-5" />
            </div>

            <h4 class="text-sm font-semibold text-[#082f41]">Destinasi Unik</h4>

            <p class="mt-1 text-xs leading-5 text-[#6b7b83]">
              Jelajahi Mongoland, Crazy House, dan spot ikonik lainnya.
            </p>
          </div>

          <div
            class="group flex flex-col items-center justify-center text-center rounded-2xl border border-[#eee5d9] bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
          >
            <div
              class="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-[#eaf7f4] text-[#0f766e]"
            >
              <Utensils class="h-5 w-5" />
            </div>

            <h4 class="text-sm font-semibold text-[#082f41]">Kuliner Lokal</h4>

            <p class="mt-1 text-xs leading-5 text-[#6b7b83]">
              Rasakan Night Market dan pengalaman outdoor BBQ.
            </p>
          </div>

          <div
            class="group flex flex-col items-center justify-center text-center rounded-2xl border border-[#eee5d9] bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
          >
            <div
              class="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-[#eaf7f4] text-[#0f766e]"
            >
              <Languages class="h-5 w-5" />
            </div>

            <h4 class="text-sm font-semibold text-[#082f41]">
              Guide Profesional
            </h4>

            <p class="mt-1 text-xs leading-5 text-[#6b7b83]">
              Didampingi pemandu profesional berbahasa Inggris.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- 3. Highlight Destinasi -->

    <!-- 3. Highlight Destinasi -->
    <section id="highlights" class="mx-auto max-w-6xl scroll-mt-20 px-6 py-20">
      <!-- Heading -->
      <div class="mx-auto mb-12 max-w-2xl text-center">
        <p class="text-xs font-bold uppercase tracking-[0.24em] text-[#ff643f]">
          Package Highlights
        </p>

        <h2
          class="mt-3 font-serif text-3xl font-bold leading-tight text-[#082f41] sm:text-4xl"
        >
          Destinasi Pilihan Da Lat
        </h2>

        <p class="mx-auto mt-4 max-w-xl text-sm leading-6 text-[#61727a]">
          Jelajahi destinasi pilihan yang telah termasuk dalam rangkaian
          perjalanan paket tour Da Lat.
        </p>
      </div>

      <!-- Cards -->
      <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <article
          v-for="(hl, index) in tourPackage.highlights"
          :key="index"
          class="group overflow-hidden rounded-2xl border border-[#e7dccd] bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
        >
          <!-- Image -->
          <div class="relative h-[210px] overflow-hidden">
            <img
              :src="`${imagesDestination[index % imagesDestination.length]}?auto=format&fit=crop&w=900&q=80`"
              :alt="hl"
              class="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />

            <!-- Dark Gradient -->
            <div
              class="absolute inset-0 bg-gradient-to-t from-black/50 via-black/5 to-transparent"
            />

            <!-- Number -->
            <span
              class="absolute left-4 top-4 flex h-9 w-9 items-center justify-center rounded-xl bg-white/95 text-xs font-bold text-[#082f41] shadow-sm backdrop-blur"
            >
              {{ String(index + 1).padStart(2, "0") }}
            </span>

            <!-- Included Badge -->
            <span
              class="absolute right-4 top-4 rounded-full bg-emerald-500 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white"
            >
              Included
            </span>
          </div>

          <!-- Content -->
          <div class="p-5">
            <h3
              class="text-base font-bold leading-6 text-[#082f41] transition-colors duration-300 group-hover:text-[#0f766e]"
            >
              {{ hl }}
            </h3>

            <p class="mt-2 text-xs leading-5 text-[#6b7b83]">
              Salah satu destinasi pilihan yang akan dikunjungi dalam perjalanan
              Anda di Da Lat.
            </p>

            <!-- Included -->
            <div
              class="mt-5 flex items-center gap-2 border-t border-[#f0ebe4] pt-4"
            >
              <div
                class="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-50 text-xs font-bold text-emerald-600"
              >
                ✓
              </div>

              <span class="text-xs font-semibold text-[#53666f]">
                Tiket masuk sudah termasuk
              </span>
            </div>
          </div>
        </article>
      </div>
    </section>

    <!-- 4. Itinerary Component -->
    <Itinerary :itinerary="tourPackage.itinerary" />

    <!-- 5. Hotel & Harga dengan Visual Card Gambar -->
    <section id="pricing" class="py-16 px-6 max-w-5xl mx-auto scroll-mt-20">
      <div class="max-w-xl mx-auto text-center mb-8">
        <p class="text-xs font-bold uppercase tracking-widest text-[#ff643f]">
          Pricing Options
        </p>
        <h2
          class="mt-1.5 font-serif text-2xl sm:text-3xl font-bold text-[#082f41]"
        >
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
                :src="
                  p.image ||
                  'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80'
                "
                :alt="p.hotelName"
                class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div
                class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"
              ></div>

              <!-- Badge Bintang Atas -->
              <div
                class="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-3 py-1 rounded-full text-[11px] font-bold text-[#082f41] shadow-md flex items-center gap-1.5"
              >
                <span class="flex text-amber-400">
                  <span v-for="s in p.stars" :key="s">★</span>
                </span>
                <span>Hotel Bintang {{ p.stars }}</span>
              </div>

              <!-- Label Bawah Foto -->
              <div class="absolute bottom-3 left-4 right-4 text-white">
                <span
                  class="text-[10px] uppercase font-bold tracking-wider text-amber-200 block mb-0.5"
                  >Akomodasi Terverifikasi</span
                >
                <p class="text-lg font-bold drop-shadow leading-snug">
                  {{ p.hotelName }}
                </p>
              </div>
            </div>

            <!-- Konten Tarif & Keterangan -->
            <div class="p-6">
              <p class="text-xs text-[#53666f] leading-relaxed mb-5">
                Akomodasi selama 3 malam di hotel pilihan atau hotel setara
                dengan kenyamanan maksimal selama program wisata Da Lat.
              </p>

              <!-- Box Rincian Harga -->
              <div
                class="bg-[#fff9f0] p-4 rounded-2xl border border-[#e7dccd] mb-2"
              >
                <span
                  class="text-[10px] text-[#53666f] uppercase font-bold block"
                  >Estimasi Harga per Orang:</span
                >
                <div class="flex items-baseline gap-1 mt-1">
                  <span class="text-xs font-bold text-[#53666f]">Rp</span>
                  <span
                    class="text-3xl font-bold text-[#082f41] tracking-tight"
                    >{{ p.price.toLocaleString("id-ID") }}</span
                  >
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
    <section
      id="includes"
      class="py-12 px-6 max-w-5xl mx-auto pb-24 scroll-mt-20"
    >
      <div
        class="bg-white rounded-3xl p-8 border border-[#e7dccd] shadow-sm mb-8"
      >
        <h3
          class="font-serif text-xl font-bold text-center text-[#082f41] mb-8"
        >
          Fasilitas & Layanan Paket
        </h3>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <!-- Includes -->
          <div
            class="bg-emerald-50/60 p-6 rounded-2xl border border-emerald-100"
          >
            <h4
              class="text-xs font-bold uppercase tracking-wider text-emerald-950 mb-4 flex items-center gap-2"
            >
              <span
                class="w-5 h-5 rounded-full bg-emerald-600 text-white flex items-center justify-center text-xs"
                >✓</span
              >
              Harga Paket Sudah Termasuk:
            </h4>
            <ul class="space-y-2.5 text-xs text-emerald-950">
              <li
                v-for="(inc, i) in tourPackage.includes"
                :key="i"
                class="flex items-start gap-2 leading-relaxed"
              >
                <span class="text-emerald-600 font-bold">•</span>
                <span>{{ inc }}</span>
              </li>
            </ul>
          </div>

          <!-- Excludes -->
          <div class="bg-rose-50/60 p-6 rounded-2xl border border-rose-100">
            <h4
              class="text-xs font-bold uppercase tracking-wider text-rose-950 mb-4 flex items-center gap-2"
            >
              <span
                class="w-5 h-5 rounded-full bg-rose-600 text-white flex items-center justify-center text-xs"
                >✕</span
              >
              Harga Paket Belum Termasuk:
            </h4>
            <ul class="space-y-2.5 text-xs text-rose-950">
              <li
                v-for="(exc, i) in tourPackage.excludes"
                :key="i"
                class="flex items-start gap-2 leading-relaxed"
              >
                <span class="text-rose-500 font-bold">•</span>
                <span>{{ exc }}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Child Policy List View: 5 Poin Proporsional & Terbaca Sempurna -->
      <div
        class="bg-white rounded-3xl p-6 sm:p-8 border border-[#e7dccd] shadow-sm"
      >
        <h4
          class="font-bold text-xs uppercase tracking-wider text-[#082f41] mb-4 flex items-center gap-2"
        >
          <span></span> Kebijakan Anak (Child Policy) Sesuai Ketentuan Proposal
        </h4>

        <div
          class="divide-y divide-[#e7dccd]/70 border border-[#e7dccd] rounded-2xl overflow-hidden text-xs"
        >
          <div
            v-for="(policy, idx) in tourPackage.childPolicy"
            :key="idx"
            class="p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2 bg-[#fff9f0]/40 hover:bg-[#fff9f0] transition-colors"
          >
            <div>
              <p class="font-bold text-[#082f41]">{{ policy.category }}</p>
              <p class="text-[11px] text-[#53666f] mt-0.5">
                {{ policy.condition }}
              </p>
            </div>
            <span
              class="font-bold text-xs px-3 py-1 rounded-md bg-white border border-[#e7dccd] text-[#082f41] self-start sm:self-auto"
            >
              {{ policy.rate }}
            </span>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>
