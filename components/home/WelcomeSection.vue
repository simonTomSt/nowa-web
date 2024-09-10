<template>
  <section
    class="relative flex items-center justify-center min-h-[700px] md:min-h-[800px] bg-white overflow-hidden rounded-br-[40px] w-full"
  >
    <NuxtImg
      fetchPriority="hight"
      preload
      src="/home/laboratory.png"
      alt="Unia Europejska"
      fit="contain"
      class="absolute left-0 top-0 object-cover object-center w-full h-full z-10"
    />
    <div class="absolute inset-0 bg-black opacity-60 z-20" />
    <div class="container relative z-30 pt-40 md:pt-14">
      <div
        class="flex flex-col items-center text-center md:text-left md:items-start md:max-w-[670px]"
      >
        <h1
          class="text-3xl md:text-[40px] font-semibold text-white animate-fadeIn leading-[1.1em] tracking-wide"
          style="animation-delay: 200ms"
        >
          {{ t('home.welcome.title') }}
        </h1>

        <p class="text-light-blue mt-6 text-base">
          {{ t('home.welcome.description') }}
        </p>

        <div class="mt-8">
          <NuxtLink to="/oferta">
            <Button variant="primary">
              {{ t('home.welcome.action') }}
            </Button>
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n';
const { t } = useI18n();
</script>
