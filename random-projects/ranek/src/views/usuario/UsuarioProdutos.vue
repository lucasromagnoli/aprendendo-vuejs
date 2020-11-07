<template>
  <section>
    <h2>Usuario Produtos</h2>
    <ProdutoAdicionar/>
    <h2>Seus Produtos</h2>
    <transition-group v-if="usuario_produtos" name="list" tag="ul">
      <li v-for="(produto, index) in usuario_produtos" :key="index">
        <ProdutoItem :produto="produto">
          <p>{{produto.descricao}}</p>
          <button class="deletar" @click="deletarProduto(produto.id)">Deletar</button>
        </ProdutoItem>
      </li>
    </transition-group>
  </section>
</template>

<script>
import ProdutoAdicionar from "@/components/ProdutoAdicionar";
import {mapState, mapActions} from "vuex";
import ProdutoItem from "@/components/ProdutoItem";
import {api} from "@/services";

export default {
  name: "UsuarioProdutos",
  components: {ProdutoItem, ProdutoAdicionar},
  computed: {
    ...mapState(["login", "usuario", "usuario_produtos"])
  },
  methods: {
    ...mapActions(["getUsuarioProdutos"]),
    deletarProduto(id) {
      const confirm = window.confirm("Você quer realmente deletar este item?");
      if (confirm) {
        api.delete(`/produto/${id}`).then(() => {
          this.getUsuarioProdutos()
        }).catch(error => {
          console.error(error.response)
        })
      }
    }
  },
  watch: {
    login() {
      if (this.login) {
        this.getUsuarioProdutos();
      }
    }
  },
  created() {
    if (this.login) {
      this.getUsuarioProdutos();
    }
  }
}
</script>

<style scoped>
h2 {
  margin-bottom: 20px;
}

.list-enter,
.list-leave-to {
  opacity: 0;
  transform: translate3d(20px, 0, 0);
}
.list-enter-active,
.list-leave-active {
  transition:all .3s;
}

.deletar {
  position: absolute;
  top: 0px;
  right: 0px;
  background: url("../../assets/remove.svg") no-repeat center center;
  width: 24px;
  height: 24px;
  text-indent: -140px;
  overflow: hidden;
  cursor: pointer;
  border: none;
  
}
</style>