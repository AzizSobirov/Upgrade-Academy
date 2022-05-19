<template>
  <section id="courses">
    <h2>What Do You Want to Learn?</h2>
    <p>
      Choose the right class as you need. Then enjoy studying.
    </p>
    <ul>
      <li v-for="course in getCourses" :key="course">
        <img src="course.img" alt="" />
        <router-link :to="'/courses/' + course.id">
          <mark>{{ course.title }}</mark>
        </router-link>
      </li>
    </ul>
  </section>
</template>
<script>
export default {
  computed: {
    getCourses() {
      let pages = [];
      for (let i = 0; i < 4; i++) {
        pages.push({
          img: this.$t("courses[" + i + "].img"),
          category: this.$t("courses[" + i + "].category"),
          title: this.$t("courses[" + i + "].title"),
          text: this.$t("courses[" + i + "].text"),
          mentor: {
            name: this.$t("courses[" + i + "].mentor.name"),
            mentor: this.$t("courses[" + i + "].mentor.mentor"),
            img: this.$t("courses[" + i + "].mentor.img"),
          },
        });
      }
      return pages;
    },
  },
};
</script>
