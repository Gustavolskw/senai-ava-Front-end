<template>
  <div class="login-page-container">

    <div class="w-100 container-general">

      <div class="d-flex align-items-center flex-column h-100 mt-5 gap-5 container-header-img">

        <p class="header-ava">Ambiente Virtual de aprendizagem </p>
        <img src="../assets/img/login-people-image.png" alt="alunos do senai" class="img-alunos">
        
      </div>

      <div class="d-flex align-items-center justify-content-center flex-column w-50 ">
        <form class="form-login d-flex align-items-center flex-column justify-content-center">
          <img class="img-logo-senai" src="@/assets/img/senai-icon.png">
          <div>
            <button class="google-login-btn">
              <img class="google-icon" src="@/assets/img/google-icon.png">
              Entrar com o Google </button>
          </div>
          <div class="mt-5 mb-3 w-100">
            <input class="form-control input-form " type="text" placeholder="Identificação de usuário">
          </div>
          <div class="w-100 mb-5">
            <input class="form-control input-form" type="password" placeholder="Senha de acesso">
          </div>
          <div class="container-btn-acess w-100">
            <button class="btn-acesso">Acessar</button>
          </div>
        </form>
      </div>

    </div>
  </div>
</template>

<script setup>

</script>

<style scoped lang="scss">
.login-page-container {
  height: 100vh;
  background: conic-gradient(
          from 90deg at 50% 50%,
          rgba(68, 205, 255, 0.89) 10%,
          rgba(68, 213, 254, 0.87) 14%,
          rgba(67, 237, 249, 0.81) 29%,
          rgba(66, 255, 246, 0.77) 40%,
          rgba(68, 205, 255, 0.89) 61%,
          rgba(66, 255, 246, 0.77) 90%,
          rgba(68, 205, 255, 0.89) 100%
  );
}
.container-general{
  display: flex;
}
.header-ava{
  font-weight: bold;
  text-align: center;
  width: 75%;
  font-size: 3rem;
  text-wrap: wrap;
  text-shadow: 3px 3px #8D8D8D;
  color: rgba(255, 255, 255, 0.88);
}

.img-alunos{
  margin-top: 2.6rem;
  width: 40rem;
}
.container-header-img{
  width: 50%;
  justify-content: start;
}

.form-login{
  border-radius: 8px;
  background-color: rgba(0, 92, 170, 0.4);
  padding:3rem 8rem 6rem 8rem;
}

.img-logo-senai{
  margin: 1rem auto 4rem;
}

.google-login-btn{
  color: #BCBCBC;
  border-radius: 4px;
  border:1px solid black;
  display: flex;
  align-items: center;
  justify-content: start;
  gap:3rem;
  background-color: #ffffff;

  padding: 0.8rem 3rem 0.8rem 1rem;
}
.google-icon{
width: 2rem;
}
.input-form{
  padding: 0.6rem 0.5rem;
  border-radius: 4px !important;
  border: 1px solid black;
}
.input-form::placeholder{
  color: #BCBCBC;
}
.btn-acesso{
  width: 100%;
  background-color: #005CAA;
  border-radius: 4px;
  border:none;
  padding:1rem;
  color:white;
  font-weight: bold;
}



@media(max-width: 980px) {
  .header-ava{
    font-size: 3.5rem;
  }

  .img-alunos{
    width: 30rem;
  }
}

@media(max-width: 680px) {
  .img-alunos{
    display: none;
  }
  .header-ava{
    font-size: 1rem;
  }
  .container-general{
    flex-direction: column;
  }
  .container-header-img {
    width:100%;
    justify-content: center;
  }
}
@media(max-width: 430px) {
  .img-alunos {
    display: none;
  }
  .header-ava{
    font-size: 2rem;
  }
}
</style>
