<template>
  <section class="container py-16">
    <h2 class="text-2xl font-semibold text-dark md:text-center">
      {{ t('home.offers.title') }}
    </h2>
    <p
      class="mt-4 md:text-base md:block md:max-w-[800px] mx-auto md:text-center"
    >
      {{ t('home.offers.description') }}
    </p>
    <div class="mt-8">
      <NuxtLink to="/oferta" class="block w-max md:mx-auto">
        <Button variant="primary">
          {{ t('home.offers.action') }}
        </Button>
      </NuxtLink>
    </div>

    <div class="grid grid-cols-1">
      <article class="px-6 py-8 shadow-2xl">
        <Icon name="fa-solid:microscope" class="w-10 h-10 text-primary" />
        <h5>{{ t('home.offers.tiles.tests.title') }}</h5>
        <p>{{ t('home.offers.tiles.tests.description') }}</p>
      </article>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n';
const { t } = useI18n();
</script>
