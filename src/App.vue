<template>
  <main>
    <the-nav></the-nav>
    <router-view></router-view>
  </main>
</template>
<script>
import TheNav from "./components/TheNav.vue";
import "./assets/style/app.css";

export default {
  name: "App",
  components: {
    TheNav,
  },
};
</script>
