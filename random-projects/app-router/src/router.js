import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/views/Home";
import Cursos from "@/views/Cursos";
import Cardapio from "@/views/Cardapio";
import Curso from "@/views/Curso";
import CursoAulas from "@/views/CursoAulas";
import CursoDescricao from "@/views/CursoDescricao";

Vue.use(VueRouter);

export default new VueRouter({
    mode: "history",
    base: "app",
    routes: [
        {
            path: "/",
            component: Home
        },
        {
            path: "/cursos",
            component: Cursos,
            children: [
                {
                    name: "curso",
                    path: ":curso",
                    component: Curso,
                    children: [
                        {
                            name: "aulas",
                            path: "aulas",
                            component: CursoAulas
                        },
                        {
                            name: "descricao",
                            path: "descricao",
                            component: CursoDescricao
                        }
                    ]
                }
            ]
        },
        {
            path: "/cardapio",
            component: Cardapio,
            props: true,
            beforeEnter: (to,from,next) => {
                console.log("Before Navegacao em routes.js")
                next();
            },
            children: [
                {
                    path: ":prato",
                    component: Cardapio,
                }
            ]
        }

    ]
});