<template>
  <div id="app">
    <Header />
    <Content />
    <Sidebar />
    <Footer />
  </div>
</template>

<script>
import Header from "./components/Header";
import Content from "./components/Content";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";

export default {
  name: "App",
  components: {
    Header,
    Content,
    Footer,
    Sidebar,
  },
};
</script>

<style lang="scss">
body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
#app {
  min-height: 100vh;
  max-height: 100%;
  margin: 0 auto;
  max-width: 1600px;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: 125px 1fr 1fr 100px;
}
</style>
