<template>
  <div class="about">
    <h1 class="mt-5">This is an writinng page</h1>
    <h3>Some content here</h3>
  </div>
</template>

<script>
export default {
  mounted() {
    const vwr = this.$store.state.videoWrapperRef;
    vwr.playVideo(require("../assets/videos/03_HomeToWriting.h264.mp4"), false);
    vwr.endEventListener(require("../assets/videos/06_WritingLoop.h264.mp4"));

    const vref = vwr.$refs.videoRef;
    vref.style.transform = "scale(1.5)";
    vref.style.right = "-60%";
  },
};
</script>
