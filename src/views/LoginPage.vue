<template>
  <div>
    <form>
      <div>
        <label for="login">Email:</label>
        <input type="email" id="login" v-model="emailToLogin" />
      </div>
      <div>
        <label for="passw">Senha:</label>
        <input type="text" id="passw" v-model="password" />
      </div>
      <div>
        <button type="submit">Entrar</button>
      </div>
    </form>
  </div>
</template>

<script setup>
let password;
let emailToLogin;
</script>
