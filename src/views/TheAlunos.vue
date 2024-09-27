<template>
  <NavBar></NavBar>
  <div class="px-5 my-5 d-flex flex-wrap gap-5 justify-content-center">
    <TheAlunoItem
      v-for="aluno in listAlunos"
      :key="aluno.id"
      :refName="aluno.refName"
      :turma="aluno.turma"
    ></TheAlunoItem>
  </div>

  <Teleport to="body">
    <ErrorModal :show="showModal" @close="showModal = false">
      <template #header>
        <h3 class="text-danger">{{ errorHeader }}</h3>
      </template>
      <template #body>
        <p>{{ errorMessage }}</p>
      </template>
    </ErrorModal>
  </Teleport>
</template>

<script setup>
import NavBar from "@/components/NavBar.vue";
import ErrorModal from "@/components/ErrorModal.vue";
import TheAlunoItem from "@/components/TheAlunoItem.vue";
import axiosClient from "@/axiosClient";
import { onMounted, ref } from "vue";

const listAlunos = ref([]);
const showModal = ref(false);
const errorHeader = ref("");
const errorMessage = ref("");

onMounted(() => {
  axiosClient
    .get("/aluno/all")
    .then(({ data }) => {
      console.log(data);
      listAlunos.value = data.data;
    })
    .catch((error) => {
      errorHeader.value = error.name;
      errorMessage.value = error.message;
      showModal.value = true;
    });
});
</script>
