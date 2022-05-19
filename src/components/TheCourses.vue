<template>
  <section id="courses" class="courses">
    <h2>What Do You Want to Learn?</h2>
    <p>
      Choose the right class as you need. Then enjoy studying.
    </p>
    <ul>
      <li v-for="course in getCourses" :key="course">
        <img :src="course.img" alt="" />
        <b>{{ course.category }}</b>
        <h3>{{ course.title }}</h3>
        <p>{{ course.text }}</p>
        <hr />
        <div class="mentor">
          <img :src="course.mentor.img" alt="" />
          <span>
            <h4>{{ course.mentor.name }}</h4>
            <p>{{ course.mentor.mentor }}</p>
          </span>
        </div>
        <div class="btn">Access Class</div>
      </li>
    </ul>
    <div class="btn">Show All Cases</div>
  </section>
</template>
<script>
import uz from "../locales/uz.js";
import en from "../locales/en.js";
export default {
  computed: {
    getCourses() {
      let pages = [];
      if (this.$i18n.locale === "uz") {
        pages = uz.courses;
      } else {
        pages = en.courses;
      }
      return pages;
    },
  },
};
</script>
