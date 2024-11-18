import CadastroAdmin from "@/views/CadastroAdmin.vue";
import CadastroAluno from "@/views/CadastroAluno.vue";
import CadastroProfessor from "@/views/CadastroProfessor.vue";
import HomePage from "@/views/HomePage.vue";
import LoginPage from "@/views/LoginPage.vue";
import TheAlunos from "@/views/TheAlunos.vue";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {
        path: "/home",
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
        path: "/aluno/register",
        name: "registerAluno",
        component: CadastroAluno
    },
    {
        path: "/professor/register",
        name: "registerProfessor",
        component: CadastroProfessor
    },
    {
        path: "/admin/register",
        name: "registerAdmin",
        component: CadastroAdmin
    },
    {
        path: "/:pathMatch(.*)*",
        redirect: "/login"  // or any other route, like "/404" if you have a custom 404 page
    }
];


const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;