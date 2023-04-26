<script setup>
import { /*RouterLink,*/ RouterView } from 'vue-router'
import LoginForm from "./components/LoginForm.vue"
import RegisterForm from "./components/RegisterForm.vue"
// import MaryPopin from './components/MaryPopin.vue'

import { ref } from 'vue'
import MaryPopin from './components/MaryPopin.vue';

const notifications = ref(0)

const showLogin = ref(false)
const showRegister = ref(false)

</script>

<template>
  <div class="app">
    <header id="header">
      <div id="logo">
        <img src="/logo.svg" alt="Vueflix" srcset="">
      </div>
      <nav id="nav">
        <ul>
          <li><RouterLink to='/'>Accueil</RouterLink></li>
          <li><RouterLink to='/about'>À propos</RouterLink></li>
        </ul>
      </nav>
      <div id="profile">
        <span v-show=" notifications !== 0 " class="notifications"><span>{{ notifications }}</span> notifications</span>
        <button class="register">S'inscrire</button>
        <button v-on:click="showPopin" class="auth">Connexion</button>
        <button v-on:click="notifications++" class="auth">Notifs</button>
      </div>
    </header>

    <RouterView />
    <footer>© Vueflix {{ new Date().getFullYear() }} - Mentions légales - <RouterLink to='/about'>À propos</RouterLink></footer>
    
    <MaryPopin v-if="showLogin">
      <LoginForm />
    </MaryPopin>

    <MaryPopin v-if="showRegister">
      <RegisterForm />
    </MaryPopin>
  </div>
</template>

