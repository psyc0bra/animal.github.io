<template>
  <div class="d-flex justify-content-between footer-nav p-5 mb-5">
    <router-link :to="{ name: 'About' }"> writing. </router-link>
    <router-link :to="{ name: 'Designing' }"> designing. </router-link>
  </div>
</template>

<style lang="scss" scoped>
.footer-nav {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;

  a {
    text-decoration: none;
    color: #161f38;
    transition: 0.3s;
  }
}
</style>
