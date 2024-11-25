<template>
  <div
    class="d-flex flex-column flex-shrink-0 p-3 text-white bg-primary h-100"
    style="width: 380px"
  >
    <h4 class="text-center mx-auto my-0 p-0 fw-bolder">
      {{ panelName }}
    </h4>

    <hr />
    <ul class="nav nav-pills flex-column mb-auto justify-content-center">
      <li class="nav-item">
        <router-link
          class="nav-link active my-0 py-0"
          :to="{ name: 'home' }"
          aria-current="page"
        >
          <a class="nav-link fw-bold fs-5 text-white">Inicio </a>
        </router-link>
      </li>
      <li class="nav-item">
        <router-link
          class="nav-link active my-0 py-0"
          :to="{ name: 'home' }"
          aria-current="page"
        >
          <a class="nav-link fw-bold fs-5 text-white">Rank Ead </a>
        </router-link>
      </li>
      <li class="dropdown-btn">
        <button
          class="fw-bold fs-5 text-white btn btn-toggle align-items-center rounded collapsed text-white"
          data-bs-toggle="collapse"
          data-bs-target="#dashboard-collapse-pta"
          aria-expanded="false"
        >
          Administração
        </button>
        <div class="collapse" id="dashboard-collapse-pta" style="">
          <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small ms-4">
            <li class="mb-2">
              <a href="#" class="link-dark rounded text-decoration-none fw-bold"
                >Turmas</a
              >
            </li>
            <li class="mb-2">
              <a href="#" class="link-dark rounded text-decoration-none fw-bold"
                >Alunos</a
              >
            </li>
            <li class="mb-2">
              <a href="#" class="link-dark rounded text-decoration-none fw-bold"
                >Professores</a
              >
            </li>
          </ul>
        </div>
      </li>
      <li class="dropdown-btn">
        <button
          class="fw-bold fs-5 text-white btn btn-toggle align-items-center rounded collapsed text-white"
          data-bs-toggle="collapse"
          data-bs-target="#dashboard-collapse-atv"
          aria-expanded="false"
        >
          Atividades
        </button>
        <div class="collapse" id="dashboard-collapse-atv" style="">
          <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small ms-4">
            <li class="mb-2">
              <a href="#" class="link-dark rounded text-decoration-none fw-bold"
                >EAD</a
              >
            </li>
            <li class="mb-2">
              <a href="#" class="link-dark rounded text-decoration-none fw-bold"
                >Trilhas de Conhecimento</a
              >
            </li>
            <li class="mb-2">
              <a href="#" class="link-dark rounded text-decoration-none fw-bold"
                >Atividades</a
              >
            </li>
          </ul>
        </div>
      </li>
    </ul>
    <hr />
    <div v-if="!isLogged">
      <router-link
        v-if="!isLogged"
        class="btn btn-secondary w-100"
        :to="{ name: 'login' }"
      >
        Login
      </router-link>
    </div>

    <div class="dropdown" v-if="isLogged">
      <a
        href="#"
        class="d-flex align-items-center text-white text-decoration-none dropdown-toggle"
        id="dropdownUser1"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        <img
          src="https://github.com/mdo.png"
          alt=""
          width="32"
          height="32"
          class="rounded-circle me-2"
        />
        <strong>mdo</strong>
      </a>
      <ul
        class="dropdown-menu dropdown-menu-dark text-small shadow"
        aria-labelledby="dropdownUser1"
      >
        <li><a class="dropdown-item" href="#">New project...</a></li>
        <li><a class="dropdown-item" href="#">Settings</a></li>
        <li><a class="dropdown-item" href="#">Profile</a></li>
        <li><hr class="dropdown-divider" /></li>
        <li>
          <a class="dropdown-item" @click="logoutUser()">Sign out</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { jwtDecode } from "jwt-decode";
import { onMounted, ref } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
const store = useStore();
const name = ref();
const isLogged = ref(false);

const router = useRouter();

// Define props with corrected default
const props = defineProps({
  panelName: {
    type: String,
    default: "Home", // Corrected typo here
  },
});
const user = ref({
  id: null,
  email: "",
  role: "",
});

function logoutUser() {
  // Trigger Vuex action to remove token
  store.dispatch("removeToken");

  // Reset local state
  isLogged.value = false;
  user.value = { id: null, email: "", role: "" };
  name.value = null;

  // Redirect to the home route
  router.push({ name: "home" });
}
onMounted(() => {
  const token = store.getters.getToken;
  if (token) {
    isLogged.value = true;

    // Decodificar o token
    try {
      const decoded = jwtDecode(token);
      isLogged.value = true;

      // Definir parâmetros do usuário
      user.value.id = decoded.id;
      user.value.email = decoded.sub;
      user.value.role = decoded.role;
      name.value = user.value.email;
      console.log(decoded);
      // Se houver um campo "name" no token, definindo-o também
      name.value = decoded.sub || "Usuário Desconhecido";
    } catch (error) {
      console.error("Erro ao decodificar o token:", error);
    }
  }
});
</script>

<style scoped>
.main {
  height: 100vh;
}

.dropdown-btn {
  padding-left: 18px;
}
</style>
