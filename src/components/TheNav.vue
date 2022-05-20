<template>
  <nav class="navbar">
    <div class="navbar_logo">
      <div class="menu" @click="openNav()">
        <h2 class="fal fa-bars"></h2>
      </div>
      <router-link to="/"><the-logo></the-logo>IT School</router-link>
    </div>
    <ul>
      <li v-for="page in getPages" :key="page" @click="openNav()">
        <a :href="'/' + page.link">
          {{ page.name }}
        </a>
      </li>
    </ul>
    <div class="close" @click="openNav()"></div>
    <div class="navbar_content">
      <div class="lang">
        <div class="lang_icon">
          <img src="../assets/img/lang.svg" alt="" />
          <svg
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            viewBox="0 0 24 24"
            stroke="#000"
            class="h-4 w-4 text-white"
          >
            <g transform="rotate(90 12 12)"><path d="M9 5l7 7-7 7"></path></g>
          </svg>
        </div>
        <div class="lang_opt">
          <h3
            :class="$i18n.locale == 'en' ? 'active' : ''"
            @click="$i18n.locale = 'en'"
          >
            English
          </h3>
          <h3
            :class="$i18n.locale == 'uz' ? 'active' : ''"
            @click="$i18n.locale = 'uz'"
          >
            Uzbek
          </h3>
        </div>
      </div>
      <router-link to="/login">
        <p v-if="user.name !== ''">{{ user.name }}</p>
        <p v-if="user.name == ''">Kirish</p>
        <i v-if="user.name == ''" class="far fa-sign-in"></i>
        <i v-if="user.name !== ''" class="far fa-user"></i>
      </router-link>
    </div>
  </nav>
</template>
<script>
import TheLogo from "../components/TheLogo.vue";
import uz from "../locales/uz.js";
import en from "../locales/en.js";
export default {
  name: "TheNav",
  data() {
    return {
      langs: ["en", "uz"],
      user: {
        name: "",
      },
    };
  },
  components: {
    TheLogo,
  },
  computed: {
    getPages() {
      let pages = [];
      if (this.$i18n.locale === "uz") {
        pages = uz.navbar;
      } else {
        pages = en.navbar;
      }
      return pages;
    },
  },
  methods: {
    openNav() {
      let el = document.querySelector(".navbar ul");
      el.classList.toggle("nav");
      let close = document.querySelector(".navbar .close");
      close.classList.toggle("nav");
    },
  },
};
</script>
