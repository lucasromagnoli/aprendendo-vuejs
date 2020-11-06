<template>
<div>
  <router-link :to="{name: 'descricao'}">Descricao</router-link>
  <router-link :to="{name: 'aulas'}">Aulas</router-link>
  <router-view></router-view>
</div>
</template>

<script>
export default {
  name: "Curso"
}
</script>

<style scoped>

</style>