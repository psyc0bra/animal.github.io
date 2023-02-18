<template>
  <teleport to="body">
    <ul>
      <li>drib</li>
      <li>beha</li>
      <li>fbook</li>
      <li>insta</li>
    </ul>
  </teleport>
</template>

<style lang="scss" scoped>
ul {
  padding: 0;
  position: absolute;
  top: 49%;
  margin: auto;
  right: 0;
  transform-origin: 0 1;
  transform: rotate(90deg);
  position: absolute;
  display: inline-table;
  margin: 0;

  li {
    list-style-type: none;
    display: inline-block;
    padding: 0 10px;
    color: #8a8f9b;
    letter-spacing: 0.5px;
    font-size: 12px;
    cursor: pointer;
    transition: 0.3s;

    &:hover {
      color: #161f38;
    }
  }
}
</style>
