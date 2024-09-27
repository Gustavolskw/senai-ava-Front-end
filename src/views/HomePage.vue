<template>
  <NavBar></NavBar>
  <RankList></RankList>
</template>

<script setup>
import NavBar from "@/components/NavBar.vue";
import axiosClient from "@/axiosClient";
import { onMounted, ref } from "vue";
import RankList from "@/components/RankList.vue";

const turmas = ref();

onMounted(async () => {
  await axiosClient
    .get("/turma/all")
    .then(({ data }) => {
      turmas.value = data.data;
    })
    .catch((error) => {
      console.log(error);
    });
});
</script>
