<script setup>
import { /*RouterLink,*/ RouterView } from 'vue-router'
// import HelloWorld from './components/HelloWorld.vue'

import { ref } from 'vue'
const notifications = ref(0)

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
        <button v-on:click="notifications++" class="auth">Connexion</button>
      </div>
    </header>

    <RouterView />
    <footer>© Vueflix {{ new Date().getFullYear() }} - Mentions légales - <RouterLink to='/about'>À propos</RouterLink></footer>
  </div>
</template>

