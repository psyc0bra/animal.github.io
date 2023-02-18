<template>
  <main class="main-wrapper">
    <the-header />
    <router-view />
    <the-footer />
    <background-video ref="videoRef" />
  </main>
  <!-- <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div> -->
</template>

<script>
import TheHeader from "@/components/TheHeader";
import TheFooter from "@/components/TheFooter";
import BackgroundVideo from "@/components/BackgroundVideo";
import { mapActions } from "vuex";

export default {
  components: {
    TheHeader,
    TheFooter,
    BackgroundVideo,
  },

  methods: {
    ...mapActions(["setVideoRef"]),
  },

  mounted() {
    this.setVideoRef(this.$refs.videoRef);
  },
};
</script>

<style lang="scss" scoped>
.main-wrapper {
  width: 90%;
  margin: auto;
}
</style>
