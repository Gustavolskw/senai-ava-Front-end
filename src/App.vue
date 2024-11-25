<script setup>
import { onMounted, getCurrentInstance } from "vue";
import axiosClient from "./axiosClient";
// Obter a instância atual do Vue para acessar `$swal`
const { proxy } = getCurrentInstance();
onMounted(() => {
  axiosClient.get("/ping").catch((error) => {
    proxy.$swal.fire({
      icon: "error",
      title: "Oops",
      text: "Houve um Erro ao conectar com o servidor, tente novamente mais tarde",
      confirmButtonText: "Ok",
    });
    console.log(error);
  });
});
</script>
<template>
  <router-view></router-view>
</template>

<style scoped></style>
