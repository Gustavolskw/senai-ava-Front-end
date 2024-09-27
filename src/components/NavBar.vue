<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark w-100">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">
        <img class="logo-img" src="/img/logo.png" alt="logo do senai"
      /></a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div
        class="collapse navbar-collapse mx-2"
        id="navbarSupportedContent"
        data-bs-theme="dark"
      >
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item my-auto">
            <router-link class="text-decoration-none" :to="{ name: 'home' }">
              <a class="ranking-text"
                >Ranking <i class="bi bi-award-fill text-white"></i
              ></a>
            </router-link>
          </li>
          <li class="nav-item ms-4" v-if="isLogged">
            <router-link
              class="nav-link fw-bold fs-5"
              href="#"
              :to="{ name: 'agendamentos' }"
              >Agendamentos</router-link
            >
          </li>
          <li class="nav-item ms-2" v-if="isLogged">
            <router-link
              class="nav-link fw-bold fs-5"
              href="#"
              :to="{ name: 'alunos' }"
              >Alunos</router-link
            >
          </li>
        </ul>
        <button v-if="!isLogged" class="btn btn-primary" type="submit">
          Login
        </button>
        <div v-if="isLogged" class="d-flex align-items-center gap-2">
          <div class="dropdown">
            <i
              class="bi bi-person-circle fs-2 text-white dropdown-toggle"
              id="dropdownMenuButton"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            ></i>
            <ul
              class="dropdown-menu dropdown-menu-end"
              aria-labelledby="dropdownMenuButton"
              data-bs-display="static"
            >
              <li>
                <a class="dropdown-item text-center my-auto" href="#"
                  ><i class="bi bi-person-lines-fill fs-4 mx-2"></i>Perfil
                </a>
              </li>
              <li>
                <a class="dropdown-item text-center my-auto fw-bolder" href="#"
                  >Sair<i class="bi bi-box-arrow-right fs-4 mx-2"></i>
                </a>
              </li>
            </ul>
          </div>

          <p class="text-white fs-5 my-0 mx-1">{{ name }}</p>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { onMounted, ref } from "vue";

const name = ref();
const isLogged = ref(false);

onMounted(() => {
  isLogged.value = false;
  name.value = "Gustavo.luis";
});
</script>

<style scoped>
.dropdown-toggle::after {
  display: none;
}
.ranking-text {
  font-size: 1.5rem;
  font-weight: bolder;
  text-decoration: none;
  color: gold;
}
.ranking-text:hover {
  text-decoration: underline;
  text-decoration-color: #ffff;
  text-shadow: 0px 1px 0px #e1e7e4;
}
.logo-img {
  max-width: 200px;
}
</style>
