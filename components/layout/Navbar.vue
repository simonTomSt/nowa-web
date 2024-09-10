<template>
  <header
    class="bg-transparent container h-[72px] flex justify-between items-center absolute left-1/2 top-0 transform -translate-x-1/2 w-full z-[999]"
  >
    <NuxtLink to="/" class="block max-w-[150px] md:max-w-[160px]">
      <NuxtImg src="/logos/logo.png" alt="Logo" class="w-full h-full block" />
    </NuxtLink>

    <nav aria-label="Main Navigation" class="hidden md:block">
      <ul class="flex items-center justify-between w-full">
        <li v-for="link in navLinks" :key="link.name">
          <NuxtLink
            :to="link.to"
            class="relative group p-4 text-light-blue hover:text-white transition-colors duration-300 ease-out"
          >
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

        <NuxtLink to="/ue-projects" class="hidden md:block pl-4">
          <NuxtImg
            height="38"
            width="118"
            src="/logos/ue-logo.png"
            alt="Logo"
          />
        </NuxtLink>
      </ul>
    </nav>

    <LayoutMobileNav :navLinks="navLinks" class="md:hidden" />

    <NuxtLink
      to="/ue-projects"
      class="absolute right-0 bottom-[-50px] md:hidden"
    >
      <NuxtImg src="/logos/ue-logo.png" alt="Logo" class="h-[50] w-[150px]" />
    </NuxtLink>
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
