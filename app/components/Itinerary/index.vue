<script setup lang="ts">
interface ActivityDay {
  day: number;
  title: string;
  meals: string;
  activities: string[];
}

defineProps<{
  itinerary: ActivityDay[];
}>();
</script>

<template>
  <section id="itinerary" class="py-12 px-6 max-w-5xl mx-auto">
    <h2 class="text-2xl sm:text-3xl font-bold text-center mb-10 text-[#2c221e]">
      Rencana Perjalanan (Itinerary)
    </h2>
    <div class="space-y-6">
      <div 
        v-for="day in itinerary" 
        :key="day.day"
        class="bg-white rounded-2xl p-6 sm:p-8 border border-[#e7dccd] shadow-sm"
      >
        <div class="flex flex-wrap items-center justify-between gap-2 mb-4 border-b border-[#e7dccd] pb-3">
          <span class="bg-[#2c221e] text-[#fff9f1] text-xs font-bold px-3 py-1 rounded-md">
            Hari {{ day.day }}
          </span>
          <span class="text-xs font-semibold text-[#5a4d44]">
            Makan: {{ day.meals }}
          </span>
        </div>
        <h3 class="text-lg font-bold mb-4 text-[#2c221e]">{{ day.title }}</h3>
        <ul class="space-y-2">
          <li 
            v-for="(act, idx) in day.activities" 
            :key="idx"
            class="text-sm text-[#5a4d44] flex items-start gap-2"
          >
            <span class="text-[#2c221e] font-bold">•</span>
            <span>{{ act }}</span>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>