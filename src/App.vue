<template>
  <nav id="nav" class="navbar navbar-expand-md navbar-dark">
    <div class="container-fluid justify-content-between w-80">
      <router-link class="navbar-brand" to="/">AniList</router-link>
    <div class="collapse navbar-collapse justify-content-evenly" id="navbarContent">
      <NavbarSearchVue />
    </div>
    </div>
  </nav>
  <router-view/>
</template>

<script>
import NavbarSearchVue from './components/NavbarSearch.vue';
export default {
    components: {
      NavbarSearchVue,
    },
}

</script>

<style lang="scss">

  $text-color: #08257d;
  $primary-color: #70ffae;

#app {
  font-family: 'Open Sans', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #707070;
}

#nav {
  background: $primary-color;
  box-shadow: 0px -20px 8px 20px rgba(0, 0, 0, 0.35);
  padding: 7px 0;
}

.navbar-brand {
  font-size: 28px;
  padding: 0;
  padding-top: 2px;
}

.w-80 {
  width: 80%;
  margin: auto;
}

.w-60 {
  width: 60%;
  margin: auto;
}

.no-scrollbar {
    overflow-y: hidden;
}

.shadow {
  box-shadow: 0px 0px 6px 0px rgba(0, 0, 0, 0.3);
}

a {
  color: #876fff;
  text-decoration: none;
  transition-duration: 0.3s;
  :hover {
    background-color: #f9f9f9;
    border-radius: 4px;
    transition-duration: 0.3s;
  }
}

@media screen and (max-width: 1366px) {
  .w-60 {
    width: 80%;
  }
}
</style>

