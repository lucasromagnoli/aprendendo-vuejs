<template>
  <div></div>
</template>

<script>
export default {
  name: "Sidebar",
};
</script>

<style lang="scss" scoped>
div {
  background: cornflowerblue;
  grid-column-start: 1;
  grid-column-end: 4;
  grid-row-start: 2;
  grid-row-end: 4;

  &::after {
    content: "Sidebar";
  }
}
</style>