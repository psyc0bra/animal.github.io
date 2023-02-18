<template>
  <div id="container">
    Make
    <div id="flip">
      <div><div>work</div></div>
      <div><div>lifeStyle</div></div>
      <div><div>Everything</div></div>
    </div>
    Awesome!
  </div>
</template>

<style lang="scss" scoped>
#container {
  color: #999;
  text-transform: uppercase;
  font-size: 36px;
  font-weight: bold;
  position: absolute;
  width: 100%;
  bottom: 45%;
  display: block;
  z-index: -2;
}

#flip {
  height: 55px;
  overflow: hidden;
  margin-top: -10px;
}

#flip > div > div {
  color: #fff;
  padding: 0 12px;
  height: 40px;
  margin-bottom: 45px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

#flip div:first-child {
  animation: show 5s linear infinite;
}

#flip div div {
  background: #508d45;
}
#flip div:first-child div {
  background: #17294c;
}
#flip div:last-child div {
  background: #cba764;
}

@keyframes show {
  0% {
    margin-top: -270px;
  }
  5% {
    margin-top: -180px;
  }
  33% {
    margin-top: -180px;
  }
  38% {
    margin-top: -90px;
  }
  66% {
    margin-top: -90px;
  }
  71% {
    margin-top: 0px;
  }
  99.99% {
    margin-top: 0px;
  }
  100% {
    margin-top: -270px;
  }
}

p {
  position: fixed;
  width: 100%;
  bottom: 30px;
  font-size: 12px;
  color: #999;
}
</style>
