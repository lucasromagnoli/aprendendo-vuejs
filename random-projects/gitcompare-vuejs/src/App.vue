<template>
  <div id="app">
    <form id="main-form">
      <input
        type="text"
        name="userandrepo"
        id="userandrepo"
        v-model="userandrepo"
        placeholder="usuário/repositório"
      />
      <button type="submit" @click.prevent="handleSubmit">OK</button>
    </form>
    <div id="container">
      <Card v-for="(repo, index) in repos" :key="index" :repo="repo" />
    </div>
  </div>
</template>

<script>
import Card from "./components/Card";
import api from "./api";
export default {
  name: "App",
  components: { Card },
  data() {
    return {
      userandrepo: "",
      repos: [],
    };
  },
  methods: {
    async handleSubmit() {
      try {
        const res = await api.get(this.userandrepo);
        this.repos.push(res.data);
      } catch (error) {
        window.alert(error.response);
      }
    },
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
  display: flex;
  flex-direction: column;
  background: tomato;
}
#main-form {
  border-radius: 8px;
  display: flex;
  justify-content: center;

  #userandrepo {
    padding: 20px;
    border: 1px solid grey;
    font-size: 24px;
    border-radius: 6px;
    margin-right: 20px;
  }

  button {
    border-radius: 6px;
    border: none;
    padding: 20px;
    font-size: 24px;
    color: #f3f3f3;
    background: rgb(87, 85, 85);
  }
}

#container {
  max-width: 1440px;
  margin: 0 auto;
  margin-top: 15px;
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
}
</style>
