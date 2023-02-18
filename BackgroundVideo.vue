<template>
  <teleport to="body">
    <div class="video-wrapper">
      <video ref="videoRef" autoplay muted class="full-video">
        <source :src="video" type="video/mp4" />
      </video>
    </div>
  </teleport>
</template>

<script>
export default {
  name: "BackgroundVideo",

  data() {
    return {
      video: require("../assets/videos/01_Intro.h264.mp4"),
    };
  },

  methods: {
    playVideo(ext_src, loop = true) {
      const v = this.$refs.videoRef;
      const vs = this.$refs.videoRef.children[0];
      const vsrc = ext_src || require("../assets/videos/02_HomeLoop.h264.mp4");

      try {
        vs.setAttribute("src", vsrc);
        v.load();
        if (loop) v.setAttribute("loop", true);
        else v.removeAttribute("loop");
        setTimeout(() => {
          v.play();
        }, 2000);
      } catch (error) {
        console.log(error);
      }
    },

    endEventListener(ext_src) {
      this.$refs.videoRef.addEventListener(
        "ended",
        () => {
          try {
            this.playVideo(ext_src);
          } catch (error) {
            console.log("Video failed", error);
          }
        },
        { once: true }
      );
    },
  },

  mounted() {
    this.endEventListener();
  },
};
</script>

<style lang="scss" scoped>
.video-wrapper {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  //   background-color: red;
  width: 100%;
  margin: auto;
  z-index: -1;
  transition: 0.3s ease;

  .full-video {
    object-fit: cover;
    width: 30%;
    margin: auto;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    transition: 1s;
  }
}
</style>
