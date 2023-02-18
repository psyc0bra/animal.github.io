<template>
  <div class="about">
    <div class="d-flex flex-column align-items-end">
      <h1 class="mt-5">This is an designing page</h1>
      <h3>Some content here</h3>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    const vwr = this.$store.state.videoWrapperRef;
    vwr.playVideo(
      require("../assets/videos/04_HomeToDesigning.h264.mp4"),
      false
    );
    vwr.endEventListener(require("../assets/videos/10_DesigningLoop.h264.mp4"));

    const vref = vwr.$refs.videoRef;
    vref.style.transform = "scale(1)";
    vref.style.right = "initial";
    vref.style.left = "0";
  },
};
</script>
