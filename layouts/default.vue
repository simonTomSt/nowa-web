<template>
  <div class="min-h-screen flex flex-col w-full">
    <LayoutNavbar />
    <main class="flex-grow">
      <slot />
    </main>
    <LayoutFooter />
  </div>
</template>
