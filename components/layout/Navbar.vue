<template>
  <header
    class="bg-transparent container h-[72px] flex justify-between items-center"
  >
    <NuxtLink to="/">
      <NuxtImg src="/logos/logo.png" alt="Logo" class="h-8 w-40" />
    </NuxtLink>

    <nav aria-label="Main Navigation">
      <ul class="flex items-center justify-between w-full">
        <li
          v-for="link in navLinks"
          :key="link.name"
          class="relative group p-4"
        >
          <NuxtLink :to="link.to">
            {{ link.name }}
          </NuxtLink>
          <ul
            v-if="link.subRoutes"
            class="absolute hidden group-hover:block bg-white"
          >
            <li v-for="subLink in link.subRoutes" :key="subLink.name">
              <NuxtLink
                :to="subLink.to"
                class="block px-4 py-2 hover:bg-gray-200"
              >
                {{ subLink.name }}
              </NuxtLink>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script setup>
const { t } = useI18n();

const navLinks = [
  { name: t('routes.about_admixtures'), to: '/about-admixtures' },
  {
    name: t('routes.offer'),
    to: '/offer',
    subRoutes: [
      { name: t('routes.tests'), to: '/audit' },
      { name: t('routes.admixtures'), to: '/tests' },
    ],
  },
  { name: t('routes.about_us'), to: '/about-us' },
  { name: t('routes.contact'), to: '/chemical-admixtures' },
];
</script>
