<template>
  <div class="content">
    <p>Conteudo</p>
    <p>Conteudo</p>
    <p>Conteudo</p>
    <p>Conteudo</p>
    <p>Conteudo</p>
    <p>Conteudo</p>
    <p>Conteudo</p>
    <p>Conteudo</p>
    <p>Conteudo</p>
    <p>Conteudo</p>
    <p>Conteudo</p>
    <p>Conteudo</p>
    <p>Conteudo</p>
    <p>Conteudo</p>
    <p>Conteudo</p>
    <p>Conteudo</p>
    <p>Conteudo</p>
    <p>Conteudo</p>
    <p>Conteudo</p>
    <p>Conteudo</p>
    <p>Conteudo</p>
    <p>Conteudo</p>
    <p>Conteudo</p>
    <p>Conteudo</p>
    <p>Conteudo</p>
    <p>Conteudo</p>
    <p>Conteudo</p>
    <p>Conteudo</p>
    <p>Conteudo</p>
    <p>Conteudo</p>
    <p>Conteudo</p>
    <p>Conteudo</p>
    <p>Conteudo</p>
    <p>Conteudo</p>
    <p>Conteudo</p>
    <p>Conteudo</p>
  </div>
</template>

<script>
export default {
  name: "Content",
};
</script>

<style lang="scss" scoped>
.content {
  background: tomato;
  grid-column-start: 4;
  grid-column-end: 13;
  grid-row-start: 2;
  grid-row-end: 4;
  display: flex;
  flex-direction: column;
  &::after {
    content: "Content";
  }
}
</style>