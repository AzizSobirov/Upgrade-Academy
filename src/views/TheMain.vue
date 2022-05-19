<template>
  <main class="main" v-on:scroll="scrollSnap()">
    <the-home></the-home>
    <the-courses></the-courses>
    <section id="webinar">
      webinar
    </section>
    <section id="pricing">
      pricing
    </section>
  </main>
</template>
<script>
import TheLogo from "../components/TheLogo.vue";
import TheHome from "../components/TheHome.vue";
import TheCourses from "../components/TheCourses.vue";
export default {
  name: "TheMain",
  // write seo for vue
  // metaInfo: {
  //   title: "Upgrading your skills",
  //   meta: [
  //     {
  //       name: "description",
  //       content: "THis is official website of Upgrade Academy",
  //     },
  //     {
  //       name: "keywords",
  //       content:
  //         "Upgrade Academy, Aziz Sobirov Upgrade Academy,Aziz Sobirov, Aziz Sobirov Academy, QWERTY Upgrade Academy",
  //     },
  //   ],
  // },

  data() {
    return {
      langs: ["en", "uz"],
    };
  },
  components: {
    TheLogo,
    TheHome,
    TheCourses,
  },
  created() {
    window.addEventListener("scroll", this.scrollSnap);
  },
  mounted() {
    this.scrollSnap();
  },
  methods: {
    scrollSnap() {
      let link = document.querySelectorAll(".navbar ul li a");
      let page = document.querySelectorAll(".main section");
      link.forEach((item) => {
        item.classList.remove("active");
      });

      for (let i = 0; i < page.length; i++) {
        if (
          Math.round(window.scrollY) >= Math.round(page[i].offsetTop) &&
          Math.round(window.scrollY) <=
            Math.round(page[i].scrollHeight + page[i].offsetTop - 10)
        ) {
          link[i].classList.add("active");
        }
      }

      // nav
      let nav = document.querySelector(".navbar");
      if (window.scrollY > 0) {
        nav.classList.add("fixed");
      } else {
        nav.classList.remove("fixed");
      }
    },
  },
};
</script>
