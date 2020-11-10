<template>
  <form>
    <div class="usuario" v-if="mostrarDadosLogin">
      <label for="nome">Nome</label>
      <input id="nome" name="nome" type="text" v-model="nome">
      <label for="email">E-mail</label>
      <input id="email" name="email" type="text" v-model="email">
      <label for="senha">Senha</label>
      <input id="senha" name="senha" type="password" v-model="senha">
    </div>
    <label for="cep">Cep</label>
    <input id="cep" name="cep" type="text" v-model="cep" @keyup="preencherCep">
    <label for="rua">Rua</label>
    <input id="rua" name="rua" type="text" v-model="rua">
    <label for="numero">Número</label>
    <input id="numero" name="numero" type="text" v-model="numero">
    <label for="bairro">Bairro</label>
    <input id="bairro" name="bairro" type="text" v-model="bairro">
    <label for="cidade">Cidade</label>
    <input id="cidade" name="cidade" type="text" v-model="cidade">
    <label for="estado">Estado</label>
    <input id="estado" name="estado" type="text" v-model="estado">
    <div class="button">
      <slot></slot>
    </div>
  </form>
</template>

<script>
import {getCep} from "@/services";

export default {
  name: "UsuarioForm",
  computed: {
    mostrarDadosLogin() {
      return (!this.$store.state.login || this.$route.name == 'usuario-editar');
    },
    nome: {
      get() {
        return this.$store.state.usuario.nome;
      },
      set(value) {
        this.$store.commit("UPDATE_USUARIO", {nome: value})
      }
    },
    email: {
      get() {
        return this.$store.state.usuario.email;
      },
      set(value) {
        this.$store.commit("UPDATE_USUARIO", {email: value})
      }
    },
    senha: {
      get() {
        return this.$store.state.usuario.senha;
      },
      set(value) {
        this.$store.commit("UPDATE_USUARIO", {senha: value})
      }
    },
    numero: {
      get() {
        return this.$store.state.usuario.numero;
      },
      set(value) {
        this.$store.commit("UPDATE_USUARIO", {numero: value})
      }
    },
    cep: {
      get() {
        return this.$store.state.usuario.cep;
      },
      set(value) {
        this.$store.commit("UPDATE_USUARIO", {cep: value})
      }
    },
    rua: {
      get() {
        return this.$store.state.usuario.rua;
      },
      set(value) {
        this.$store.commit("UPDATE_USUARIO", {rua: value})
      }
    },
    bairro: {
      get() {
        return this.$store.state.usuario.bairro;
      },
      set(value) {
        this.$store.commit("UPDATE_USUARIO", {bairro: value})
      }
    },
    cidade: {
      get() {
        return this.$store.state.usuario.cidade;
      },
      set(value) {
        this.$store.commit("UPDATE_USUARIO", {cidade: value})
      }
    },
    estado: {
      get() {
        return this.$store.state.usuario.estado;
      },
      set(value) {
        this.$store.commit("UPDATE_USUARIO", {estado: value})
      }
    }
  },
  methods: {
    preencherCep() {
      const cep = this.cep.replace(/\D/g, "");
      if (cep.length === 8) {
        getCep(cep).then(r => {
          this.rua = r.data.logradouro;
          this.bairro = r.data.bairro;
          this.estado = r.data.uf;
          this.cidade = r.data.localidade;
        })
      }
    }
  }
}
</script>

<style scoped>
form, .usuario{
  display: grid;
  grid-template-columns:  80px 1fr;
  align-items: center;
}

.usuario {
  grid-column: 1 / 3;
}
.button {
  grid-column: 2;
  margin-top: 10px;
}
</style>