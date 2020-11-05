<template>
<div>
  <h1>Prato selecionado: {{prato}}</h1>
  <router-link to="/cardapio/File Parmegiana">File Parmegiana</router-link>
  <router-link to="/cardapio/Bife Acebolado">Bife acebolado</router-link>
  <router-link to="/cardapio/Lasanha">Lasanha</router-link>
  <router-link to="/cardapio/Pizza">Pizza</router-link>
</div>
</template>

<script>
export default {
  name: "Cardapio",
  props: ["prato"]
}
</script>

<style scoped>

</style>