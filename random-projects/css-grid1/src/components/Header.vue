<template>
  <div></div>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style lang="scss" scoped>
div {
  background: grey;
  grid-column-start: 1;
  grid-column-end: 13;

  &::after {
    content: "Header";
  }
}
</style>