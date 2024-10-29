import CadastroAluno from "@/views/CadastroAluno.vue";
import HomePage from "@/views/HomePage.vue";
import LoginPage from "@/views/LoginPage.vue";
import TheAlunos from "@/views/TheAlunos.vue";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {
        path: "/",
        name: "home",
        component: HomePage
    },
    {
        path: "/login",
        name: "login",
        component: LoginPage
    },
    {
        path: "/agendamentos",
        name: "agendamentos",
        component: LoginPage
    },
    {
        path: "/alunos",
        name: "alunos",
        component: TheAlunos
    },
    {
        path: "/alunos/register",
        name: "registerAluno",
        component: CadastroAluno
    }
];


const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;