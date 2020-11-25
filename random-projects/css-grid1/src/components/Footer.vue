<template>
  <div></div>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style lang="scss" scoped>
div {
  margin-top: 10;
  background: burlywood;
  grid-column-start: 1;
  grid-column-end: 13;
  grid-row-start: 4;
  grid-row-end: 5;

  &::after {
    content: "Footer";
  }
}
</style>