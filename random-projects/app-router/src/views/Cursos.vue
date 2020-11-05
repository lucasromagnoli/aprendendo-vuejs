<template>
  <div>
    <h1>Curso selecionado: {{cursoAtual}}</h1>
    <router-link :to="{name: 'curso', params: {curso: 'Spring Framework'}}">Spring Framework</router-link>
    <router-link :to="{name: 'curso', params: {curso: 'Java 11'}}">Java 11</router-link>
    <router-link :to="{name: 'curso', params: {curso: 'Hibernate'}}">Hibernate</router-link>

    <hr>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "Cursos",
  computed: {
    cursoAtual() {
      return this.$route.params.curso;
    }
  },
  created() {
    console.log("Cursos view criada com sucesso!");
  },
  beforeRouteUpdate(to, from, next)
  {
    console.log(to, from);
    console.log("Router atualizado");
    next();
  }
}
</script>

<style scoped>

</style>