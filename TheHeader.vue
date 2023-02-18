<template>
  <div class="d-flex mt-5 p-2 justify-content-between">
    <div>
      <router-link to="/">
        <img src="@/assets/images/logo.png" alt="Logo" class="logo" />
      </router-link>
      <img
        src="@/assets/images/audio-waves.png"
        alt="Sound waves"
        class="logo ms-1 p-2"
      />
    </div>
    <a class="fw-normal d-flex align-items-center">say hi.</a>
  </div>
</template>

<style lang="scss" scoped>
.logo {
  max-width: 35px;
}

a {
  text-decoration: none;
  color: inherit;
}
</style>
