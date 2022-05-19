<script>
import { RouterView } from 'vue-router';
import NavbarVue from './components/Navbar.vue';

export default {
  components: {NavbarVue, RouterView}
}
</script>

<template>
    <NavbarVue/>
  <div class="content">
    <RouterView />
  </div>
</template>

<style>
.content{
  margin: 0 auto;
  max-width: 1200px;
  padding: 0 20px;
}

</style>
