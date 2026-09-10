<script setup lang="ts">
import type { ItineraryDay } from '~/composables/useTours'

defineProps<{
  itinerary: ItineraryDay[]
}>()
</script>

<template>
  <section id="itinerary" class="py-16 px-6 max-w-5xl mx-auto scroll-mt-20">
    <div class="text-center max-w-xl mx-auto mb-10">
      <p class="text-xs font-bold uppercase tracking-widest text-[#ff643f]">Daily Schedule</p>
      <h2 class="mt-1 text-2xl sm:text-3xl font-black font-bold text-[#2c221e]">
        Rencana Perjalanan (Itinerary)
      </h2>
      <p class="mt-2 text-xs sm:text-sm text-[#5a4d44]">
        Jadwal fleksibel mengikuti waktu kedatangan penerbangan rombongan Anda.
      </p>
    </div>

    <div class="space-y-6">
      <div 
        v-for="day in itinerary" 
        :key="day.day"
        class="bg-white rounded-3xl p-6 sm:p-8 border border-[#e7dccd] shadow-sm"
      >
        <div class="flex flex-wrap items-center justify-between gap-2 mb-4 border-b border-[#e7dccd] pb-3">
          <span class="bg-[#2c221e] text-[#fff9f1] text-xs font-bold px-3 py-1 rounded-md uppercase">
            Hari {{ day.day }}
          </span>
          <span class="text-xs font-semibold text-[#5a4d44]">
            Makan: {{ day.meals }}
          </span>
        </div>
        <h3 class="font-serif text-lg font-bold mb-4 text-[#2c221e]">{{ day.title }}</h3>
        <ul class="space-y-2.5">
          <li 
            v-for="(act, idx) in day.activities" 
            :key="idx"
            class="text-xs sm:text-sm text-[#5a4d44] flex items-start gap-2 leading-relaxed"
          >
            <span class="text-[#2c221e] font-bold">•</span>
            <span>{{ act }}</span>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>