<template>
  <div class="navbar bg-primary text-primary-content">
    <div class="navbar-start">
      <NuxtLink class="btn btn-ghost text-xl">
        TL
      </NuxtLink>
    </div>

    <div class="navbar-end">
      <div class="mx-4">
        <AppThemeToggle />
      </div>

      <NuxtLink class="btn btn-accent" to="/sign-in">
        <Icon name="tabler:brand-github" size="24" />
        Sign In with Github
      </NuxtLink>
    </div>
  </div>
</template>
