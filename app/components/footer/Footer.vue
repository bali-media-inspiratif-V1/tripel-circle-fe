<script setup lang="ts">
import {
  MapPin,
  Phone,
  Mail,
  Heart,
  Facebook,
  Instagram,
} from "lucide-vue-next";

const exploreMenu = [
  {
    label: "Home",
    to: "/",
  },
  {
    label: "Tour Packages",
    to: "/paket",
  },
];

const informationMenu = [
  {
    label: "Itinerary",
    to: "/itinerary",
  },
  {
    label: "Destinations",
    to: "/destinasi",
  },
];
</script>

<template>
  <footer class="bg-[#12313a] text-white">

    <!-- Main Footer -->
    <div class="mx-auto max-w-7xl px-6 py-14">

      <div class="grid gap-10 md:grid-cols-2 lg:grid-cols-4">

        <!-- BRAND -->
        <div>
          <NuxtLink
            to="/"
            class="inline-flex items-center gap-3"
          >
            <!-- Logo -->
            <div
              class="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10"
            >
              <span class="text-lg font-bold text-[#ffc145]">
                TC
              </span>
            </div>

            <!-- Brand Name -->
            <div>
              <p class="text-lg font-bold">
                TRIP CIRCLE
              </p>

              <p class="text-xs text-white/60">
                Connecting Journeys, Creating Experiences
              </p>
            </div>
          </NuxtLink>

          <p class="mt-5 max-w-sm text-sm leading-6 text-white/70">
            Explore the beauty of Da Lat, Vietnam with
            unforgettable travel experiences designed to
            create memorable journeys.
          </p>
        </div>


        <!-- EXPLORE -->
        <div>
          <h3 class="text-base font-bold">
            Explore
          </h3>

          <div class="mt-5 space-y-3">

            <NuxtLink
              v-for="item in exploreMenu"
              :key="item.label"
              :to="item.to"
              class="block text-sm text-white/70 transition-colors hover:text-[#ffc145]"
            >
              {{ item.label }}
            </NuxtLink>

          </div>
        </div>


        <!-- INFORMATION -->
        <div>
          <h3 class="text-base font-bold">
            Information
          </h3>

          <div class="mt-5 space-y-3">

            <NuxtLink
              v-for="item in informationMenu"
              :key="item.label"
              :to="item.to"
              class="block text-sm text-white/70 transition-colors hover:text-[#ffc145]"
            >
              {{ item.label }}
            </NuxtLink>

          </div>
        </div>


        <!-- CONTACT -->
        <div>
          <h3 class="text-base font-bold">
            Contact Us
          </h3>

          <div class="mt-5 space-y-4">

            <!-- Location -->
            <div class="flex items-start gap-3">
              <MapPin
                class="mt-0.5 h-4 w-4 shrink-0 text-[#ffc145]"
              />

              <span class="text-sm leading-6 text-white/70">
                Da Lat, Vietnam
              </span>
            </div>


            <!-- Phone -->
            <div class="flex items-center gap-3">
              <Phone
                class="h-4 w-4 shrink-0 text-[#ffc145]"
              />

              <span class="text-sm text-white/70">
                WhatsApp
              </span>
            </div>


            <!-- Email -->
            <div class="flex items-center gap-3">
              <Mail
                class="h-4 w-4 shrink-0 text-[#ffc145]"
              />

              <span class="text-sm text-white/70">
                Email
              </span>
            </div>

          </div>
        </div>

      </div>


      <!-- Bottom Footer -->
      <div
        class="mt-12 flex flex-col gap-4 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between"
      >

        <!-- Copyright -->
        <p class="text-sm text-white/60">
          © 2026 TRIP CIRCLE. All rights reserved.
        </p>


        <!-- Made With -->
        <p
          class="flex items-center gap-1 text-sm text-white/60"
        >
          Made with

          <Heart
            class="h-3.5 w-3.5 fill-[#ff6f91] text-[#ff6f91]"
          />

          for your journey
        </p>

      </div>

    </div>

  </footer>
</template>