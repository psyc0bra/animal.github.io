<template>
  <section>
    <social-media />
    <animated-list />
  </section>
</template>

<script>
import SocialMedia from "@/components/SocialMedia";
import AnimatedList from "@/components/AnimatedList";

export default {
  name: "Home",

  components: {
    SocialMedia,
    AnimatedList,
  },

  methods: {
    videoRef: (initialVid, loopVid, scale, right, vm, tm = 2000) => {
      console.log(vm.$store);
      const vwr = vm.$store.state.videoWrapperRef;
      vwr.playVideo(initialVid, false);
      vwr.endEventListener(loopVid);
      const vref = vwr.$refs.videoRef;
      vref.style.right = right;
      setTimeout(() => {
        vref.style.transform = `scale(${scale})`;
      }, tm);
    },
  },

  beforeRouteEnter(_to, from, next) {
    next((vm) => {
      switch (from.name) {
        case "About":
          vm.videoRef(
            require("../assets/videos/09_WritingToHome.h264.mp4"),
            require("../assets/videos/02_HomeLoop.h264.mp4"),
            1,
            0,
            vm
          );
          break;
        case "Designing":
          vm.videoRef(
            require("../assets/videos/11_DesigningToHome.h264.mp4"),
            require("../assets/videos/02_HomeLoop.h264.mp4"),
            1,
            0,
            vm
          );
          break;
        default:
          break;
      }
    });
  },
};
</script>
