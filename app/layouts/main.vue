<template>
  <div
    class="min-h-screen flex flex-col bg-[#faf8f5] text-[#2c221e] font-sans selection:bg-[#e7dccd]"
  >
    <Header />

    <div class="grow">
      <slot />
    </div>

    <Footer />
  </div>
</template>
